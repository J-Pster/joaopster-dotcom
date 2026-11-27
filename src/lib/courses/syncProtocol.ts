// The contract between the course pages and the sync endpoint (src/pages/api/progress.ts).
import type { ProgressRecord } from './progressModel';

export const SYNC_ENDPOINT = '/api/progress';

/** "create" stores progress under a new code; "sync" merges with the progress already under a code. */
export type SyncIntent = 'create' | 'sync';

export interface SyncRequest {
  readonly code: string;
  readonly intent: SyncIntent;
  readonly progress: ProgressRecord;
}

/** The merged progress: the device replaces its copy with it. */
export interface SyncResponse {
  readonly progress: ProgressRecord;
}

export type SyncFailure = 'invalid_request' | 'unknown_code' | 'code_taken' | 'too_large' | 'busy';

/** Largest request body the endpoint reads, and largest progress it stores per code. */
export const MAX_SYNC_BYTES = 512 * 1024;
