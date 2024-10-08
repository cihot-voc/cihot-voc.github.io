self.addEventListener('push', function (event) {
  const data = event.data ? event.data.json() : {};

  const title = data.title || 'Default title';
  const options = {
    body: data.body || 'Default body',
    icon: data.icon || '/sw/icons-96.png',
    badge: data.badge || '/sw/icons-96.png',
    data: data.url || '/',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data));
});

async function initPush(serviceWorker) {
  let publicVapidKey;
  let subscription;
  try {
    res = await api.get(`${baseURL}/webpush/public-vapid-key`);
    console.debug(res);
    publicVapidKey = res.data;
    console.debug('publicVapidKey', publicVapidKey);
  } catch (err) {
    console.log('PublicKeyError:', err.message);
  }
  try {
    const { registration } = serviceWorker;
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });
    console.debug('pushManager', subscription);
  } catch (err) {
    console.debug('No pushManager', err);
  }
  try {
    const ok = await api.post(`${baseURL}/webpush/subscribe`, subscription);
    console.log('Subscribed to Push Notifications!', ok);
  } catch (err) {
    console.debug('No subscribe', err);
  }
}
