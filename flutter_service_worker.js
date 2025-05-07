'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb0eae21d0092fb5a971dbab077881c6",
"assets/AssetManifest.bin.json": "084ac48f750247f55255d6784f2fbb23",
"assets/AssetManifest.json": "5172bf5f1b7bc53f304a631227177e14",
"assets/assets/ENG_UNK_1-100.csv": "bd6a4cc9750ad0fe0c9a742bf2d1736d",
"assets/assets/ENG_UNK_1001-1100.csv": "5d7460ea8f04c6a6812b2e6f87f3ba2d",
"assets/assets/ENG_UNK_101-200.csv": "bcb69162d28f379bddd916643f65af1e",
"assets/assets/ENG_UNK_1101-1200.csv": "17c2873841ce42fefcc486fb23f02991",
"assets/assets/ENG_UNK_1201-1300.csv": "347d314ce9d6140d117135cd8df120e0",
"assets/assets/ENG_UNK_1301-1400.csv": "ddf85077fbff8208a1e21ce3b245984f",
"assets/assets/ENG_UNK_1401-1500.csv": "deee286549b53dc4fd9cbb0a142d149f",
"assets/assets/ENG_UNK_1501-1600.csv": "ac5be37d1d44e33e73f27f352631e9cb",
"assets/assets/ENG_UNK_1601-1700.csv": "ae2c5152ac3fd5c395dd6fd253393e96",
"assets/assets/ENG_UNK_201-300.csv": "54e23c593d7c91ddfe66344784554877",
"assets/assets/ENG_UNK_301-400.csv": "064391bf756c58a8b74ed2333eeab5f7",
"assets/assets/ENG_UNK_401-500.csv": "e053ff7fe9f0a3bafe5ae0b82991729a",
"assets/assets/ENG_UNK_501-600.csv": "3bc9aab972f213a108832730caf2b883",
"assets/assets/ENG_UNK_601-700.csv": "2260df70509c96ea318f211cf4d12849",
"assets/assets/ENG_UNK_701-800.csv": "514e09ebc4018c8e9b8cb0b3925e1c18",
"assets/assets/ENG_UNK_801-900.csv": "13fde74026980500683ea2558b0cf409",
"assets/assets/ENG_UNK_901-1000.csv": "c2eaf869b5784020adb782e1f86f014b",
"assets/assets/JAP_BSC_Academic%2520subjects%2520and%2520others.csv": "3281dcad5390be28e14a55fd6090829b",
"assets/assets/JAP_BSC_Adjectives%252050.csv": "6e88ed6b4f386f6eee867fe81a79b960",
"assets/assets/JAP_BSC_Countries.csv": "d342c38fa138c161e4d2282f2187f0fe",
"assets/assets/JAP_BSC_Daily%2520Expressions.csv": "b0b004d7434891c1911c421a7ed0863d",
"assets/assets/JAP_BSC_Family.csv": "41afb67b64fd85b44096fb15f220b9d0",
"assets/assets/JAP_BSC_Hiragana%2520ya,%2520yu,%2520yo.csv": "577e7539e8de21530b685730e7836619",
"assets/assets/JAP_BSC_Hiragana.csv": "c9f41020397ebef3cbfb0d401052b657",
"assets/assets/JAP_BSC_Hobby.csv": "2a8ce0bd90c8c17edc6b16b3a9df109a",
"assets/assets/JAP_BSC_Japan%2520Phrases.csv": "4bea284e4f259ea3ba99562c452ddd84",
"assets/assets/JAP_BSC_Jobs.csv": "893b6f24dbe36251c6ede3e1e4c80e3b",
"assets/assets/JAP_BSC_Katakana%2520ya,%2520yu,%2520yo.csv": "4670dab39b7b607ef4e2b143f86e83ff",
"assets/assets/JAP_BSC_Katakana.csv": "1dcc7843321764a7584ccc77fc7ee2b9",
"assets/assets/JAP_BSC_Nouns%252050.csv": "ece4e4aa17bdd99d76ba3ffaec1b7442",
"assets/assets/JAP_BSC_Personal%2520pronouns.csv": "5df0a84b36a87060e7809adaec206a4f",
"assets/assets/JAP_BSC_Time.csv": "050823b4b7e9b4c58c58d14a6d9628c3",
"assets/assets/JAP_BSC_Verbs%252050.csv": "bbfae28900176cc3acca2aae4559cbd1",
"assets/assets/JAP_KNJ_N5%2520-%2520Part%25201.csv": "86d3e875ed58df2629786bc0d18573cd",
"assets/assets/JAP_KNJ_N5%2520-%2520Part%25202.csv": "8faa061ca71a574b68bac4a2347cffe1",
"assets/assets/JAP_SKR_BSC_Age%2520and%2520phone%2520number.csv": "b7b8dcb70a09974ef568f5a5453a9a88",
"assets/assets/JAP_SKR_BSC_Classroom%2520words.csv": "d660f5cb95084e08f8315141ca0ad925",
"assets/assets/JAP_SKR_BSC_Countries.csv": "838c84bb5250c3fc74701a3bdc093bfa",
"assets/assets/JAP_SKR_BSC_Family.csv": "c529f4dc644f339ca7d06bd3af88e1b1",
"assets/assets/JAP_SKR_BSC_Greetings.csv": "9fe3c2c91084b6018415f40c733abaf7",
"assets/assets/JAP_SKR_BSC_Hiragana%2520words.csv": "a5e6055020529cdaeb97b3aa35608f4f",
"assets/assets/JAP_SKR_BSC_Katakana%2520words.csv": "5a0538c8f72d691c69a67e1cf3c25e05",
"assets/assets/JAP_SKR_BSC_Numbers.csv": "a26d647d7002180ec46266aba0649cca",
"assets/assets/JAP_SKR_BSC_Self%2520introduction.csv": "392903021f86559ae2e0309d2dabccc5",
"assets/assets/JAP_SKR_BSC_Someone's.csv": "0fb2e749b5669797362635748bbb3a07",
"assets/assets/JAP_SKR_BSC_This%2520is,%2520too.csv": "21bbd4785db85fc07a9e207bdeecc30d",
"assets/assets/yu-gothic-bold.ttf": "1050d2613fe00e50ef8db4206abea536",
"assets/assets/yu-gothic-regular.ttf": "71f4d305c555824bbcd15cdcbed43136",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "ebbd19ad93867f4bab245a6c0edec368",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "17e0284493e5daca19a0eea02ac1f10a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "588eef7e92152dd95914582822b677b0",
"/": "588eef7e92152dd95914582822b677b0",
"main.dart.js": "26cb2cfe461deddac5c06068d7da1321",
"manifest.json": "a0ac1227cbe6f77302be7c0f545edc34",
"version.json": "2af72dffe83a2a824b6c68b1918aa778"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
