const options = {
  vertion: 'v2',
  deleteCache: true,
  style: 'color:cyan;',
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// [baseURL]  http://localhost  --> http://localhost:3001
// [baseURL]  https://localhost --> https://localhost:53001
// [baseURL]  https://cihot.com --> https://api.cihot.com
const { protocol: P, hostname: H } = location;
const baseURL = `${P}//${H === 'localhost' ? `${H}:${P.endsWith('s:') ? 53501 : 3501}` : 'voc-be.cihot.com'}`;
// console.debug({ baseURL });

// importScripts('/axios.min.js');
// const api = axios.create({ baseURL });

// importScripts(
//   // '/sw/notification.js',
//   // '/sw/sync.js',
//   // '/sw/push.js',
// );

self.addEventListener('install', async (event) => {
  console.debug('%csw: install', options.style);
  // 跳过等待，立即激活新的Service Worker
  try {
    await self.skipWaiting();
    console.debug('%csw: skip waiting.', options.style);
  } catch (err) {
    console.error('sw: install error.');
  }
});

self.addEventListener('activate', (event) => {
  // const serviceWorker = event.currentTarget;

  const deleteCaches = () =>
    options.deleteCache
      ? caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheName !== options.vertion) {
                console.debug(`%csw: delete cache storage. (${cacheName})`, options.style);
                return caches.delete(cacheName);
              }
            }),
          );
        })
      : Promise.resolve(!console.debug('%csw: skip delete cache storage.', options.style));

  const openCache = () =>
    caches.open(options.vertion).then((cache) => {
      console.debug(`%csw: open cache storage. (${options.vertion})`, options.style);
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/manifest.json',
        '/sw.js',
        '/axios.min.js',
        '/sw/notification.js',
        '/sw/sync.js',
        '/sw/push.js',
      ]);
    });

  // 执行激活相关的任务，比如清除旧缓存
  event.waitUntil(
    deleteCaches(),
    openCache(),
    Promise.resolve(!console.debug(`%csw: activate. (${options.vertion})`, options.style)),
  );
});
