/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html'
  },
  {
    url: '/favicon.png'
  },
  {
    url: '/main.js'
  }
]);

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL('/index.html'));