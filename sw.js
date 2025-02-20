const CACHE_NAME = "controle-validade-v1";
const urlsToCache = [
  "./",               // Caminho relativo para raiz
  "./index.html",     
  "./manifest.json",  
  // Se você tiver um style.css e script.js separados, adicione-os aqui:
  // "./style.css",
  // "./script.js",
  "./icons/icone.png" // Ajuste se você tiver mais ícones
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
