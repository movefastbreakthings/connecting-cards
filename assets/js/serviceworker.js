'use strict';

var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'index.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll([
          './assets/css/main.css',
          './assets/css/normalize.css',
          './assets/js/app.js',
          './index.html',
          offlineUrl
      ]);
    })
  );
});
