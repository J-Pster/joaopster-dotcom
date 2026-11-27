// Cuts a lesson into the requests a paid voice takes. The cut depends only on the blocks and the
// provider's limit, never on where the reader started, so the same lesson always yields the same
// chunks and the saved audio of an earlier listen is found again.
import type { ChunkLimit } from './providers/types';

export interface Span {
  readonly block: number;
  /** Where this block's text starts and ends inside the chunk text. */
  readonly from: number;
  readonly to: number;
}

export interface Chunk {
  readonly text: string;
  readonly spans: readonly Span[];
}

interface Piece {
  readonly block: number;
  readonly text: string;
}

const SEPARATOR = '\n\n';
const SENTENCE_END = /(?<=[.!?…])\s+/;
const ENDS_WITH_STOP = /[.!?…:;)"'”]$/;

const encoder = new TextEncoder();

function measure(text: string, unit: ChunkLimit['unit']): number {
  return unit === 'bytes' ? encoder.encode(text).length : text.length;
}

/** A heading or a list item has no full stop; without one the voice would run it into the next block. */
function withStop(text: string): string {
  return ENDS_WITH_STOP.test(text) ? text : `${text}.`;
}

// Cuts at a space, never inside a word; a word longer than the limit is not natural text and is
// cut where it stands.
function cutAtLimit(text: string, limit: ChunkLimit): [string, string] {
  let end = text.length;
  while (measure(text.slice(0, end), limit.unit) > limit.max) end -= 1;
  const space = text.lastIndexOf(' ', end);
  const cut = space > 0 ? space : end;
  return [text.slice(0, cut), text.slice(cut).trimStart()];
}

/** A text that fits the limit is one piece; a longer one is cut at sentence ends, then at spaces. */
export function fitPieces(text: string, limit: ChunkLimit): string[] {
  if (measure(text, limit.unit) <= limit.max) return [text];
  const pieces: string[] = [];
  let current = '';
  for (const sentence of text.split(SENTENCE_END)) {
    const joined = current === '' ? sentence : `${current} ${sentence}`;
    if (measure(joined, limit.unit) <= limit.max) {
      current = joined;
      continue;
    }
    if (current !== '') pieces.push(current);
    let rest = sentence;
    while (measure(rest, limit.unit) > limit.max) {
      const [head, tail] = cutAtLimit(rest, limit);
      pieces.push(head);
      rest = tail;
    }
    current = rest;
  }
  if (current !== '') pieces.push(current);
  return pieces;
}

function buildChunk(pieces: readonly Piece[]): Chunk {
  const spans: Span[] = [];
  let text = '';
  for (const piece of pieces) {
    if (text !== '') text += SEPARATOR;
    spans.push({ block: piece.block, from: text.length, to: text.length + piece.text.length });
    text += piece.text;
  }
  return { text, spans };
}

export function planChunks(blockTexts: readonly string[], limit: ChunkLimit): Chunk[] {
  const separatorSize = measure(SEPARATOR, limit.unit);
  const chunks: Chunk[] = [];
  let pending: Piece[] = [];
  let size = 0;

  blockTexts.forEach((blockText, block) => {
    for (const text of fitPieces(withStop(blockText), limit)) {
      const pieceSize = measure(text, limit.unit);
      const added = pending.length === 0 ? pieceSize : separatorSize + pieceSize;
      if (pending.length > 0 && size + added > limit.max) {
        chunks.push(buildChunk(pending));
        pending = [];
        size = 0;
      }
      size += pending.length === 0 ? pieceSize : added;
      pending.push({ block, text });
    }
  });
  if (pending.length > 0) chunks.push(buildChunk(pending));
  return chunks;
}

/** The first chunk that holds any of this block's text. */
export function chunkOfBlock(chunks: readonly Chunk[], block: number): number {
  const index = chunks.findIndex((chunk) => chunk.spans.some((span) => span.block === block));
  if (index === -1) throw new Error(`Block ${block} is in no chunk`);
  return index;
}

/** Where a block starts inside its chunk's audio, 0 to 1 (audio time follows text length). */
export function blockStartFraction(chunk: Chunk, block: number): number {
  const span = chunk.spans.find((candidate) => candidate.block === block);
  if (span === undefined) throw new Error(`Block ${block} is not in this chunk`);
  return span.from / chunk.text.length;
}

/** The block being spoken at this point of the chunk's audio, 0 to 1. */
export function blockAtFraction(chunk: Chunk, fraction: number): number {
  const offset = fraction * chunk.text.length;
  const found = chunk.spans.find((span) => offset < span.to + SEPARATOR.length);
  return (found ?? chunk.spans[chunk.spans.length - 1])?.block ?? 0;
}
