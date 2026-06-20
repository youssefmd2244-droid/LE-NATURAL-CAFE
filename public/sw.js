const CACHE_NAME = "le-natural-luxury-premium-v2";

const ASSETS_TO_CACHE = [
  "/",
  "/index.html"
];

// Install Event - Pre-cache core shell assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up stale cache versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Helper to determine if a request is for an asset (JS, CSS, Image, Font)
const isAssetRequest = (url) => {
  const path = url.pathname;
  return (
    path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico)$/) ||
    url.hostname.includes("fonts.googleapis.com") ||
    url.hostname.includes("fonts.gstatic.com") ||
    url.pathname.includes("/assets/") ||
    url.pathname.includes("images")
  );
};

// Fetch Event with optimized strategies
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Focus only on http/https requests
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Strategy A: Cache-First with Network Fallback for static assets (extremely fast, zero latency)
  if (isAssetRequest(url)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache immediately, but refresh cache in the background (stale-while-revalidate)
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && (networkResponse.status === 200 || networkResponse.type === "opaque")) {
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
              }
            })
            .catch(() => { /* offline - suppress error */ });
          return cachedResponse;
        }

        // Not in cache: fetch and cache
        return fetch(event.request)
          .then((networkResponse) => {
            if (!networkResponse || (networkResponse.status !== 200 && networkResponse.type !== "opaque")) {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => {
            // Asset offline fallback - can try to serve main root
            return caches.match("/");
          });
      })
    );
  } else {
    // Strategy B: Network-First with Cache Fallback for documents (/ , index.html, non-asset paths)
    // This guarantees immediate updates when internet is on, and zero offline failure
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If network fails (Offline), attempt to load from Cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Fallback to absolute shell root
            return caches.match("/");
          });
        })
    );
  }
});
