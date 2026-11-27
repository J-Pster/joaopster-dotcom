// Blog index (layouts/BlogIndex.astro): search across title, summary and topics, one topic filter,
// and the filters mirrored in the URL (?q=, ?topic=) so a filtered view can be shared. Unfiltered, the
// latest post shows only in the featured card above the list.

interface Post {
  readonly item: HTMLElement;
  readonly words: string;
  readonly topics: readonly string[];
  readonly featured: boolean;
}

/** Lowercase without accents, so "opiniao" finds "Opinião". */
const fold = (value: string): string => value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function must<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Blog index is missing ${selector}`);
  return element;
}

export function initBlogIndex(): void {
  const search = must<HTMLInputElement>('[data-blog-search]');
  const count = must<HTMLElement>('[data-blog-count]');
  const empty = must<HTMLElement>('[data-blog-empty]');
  const topicButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-topic]')];
  const years = [...document.querySelectorAll<HTMLElement>('[data-blog-year]')];
  const posts: Post[] = [...document.querySelectorAll<HTMLElement>('[data-blog-post]')].map((item) => ({
    item,
    words: fold(item.dataset.search ?? ''),
    topics: (item.dataset.topics ?? '').split(',').filter(Boolean),
    featured: item.hasAttribute('data-featured'),
  }));
  const knownTopics = new Set(topicButtons.map((b) => b.dataset.topic ?? ''));
  let topic = '';

  function setTopic(value: string): void {
    topic = value;
    for (const button of topicButtons) button.setAttribute('aria-pressed', String((button.dataset.topic ?? '') === value));
  }

  function writeUrl(query: string): void {
    // Keeps parameters the blog does not own (utm_*, for one).
    const params = new URLSearchParams(location.search);
    for (const [name, value] of [['q', query], ['topic', topic]] as const) {
      if (value) params.set(name, value);
      else params.delete(name);
    }
    const qs = params.toString();
    history.replaceState(history.state, '', `${location.pathname}${qs ? `?${qs}` : ''}${location.hash}`);
  }

  function apply(): void {
    const query = search.value.trim();
    const words = fold(query).split(/\s+/).filter(Boolean);
    const filtering = words.length > 0 || topic !== '';
    let shown = 0;
    for (const post of posts) {
      const visible =
        (topic === '' || post.topics.includes(topic)) &&
        words.every((w) => post.words.includes(w)) &&
        (filtering || !post.featured);
      post.item.hidden = !visible;
      if (visible) shown += 1;
    }
    for (const year of years) year.hidden = !year.querySelector('[data-blog-post]:not([hidden])');
    // The count only speaks while filtering; unfiltered, the header already says how many posts there are.
    count.textContent = filtering ? `${shown} ${shown === 1 ? 'post' : 'posts'}` : '';
    empty.hidden = !filtering || shown > 0;
    writeUrl(query);
  }

  for (const button of topicButtons) {
    button.addEventListener('click', () => {
      const value = button.dataset.topic ?? '';
      // Clicking the active topic again goes back to all posts.
      setTopic(value === topic ? '' : value);
      apply();
    });
  }
  search.addEventListener('input', apply);
  search.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || search.value === '') return;
    search.value = '';
    apply();
  });
  must<HTMLButtonElement>('[data-blog-clear]').addEventListener('click', () => {
    search.value = '';
    setTopic('');
    apply();
    search.focus();
  });
  // "/" jumps to the search from anywhere on the page.
  document.addEventListener('keydown', (event) => {
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
    if (document.querySelector('dialog[open]')) return;
    if ((event.target as HTMLElement).closest('input, textarea, select, [contenteditable="true"]')) return;
    event.preventDefault();
    search.focus();
  });

  const params = new URLSearchParams(location.search);
  search.value = params.get('q') ?? '';
  const fromUrl = params.get('topic') ?? '';
  // An unknown topic (old or hand-edited link) shows all posts.
  setTopic(knownTopics.has(fromUrl) ? fromUrl : '');
  apply();
}
