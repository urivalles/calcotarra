const CACHE_PREFIX = `calcotarra:${self.registration.scope}:`;
const CACHE = `${CACHE_PREFIX}2`;
const FILES = new Set(
  ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png']
    .map(file => new URL(file, self.registration.scope).href)
);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll([...FILES]);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const asset = new URL(event.request.url);
  const hasQuery = Boolean(asset.search);
  asset.search = '';
  if (!FILES.has(asset.href)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(event.request);
      if (response.ok && !response.redirected && !hasQuery) {
        await cache.put(asset.href, response.clone()).catch(() => {});
      }
      return response;
    } catch {
      return (await cache.match(asset.href)) ?? Response.error();
    }
  })());
});
