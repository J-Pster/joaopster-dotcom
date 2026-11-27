// The sync code that links a reader's devices: 20 random Crockford base32 characters (100 bits),
// shown in groups of four. It works like a password, so the server stores only its SHA-256.
// Shared by the browser and the sync endpoint (src/pages/api/progress.ts).

const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const LENGTH = 20;

declare const brand: unique symbol;
/** A code in canonical form: 20 uppercase characters, no separators. */
export type SyncCode = string & { readonly [brand]: 'SyncCode' };

/** Reads a code typed or pasted by a person: case, spaces, dashes and look-alike letters are forgiven. */
export function parseSyncCode(input: string): SyncCode | null {
  const canonical = input
    .toUpperCase()
    .replace(/[\s-]/g, '')
    .replace(/[IL]/g, '1')
    .replace(/O/g, '0');
  if (canonical.length !== LENGTH) return null;
  for (const char of canonical) if (!ALPHABET.includes(char)) return null;
  return canonical as SyncCode;
}

export function newSyncCode(): SyncCode {
  // 256 is a multiple of 32, so taking 5 bits of each random byte keeps every character equally likely.
  const bytes = crypto.getRandomValues(new Uint8Array(LENGTH));
  return [...bytes].map((b) => ALPHABET[b % 32]).join('') as SyncCode;
}

export const formatSyncCode = (code: SyncCode): string => code.replace(/(.{4})(?=.)/g, '$1-');
