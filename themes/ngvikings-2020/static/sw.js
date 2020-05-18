// Let's use the local version of Workbox instead of CDN
import * as googleAnalytics from "workbox-google-analytics";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import * as strategies from "workbox-strategies";
import { skipWaiting, clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";

googleAnalytics.initialize();

// SETTINGS

// Modify SW update cycle
skipWaiting();
clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
precacheAndRoute(self.__WB_MANIFEST, {
  urlManipulation: ({ url }) => {
    //console.log(url);
    return [url];
  },
  ignoreURLParametersMatching: [/.*/],
});

// RUNTIME CACHING

// Google fonts
registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  new strategies.StaleWhileRevalidate({
    cacheName: "googleapis",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
      }),
    ],
  })
);

// PUSH NOTIFICATIONS

// Receive push and show a notification
self.addEventListener("push", function (event) {
  console.log("[Service Worker]: Received push event", event);

  var notificationData = {};

  if (event.data.json()) {
    notificationData = event.data.json().notification;
  } else {
    notificationData = {
      title: "Something Has Happened",
      message: "Something you might want to check out",
      icon: "/assets/images/logo.png",
    };
  }

  self.registration.showNotification(notificationData.title, notificationData);
});

// Custom notification actions
self.addEventListener("notificationclick", function (event) {
  console.log("[Service Worker]: Received notificationclick event");

  event.notification.close();

  if (event.action == "opentweet") {
    console.log("[Service Worker]: Performing action opentweet");

    event.waitUntil(
      clients.openWindow(event.notification.data).then(function (windowClient) {
        // do something with the windowClient.
      })
    );
  } else {
    console.log("[Service Worker]: Performing default click action");

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(
      clients
        .matchAll({
          includeUncontrolled: true,
          type: "window",
        })
        .then(function (clientList) {
          for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == "/" && "focus" in client) return client.focus();
          }
          if (clients.openWindow) return clients.openWindow("/");
        })
    );
  }
});

// Closing notification action
self.addEventListener("notificationclose", function (event) {
  log("[Service Worker]: Received notificationclose event");
});
