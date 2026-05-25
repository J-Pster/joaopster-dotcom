# joaopster.com

Source code for my personal site at [joaopster.com](https://joaopster.com).

Senior software engineer and AI engineer with 6+ years building production systems. The site is my professional home: who I am, what I build, how I think about engineering, and a blog where I write about the tradeoffs that don't fit in a tweet.

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
- Deployed to [joaopster.com](https://joaopster.com)

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
```

## Environment

Copy `.env.example` to `.env` and fill in the values before running locally.

## License

Code is MIT. Writing and content are mine.
