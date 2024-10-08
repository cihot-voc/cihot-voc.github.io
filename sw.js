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

importScripts('/axios.min.js');
const api = axios.create({ baseURL });

const options = {
  deleteCache: true,
};

importScripts(
  // '/sw/notification.js',
  // '/sw/sync.js',
  '/sw/push.js',
);

self.addEventListener('install', async (event) => {
  // console.log('安装sw');
  // 跳过等待，立即激活新的Service Worker
  try {
    await self.skipWaiting();
    console.debug('已跳过等待');
  } catch (err) {
    console.error('安装sw时发生错误', err);
  }
});

self.addEventListener('activate', (event) => {
  const serviceWorker = event.currentTarget;

  // 执行激活相关的任务，比如清除旧缓存
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          // 判断是否要删除旧缓存
          if (options.deleteCache) {
            console.debug('删除缓存', cache);
            return caches.delete(cache);
          }
        }),
      );
    }),
    Promise.resolve(console.debug('激活', event)),
  );
});
