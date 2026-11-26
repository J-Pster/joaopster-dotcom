// Study features of a note page: graded quizzes and, on simulated exams, the exam bar.
// Called by the reader after it has wired the task checkboxes, so the ticks are in place.
import { initExam, type Exam } from './exam';
import { initQuiz } from './quiz';

function examOf(slug: string, url: string): Exam | undefined {
  const bar = document.querySelector<HTMLElement>('[data-exam-bar]');
  if (!bar) return undefined;
  const minutesPerQuestion = Number(bar.dataset.examMinutes);
  const targetPercent = Number(bar.dataset.examTarget);
  const mistakesHref = bar.dataset.examMistakes;
  if (!(minutesPerQuestion > 0) || !(targetPercent > 0) || !mistakesHref) throw new Error('Exam bar without exam rules');
  return initExam(bar, slug, url, { minutesPerQuestion, targetPercent }, mistakesHref);
}

/** Returns the repaint for when a sync rewrites the ticks. */
export function initStudy(slug: string, url: string): () => void {
  const exam = examOf(slug, url);
  const quiz = initQuiz(() => exam?.isRunning() ?? false);
  exam?.attach(quiz);
  return quiz.repaint;
}
