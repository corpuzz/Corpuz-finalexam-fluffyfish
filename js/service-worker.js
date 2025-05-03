// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

const CACHE_NAME = 'flappy-fish-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/styles.css',
  './css/bootstrap.min.css',
  './js/game.js',
  './js/fish.js',
  './js/pipe.js',
  './js/collision.js',
  './js/score.js',
  './js/gameover.js',
  './js/start.js',
  './js/sound.js',
  './js/background-music.js',
  './js/install.js',
  './assets/img/fish3.gif',
  './assets/sounds/background-music2.mp3',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Failed to cache all urls: ', err);
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. This is needed to consume the
        // original request.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. This is needed to store
            // the response for future use.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // If we can't get the asset from the network,
          // return the offline page
          return caches.match('./index.html'); // Or a custom offline page
        });
      })
  );
});