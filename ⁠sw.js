const CACHE_NAME = 'taxi-martin-v1';
const urlsToCache = [
  '/Taxi-Martin-/',
  '/Taxi-Martin-/index.html',
  '/Taxi-Martin-/manifest.json',
  '/Taxi-Martin-/IMG_2858.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
