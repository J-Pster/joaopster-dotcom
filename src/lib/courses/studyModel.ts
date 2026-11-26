// What the study pages (mistakes notebook, review) know about a course, served as study.json, and
// how a question is graded from the reader's ticks. Shared by the build and the browser.

export interface StudyQuestion {
  /** URL of the note the question is in. */
  readonly note: string;
  /** "<quiz>-<number>" inside the note; the question's anchor is questionAnchor(id). */
  readonly id: string;
  readonly number: number;
  readonly text: string;
  /** Option letters, in order, with the position of each option's checkbox in the note. */
  readonly options: readonly (readonly [letter: string, box: number])[];
  readonly correct: readonly string[];
}

export interface StudyNote {
  readonly url: string;
  readonly title: string;
  /** Module number, for lessons and module notes. */
  readonly module: number | undefined;
}

export interface StudyTerm {
  readonly title: string;
  readonly url: string;
  /** Indexes into StudyIndex.notes of the lessons that link to the term. */
  readonly lessons: readonly number[];
}

export interface StudyIndex {
  readonly notes: readonly StudyNote[];
  readonly questions: readonly StudyQuestion[];
  readonly terms: readonly StudyTerm[];
}

export type Grade = 'unanswered' | 'partial' | 'right' | 'wrong';

/**
 * A question is graded once as many options are ticked as it has answers: one for a single-answer
 * question, two for "choose two". Fewer ticks is still in progress.
 */
export function gradeAnswer(selected: readonly string[], correct: readonly string[]): Grade {
  if (selected.length === 0) return 'unanswered';
  if (selected.length < correct.length) return 'partial';
  const right = selected.length === correct.length && correct.every((letter) => selected.includes(letter));
  return right ? 'right' : 'wrong';
}

/** The letters a reader ticked in a question, from the ticked checkbox positions of its note. */
export const selectedLetters = (question: StudyQuestion, ticked: ReadonlySet<number>): string[] =>
  question.options.flatMap(([letter, box]) => (ticked.has(box) ? [letter] : []));

/** Questions answered wrong, given the ticked checkboxes of each note (by note URL). */
export function wrongQuestions(index: StudyIndex, checks: Readonly<Record<string, readonly number[]>>): StudyQuestion[] {
  return index.questions.filter((question) => {
    const ticked = checks[question.note];
    if (!ticked) return false;
    return gradeAnswer(selectedLetters(question, new Set(ticked)), question.correct) === 'wrong';
  });
}

export const questionAnchor = (id: string) => `q-${id}`;
