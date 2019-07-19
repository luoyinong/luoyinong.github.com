/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.bd6882aa3ab888592cfc5f543a9b06a3.js"
);

workbox.core.setCacheNameDetails({prefix: "vue-pwa"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
self.addEventListener('notificationclick', function (e) {
  var action = e.action
  console.log(`action tag: ${e.notification.tag}`, `action: ${action}`)
  switch (action) {
    case 'look':
      console.log('look')
      break
    case 'contact':
      console.log('contact')
      break
    default:
      console.log(`未处理的action: ${e.action}`)
      action = 'default'
      break
  }
  e.notification.close()
})
