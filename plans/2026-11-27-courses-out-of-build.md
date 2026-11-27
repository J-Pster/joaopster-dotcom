# Courses out of the build (R2 + Worker)

Goal: courses are published to R2 with one command and served on demand by the site Worker. The site
build no longer contains courses. The blog and every other page stay prerendered.

## Decisions

- Hosting moves from Cloudflare Pages to a Worker with static assets: `@astrojs/cloudflare` v13
  (Astro 6) no longer supports Pages. Worker name `joaopster-site`, custom domain `joaopster.com`.
- Markdown stays the source. `courses:publish` reads the vault (`courses/<slug>/`, filled by
  `courses:sync` from the Obsidian folder), renders every note once in Node with the existing
  `vault.ts` + `render.ts`, and uploads a versioned package. Rendering at request time is not used:
  a note's HTML depends on the whole vault (wikilinks, backlinks, glossary) and Shiki is heavy.
- Package = few large objects, read by byte range, so a publish is a handful of uploads:
  - `courses/<slug>/<version>/index.json`: course metadata, notes (meta, minutes, description),
    modules, glossary, backlinks, assets, and the byte ranges of every packed entry.
  - `courses/<slug>/<version>/notes.pack`: rendered notes (html, headings, quiz), JSON per entry.
  - `courses/<slug>/<version>/files.pack`: course files (images, spreadsheets) linked from notes.
  - `courses/<slug>/<version>/search.pack`: the course's Pagefind index.
  - `courses/<slug>/<version>/vault.zip`: the Markdown vault as downloaded by readers (the source copy).
  - `courses/<slug>/<version>/outline.json`, `study.json`, `og.png`.
  - `catalog.json` (bucket root): the published courses (metadata + catalog stats + current version)
    and the site share images of the courses landing. Written last: it is the atomic switch.
- Course metadata (today `COURSES` in `catalog.ts`) moves to `course-catalog/<slug>.json`, read only by
  the publisher. Adding a course = metadata file + sync + publish, no site deploy.
- Runtime reads go through one port (`CourseStore`) with an R2 adapter; `catalog.json` is cached in
  the isolate for 30 s, `index.json` per version for the isolate's life (versions are immutable).
- Pages that mention courses outside the courses section (About list, blog index card, courses
  share image) read the published catalog: server islands for the two HTML bits, R2 for the image.
- Search: each course gets its own Pagefind index, served at `/cursos-busca/<slug>/`.
- Security headers: one TS constant, written to `dist/_headers` for static assets and applied by
  middleware to on-demand responses (`_headers` does not cover Worker responses).
- Course vaults leave git (`courses/*` ignored except `_skill`); R2 keeps every published version.

## Phases

1. Worker migration: adapter (`prerenderEnvironment: 'node'`), `wrangler.jsonc` (assets, D1, R2,
   vars), the 4 Pages Functions become Astro endpoints, headers middleware. Build passes.
2. Publisher: `course-catalog/*.json`, package writer, Pagefind per course, OG images, upload via
   `wrangler r2 object put` (remote or `--local`). Parity check against the current build.
3. On-demand course routes in the 3 languages read from the store; course routes leave
   `getStaticPaths`; landing, glossary, mistakes, review, outline, study, files, zip, OG, sitemap,
   `llms.txt`, search and the service worker follow.
4. Verify: build, local dev against local R2, HTML parity sample, CPU per request.
5. Create bucket, publish the 4 courses, set secrets, deploy to workers.dev, smoke test, move the
   domain from Pages to the Worker, smoke test production.
6. Review of the diff.

## Owner actions

- Enable R2 in the dashboard (done by the owner).
- Connect Workers Builds to the GitHub repo after the code lands on master (dashboard only).
