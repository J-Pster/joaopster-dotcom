// Offline support for the courses section (registered from lib/courses/client/offline.ts).
// It only touches same-origin GET requests, never /api/ (the progress sync must always reach the
// server), and passes everything else through so the rest of the site behaves as it did before.
// The cache names are also written by the page when a whole course is saved: keep them in step
// with PAGES_CACHE and ASSETS_CACHE in lib/courses/client/offline.ts.
const VERSION = 'v1';
const PAGES_CACHE = `jp-courses-pages-${VERSION}`;
const ASSETS_CACHE = `jp-courses-assets-${VERSION}`;
const CACHE_PREFIX = 'jp-courses-';
const OFFLINE_PAGE = '/offline.html';
// Same bases as SECTION in lib/courses/catalog.ts (pt, en, es).
const COURSE_BASES = ['/cursos/', '/en/courses/', '/es/cursos/'];

self.addEventListener('install', (event) => {
  // The offline page is cached up front: it is what a reader sees for a page never visited.
  event.waitUntil(
    caches
      .open(PAGES_CACHE)
      .then((cache) => cache.add(OFFLINE_PAGE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  // A new VERSION drops every cache of the old one, so stale pages never outlive a format change.
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name.startsWith(CACHE_PREFIX) && name !== PAGES_CACHE && name !== ASSETS_CACHE)
            .map((name) => caches.delete(name)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

const isCourseUrl = (url) => COURSE_BASES.some((base) => url.pathname.startsWith(base)) && !url.pathname.endsWith('.zip');
// Built files are named by content hash, so a cached copy is always the right one.
const isImmutableAsset = (url) => url.pathname.startsWith('/_astro/') || /\.woff2?$/.test(url.pathname);
const isSearchIndex = (url) => url.pathname.startsWith('/pagefind/');

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  if (isImmutableAsset(url)) {
    event.respondWith(cacheFirst(request, ASSETS_CACHE));
  } else if (isSearchIndex(url)) {
    // Not hashed, and the entry file and its fragments change together on every build: network
    // first keeps them from the same build online, the cached copy only answers offline.
    event.respondWith(networkFirst(request, ASSETS_CACHE));
  } else if (isCourseUrl(url)) {
    event.respondWith(networkFirst(request, PAGES_CACHE));
  }
});

async function store(cacheName, request, response) {
  // Only complete same-origin answers are worth keeping; a 404 or a redirect would be served back later.
  if (response.ok && response.type === 'basic') {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
  }
  return response;
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  return store(cacheName, request, await fetch(request));
}

async function networkFirst(request, cacheName) {
  try {
    return await store(cacheName, request, await fetch(request));
  } catch (networkError) {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (request.mode === 'navigate') return caches.match(OFFLINE_PAGE);
    throw networkError;
  }
}
