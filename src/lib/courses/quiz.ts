// Questionnaires of a course note, read from its Markdown at build time.
// The course-making skill writes every quiz the same way:
//
//   **3.** Question text...
//
//   - [ ] a) option
//   - [ ] b) option
//
//   > [!success]- Gabarito
//   > **3. b)** explanation... (several answers: **9. a) e d)**)
//
// Questions pair with the next answer key below them, by number; a note can have several quizzes.
// The pass annotates the tree so the client can grade without parsing HTML:
// - question paragraph: id, data-quiz-question, data-correct and, when the answer names an exam
//   task ("Task 2.1"), data-domain;
// - option list and items: data-quiz-options, data-option;
// - answer key: one paragraph per answer, with data-quiz-answer;
// - before each answer key, an empty <div data-quiz-score> for the quiz score.
// Option checkboxes are the reader's task checkboxes, so the answer picked is saved (and synced) as a
// tick; each option records the position of its checkbox among the note's checkboxes.
import type { Blockquote, Html, List, ListItem, Paragraph, Parent, PhrasingContent, Root, RootContent } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import { questionAnchor } from './studyModel';

export interface QuizOption {
  readonly letter: string;
  /** Position of the option's checkbox among the note's task checkboxes. */
  readonly box: number;
}

export interface QuizQuestion {
  /** "<quiz>-<number>", unique in the note. */
  readonly id: string;
  readonly number: number;
  /** Plain text of the question, for lists outside the note. */
  readonly text: string;
  readonly options: readonly QuizOption[];
  readonly correct: readonly string[];
  /** Exam domain named by the answer ("Task 2.1" is domain 2), for simulated exams. */
  readonly domain: number | undefined;
}

export interface QuizExtraction {
  readonly questions: readonly QuizQuestion[];
  /** Answer keys that did not match their questions, for the build log. */
  readonly problems: readonly string[];
}

const QUESTION_HEAD = /^(\d+)\.$/;
const OPTION_HEAD = /^([a-h])\)\s/;
const ANSWER_HEAD = /^(\d+)\.\s*(.+)$/;
// A letter is an answer when a ")" or a comma follows it: "a) e d)", "b) e)", "a, c)", "a), c) e e)".
// The "e" between letters ("and") is followed by a space, not by ")" or ",".
const ANSWER_LETTER = /(?<![a-z])([a-h])(?=\s*[),])/g;
const ANSWER_KEY_HEAD = /^\[!success\][-+]?[ \t]*/i;
const EXAM_TASK = /\bTask (\d+)\.\d+/;
const TEXT_LENGTH = 160;


interface PendingQuestion {
  readonly number: number;
  readonly paragraph: Paragraph;
  readonly list: List;
  readonly options: readonly QuizOption[];
}

interface Answer {
  readonly number: number;
  readonly correct: readonly string[];
  readonly paragraph: Paragraph;
  readonly domain: number | undefined;
}

const setData = (node: RootContent, properties: Record<string, string | string[]>) => {
  node.data = { ...node.data, hProperties: { ...(node.data?.hProperties ?? {}), ...properties } };
};

/** The answer letters, or undefined when the text is not only letters and separators. */
function answerLetters(text: string): string[] | undefined {
  const letters = [...text.matchAll(ANSWER_LETTER)].map((m) => m[1]);
  const rest = text.replace(ANSWER_LETTER, '').replace(/\be\b|[\s,)]/g, '');
  return letters.length > 0 && rest === '' ? letters : undefined;
}

const plainText = (node: Paragraph): string => {
  const text = toString(node)
    .replace(QUESTION_HEAD_INLINE, '')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]#|]+)(?:#[^\]]*)?\]\]/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > TEXT_LENGTH ? `${text.slice(0, TEXT_LENGTH - 1).trimEnd()}…` : text;
};
const QUESTION_HEAD_INLINE = /^\d+\.\s*/;

function questionAt(paragraph: Paragraph, next: RootContent | undefined, boxes: ReadonlyMap<ListItem, number>): PendingQuestion | undefined {
  const head = paragraph.children[0];
  if (head?.type !== 'strong') return undefined;
  const match = toString(head).trim().match(QUESTION_HEAD);
  if (!match || next?.type !== 'list') return undefined;
  const options: QuizOption[] = [];
  for (const item of next.children) {
    const box = boxes.get(item);
    const letter = toString(item).trim().match(OPTION_HEAD)?.[1];
    if (box === undefined || !letter) return undefined;
    options.push({ letter, box });
  }
  return { number: Number(match[1]), paragraph, list: next, options };
}

function isAnswerKey(node: Blockquote): boolean {
  const first = node.children[0];
  const head = first?.type === 'paragraph' ? first.children[0] : undefined;
  return head?.type === 'text' && ANSWER_KEY_HEAD.test(head.value);
}

/**
 * Splits the answer key into one paragraph per answer ("**N. x)** explanation"), keeping the callout
 * head ("[!success]- Gabarito") as the first paragraph so callouts render it as the title.
 */
function splitAnswerKey(quote: Blockquote): Answer[] {
  const answers: Answer[] = [];
  const children: RootContent[] = [];
  let current: PhrasingContent[] = [];
  let currentAnswer: { number: number; correct: string[] } | undefined;

  const flush = () => {
    const trimmed = trimLineBreaks(current);
    current = [];
    if (trimmed.length === 0) return;
    const paragraph: Paragraph = { type: 'paragraph', children: trimmed };
    if (currentAnswer) {
      const domain = toString(paragraph).match(EXAM_TASK)?.[1];
      answers.push({ ...currentAnswer, paragraph, domain: domain === undefined ? undefined : Number(domain) });
    }
    children.push(paragraph);
  };

  quote.children.forEach((block, index) => {
    if (block.type !== 'paragraph') {
      flush();
      currentAnswer = undefined;
      children.push(block);
      return;
    }
    let phrasing = block.children;
    if (index === 0) {
      // The callout head is the first line of the first paragraph.
      const head = phrasing[0];
      if (head?.type !== 'text') throw new Error('Answer key without a callout head');
      const cut = head.value.indexOf('\n');
      const headLine = cut === -1 ? head.value : head.value.slice(0, cut);
      children.push({ type: 'paragraph', children: [{ type: 'text', value: headLine }] });
      phrasing = cut === -1 ? phrasing.slice(1) : [{ type: 'text', value: head.value.slice(cut + 1) }, ...phrasing.slice(1)];
    }
    for (const node of phrasing) {
      const match = node.type === 'strong' ? toString(node).trim().match(ANSWER_HEAD) : null;
      const letters = match ? answerLetters(match[2]) : undefined;
      if (match && letters) {
        flush();
        currentAnswer = { number: Number(match[1]), correct: letters };
      }
      current.push(node);
    }
    flush();
    currentAnswer = undefined;
  });
  quote.children = children as Blockquote['children'];
  return answers;
}

function trimLineBreaks(nodes: PhrasingContent[]): PhrasingContent[] {
  const out = nodes.filter((n) => n.type !== 'break');
  const first = out[0];
  if (first?.type === 'text') out[0] = { ...first, value: first.value.replace(/^\s+/, '') };
  const last = out.at(-1);
  if (last?.type === 'text') out[out.length - 1] = { ...last, value: last.value.replace(/\s+$/, '') };
  return out.filter((n) => n.type !== 'text' || n.value !== '');
}

/** Finds and annotates the quizzes of a note. Runs before callouts and wikilinks are converted. */
export function extractQuizzes(tree: Root): QuizExtraction {
  const boxes = new Map<ListItem, number>();
  visit(tree, 'listItem', (item) => {
    if (typeof item.checked === 'boolean') boxes.set(item, boxes.size);
  });

  const questions: QuizQuestion[] = [];
  const problems: string[] = [];
  const scoreSlots: { parent: Parent; node: Blockquote; quiz: number }[] = [];
  let pending: PendingQuestion[] = [];
  let quiz = 0;

  visit(tree, (node, index, parent) => {
    if (!parent || index === undefined) return;
    if (node.type === 'paragraph') {
      const question = questionAt(node, parent.children[index + 1] as RootContent | undefined, boxes);
      if (question) pending.push(question);
      return;
    }
    if (node.type !== 'blockquote' || !isAnswerKey(node)) return;
    const answers = splitAnswerKey(node);
    if (answers.length === 0) return;
    quiz += 1;
    const byNumber = new Map(answers.map((a) => [a.number, a]));
    for (const question of pending) {
      const answer = byNumber.get(question.number);
      const letters = new Set(question.options.map((o) => o.letter));
      if (!answer || !answer.correct.every((l) => letters.has(l))) {
        problems.push(`question ${question.number} has no matching answer`);
        continue;
      }
      byNumber.delete(question.number);
      const id = `${quiz}-${question.number}`;
      const domain = answer.domain;
      setData(question.paragraph, {
        id: questionAnchor(id),
        className: ['quiz-question'],
        dataQuizQuestion: id,
        dataCorrect: answer.correct.join(','),
        ...(domain === undefined ? {} : { dataDomain: String(domain) }),
      });
      setData(question.list, { dataQuizOptions: id });
      question.list.children.forEach((item, i) => setData(item, { dataOption: question.options[i].letter }));
      setData(answer.paragraph, { dataQuizAnswer: id });
      questions.push({
        id,
        number: question.number,
        text: plainText(question.paragraph),
        options: question.options,
        correct: answer.correct,
        domain,
      });
    }
    if (byNumber.size > 0) problems.push(`answers without a question: ${[...byNumber.keys()].join(', ')}`);
    if (pending.length > 0) scoreSlots.push({ parent, node, quiz });
    pending = [];
  });

  for (const { parent, node, quiz: id } of scoreSlots) {
    const siblings = parent.children as RootContent[];
    const slot: Html = { type: 'html', value: `<div class="quiz-score" data-quiz-score="${id}" hidden></div>` };
    siblings.splice(siblings.indexOf(node), 0, slot);
  }
  return { questions, problems };
}
