// What the player drives: something that reads the lesson aloud from a block onward and says where
// it is. The browser voice and the paid voices are two engines behind this one shape.
import type { ListenFailure } from './failure';

export interface EngineEvents {
  /** Reading moved to this block (also called for the block it starts on). */
  block(index: number): void;
  /** Waiting for audio before this block can be heard. */
  loading(index: number): void;
  /** The last block has been read. */
  ended(): void;
  failed(failure: ListenFailure): void;
  /** The browser refused to start sound without a tap; resume() after one works. */
  soundBlocked(): void;
}

export interface Engine {
  /** Reads from this block onward, dropping whatever was playing. */
  start(block: number): void;
  pause(): void;
  resume(): void;
  /** Ends for good: the engine is not used again. */
  stop(): void;
  setSpeed(speed: number): void;
}
