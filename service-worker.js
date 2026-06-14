const CACHE_NAME = 'alquran-kolaka-v1';
const ASSET_CACHE = [
  '/',
  'manifest.json',
  'icon-192x192.png',
  'icon-512x512.png'
];

// Simpan file ke cache saat instalasi
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSET_CACHE))
  );
});

// Ambil dari cache jika ada, jika tidak ambil dari jaringan
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
