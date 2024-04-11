'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "2720dd00e69657e2f67d44b63735ad59",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dc6a77566b79fbededd975d84809774b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fa9b26565448577ad0b99c20cdf48b46",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c20f1c7ab52ab0797d0e14512b0d4b6",
".git/logs/refs/heads/main": "267ebaa211097baf0f9b0253c117fc73",
".git/logs/refs/remotes/origin/main": "25689b39b1730d28f1ed9fd2cfd8da93",
".git/logs/refs/remotes/origin/master": "9b6afe89ef8e84f1a8367952bfbcdc89",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a71097e50dcc703f33185f836119d7716c81fb": "70c5909192860d1ff48e29ff5002e72f",
".git/objects/0b/05102070414e6b0f143e2cf9137c993697f13a": "9de326c2d288b2e8723ef55aec2bb4a8",
".git/objects/0b/daea9bf8a2d41b4272b65cfdec0d1459d86b6d": "131e32883c07aca082817b037fde211f",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/0d/510b37f8db00978a2fb45f06cbcf42764503e1": "72afd5254f927c9528643e908eb0f252",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/0e/bf14e61e42a98d9008fc62a05043f75e7d0d81": "9cc169fefcf2cb2d615bceb2b75b48be",
".git/objects/12/ae1f8d161658c0f931d0376cfdcd4593375088": "f3e5bc442ad73c539d467b07fd925e86",
".git/objects/1b/5e63397fcfac180b5da13eb0f73f8f32d96ab3": "1cb46063e835e0cd5155a0de29e8ed1b",
".git/objects/1d/02c8a96b1743fce45b111832b0c99d8035d452": "e14caad131c582d84b7ed20034507876",
".git/objects/1f/67c4ff6e599a1f45d85dbe1b3b9466824ad87e": "8cff1e438567084f147b908ea5046317",
".git/objects/20/b8e8403473efad787c82c9b2791596428e77c8": "b7930bf175040ab7b3389e32e3261dfe",
".git/objects/22/3af8ba30fb0d2dcd04febe7943ccd0487a3466": "27220637eb457700d2dee5f4f1ed2706",
".git/objects/22/87b44fd29bb03f97595e7dd6f01b6435db42c3": "b2efee8b5c482d9a88e2f44c442a29eb",
".git/objects/22/b1ba0e4df6f28adc126be4a03a344a15af410e": "de2f30e3ea7b50e2632f60e622345e86",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/25/983c7046a62015d677f9bd8d52fdf2967dfab0": "45df97a68fc995d6b77eae56f15fec5b",
".git/objects/26/1481e21a20950cb6b2019110afd88777bcf2b1": "29c462222de7ab777a985decfb2e74d5",
".git/objects/29/20c9205754f11afd4d3c9b988dba5f6bf12f81": "13ef9eddb4b552a19dd42b2a178e99a7",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/e6267a71d67e453073598eb65cd1b17a53fa83": "f1dff2628770cfd6637dfc38d2c861d5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/3b/de4915e28cb6150a32501727727ab209e2641f": "c9eef280ba222099648bed0867bb6c6e",
".git/objects/40/2a12828bd9cc845e18b58176481dcfe5a55f1f": "b141c849684af62c999e10744c2d2a77",
".git/objects/40/74a47f8cdca87415d168fdea070b0c25646b83": "646b566233095f5611905c5c2a411c45",
".git/objects/42/aa5e681fdae1af982512793e6d32b6146c11f9": "028cf517f4b1c56ba298f29e2a68da6c",
".git/objects/43/f1fb4365d9b1e16b3699f4549312e4ea283165": "f3d9d15776bff1bf9b0bdc126d284cd4",
".git/objects/44/8a2c39a06938d304841444409eeaa3968e096f": "db563cd33a0751df46d09407d8be40cf",
".git/objects/44/8ec89afa31b715b26fe6f469c2194cec65fef0": "53abc0e220741cbda57f0b1a1e2b5026",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/d7016311e49486ace0df7c0d6970c752223104": "bcf2ab66b25bae2f87011aaa29261973",
".git/objects/4f/5d38118b6da6b8b2f0aaa44f92b218398d1df8": "1773e3e968b6575ccb3973ee4f8d9868",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/f15ede5a819ba4f21f942eead873805444e7aa": "36d2305bb09a62e5515e5f74f9b3330a",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e213f83927c2a4c19aa1b864a19eb852",
".git/objects/61/45a1bfeec958129bb437767015add2b004e2db": "1ed825860f6b3143b1bdd5fcc3d553f5",
".git/objects/64/78d951db17c80eb5021c541173922b97df4152": "aab88b053eb000cfa02a6d1b578348a3",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/6b/572784eeff9a157b072fcd4112572222d3cc99": "7fe52dc4878b299bdb8dc8d4f70a0fdf",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/0d484cc366ed666853a9a6f868fb2858ccf17b": "79a1b39c579787a2d253c1f5f58768a6",
".git/objects/6e/7712313434cf9a037ba26fd47825955a69d00d": "b1f6bbe9c616532a1f257549e4311eb5",
".git/objects/6e/900c39429d2e2397fcece1e1511f4cacb4ed6b": "a4029f83707daf1635a90c3a6f8480af",
".git/objects/70/882bfca18fd714b60e3859007fa51bd873d20f": "74101a2b388b6d7f803d4a8b57840791",
".git/objects/7a/0497b35791f2d709d95d5c4c216e5e41ae3857": "3aa385e21e449c3e67d4566b7295e419",
".git/objects/7a/34533cc595eebc07a6eb36fa957d6573e067dd": "0421254b7ae1414ecfc77e910ac58c8f",
".git/objects/7b/028bfb649f189205992a4d52379da414bfd89b": "53147a553131166be90f0ce613658258",
".git/objects/81/5de6bb92ef06c7451acb2cbb26f8f04f42cb7d": "650808a0a57c073cc4e96e8817a4f6c4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/9042927f48cb6f66e72cc56d8cc9a3b914fbd0": "55243746706b146c25373f4937c4785b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8c/d58cfa81a53fb8538a684522230595cf69d4a1": "9adf596e69929cf29ed475ab352c324c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/0d2071a324ee6050cccd87a14495557b63416f": "27184823c9e5055a30e98ccf70968672",
".git/objects/94/e808881c56b4ee4b5c1d7a0675eab140444e85": "b0e65ed74098b62b46a7453ec54722fa",
".git/objects/95/5ee3038f988929fac2dedb6a307ebd45dfcfd7": "84f4c0c3560baa9920ae37a5e8144c5e",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/c4874380901aeac951aa3447d87abd01fbe2d7": "fcf8a3c3485c80e0e0980e17a7d43be2",
".git/objects/99/c83396372dbc21d93bfd1a2c5eee7c387910a0": "70ebc84a139d36d64a98d0f7f8b41340",
".git/objects/9b/1e11ca6809416865153f95ac6914ae3e33df14": "cd58b80b69dd2badfb776f88787282be",
".git/objects/a1/1c02ce17335a39c4af639c595dff4397ec1d10": "55f543bf9e725acca1655dfd5017fd8f",
".git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
".git/objects/a6/19843f55e60c2fc168fe9f0afc867c44799a04": "62cce156a87ced41bad31aa355bf32df",
".git/objects/a6/dc003b6e59dc24447e9c8ec3044627586ad144": "2eb7a1d1f008ede4c7c73f8bcdfe6203",
".git/objects/a7/fee070dbaf35a46d163b336d52e8f07fc7044b": "f292d63c8b0084cdf38903422f58a6ab",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b2/b08734db2bf90568fb1980bf46e0f42aea5856": "b1435b52c5abfab429aeb92797b5429b",
".git/objects/b5/4b022f319d538d2573892a8c37a2393dec46cb": "e3d512ee8b23723bf7fdd058ae89d7cb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c0/d13e91418dbc28931105af1e417795f58bc3d7": "f50720cc80dd2497de4e975c91f0ec76",
".git/objects/c0/d71c58cbfeac43e96c082b3612b127a0c9cc6d": "3719172b13a52dcd7057940e9624ffc7",
".git/objects/c8/934dd7b3f5d2bd9668dab9679c16586675c67b": "e16ecf02b5547f53939c53f40ebf1b22",
".git/objects/ca/2c609833381b8240c3a9a361637831b104ec28": "affeda9624d4a26a2f559a0c1ae32178",
".git/objects/ce/c3b8c37a2d527293db155b44786907af88e04b": "b95562adb1341fc5775c770ef67e49e3",
".git/objects/cf/7560b212dd1dc0f65bfcd80baa96fd62faff63": "b954d7c916c88616fe4c8cca1b6083fb",
".git/objects/cf/ff25dd68ab2310f124c738d3c47c8b5113a451": "8a115a07e9037a07eba986348524fdf2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/690347b07a6930ef2424d118c2bc53b75b4d88": "e1579f01c7771417df373bc59a40a2ec",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/de/f2b7b0a543dee2b5e9b51984efbe58028d04a2": "6e35cdfbca9efd976433fba46c2506fc",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/95f8fa039cc8257c040ce3f982b63e50a92442": "8f3ab6d2d4cfe662a9c9f1bc69ace40b",
".git/objects/e2/52e31a5fa0d2b69130c081412a29abb24d15a1": "89476f7053b2eda082340a7f27a22d5c",
".git/objects/e2/8dcdd7873cec75e898355ea6e9855010902fe7": "53f5152bb2ca8f2fb8568aca36aefec0",
".git/objects/e4/835719b5034fc5543e6c509aa1f261007dcd17": "d7aad36f887a46925a2c919c22274c13",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/b3f378aaaa9a14a08783fd55bbfe267a6b45f6": "fb27dc868e8666393f9ec9e2ac1be4e2",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "8688207d9bdc19977b061c06f0972db7",
".git/objects/eb/2a09e9b2f6e25df708823670da87449d6f1089": "ce931e7028a8165dba0e4188aa8f43be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a97de2659059a81ac3e03b08ab28d3b3bb9587": "88abd485d800c3e5c199e84f04e3e0db",
".git/objects/ee/eeb11cd5f5af3009f7a2f9985949f3272b4d15": "9b18470ca7e9de4256aeae46104e3d82",
".git/objects/f2/76f2fdd3045f4454a6c7d18f463bb2dd090769": "cc044a5a31d8dd7c73591983cf683a06",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/87e8341e7f9b0aaea4eec331037cf956688dd8": "336fd1c8e9aa94523e6ac3fde587f9df",
".git/objects/ff/01f44989de1f942b4778a76b3ab50242ac82c4": "84ba34f6d896dea8fa188319050962bc",
".git/ORIG_HEAD": "9aa56795a29b07708ff243b1001373cb",
".git/refs/heads/main": "5f78767d6c6f7cf346ac2fa1fdbfe6e8",
".git/refs/remotes/origin/main": "5f78767d6c6f7cf346ac2fa1fdbfe6e8",
".git/refs/remotes/origin/master": "040fb029c4bf4a684663e93963f84ca6",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d1fce776bd84ab73dd74ac6cebde4dd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15b52edc8e8b8cc35db610e953ff5ff2",
"/": "15b52edc8e8b8cc35db610e953ff5ff2",
"main.dart.js": "e30693b05006fecd8e32075e79a3268d",
"manifest.json": "04b6e874f4c308435b6535b6caef83a9",
"version.json": "46c2879f7f70fb61b73be79b03af6bad"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
