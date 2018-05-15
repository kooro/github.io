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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0d6f11d6492a0d16f185e1c92c7c5859.png",
    "revision": "0d6f11d6492a0d16f185e1c92c7c5859"
  },
  {
    "url": "404.html",
    "revision": "b20dbb3c90520eba6089c9e97da44763"
  },
  {
    "url": "assets/css/4.styles.6bc564f1.css",
    "revision": "a1224ca22eb01b5ab1f16edf29fc6e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.f9f04648.js",
    "revision": "1cade67ca151746c50167ca4331c49e4"
  },
  {
    "url": "assets/js/1.54a5acb4.js",
    "revision": "d0c63a2322af3044399cbcd3a701a26b"
  },
  {
    "url": "assets/js/2.57bbb304.js",
    "revision": "be50dc1bada821612f5fab316d37d0ed"
  },
  {
    "url": "assets/js/3.d77062ac.js",
    "revision": "cb7177a33cce624e8c6e0403726bbfcd"
  },
  {
    "url": "assets/js/app.e51cb7bd.js",
    "revision": "1293c63858f74c1a6b026b1e80b6871c"
  },
  {
    "url": "background.jpg",
    "revision": "9ba7e3d4f6ec09840b469a2b48c1175a"
  },
  {
    "url": "efee80f2b0966de691a50ca2e507dca9.png",
    "revision": "efee80f2b0966de691a50ca2e507dca9"
  },
  {
    "url": "index.html",
    "revision": "8d23134e6dbacdc22b1bffe8ff480ed5"
  },
  {
    "url": "js/index.html",
    "revision": "56e4dc0bb73e906693f8a717a18469f4"
  },
  {
    "url": "js/test.html",
    "revision": "ff799c1e2e289c96cb9df1841fd585cb"
  },
  {
    "url": "js/test2.html",
    "revision": "2702b7e2c3210dbedf4e7c6f93a833c9"
  },
  {
    "url": "vue.jpg",
    "revision": "aa8c3f2ca7b47d251c38f52bb0c60143"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
