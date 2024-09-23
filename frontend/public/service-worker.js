const CACHE_NAME = 'offline-cache';
const OFFLINE_URL = '/offline'; // 오프라인 페이지 URL

// 설치 시 오프라인 페이지 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([OFFLINE_URL]);
    })
  );
});

// 네트워크 요청 처리
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // 네트워크 요청 실패 시 오프라인 페이지 반환
      return caches.match(OFFLINE_URL);
    })
  );
});

// 서비스 워커 활성화
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
