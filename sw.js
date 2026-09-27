// Service Worker mínimo — solo existe para que Chrome permita "Instalar app".
// No cachea nada ni interfiere con la carga normal de la página.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // Deja pasar todas las peticiones tal cual, sin caché propia.
});
