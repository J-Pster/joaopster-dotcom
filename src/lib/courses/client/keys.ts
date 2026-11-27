// API keys the reader brings for the AI assistant and the paid voices of "listen to the lesson".
// They live only in this browser's localStorage and go straight from the page to the provider; the
// site has no server code that receives them. The keys dialog (keysDialog.ts) edits them, and any
// module that needs one asks for it here or opens the dialog with requestKey().

export const PROVIDERS = ['anthropic', 'openai', 'gemini', 'google', 'elevenlabs'] as const;
export type ProviderId = (typeof PROVIDERS)[number];

/** localStorage key of the saved keys; the storage event of another tab reports it. */
export const STORAGE_KEY = 'jp-courses:keys';
/** Fired on window after a key is saved or deleted, with the provider in detail. */
export const KEYS_CHANGED = 'jp-courses:keys-changed';
/** Fired on window to open the keys dialog on one provider; keysDialog.ts listens to it. */
export const OPEN_KEYS = 'jp-courses:open-keys';

type KeyStore = Partial<Record<ProviderId, string>>;

function isProvider(value: string): value is ProviderId {
  return (PROVIDERS as readonly string[]).includes(value);
}

// The stored value is written only by this module, but another tab or an older version may have left
// something else there: anything that is not a string under a known provider is dropped.
function readStore(): KeyStore {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return {};
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return {};
  }
  if (typeof parsed !== 'object' || parsed === null) return {};
  const store: KeyStore = {};
  for (const [name, value] of Object.entries(parsed)) {
    if (isProvider(name) && typeof value === 'string' && value !== '') store[name] = value;
  }
  return store;
}

function writeStore(store: KeyStore, changed: ProviderId | 'all'): void {
  if (Object.keys(store).length === 0) localStorage.removeItem(STORAGE_KEY);
  else localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new CustomEvent(KEYS_CHANGED, { detail: changed }));
}

export function readKey(provider: ProviderId): string | undefined {
  return readStore()[provider];
}

export function hasKey(provider: ProviderId): boolean {
  return readKey(provider) !== undefined;
}

export function saveKey(provider: ProviderId, key: string): void {
  const value = key.trim();
  if (value === '') throw new Error('An empty key cannot be saved; use deleteKey to remove one.');
  writeStore({ ...readStore(), [provider]: value }, provider);
}

export function deleteKey(provider: ProviderId): void {
  const store = readStore();
  delete store[provider];
  writeStore(store, provider);
}

export function deleteAllKeys(): void {
  writeStore({}, 'all');
}

/** Opens the keys dialog on this provider, for a feature that needs a key the reader has not given. */
export function requestKey(provider: ProviderId): void {
  window.dispatchEvent(new CustomEvent(OPEN_KEYS, { detail: provider }));
}

/** Last characters of a key, to show which one is saved without showing it. */
export function maskKey(key: string): string {
  return `•••• ${key.slice(-4)}`;
}
