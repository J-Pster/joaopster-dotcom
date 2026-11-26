// Mistakes notebook: wrong quiz answers of the course, from the reader's ticks and study.json.
import { pageLang } from '../i18n';
import { loadProgress } from '../progress';
import { questionAnchor, wrongQuestions, type StudyIndex, type StudyQuestion } from '../studyModel';
import { studyText } from '../studyText';
import { ICON } from './icons';

export async function loadStudyIndex(url: string): Promise<StudyIndex> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Study index ${url}: HTTP ${response.status}`);
  return (await response.json()) as StudyIndex;
}

/** The course's wrong answers, in course order. */
export function courseMistakes(index: StudyIndex, slug: string): StudyQuestion[] {
  return wrongQuestions(index, loadProgress(slug).checks);
}


/** The "nothing here" box of the study pages: icon, title and a line of text. */
export function emptyState(icon: string, title: string, body: string): HTMLElement {
  const box = document.createElement('div');
  box.className = 'study-empty';
  box.innerHTML = `<span class="study-empty-icon">${icon}</span>`;
  const heading = document.createElement('p');
  heading.className = 'study-empty-title';
  heading.textContent = title;
  const text = document.createElement('p');
  text.textContent = body;
  box.append(heading, text);
  return box;
}

function questionRow(question: StudyQuestion): HTMLLIElement {
  const t = studyText(pageLang());
  const row = document.createElement('li');
  row.className = 'mistake';
  const head = document.createElement('p');
  head.className = 'mistake-head';
  head.textContent = t.questionLabel(question.number);
  const body = document.createElement('p');
  body.className = 'mistake-text';
  body.textContent = question.text;
  const link = document.createElement('a');
  link.className = 'mistake-link';
  link.href = `${question.note}#${questionAnchor(question.id)}`;
  link.innerHTML = ICON.retry;
  link.append(t.openQuestion);
  row.append(head, body, link);
  return row;
}

export async function initMistakes(): Promise<void> {
  const page = document.querySelector<HTMLElement>('[data-mistakes]');
  const main = document.querySelector<HTMLElement>('.course-main');
  const count = page?.querySelector<HTMLElement>('[data-mistakes-count]');
  const list = page?.querySelector<HTMLElement>('[data-mistakes-list]');
  const indexUrl = page?.dataset.studyIndex;
  const slug = main?.dataset.course;
  if (!page || !count || !list || !indexUrl || !slug) throw new Error('Mistakes page is missing its parts');
  const t = studyText(pageLang());

  const index = await loadStudyIndex(indexUrl).catch((err: unknown) => {
    count.textContent = t.loadFailed;
    list.replaceChildren();
    throw err;
  });
  const mistakes = courseMistakes(index, slug);
  page.dataset.empty = String(mistakes.length === 0);
  if (mistakes.length === 0) {
    count.textContent = '';
    list.replaceChildren(emptyState(ICON.inbox, t.mistakesEmptyTitle, t.mistakesEmpty));
    return;
  }
  count.textContent = t.mistakesCount(mistakes.length);

  const notes = new Map(index.notes.map((note) => [note.url, note]));
  const byNote = new Map<string, StudyQuestion[]>();
  for (const question of mistakes) byNote.set(question.note, [...(byNote.get(question.note) ?? []), question]);
  const groups = [...byNote].map(([url, questions]) => {
    const note = notes.get(url);
    if (!note) throw new Error(`Study index has a question in an unknown note: ${url}`);
    const group = document.createElement('section');
    group.className = 'mistakes-group';
    const title = document.createElement('h2');
    const link = document.createElement('a');
    link.href = note.url;
    link.textContent = note.title;
    const badge = document.createElement('span');
    badge.className = 'mistakes-badge';
    badge.textContent = String(questions.length);
    title.append(link, badge);
    const items = document.createElement('ol');
    items.className = 'mistakes-list';
    items.append(...questions.map(questionRow));
    group.append(title, items);
    return group;
  });
  list.replaceChildren(...groups);
}
