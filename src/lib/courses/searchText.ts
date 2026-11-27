// Interface text of the course search modal, in each site language (same idea as i18n.ts).
import type { Lang } from '../../i18n/ui';

export interface SearchText {
  readonly open: string;
  readonly title: string;
  readonly placeholder: string;
  readonly close: string;
  readonly hint: string;
  readonly results: string;
  readonly noResults: (query: string) => string;
  readonly unavailable: string;
  /** The index exists but failed to load or to answer. */
  readonly failed: string;
  readonly loading: string;
  readonly resultCount: (count: number) => string;
  readonly kinds: Readonly<Record<string, string>>;
}

const pt: SearchText = {
  open: 'Buscar neste curso',
  title: 'Buscar neste curso',
  placeholder: 'Buscar no curso',
  close: 'Fechar a busca',
  hint: 'Setas para navegar, Enter para abrir, Esc para fechar',
  results: 'Resultados da busca',
  noResults: (query) => `Nada encontrado para "${query}" neste curso.`,
  unavailable: 'A busca só funciona depois do build do site. Rode npm run build e npm run preview.',
  failed: 'A busca não carregou. Recarregue a página e tente de novo.',
  loading: 'Carregando a busca',
  resultCount: (count) => `${count} ${count === 1 ? 'resultado' : 'resultados'}`,
  kinds: { home: 'Curso', module: 'Módulo', lesson: 'Aula', glossary: 'Glossário', page: 'Página' },
};

const en: SearchText = {
  open: 'Search this course',
  title: 'Search this course',
  placeholder: 'Search the course',
  close: 'Close search',
  hint: 'Arrows to move, Enter to open, Esc to close',
  results: 'Search results',
  noResults: (query) => `Nothing found for "${query}" in this course.`,
  unavailable: 'Search only works after the site build. Run npm run build and npm run preview.',
  failed: 'Search did not load. Reload the page and try again.',
  loading: 'Loading search',
  resultCount: (count) => `${count} ${count === 1 ? 'result' : 'results'}`,
  kinds: { home: 'Course', module: 'Module', lesson: 'Lesson', glossary: 'Glossary', page: 'Page' },
};

const es: SearchText = {
  open: 'Buscar en este curso',
  title: 'Buscar en este curso',
  placeholder: 'Buscar en el curso',
  close: 'Cerrar la búsqueda',
  hint: 'Flechas para moverte, Enter para abrir, Esc para cerrar',
  results: 'Resultados de la búsqueda',
  noResults: (query) => `No se encontró nada para "${query}" en este curso.`,
  unavailable: 'La búsqueda solo funciona después del build del sitio. Ejecuta npm run build y npm run preview.',
  failed: 'La búsqueda no cargó. Recarga la página e inténtalo de nuevo.',
  loading: 'Cargando la búsqueda',
  resultCount: (count) => `${count} ${count === 1 ? 'resultado' : 'resultados'}`,
  kinds: { home: 'Curso', module: 'Módulo', lesson: 'Clase', glossary: 'Glosario', page: 'Página' },
};

const TEXT: Record<Lang, SearchText> = { pt, en, es };

export const searchText = (lang: Lang): SearchText => TEXT[lang];
