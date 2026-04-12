/**
 * Service Worker for Agribiz Africa
 * Provides offline caching and faster repeat visits
 */

const CACHE_NAME = 'agribiz-v1';
const RUNTIME_CACHE = 'agribiz-runtime';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/images/optimized/hero-ghana-farmers.webp',
  '/images/Agribiz logo.jpg'
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching critical assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (except images)
  if (url.origin !== location.origin && !request.url.includes('/images/')) {
    return;
  }

  // Strategy: Cache First for static assets
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Strategy: Network First for HTML/API
  if (request.mode === 'navigate' || request.url.includes('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Strategy: Stale While Revalidate for other resources
  event.respondWith(staleWhileRevalidate(request));
});

// Check if URL is a static asset
function isStaticAsset(url) {
  return /\.(js|css|woff2?|ttf|otf|eot|ico|svg|png|jpe?g|webp|avif|gif)(\?|$)/i.test(url);
}

// Cache First strategy - best for static assets
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed for:', request.url);
    // Return offline fallback if available
    return caches.match('/offline.html');
  }
}

// Network First strategy - best for HTML
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, serving cache:', request.url);
    const cachedResponse = await caches.match(request);
    return cachedResponse || caches.match('/');
  }
}

// Stale While Revalidate - serve cache immediately, update in background
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
