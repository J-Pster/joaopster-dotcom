// The few Workers runtime types this site uses (the project has no @cloudflare/workers-types), and the
// bindings of wrangler.jsonc as `env` from "cloudflare:workers".

interface D1Result {
  readonly meta: { readonly changes: number };
}
interface D1PreparedStatement {
  bind(...values: (string | number)[]): D1PreparedStatement;
  first<T>(): Promise<T | null>;
  all<T>(): Promise<{ readonly results: T[] }>;
  run(): Promise<D1Result>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
}

interface R2Range {
  readonly offset: number;
  readonly length: number;
}
interface R2ObjectBody {
  readonly size: number;
  readonly httpEtag: string;
  readonly body: ReadableStream<Uint8Array>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
}
interface R2Bucket {
  get(key: string, options?: { readonly range?: R2Range }): Promise<R2ObjectBody | null>;
}

interface SiteEnv {
  readonly COURSES_DB: D1Database;
  readonly COURSES_BUCKET: R2Bucket;
  readonly ASSETS: { fetch(request: Request | URL): Promise<Response> };
  /** Secret mixed into the visitor hash of the view counter, so it cannot be reversed by trying IPs. */
  readonly VIEWS_SALT: string;
  readonly BUTTONDOWN_API_KEY: string;
  readonly WAKATIME_ACCESS_TOKEN: string;
}

// What @astrojs/cloudflare/handler's types refer to (src/worker.ts).
interface Env extends SiteEnv {}
interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}
interface ExportedHandler<E> {
  fetch?(request: Request, env: E, ctx: ExecutionContext): Response | Promise<Response>;
}

declare module 'cloudflare:workers' {
  export const env: SiteEnv;
  export function waitUntil(promise: Promise<unknown>): void;
}
