// Interface text of the offline card (save a course to read it without internet), in each site
// language. Kept apart from i18n.ts so the feature owns its labels.
import type { Lang } from '../../i18n/ui';

export interface OfflineText {
  readonly title: string;
  readonly lead: string;
  readonly save: string;
  readonly retry: string;
  readonly remove: string;
  readonly progress: (done: number, total: number) => string;
  readonly assets: (done: number) => string;
  readonly removing: string;
  readonly saved: (date: string) => string;
  readonly storageUsed: (size: string) => string;
  readonly unsupported: string;
  readonly failed: (reason: string) => string;
}

const pt: OfflineText = {
  title: 'Ler offline',
  lead: 'Salve o curso inteiro neste aparelho para estudar sem internet. As páginas que você já abriu também ficam disponíveis.',
  save: 'Salvar este curso para ler offline',
  retry: 'Tentar de novo',
  remove: 'Remover a cópia offline',
  progress: (done, total) => `${done} de ${total} páginas`,
  assets: (done) => `Salvando arquivos das páginas (${done})`,
  removing: 'Removendo a cópia offline',
  saved: (date) => `Curso salvo para ler offline em ${date}.`,
  storageUsed: (size) => `Espaço usado por este site neste aparelho: cerca de ${size}.`,
  unsupported: 'Este navegador não permite salvar páginas para ler offline. Abra o site em um navegador atual, por um endereço https.',
  failed: (reason) => `Não foi possível salvar o curso: ${reason}`,
};

const en: OfflineText = {
  title: 'Read offline',
  lead: 'Save the whole course on this device to study without internet. Pages you already opened stay available too.',
  save: 'Save this course for offline',
  retry: 'Try again',
  remove: 'Remove offline copy',
  progress: (done, total) => `${done} of ${total} pages`,
  assets: (done) => `Saving the files the pages need (${done})`,
  removing: 'Removing the offline copy',
  saved: (date) => `Course saved for offline reading on ${date}.`,
  storageUsed: (size) => `Space used by this site on this device: about ${size}.`,
  unsupported: 'This browser cannot save pages for offline reading. Open the site in a current browser, over an https address.',
  failed: (reason) => `Could not save the course: ${reason}`,
};

const es: OfflineText = {
  title: 'Leer sin conexión',
  lead: 'Guarda el curso completo en este dispositivo para estudiar sin internet. Las páginas que ya abriste también quedan disponibles.',
  save: 'Guardar este curso para leer sin conexión',
  retry: 'Intentar de nuevo',
  remove: 'Quitar la copia sin conexión',
  progress: (done, total) => `${done} de ${total} páginas`,
  assets: (done) => `Guardando los archivos de las páginas (${done})`,
  removing: 'Quitando la copia sin conexión',
  saved: (date) => `Curso guardado para leer sin conexión el ${date}.`,
  storageUsed: (size) => `Espacio usado por este sitio en este dispositivo: unos ${size}.`,
  unsupported: 'Este navegador no puede guardar páginas para leer sin conexión. Abre el sitio en un navegador actual, con una dirección https.',
  failed: (reason) => `No se pudo guardar el curso: ${reason}`,
};

const TEXT: Record<Lang, OfflineText> = { pt, en, es };

export const offlineText = (lang: Lang): OfflineText => TEXT[lang];
