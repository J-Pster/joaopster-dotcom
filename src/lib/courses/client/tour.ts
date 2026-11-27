// The course tour (components/courses/CourseTour.astro), run by Driver.js. It opens by itself on the first
// course page a browser sees, and again from the "replay" button of the shortcuts window. Each step lights
// up one part of the reader and explains it next to it. A step whose part is missing on this page (no
// glossary term in the note, no "mark as read" outside lessons) is left out; one whose part is folded
// away shows in the middle.
// Finishing, skipping or closing it saves "done", so it does not open by itself again.
import { driver, type DriveStep } from 'driver.js';
import 'driver.js/dist/driver.css';

export interface TourStep {
  readonly title: string;
  readonly text: string;
  /** CSS selectors of what the step points at, best first; empty for a card in the middle. */
  readonly targets: readonly string[];
  /** Left out when the page has none of its targets (no quiz, no glossary term in the note). */
  readonly optional: boolean;
  /** The lit element can be hovered (a glossary term shows its definition), but not clicked away from the tour. */
  readonly live: boolean;
}

export interface TourConfig {
  readonly next: string;
  readonly back: string;
  readonly skip: string;
  readonly finish: string;
  readonly steps: readonly TourStep[];
}

const STORAGE_KEY = 'jp-courses:tour';

function isShown(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && getComputedStyle(element).visibility !== 'hidden';
}

function findTarget(step: TourStep): HTMLElement | undefined {
  for (const selector of step.targets) {
    const match = [...document.querySelectorAll<HTMLElement>(selector)].find(isShown);
    if (match) return match;
  }
  return undefined;
}

function alreadySeen(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'done';
  } catch {
    // Storage blocked: the tour could not remember being dismissed and would open on every page.
    return true;
  }
}

function rememberSeen(): void {
  try {
    localStorage.setItem(STORAGE_KEY, 'done');
  } catch {
    // Storage blocked: nothing to remember it in, and alreadySeen() already keeps the tour closed.
  }
}

/** The steps for this page as it is now: what it has, at this screen size. */
function driveSteps(steps: readonly TourStep[]): DriveStep[] {
  return steps.flatMap((step): DriveStep[] => {
    // Left out only when the page does not have the part at all; folded away (the course menu on a
    // phone), it is still explained, in the middle of the screen.
    if (step.optional && !step.targets.some((selector) => document.querySelector(selector))) return [];
    const element = findTarget(step);
    return [
      {
        element,
        disableActiveInteraction: step.live ? 'clicks' : true,
        popover: { title: step.title, description: step.text },
      },
    ];
  });
}

/** The tour on screen, if any: replaying it from the shortcuts window replaces it instead of stacking a second one. */
let running: ReturnType<typeof driver> | null = null;

function startTour(config: TourConfig): void {
  running?.destroy();
  const tour = driver({
    animate: !matchMedia('(prefers-reduced-motion: reduce)').matches,
    steps: driveSteps(config.steps),
    popoverClass: 'course-tour',
    showProgress: true,
    progressText: '{{current}} / {{total}}',
    showButtons: ['next', 'previous'],
    nextBtnText: config.next,
    prevBtnText: config.back,
    doneBtnText: config.finish,
    overlayColor: '#171717',
    overlayOpacity: 0.55,
    stagePadding: 6,
    stageRadius: 12,
    // A stray click on the dimmed page should not end the tour; Esc and "skip" do.
    overlayClickBehavior: 'none',
    onPopoverRender: (popover, { driver: active }) => {
      if (active.isLastStep()) return;
      const skip = document.createElement('button');
      skip.type = 'button';
      skip.className = 'driver-popover-footer-btn course-tour-skip';
      skip.textContent = config.skip;
      skip.addEventListener('click', () => active.destroy());
      popover.footerButtons.prepend(skip);
    },
    onDestroyed: () => {
      running = null;
      rememberSeen();
    },
  });
  running = tour;
  tour.drive();
}

export function initTour(): void {
  const holder = document.querySelector<HTMLElement>('[data-tour]');
  if (!holder?.dataset.tour) throw new Error('Course page is missing the tour');
  const config = JSON.parse(holder.dataset.tour) as TourConfig;

  document.querySelectorAll<HTMLButtonElement>('[data-tour-restart]').forEach((button) =>
    button.addEventListener('click', () => {
      button.closest('dialog')?.close();
      startTour(config);
    }),
  );

  if (alreadySeen()) return;
  // After the page has laid out (the toolbar folds buttons into "more" on narrow screens).
  const startWhenReady = (): void => requestAnimationFrame(() => requestAnimationFrame(() => startTour(config)));
  if (document.readyState === 'complete') startWhenReady();
  else window.addEventListener('load', startWhenReady, { once: true });
}
