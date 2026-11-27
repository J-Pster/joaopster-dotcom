// "Listen to the lesson": the player docked at the bottom of the note page. This file wires the
// markup (ListenPlayer.astro) to an engine (browser voice or paid voice), keeps the player state,
// marks the block being read and follows it down the page while the reader follows along.
import type { Lang } from '../../../../i18n/ui';
import { listenText, type ListenProviderId, type ListenText } from '../../listenText';
import { hasKey, KEYS_CHANGED, readKey, requestKey } from '../keys';
import { audioKey, clearSavedAudio, hasAudio, savedAudioBytes } from './audioCache';
import { blockAtReadingLine, collectBlocks, type ListenBlock } from './blocks';
import { chunkOfBlock, planChunks, type Chunk } from './chunks';
import { createBrowserEngine, isSpeechSupported } from './browserEngine';
import type { Engine, EngineEvents } from './engine';
import type { ListenFailure, PaidProviderId } from './failure';
import { followTo, isInView, markCurrent } from './follow';
import { createPaidEngine } from './paidEngine';
import { PROVIDER_IDS, readPrefs, savePrefs, SPEEDS, type ListenPrefs } from './prefs';
import { PAID_PROVIDERS } from './providers';
import type { PlayerState, StateKind } from './state';
import { pickVoice, voicesFor } from './voices';

/** The line of the viewport the reader is counted to be at; the same one the page's other aids use. */
const READING_LINE = 88;
const HTML_OPEN_CLASS = 'listen-docked';

function pageLang(): Lang {
  const lang = document.documentElement.lang;
  if (lang === 'pt' || lang === 'en' || lang === 'es') return lang;
  throw new Error(`Listening is not available for the page language "${lang}"`);
}

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`The listen player is missing ${selector}`);
  return el;
}

function failureMessage(t: ListenText, failure: ListenFailure): string {
  switch (failure.kind) {
    case 'missing-key':
      return t.missingKey(PAID_PROVIDERS[failure.provider].name);
    case 'key-rejected':
      return t.keyRejected(PAID_PROVIDERS[failure.provider].name);
    case 'quota':
      return t.quota(PAID_PROVIDERS[failure.provider].name);
    case 'network':
      return t.network(PAID_PROVIDERS[failure.provider].name);
    case 'rejected':
      return t.rejected(PAID_PROVIDERS[failure.provider].name, failure.detail);
    case 'server':
      return t.server(PAID_PROVIDERS[failure.provider].name, failure.status);
    case 'undecodable':
      return t.undecodable;
    case 'no-voice':
      return t.noVoice;
    case 'unsupported':
      return t.unsupported;
    case 'speech':
      return t.speech(failure.detail);
  }
}

/** The provider whose key a failure is about, when entering a key is the way out. */
function keyProviderOf(failure: ListenFailure): PaidProviderId | undefined {
  // OpenAI answers a wrong key without the CORS header, so the browser reports it as a network
  // failure: a key problem cannot be told apart from a connection problem there.
  return failure.kind === 'missing-key' || failure.kind === 'key-rejected' || failure.kind === 'network'
    ? failure.provider
    : undefined;
}

function formatSize(bytes: number, lang: Lang): string {
  const megabytes = bytes / (1024 * 1024);
  return `${new Intl.NumberFormat(lang, { maximumFractionDigits: 1 }).format(megabytes)} MB`;
}

export function initListen(): void {
  // The note toolbar has one, and the phone reading bar (ReaderBar.astro) another.
  const openers = [...document.querySelectorAll<HTMLButtonElement>('[data-listen-open]')];
  if (openers.length === 0) throw new Error('Missing [data-listen-open]');
  let lastOpener = openers[0];
  const paintOpeners = (expanded: boolean): void =>
    openers.forEach((button) => button.setAttribute('aria-expanded', String(expanded)));
  const root = requireEl<HTMLElement>(document, '[data-listen-player]');
  const noteContent = requireEl<HTMLElement>(document, '.note-content');
  const lang = pageLang();
  const t = listenText(lang);

  const playButton = requireEl<HTMLButtonElement>(root, '[data-listen-play]');
  const previousButton = requireEl<HTMLButtonElement>(root, '[data-listen-previous]');
  const nextButton = requireEl<HTMLButtonElement>(root, '[data-listen-next]');
  const speedButton = requireEl<HTMLButtonElement>(root, '[data-listen-speed]');
  const settingsToggle = requireEl<HTMLButtonElement>(root, '[data-listen-settings-toggle]');
  const closeButton = requireEl<HTMLButtonElement>(root, '[data-listen-close]');
  const settingsPanel = requireEl<HTMLElement>(root, '[data-listen-settings]');
  const providerSelect = requireEl<HTMLSelectElement>(root, '[data-listen-provider]');
  const voiceSelect = requireEl<HTMLSelectElement>(root, '[data-listen-voice]');
  const cacheLabel = requireEl<HTMLElement>(root, '[data-listen-cache-label]');
  const cacheClear = requireEl<HTMLButtonElement>(root, '[data-listen-cache-clear]');
  const statusLine = requireEl<HTMLElement>(root, '[data-listen-status]');
  const actions = requireEl<HTMLElement>(root, '[data-listen-actions]');
  const announce = requireEl<HTMLElement>(root, '[data-listen-announce]');

  let prefs: ListenPrefs = readPrefs();
  let state: PlayerState = { kind: 'idle', note: 'ready' };
  let blocks: readonly ListenBlock[] = [];
  let current: number | undefined;
  let engine: Engine | undefined;
  /** Provider and voice the reader already agreed to pay for in this lesson. */
  let confirmed: string | undefined;

  // ---------- Provider and voice ----------

  const provider = (): ListenProviderId => prefs.provider;
  const providerName = (id: ListenProviderId): string => t.providerName[id];
  const voice = (): string | undefined => pickVoice(voicesFor(provider(), lang), prefs.voices[provider()]);

  function updatePrefs(change: Partial<ListenPrefs>): void {
    prefs = { ...prefs, ...change };
    savePrefs(prefs);
  }

  function fillVoices(): void {
    const options = voicesFor(provider(), lang);
    const selected = pickVoice(options, prefs.voices[provider()]);
    voiceSelect.replaceChildren(
      ...(options.length === 0
        ? [new Option(t.noVoices, '')]
        : options.map((option) => new Option(option.label, option.id, false, option.id === selected))),
    );
    voiceSelect.disabled = options.length === 0;
  }

  // ---------- Rendering ----------

  function statusText(): string {
    switch (state.kind) {
      case 'idle':
        if (state.note === 'finished') return t.finished;
        if (state.note === 'empty') return t.nothingToRead;
        return t.ready(providerName(provider()));
      case 'confirming':
        return t.estimate(providerName(provider()), state.estimate.characters, state.estimate.cost);
      case 'loading':
        return t.loading;
      case 'playing':
        return t.reading(state.block + 1, blocks.length);
      case 'paused':
        return state.blocked ? t.soundBlocked : t.paused(state.block + 1, blocks.length);
      case 'error':
        return failureMessage(t, state.failure);
    }
  }

  function actionButton(label: string, onClick: () => void, primary = false): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = primary ? 'listen-action listen-action--primary' : 'listen-action';
    button.textContent = label;
    button.addEventListener('click', onClick);
    return button;
  }

  function renderActions(): HTMLButtonElement[] {
    switch (state.kind) {
      case 'confirming': {
        const { block } = state;
        return [actionButton(t.confirm, () => confirmAndStart(block), true), actionButton(t.cancel, cancelConfirm)];
      }
      case 'error': {
        const { block, failure } = state;
        const keyProvider = keyProviderOf(failure);
        const buttons: HTMLButtonElement[] = [];
        if (keyProvider !== undefined) buttons.push(actionButton(t.enterKey, () => requestKey(keyProvider), true));
        if (failure.kind !== 'no-voice' && failure.kind !== 'unsupported') buttons.push(actionButton(t.retry, () => void startAt(block)));
        return buttons;
      }
      default:
        return [];
    }
  }

  function render(previousKind: StateKind): void {
    const message = statusText();
    statusLine.textContent = message;
    statusLine.dataset.state = state.kind;
    actions.replaceChildren(...renderActions());

    const busy = state.kind === 'playing' || state.kind === 'loading';
    playButton.dataset.action = busy ? 'pause' : 'play';
    playButton.setAttribute('aria-label', busy ? t.pause : t.play);
    playButton.title = busy ? t.pause : t.play;
    const navigable = state.kind === 'playing' || state.kind === 'paused' || state.kind === 'loading';
    previousButton.disabled = !navigable || (current ?? 0) <= 0;
    nextButton.disabled = !navigable || (current ?? 0) >= blocks.length - 1;

    // Screen readers hear state changes, not the position, which moves with every block.
    if (state.kind !== previousKind && state.kind !== 'playing') announce.textContent = message;
    if (state.kind !== previousKind && !settingsPanel.hidden) void refreshCache();
    syncMediaSession();
  }

  function setState(next: PlayerState): void {
    const previousKind = state.kind;
    state = next;
    render(previousKind);
  }

  async function refreshCache(): Promise<void> {
    const bytes = await savedAudioBytes();
    cacheLabel.textContent = bytes === 0 ? t.noSavedAudio : t.savedAudio(formatSize(bytes, lang));
    cacheClear.hidden = bytes === 0;
  }

  // ---------- Current block ----------

  const playerHeight = (): number => (root.hidden ? 0 : root.offsetHeight);

  function moveTo(index: number): void {
    if (index === current) return;
    const previousElement = current === undefined ? undefined : blocks[current]?.element;
    const nextElement = blocks[index]?.element;
    // The page follows only a reader who is following: a block that just ended outside the screen
    // means they are somewhere else on purpose.
    const following = previousElement !== undefined && isInView(previousElement, playerHeight());
    markCurrent(previousElement, nextElement);
    current = index;
    if (following && nextElement !== undefined) followTo(nextElement, playerHeight());
  }

  function forget(): void {
    markCurrent(current === undefined ? undefined : blocks[current]?.element, undefined);
    current = undefined;
  }

  // ---------- Engine ----------

  const events: EngineEvents = {
    block(index) {
      if (state.kind === 'paused' || state.kind === 'idle' || state.kind === 'error') return;
      moveTo(index);
      setState({ kind: 'playing', block: index });
    },
    loading(index) {
      if (state.kind === 'paused') return;
      moveTo(index);
      setState({ kind: 'loading', block: index });
    },
    ended() {
      forget();
      setState({ kind: 'idle', note: 'finished' });
    },
    failed(failure) {
      setState({ kind: 'error', block: current ?? 0, failure });
      if (failure.kind === 'missing-key') requestKey(failure.provider);
    },
    soundBlocked() {
      setState({ kind: 'paused', block: current ?? 0, blocked: true });
    },
  };

  function stopEngine(): void {
    engine?.stop();
    engine = undefined;
  }

  function buildEngine(snapshot: readonly ListenBlock[]): Engine | ListenFailure {
    const id = provider();
    const selected = voice();
    if (id === 'browser') {
      if (!isSpeechSupported()) return { kind: 'unsupported' };
      if (selected === undefined) return { kind: 'no-voice' };
      return createBrowserEngine({ texts: snapshot.map((block) => block.text), voice: selected, speed: prefs.speed, events });
    }
    const paid = PAID_PROVIDERS[id];
    if (!hasKey(id)) return { kind: 'missing-key', provider: id };
    if (selected === undefined) return { kind: 'no-voice' };
    return createPaidEngine({
      provider: paid,
      voice: selected,
      chunks: planChunks(snapshot.map((block) => block.text), paid.limit),
      speed: prefs.speed,
      events,
      readKey: () => readKey(id),
    });
  }

  /** What the rest of the lesson would cost: only the chunks from here on that are not saved yet. */
  async function estimateFrom(block: number): Promise<{ characters: number; text: string } | undefined> {
    const id = provider();
    const selected = voice();
    if (id === 'browser' || selected === undefined) return undefined;
    const paid = PAID_PROVIDERS[id];
    const chunks: readonly Chunk[] = planChunks(blocks.map((b) => b.text), paid.limit);
    const unsaved: string[] = [];
    for (const chunk of chunks.slice(chunkOfBlock(chunks, block))) {
      const key = await audioKey({ provider: id, model: paid.model, voice: selected }, chunk.text);
      if (!(await hasAudio(key))) unsaved.push(chunk.text);
    }
    const text = unsaved.join('\n\n');
    return { characters: text.length, text };
  }

  function begin(block: number): void {
    stopEngine();
    const built = buildEngine(blocks);
    if ('kind' in built) {
      setState({ kind: 'error', block, failure: built });
      if (built.kind === 'missing-key') requestKey(built.provider);
      return;
    }
    engine = built;
    moveTo(block);
    setState({ kind: 'loading', block });
    engine.start(block);
  }

  /** Bumped on every start, so an estimate that finishes late knows it was overtaken. */
  let estimating = 0;

  async function startAt(block: number): Promise<void> {
    const id = provider();
    const selected = voice();
    const started = ++estimating;
    if (id !== 'browser' && selected !== undefined && hasKey(id) && confirmed !== `${id}:${selected}`) {
      const rest = await estimateFrom(block);
      // Closed, or another play pressed, while the estimate was being worked out.
      if (root.hidden || started !== estimating) return;
      if (rest !== undefined && rest.characters > 0) {
        moveTo(block);
        setState({ kind: 'confirming', block, estimate: { characters: rest.characters, cost: PAID_PROVIDERS[id].estimate(rest.text, selected) } });
        return;
      }
    }
    begin(block);
  }

  function confirmAndStart(block: number): void {
    const selected = voice();
    if (selected !== undefined) confirmed = `${provider()}:${selected}`;
    begin(block);
  }

  function cancelConfirm(): void {
    forget();
    setState({ kind: 'idle', note: 'ready' });
  }

  // ---------- Transport ----------

  /** Starts where the reader is: the first block at or below the reading line. */
  function playFromReader(): void {
    blocks = collectBlocks(noteContent);
    if (blocks.length === 0) {
      setState({ kind: 'idle', note: 'empty' });
      return;
    }
    void startAt(blockAtReadingLine(blocks, READING_LINE));
  }

  function togglePlay(): void {
    switch (state.kind) {
      case 'playing':
      case 'loading':
        engine?.pause();
        setState({ kind: 'paused', block: state.block, blocked: false });
        return;
      case 'paused':
        engine?.resume();
        setState({ kind: 'playing', block: state.block });
        return;
      case 'idle':
      case 'confirming':
      case 'error':
        playFromReader();
        return;
    }
  }

  function jump(delta: number): void {
    if (state.kind !== 'playing' && state.kind !== 'paused' && state.kind !== 'loading') return;
    const target = Math.min(Math.max(state.block + delta, 0), blocks.length - 1);
    moveTo(target);
    setState({ kind: 'loading', block: target });
    engine?.start(target);
  }

  /** A new voice or source: continue from the same block with it, if something was in progress. */
  function restartWithChoice(): void {
    stopEngine();
    if (state.kind === 'idle' || current === undefined) {
      forget();
      setState({ kind: 'idle', note: 'ready' });
      return;
    }
    void startAt(current);
  }

  // ---------- Open and close ----------

  function open(): void {
    root.hidden = false;
    paintOpeners(true);
    document.documentElement.classList.add(HTML_OPEN_CLASS);
    document.documentElement.style.setProperty('--listen-height', `${root.offsetHeight}px`);
    playButton.focus();
    playFromReader();
  }

  function close(): void {
    stopEngine();
    forget();
    setState({ kind: 'idle', note: 'ready' });
    root.hidden = true;
    paintOpeners(false);
    document.documentElement.classList.remove(HTML_OPEN_CLASS);
    document.documentElement.style.removeProperty('--listen-height');
    lastOpener.focus();
  }

  new ResizeObserver(() => {
    if (!root.hidden) document.documentElement.style.setProperty('--listen-height', `${root.offsetHeight}px`);
  }).observe(root);

  // ---------- Lock screen ----------

  const noteTitle = noteContent.querySelector('h1')?.textContent?.trim() || document.title;

  function syncMediaSession(): void {
    if (!('mediaSession' in navigator) || root.hidden) return;
    navigator.mediaSession.playbackState = state.kind === 'playing' || state.kind === 'loading' ? 'playing' : 'paused';
  }

  function claimMediaSession(): void {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({ title: noteTitle, artist: location.hostname });
    navigator.mediaSession.setActionHandler('play', togglePlay);
    navigator.mediaSession.setActionHandler('pause', togglePlay);
    navigator.mediaSession.setActionHandler('nexttrack', () => jump(1));
    navigator.mediaSession.setActionHandler('previoustrack', () => jump(-1));
  }

  // ---------- Wiring ----------

  openers.forEach((opener) =>
    opener.addEventListener('click', () => {
      lastOpener = opener;
      if (root.hidden) {
        claimMediaSession();
        open();
      } else {
        close();
      }
    }),
  );
  closeButton.addEventListener('click', close);
  playButton.addEventListener('click', togglePlay);
  previousButton.addEventListener('click', () => jump(-1));
  nextButton.addEventListener('click', () => jump(1));

  speedButton.addEventListener('click', () => {
    const next = SPEEDS[(SPEEDS.indexOf(prefs.speed) + 1) % SPEEDS.length] ?? 1;
    updatePrefs({ speed: next });
    showSpeed();
    engine?.setSpeed(next);
  });

  function showSpeed(): void {
    speedButton.textContent = `${prefs.speed}x`;
    speedButton.setAttribute('aria-label', t.speed(`${prefs.speed}x`));
    speedButton.title = t.speed(`${prefs.speed}x`);
  }

  settingsToggle.addEventListener('click', () => {
    settingsPanel.hidden = !settingsPanel.hidden;
    settingsToggle.setAttribute('aria-expanded', String(!settingsPanel.hidden));
    if (!settingsPanel.hidden) void refreshCache();
  });

  providerSelect.addEventListener('change', () => {
    const next = providerSelect.value;
    const known = PROVIDER_IDS.find((id) => id === next);
    if (known === undefined) throw new Error(`Unknown listen provider "${next}"`);
    updatePrefs({ provider: known });
    fillVoices();
    restartWithChoice();
  });

  voiceSelect.addEventListener('change', () => {
    updatePrefs({ voices: { ...prefs.voices, [provider()]: voiceSelect.value } });
    restartWithChoice();
  });

  cacheClear.addEventListener('click', () => {
    void clearSavedAudio().then(async () => {
      await refreshCache();
      announce.textContent = t.audioCleared;
    });
  });

  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    }
  });

  // A key saved in the dialog while the player waits for it: carry on from where it stopped.
  window.addEventListener(KEYS_CHANGED, (event) => {
    if (state.kind !== 'error') return;
    const keyProvider = keyProviderOf(state.failure);
    // Only a change to this provider's key (or to all of them) is an answer to this failure.
    const changed: unknown = event instanceof CustomEvent ? event.detail : undefined;
    if (changed !== keyProvider && changed !== 'all') return;
    if (keyProvider !== undefined && hasKey(keyProvider)) void startAt(state.block);
  });

  // Voices of the browser load late and can change (an offline pack finishes downloading).
  if (isSpeechSupported()) {
    speechSynthesis.addEventListener('voiceschanged', () => {
      if (provider() === 'browser') fillVoices();
    });
  }

  window.addEventListener('pagehide', () => {
    stopEngine();
    if (isSpeechSupported()) speechSynthesis.cancel();
  });

  providerSelect.value = provider();
  fillVoices();
  showSpeed();
  render('idle');
}
