// Native Next.js must never attempt to import the Cloudflare Workers runtime.
// The account API rejects unauthenticated requests before reaching storage.
export const env: Cloudflare.Env = {};
