self.addEventListener('push', (e) => {
  const notification = e.data.json();
  if (!notification) return;

  console.debug('push', notification);

  const resultData = notification.notification;
  const resultURL = notification.data.click_action;

  const notificationTitle = resultData.title;
  const notificationOptions = {
    title: resultData.title,
    body: resultData.body,
    icon: resultData.image,
    data: { click_action: resultURL },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (e) => {
  const resultURL = e.notification.data.click_action;
  e.waitUntil(clients.openWindow(resultURL));
  e.notification.close();
});
