// Course reader behaviour: read marks, task checkboxes and the progress widget, all stored locally.
import { loadProgress, setChecks, setLast, setRead, type CourseProgress } from '../progress';

interface CourseOutline {
  readonly modules: readonly {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly lessons: readonly { readonly url: string; readonly title: string }[];
  }[];
}

const WIDE_SCREEN = '(min-width: 1024px)';

function requireData(main: HTMLElement, key: 'course' | 'noteUrl' | 'noteKind'): string {
  const value = main.dataset[key];
  if (!value) throw new Error(`Course page is missing data-${key}`);
  return value;
}

// Ticks read lessons in the sidebar and fills the per-module and course counters.
function paintSidebar(progress: CourseProgress): void {
  const read = new Set(progress.read);
  document.querySelectorAll<HTMLAnchorElement>('[data-lesson]').forEach((link) => {
    link.classList.toggle('is-read', read.has(link.dataset.lesson ?? ''));
  });
  document.querySelectorAll<HTMLElement>('.course-nav-module').forEach((module) => {
    const counter = module.querySelector<HTMLElement>('[data-module-count]');
    if (!counter) return;
    const lessons = [...module.querySelectorAll<HTMLAnchorElement>('[data-lesson]')];
    const done = lessons.filter((l) => read.has(l.dataset.lesson ?? '')).length;
    counter.textContent = `${done}/${lessons.length}`;
    counter.classList.toggle('is-complete', lessons.length > 0 && done === lessons.length);
  });
  document.querySelectorAll<HTMLElement>('[data-course-read]').forEach((el) => {
    el.textContent = String(progress.read.length);
  });
}

function paintReadToggle(button: HTMLButtonElement, isRead: boolean): void {
  button.setAttribute('aria-pressed', String(isRead));
  const label = button.querySelector('[data-read-label]');
  if (label) label.textContent = isRead ? 'Aula lida' : 'Marcar aula como lida';
}

function initReadToggle(slug: string, url: string): void {
  const button = document.querySelector<HTMLButtonElement>('[data-read-toggle]');
  if (!button) return;
  paintReadToggle(button, loadProgress(slug).read.includes(url));
  button.addEventListener('click', () => {
    const isRead = button.getAttribute('aria-pressed') !== 'true';
    const progress = setRead(slug, url, isRead);
    paintReadToggle(button, isRead);
    paintSidebar(progress);
  });
}

// GFM renders "- [ ]" as disabled checkboxes; here they become the reader's own ticks (quiz answers, checklists).
function initTaskChecks(slug: string, url: string): void {
  const boxes = [...document.querySelectorAll<HTMLInputElement>('.note-content input[type="checkbox"]')];
  const saved = new Set(loadProgress(slug).checks[url] ?? []);
  boxes.forEach((box, index) => {
    box.disabled = false;
    box.checked = saved.has(index);
    box.addEventListener('change', () => {
      const ticked = boxes.flatMap((b, i) => (b.checked ? [i] : []));
      setChecks(slug, url, ticked);
    });
  });
}

// Keeps the current lesson in view inside the scrolling sidebar (without scrolling the page).
function centerCurrentLesson(): void {
  const rail = document.querySelector<HTMLElement>('.course-rail--nav');
  const current = rail?.querySelector<HTMLElement>('[aria-current="page"]');
  if (!rail || !current || rail.scrollHeight <= rail.clientHeight) return;
  const offset = current.getBoundingClientRect().top - rail.getBoundingClientRect().top;
  rail.scrollTop += offset - rail.clientHeight / 2;
}

function openNavOnWideScreens(): void {
  const nav = document.querySelector<HTMLDetailsElement>('[data-course-nav]');
  if (!nav) return;
  const query = window.matchMedia(WIDE_SCREEN);
  const sync = () => { nav.open = query.matches; };
  sync();
  query.addEventListener('change', sync);
  centerCurrentLesson();
}

// Side panels the reader hid (course menu, note index). One choice for every course, kept in this
// browser. CourseNote.astro reads the same key inline to apply it before the first paint.
type Panel = 'nav' | 'toc';
const LAYOUT_KEY = 'jp-courses:layout';
const PANEL_CLASS: Record<Panel, string> = { nav: 'course-nav-hidden', toc: 'course-toc-hidden' };
const PANEL_LABEL: Record<Panel, { hide: string; show: string }> = {
  nav: { hide: 'Ocultar o menu do curso', show: 'Mostrar o menu do curso' },
  toc: { hide: 'Ocultar o índice da nota', show: 'Mostrar o índice da nota' },
};

const isPanelHidden = (panel: Panel) => document.documentElement.classList.contains(PANEL_CLASS[panel]);

function saveHiddenPanels(): void {
  try {
    localStorage.setItem(LAYOUT_KEY, JSON.stringify({ hideNav: isPanelHidden('nav'), hideToc: isPanelHidden('toc') }));
  } catch {
    // Storage blocked: the choice lasts for this page view.
  }
}

function paintPanelToggle(button: HTMLButtonElement, panel: Panel): void {
  const shown = !isPanelHidden(panel);
  const label = shown ? PANEL_LABEL[panel].hide : PANEL_LABEL[panel].show;
  button.setAttribute('aria-expanded', String(shown));
  button.setAttribute('aria-label', label);
  button.title = label;
}

function initPanelToggles(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-panel-toggle]').forEach((button) => {
    const panel = button.dataset.panelToggle;
    if (panel !== 'nav' && panel !== 'toc') throw new Error(`Unknown course panel: ${panel}`);
    paintPanelToggle(button, panel);
    button.addEventListener('click', () => {
      document.documentElement.classList.toggle(PANEL_CLASS[panel]);
      saveHiddenPanels();
      paintPanelToggle(button, panel);
      if (panel === 'nav' && !isPanelHidden('nav')) centerCurrentLesson();
    });
  });
}

function progressBar(done: number, total: number): string {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return `<span class="progress-bar" role="img" aria-label="${percent}%"><span style="width:${percent}%"></span></span>`;
}

const escapeText = (text: string) => text.replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

// Stands in for the Obsidian Base on the course home: progress per module and where to continue.
async function initProgressWidget(slug: string): Promise<void> {
  const widget = document.querySelector<HTMLElement>('[data-course-progress]');
  if (!widget) return;
  const response = await fetch(`/cursos/${slug}/progresso.json`);
  if (!response.ok) throw new Error(`Course outline request failed: ${response.status}`);
  const outline = (await response.json()) as CourseOutline;
  const progress = loadProgress(slug);
  const read = new Set(progress.read);
  const lessons = outline.modules.flatMap((m) => m.lessons);
  const done = lessons.filter((l) => read.has(l.url)).length;
  const resume = lessons.find((l) => l.url === progress.last) ?? lessons.find((l) => !read.has(l.url));

  const rows = outline.modules
    .map((m) => {
      const moduleDone = m.lessons.filter((l) => read.has(l.url)).length;
      return `<li><a href="${m.url}"><span class="course-nav-number">${m.number}</span>${escapeText(m.title)}</a>${progressBar(moduleDone, m.lessons.length)}<span class="progress-count">${moduleDone}/${m.lessons.length}</span></li>`;
    })
    .join('');
  widget.innerHTML = `
    <div class="progress-head">
      <div>
        <p class="progress-eyebrow">Seu progresso</p>
        <p class="progress-total"><strong>${done}</strong> de ${lessons.length} aulas lidas</p>
      </div>
      ${resume ? `<a class="progress-resume" href="${resume.url}">${progress.read.length === 0 && !progress.last ? 'Começar o curso' : 'Continuar'}: ${escapeText(resume.title)}</a>` : '<span class="progress-done">Curso concluído</span>'}
    </div>
    ${progressBar(done, lessons.length)}
    <ol class="progress-modules">${rows}</ol>
    <p class="progress-note">O progresso fica salvo só neste navegador.</p>`;
}

export function initReader(): void {
  const main = document.querySelector<HTMLElement>('.course-main');
  if (!main) throw new Error('Course reader script loaded outside a course page');
  const slug = requireData(main, 'course');
  const url = requireData(main, 'noteUrl');
  if (requireData(main, 'noteKind') === 'lesson') setLast(slug, url);

  openNavOnWideScreens();
  initPanelToggles();
  paintSidebar(loadProgress(slug));
  initReadToggle(slug, url);
  initTaskChecks(slug, url);
  void initProgressWidget(slug);
}
