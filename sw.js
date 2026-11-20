const NAMA_CACHE = 'dashdish-v2026112101';
const BERKAS_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './ikon.svg',
  './manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(NAMA_CACHE).then((c) => c.addAll(BERKAS_CACHE)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((daftar) =>
      Promise.all(daftar.filter((k) => k !== NAMA_CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const salinan = res.clone();
        caches.open(NAMA_CACHE).then((c) => c.put(e.request, salinan));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
