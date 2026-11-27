// The AI assistant panel of a course note (components/courses/AssistantPanel.astro). Opening it takes
// the right column for the chat and folds the course menu away, so the note and the chat share the
// screen; the reader can bring the menu back with its own button, and closing the chat restores what
// the assistant changed. Below 1024px it is a full screen sheet.
import { assistantText, type AssistantText } from '../../assistantText';
import { pageLang } from '../../i18n';
import { KEYS_CHANGED, readKey, requestKey, type ProviderId } from '../keys';
import { panelHidden, setPanelHidden } from '../reader';
import { showToast } from '../toast';
import { ask, type AskError, type AskOutcome } from './api';
import { currentSection, readNoteContext } from './context';
import {
  loadConversation,
  loadModelChoice,
  saveConversation,
  saveModelChoice,
  type AssistantTurn,
  type Turn,
  type UserTurn,
} from './conversation';
import { ADD_TO_CHAT } from './events';
import { renderMarkdown } from './markdown';
import { ASSISTANT_PROVIDERS, isModelChoice, modelOf, modelsOf, type AssistantModel, type ModelChoice } from './models';

// Open state of this tab, so the chat stays open from one note to the next. CourseNote.astro reads the
// same key inline to lay the page out before the first paint.
const UI_KEY = 'jp-courses:assistant-ui';
const WIDE = '(min-width: 1024px)';
const MAX_PASSAGES = 5;
const MAX_PASSAGE_CHARS = 4000;
// The log follows a streaming answer only while the reader is at its bottom.
const FOLLOW_SLACK = 48;

interface UiState {
  readonly open: boolean;
  /** The assistant folded the course menu away (the reader had it open). */
  readonly hidNav: boolean;
}

function loadUi(): UiState {
  try {
    const parsed: unknown = JSON.parse(sessionStorage.getItem(UI_KEY) ?? '{}');
    const state = typeof parsed === 'object' && parsed !== null ? (parsed as Record<string, unknown>) : {};
    return { open: state.open === true, hidNav: state.hidNav === true };
  } catch {
    return { open: false, hidNav: false };
  }
}

function saveUi(state: UiState): void {
  sessionStorage.setItem(UI_KEY, JSON.stringify(state));
}

function required<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Assistant panel is missing ${selector}`);
  return element;
}

function formatCost(lang: string, dollars: number): string {
  const digits = dollars < 0.01 ? 4 : 2;
  return new Intl.NumberFormat(lang, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(dollars);
}

function errorMessage(t: AssistantText, error: AskError, provider: string): string {
  switch (error.kind) {
    case 'other': return t.errors.other(provider, error.detail);
    case 'key': case 'rateLimit': case 'overloaded': case 'network': return t.errors[error.kind](provider);
    case 'permission': case 'load': return t.errors[error.kind];
  }
}

/** The model to start with: the reader's last pick if its provider has a key, else the fast model of
 *  the first provider that has one, else the last pick (or Claude) so the setup asks for its key. */
function initialModel(): ModelChoice {
  const saved = loadModelChoice();
  if (saved !== undefined && readKey(modelOf(saved).provider) !== undefined) return saved;
  const withKey = ASSISTANT_PROVIDERS.find((provider) => readKey(provider) !== undefined);
  if (withKey !== undefined) return modelsOf(withKey)[0]?.choice ?? 'anthropic-fast';
  return saved ?? 'anthropic-fast';
}

type Phase =
  | { readonly kind: 'idle' }
  | { readonly kind: 'answering'; readonly controller: AbortController; readonly question: UserTurn };

export function initAssistant(noteUrl: string): void {
  const panel = document.querySelector<HTMLElement>('[data-assistant]');
  if (!panel) throw new Error('Assistant loaded outside a course note');
  const lang = pageLang();
  const t = assistantText(lang);
  const courseTitle = panel.dataset.courseTitle ?? '';
  const noteTitle = panel.dataset.noteTitle ?? '';
  const root = document.documentElement;
  const wide = window.matchMedia(WIDE);

  const title = required<HTMLElement>(panel, '#assistant-title');
  const log = required<HTMLElement>(panel, '[data-assistant-log]');
  const empty = required<HTMLElement>(panel, '[data-assistant-empty]');
  const setup = required<HTMLElement>(panel, '[data-assistant-setup]');
  const setupText = required<HTMLElement>(panel, '[data-assistant-setup-text]');
  const list = required<HTMLOListElement>(panel, '[data-assistant-turns]');
  const alert = required<HTMLElement>(panel, '[data-assistant-alert]');
  const alertText = required<HTMLElement>(panel, '[data-assistant-alert-text]');
  const retry = required<HTMLButtonElement>(panel, '[data-assistant-retry]');
  const alertKeys = required<HTMLButtonElement>(panel, '[data-assistant-alert-keys]');
  const form = required<HTMLFormElement>(panel, '[data-assistant-form]');
  const passagesList = required<HTMLUListElement>(panel, '[data-assistant-passages]');
  const input = required<HTMLTextAreaElement>(panel, '[data-assistant-input]');
  const send = required<HTMLButtonElement>(panel, '[data-assistant-send]');
  const modelSelect = required<HTMLSelectElement>(panel, '[data-assistant-model]');
  const chosen = (): AssistantModel => {
    const value = modelSelect.value;
    if (!isModelChoice(value)) throw new Error(`Unknown assistant model: ${value}`);
    return modelOf(value);
  };
  const providerName = (provider: ProviderId): string => t.providers[provider].name;

  let turns: Turn[] = loadConversation(noteUrl);
  let passages: string[] = [];
  let phase: Phase = { kind: 'idle' };
  let ui = loadUi();
  let opener: HTMLElement | null = null;

  // ---- Open and close

  const paintOpeners = (): void => {
    for (const button of document.querySelectorAll<HTMLButtonElement>('[data-assistant-open]')) {
      button.setAttribute('aria-expanded', String(ui.open));
    }
  };

  const open = (): void => {
    if (!ui.open) {
      opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const hideNav = wide.matches && !panelHidden('nav');
      if (hideNav) setPanelHidden('nav', true);
      ui = { open: true, hidNav: hideNav };
      saveUi(ui);
    }
    root.classList.add('assistant-open');
    panel.hidden = false;
    paintOpeners();
    paintSetup();
    // A touch keyboard would cover the suggestions: on touch screens the focus goes to the title.
    if (window.matchMedia('(pointer: coarse)').matches) title.focus();
    else input.focus();
    scrollLogToEnd();
  };

  const close = (): void => {
    if (ui.hidNav && panelHidden('nav')) setPanelHidden('nav', false);
    ui = { open: false, hidNav: false };
    saveUi(ui);
    root.classList.remove('assistant-open');
    panel.hidden = true;
    paintOpeners();
    (opener ?? document.querySelector<HTMLElement>('[data-assistant-open]'))?.focus();
    opener = null;
  };

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('[data-assistant-open]')) {
      if (ui.open) close();
      else open();
    }
    // The reader opened or closed the course menu by hand: from now on it is their choice.
    if (event.target.closest('[data-panel-toggle="nav"]') && ui.hidNav) {
      ui = { ...ui, hidNav: false };
      saveUi(ui);
    }
  });
  required<HTMLButtonElement>(panel, '[data-assistant-close]').addEventListener('click', close);
  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !event.defaultPrevented && !(event.target instanceof HTMLSelectElement)) {
      event.preventDefault();
      close();
    }
  });

  // ---- Conversation

  const paintSetup = (): void => {
    const provider = chosen().provider;
    setup.hidden = readKey(provider) !== undefined;
    setupText.textContent = t.needKey(providerName(provider));
  };

  const isAtEnd = (): boolean => log.scrollHeight - log.scrollTop - log.clientHeight < FOLLOW_SLACK;
  const scrollLogToEnd = (): void => {
    log.scrollTop = log.scrollHeight;
  };

  const userItem = (turn: UserTurn): HTMLLIElement => {
    const item = document.createElement('li');
    item.className = 'assistant-turn assistant-turn--user';
    const label = document.createElement('span');
    label.className = 'sr-only';
    label.textContent = `${t.you}: `;
    item.append(label);
    for (const passage of turn.passages) {
      const quote = document.createElement('blockquote');
      quote.className = 'assistant-quote';
      quote.textContent = passage;
      item.append(quote);
    }
    const text = document.createElement('p');
    text.className = 'assistant-question';
    text.textContent = turn.text;
    item.append(text);
    return item;
  };

  const answerItem = (): { item: HTMLLIElement; body: HTMLElement; foot: HTMLElement } => {
    const item = document.createElement('li');
    item.className = 'assistant-turn assistant-turn--assistant';
    const label = document.createElement('span');
    label.className = 'sr-only';
    label.textContent = `${t.assistant}: `;
    const body = document.createElement('div');
    body.className = 'assistant-answer';
    const foot = document.createElement('div');
    foot.className = 'assistant-answer-foot';
    item.append(label, body, foot);
    return { item, body, foot };
  };

  const paintAnswerFoot = (foot: HTMLElement, turn: AssistantTurn): void => {
    foot.replaceChildren();
    const notes: Record<AssistantTurn['end'], string | undefined> = {
      complete: undefined,
      stopped: t.stopped,
      truncated: t.errors.truncated,
      refusal: t.errors.refusal,
    };
    const note = notes[turn.end];
    if (note) {
      const notice = document.createElement('span');
      notice.className = 'assistant-answer-note';
      notice.textContent = note;
      foot.append(notice);
    }
    if (turn.costUsd !== undefined) {
      const cost = document.createElement('span');
      cost.className = 'assistant-answer-cost';
      cost.textContent = t.cost(formatCost(lang, turn.costUsd));
      foot.append(cost);
    }
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.className = 'assistant-copy';
    copy.textContent = t.copy;
    copy.addEventListener('click', () => {
      navigator.clipboard.writeText(turn.text).then(
        () => showToast(t.copied),
        () => showToast(t.copyFailed),
      );
    });
    foot.append(copy);
  };

  const paintTurns = (): void => {
    list.replaceChildren();
    for (const turn of turns) {
      if (turn.role === 'user') {
        list.append(userItem(turn));
        continue;
      }
      const { item, body, foot } = answerItem();
      body.append(renderMarkdown(turn.text));
      paintAnswerFoot(foot, turn);
      list.append(item);
    }
    empty.hidden = turns.length > 0 || phase.kind === 'answering';
  };

  const paintPassages = (): void => {
    passagesList.replaceChildren();
    passagesList.hidden = passages.length === 0;
    passages.forEach((passage, index) => {
      const item = document.createElement('li');
      item.className = 'assistant-passage';
      const text = document.createElement('span');
      text.className = 'assistant-passage-text';
      text.textContent = passage;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'assistant-passage-remove';
      remove.setAttribute('aria-label', t.removeSnippet);
      remove.title = t.removeSnippet;
      remove.textContent = '×';
      remove.addEventListener('click', () => {
        passages = passages.filter((_, i) => i !== index);
        paintPassages();
        input.focus();
      });
      item.append(text, remove);
      passagesList.append(item);
    });
  };

  const paintSend = (): void => {
    const answering = phase.kind === 'answering';
    send.dataset.state = answering ? 'stop' : 'send';
    send.setAttribute('aria-label', answering ? t.stop : t.send);
    send.title = answering ? t.stop : t.send;
  };

  const hideAlert = (): void => {
    alert.hidden = true;
  };
  const showAlert = (message: string, actions: { retry: boolean; keys: boolean }): void => {
    alertText.textContent = message;
    retry.hidden = !actions.retry;
    alertKeys.hidden = !actions.keys;
    alert.hidden = false;
  };

  const persist = (): void => {
    if (!saveConversation(noteUrl, turns)) showToast(t.saveFailed);
  };

  const fitInput = (): void => {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 160)}px`;
  };

  // ---- Asking

  const submit = async (): Promise<void> => {
    if (phase.kind === 'answering') return;
    const written = input.value.trim();
    if (written === '' && passages.length === 0) return input.focus();
    const model = chosen();
    const key = readKey(model.provider);
    if (key === undefined) {
      paintSetup();
      requestKey(model.provider);
      return;
    }
    hideAlert();
    const section = currentSection();
    const question: UserTurn = {
      role: 'user',
      text: written === '' ? t.explainPassages : written,
      passages,
      ...(section ? { section } : {}),
    };
    const controller = new AbortController();
    phase = { kind: 'answering', controller, question };
    input.value = '';
    fitInput();
    passages = [];
    paintPassages();
    paintSend();

    const startedFrom = turns;
    const asked = [...turns, question];
    list.append(userItem(question));
    empty.hidden = true;
    const { item, body, foot } = answerItem();
    const thinking = document.createElement('p');
    thinking.className = 'assistant-thinking';
    thinking.textContent = t.thinking;
    body.append(thinking);
    list.append(item);
    scrollLogToEnd();

    // A question without an answer leaves the conversation: its text goes back to the composer.
    const giveBack = (): void => {
      item.remove();
      list.lastElementChild?.remove();
      input.value = written;
      passages = [...question.passages];
      paintPassages();
      fitInput();
      empty.hidden = turns.length > 0;
    };

    let frame = 0;
    let outcome: AskOutcome;
    try {
      outcome = await ask({
        key,
        model,
        context: readNoteContext(courseTitle, noteTitle, lang),
        turns: asked,
        signal: controller.signal,
        onText: (text) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            const follow = isAtEnd();
            body.replaceChildren(renderMarkdown(text));
            if (follow) scrollLogToEnd();
          });
        },
      });
    } catch (error) {
      // A failure ask() has no name for (a bug, not the provider): the reader keeps the question.
      giveBack();
      showAlert(t.errors.other(providerName(model.provider), error instanceof Error ? error.message : String(error)), { retry: true, keys: false });
      throw error;
    } finally {
      cancelAnimationFrame(frame);
      phase = { kind: 'idle' };
      paintSend();
    }
    // "Nova conversa" replaced the conversation while this answer was coming: it belongs nowhere now.
    if (turns !== startedFrom) return;

    if (outcome.kind === 'error') {
      giveBack();
      const keyProblem = outcome.error.kind === 'key' || outcome.error.kind === 'permission';
      // After a failed load only a reload helps; asking again would fail the same way.
      // A wrong OpenAI key reaches the page as a network failure, so that one offers the keys too.
      showAlert(errorMessage(t, outcome.error, providerName(model.provider)), {
        retry: !keyProblem && outcome.error.kind !== 'load',
        keys: keyProblem || outcome.error.kind === 'network',
      });
      return;
    }
    if (outcome.kind === 'stopped' && outcome.text.trim() === '') {
      giveBack();
      input.focus();
      return;
    }
    const answer: AssistantTurn =
      outcome.kind === 'stopped'
        ? { role: 'assistant', text: outcome.text, end: 'stopped' }
        : { role: 'assistant', text: outcome.text, end: outcome.end, costUsd: outcome.costUsd };
    // A refusal can come with no text at all; the note in the footer says what happened.
    turns = [...asked, { ...answer, text: answer.text.trim() === '' ? '…' : answer.text }];
    persist();
    const follow = isAtEnd();
    body.replaceChildren(renderMarkdown(answer.text));
    paintAnswerFoot(foot, answer);
    if (follow) scrollLogToEnd();
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (phase.kind === 'answering') phase.controller.abort();
    else void submit();
  });
  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
    event.preventDefault();
    if (phase.kind === 'idle') void submit();
  });
  input.addEventListener('input', fitInput);
  retry.addEventListener('click', () => void submit());
  alertKeys.addEventListener('click', () => requestKey(chosen().provider));
  required<HTMLButtonElement>(panel, '[data-assistant-add-key]').addEventListener('click', () => requestKey(chosen().provider));
  for (const suggestion of panel.querySelectorAll<HTMLButtonElement>('[data-assistant-suggestion]')) {
    suggestion.addEventListener('click', () => {
      // While an answer is coming the reader's draft stays as it is.
      if (phase.kind === 'answering') return;
      input.value = suggestion.textContent?.trim() ?? '';
      void submit();
    });
  }
  required<HTMLButtonElement>(panel, '[data-assistant-new]').addEventListener('click', () => {
    if (turns.length === 0 && phase.kind === 'idle') return input.focus();
    if (!window.confirm(t.confirmNewChat)) return;
    if (phase.kind === 'answering') phase.controller.abort();
    turns = [];
    persist();
    hideAlert();
    paintTurns();
    input.focus();
  });

  modelSelect.value = initialModel();
  modelSelect.addEventListener('change', () => {
    saveModelChoice(chosen().choice);
    paintSetup();
    if (!alertKeys.hidden) hideAlert();
  });
  window.addEventListener(KEYS_CHANGED, (event) => {
    // A key just saved for another provider, while the picked one has none: switch to that provider.
    const changed: unknown = event instanceof CustomEvent ? event.detail : undefined;
    const picked = chosen();
    const provider = ASSISTANT_PROVIDERS.find((id) => id === changed);
    if (readKey(picked.provider) === undefined && provider !== undefined && readKey(provider) !== undefined) {
      const fast = modelsOf(provider)[0];
      if (fast) {
        modelSelect.value = fast.choice;
        saveModelChoice(fast.choice);
      }
    }
    paintSetup();
    if (readKey(chosen().provider) !== undefined && !alertKeys.hidden) hideAlert();
  });

  // ---- Passages from the note

  window.addEventListener(ADD_TO_CHAT, (event) => {
    const detail: unknown = event instanceof CustomEvent ? event.detail : undefined;
    if (typeof detail !== 'string') return;
    const passage = detail.trim().slice(0, MAX_PASSAGE_CHARS);
    if (passage === '') return;
    if (!passages.includes(passage)) passages = [...passages, passage].slice(-MAX_PASSAGES);
    paintPassages();
    open();
    input.focus();
    showToast(t.snippetAdded);
  });

  paintTurns();
  paintPassages();
  paintSend();
  if (ui.open) {
    root.classList.add('assistant-open');
    panel.hidden = false;
    paintSetup();
    paintOpeners();
    scrollLogToEnd();
  } else paintOpeners();
}
