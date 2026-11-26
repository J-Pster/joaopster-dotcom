-- Reading progress of the courses, synced between a reader's devices.
-- One row per sync code. The code itself is never stored, only its SHA-256.
CREATE TABLE course_progress (
  code_hash TEXT PRIMARY KEY NOT NULL,
  -- All courses of this code, as JSON (see src/lib/courses/progressModel.ts).
  data TEXT NOT NULL,
  -- Bumped on every write; a write only lands on the version it read (optimistic concurrency).
  version INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
