// Reading time left, painted on a lesson next to its own reading time (rendered at build time by
// CourseNote.astro). Depends on what this device and the synced ones marked as read.
import { pageLang } from '../i18n';
import { minutesLeft, type CourseOutline } from '../outline';
import { loadProgress } from '../progress';
import { readerText } from '../readerText';

export async function fetchOutline(outlineUrl: string): Promise<CourseOutline> {
  const response = await fetch(outlineUrl);
  if (!response.ok) throw new Error(`Course outline request failed: ${response.status}`);
  return (await response.json()) as CourseOutline;
}

/** Duration text, or "" when nothing is left (ReaderText.lessonLeft reads "" as done). */
const left = (minutes: number) => (minutes === 0 ? '' : readerText(pageLang()).duration(minutes));

export async function initLessonTime(slug: string, url: string, outlineUrl: string): Promise<() => void> {
  const slot = document.querySelector<HTMLElement>('[data-lesson-left]');
  if (!slot) return () => {};
  const outline = await fetchOutline(outlineUrl);
  const module = outline.modules.find((m) => m.lessons.some((l) => l.url === url));
  if (!module) throw new Error(`Lesson ${url} is missing from the course outline`);
  const lessons = outline.modules.flatMap((m) => m.lessons);

  const repaint = () => {
    const read = new Set(loadProgress(slug).read);
    // The no-break space keeps the dot at the end of the line when the text wraps.
    slot.textContent = '\u00a0· ' + readerText(pageLang()).lessonLeft(left(minutesLeft(module.lessons, read)), left(minutesLeft(lessons, read)));
    slot.hidden = false;
  };
  repaint();
  return repaint;
}

export const courseTimeLeft = (minutes: number): string => {
  const t = readerText(pageLang());
  return minutes === 0 ? '' : t.courseLeft(t.duration(minutes));
};
