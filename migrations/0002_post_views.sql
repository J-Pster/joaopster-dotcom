-- Views of each blog post, all languages together (functions/api/views.ts). Keyed by the post's
-- translation key, the file name shared by its pt, en and es versions.
CREATE TABLE post_views (
  post_key TEXT PRIMARY KEY NOT NULL,
  views INTEGER NOT NULL
);

-- Who already counted today, so a visitor counts once a day per post. Only a salted SHA-256 of
-- (day, IP, user agent, post) is kept, never the IP, and rows of past days are deleted.
CREATE TABLE post_view_marks (
  day TEXT NOT NULL,
  visitor_hash TEXT NOT NULL,
  PRIMARY KEY (day, visitor_hash)
);
