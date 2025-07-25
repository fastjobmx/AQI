// Service Worker para PWA - AQI Tech Services

const CACHE_NAME = 'aqi-tech-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/favicon.ico',
  '/manifest.json',
  '/src/main.tsx',
  '/src/index.css',
  '/splash.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/icon-192x192.svg',
  '/icon-512x512.svg',
  '/screenshot-wide.svg',
  '/screenshot-narrow.svg'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Estrategia de caché: Network First con fallback a cache
self.addEventListener('fetch', (event) => {
  // Manejo especial para enlaces de WhatsApp
  if (event.request.url.includes('wa.me') || event.request.url.includes('whatsapp.com')) {
    // No intentamos cachear o interceptar enlaces de WhatsApp, dejamos que se manejen normalmente
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la respuesta es válida, clonarla y almacenarla en caché
        if (event.request.method === 'GET' && response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // Si la red falla, intentar servir desde caché
        return caches.match(event.request);
      })
  );
});

// Activación y limpieza de cachés antiguos
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Sincronización en segundo plano
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Aquí iría la lógica para sincronizar datos cuando hay conexión
      console.log('Sincronizando datos en segundo plano')
    );
  }
});

// Notificaciones push
self.addEventListener('push', (event) => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/logo.png',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Acción al hacer clic en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});