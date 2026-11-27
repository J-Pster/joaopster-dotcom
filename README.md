# joaopster.com

Source code for my personal site at [joaopster.com](https://joaopster.com).

Software engineer and startup co-founder, building production systems since 2019. The site is my professional home: who I am, what I build, how I think about engineering, and a blog where I write about the tradeoffs that don't fit in a tweet.

## What's on the site

- **Landing page** with hero, experience timeline, tech stack, open-source projects, and a workflow section
- **Blog** with full-text search, tag filtering, and Giscus comments
- **Multilingual** — Portuguese (default), English (`/en`), and Spanish (`/es`)
- **RSS feed** at `/rss.xml`
- No tracking. No analytics. No nonsense.

## Tech

- [Astro](https://astro.build) as the framework
- TypeScript strict mode throughout
- MDX for blog posts with content collections
- Astro i18n routing with PT as the default locale
- Giscus for comments (GitHub Discussions-backed)
- Atkinson Hyperlegible font (self-hosted)
- Runs as a Cloudflare Worker (`@astrojs/cloudflare`): pages are prerendered, course pages and API endpoints render on demand
- Courses live in R2, published apart from the site build (see below)

## Project structure

```
src/
  components/
    sections/       # Page sections (Hero, About, Experience, Stack, Projects…)
    ContactModal.astro
    Header.astro
    Footer.astro
    LanguageSelector.astro
  content/
    blog/
      pt/           # Portuguese posts (default)
  i18n/
    ui.ts           # All UI strings for PT, EN, ES
  layouts/
    BlogPost.astro
  pages/
    index.astro     # PT (default)
    en/             # EN routes
    es/             # ES routes
    blog/
    rss.xml.js
```

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production → dist/
npm run preview    # Preview production build locally
npm run deploy     # Build and deploy the Worker
```

## Courses

Courses are Markdown vaults (Obsidian), kept out of git and out of the build. Publishing a course renders
it once and uploads a versioned package to the R2 bucket `joaopster-courses`; the site reads it on demand,
so a course change needs no site deploy.

```bash
npm run courses:sync                              # copy the vaults into courses/<slug>/
npm run courses:publish -- --remote radio         # publish one course (or --all) to production
npm run courses:publish -- --local --all          # publish to the local copy that `npm run dev` reads
```

## Environment

Copy `.env.example` to `.env` and fill in the values before running locally.

## License

Code is MIT. Writing and content are mine.
