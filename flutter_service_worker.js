'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e7705498e8be60520841409ebc69bc1",
".git/config": "2637a523348174450078b0b1fe5822f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d07ad7197efaabdea814858b992d6a12",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c746edaab70f931530d1c8faf5d13ab",
".git/logs/refs/heads/main": "529c582b16832031ace3831dca4b4e19",
".git/logs/refs/remotes/origin/main": "240146c8456c75368341ea917c78db3f",
".git/objects/07/76bff801ff27abcc1f9f2d51fa7e11916a2a14": "7132c90e032210e4c755c250f85105a1",
".git/objects/08/903ba428ebcbd80950f6a476398f3f7fdee8fb": "c962c889d546f88a66d73ba39ac8d726",
".git/objects/1b/72b47279f6bb7e6f10e24410e7e69a6168913b": "06fe85d54e7a7f760c3ce2e8ed859dad",
".git/objects/1c/6b2df9ae1c1dfcdb1e96f800a830e675817d4f": "a0090a6cb46ff0e5790c206d6ed1d245",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/24/e055623bcb09262fbbd907b8f9d90f2118ceba": "7ffc100a2ab6ca83976f1e0a28f61b73",
".git/objects/29/fb3a5e17adf871fc26fca3d408e509e6c19802": "d4349d51eb4a15c60ddf83b23ee457b0",
".git/objects/2b/8db06459a8b08e034aa9374ad203f6602ca906": "a4c3f8eb7eec164e54dd374bc74dac8b",
".git/objects/2e/321009562016b3c3493b13bb373b984adc01d0": "b5dd34470385094a995ea6688e72b884",
".git/objects/2e/8950693bf86ac5044fea0721529c17f352e209": "30e53e1d965435ca9856f0717e47d0ff",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/63e90f9be34aff3043f9e9494d5f13dd948bc5": "c43be8c74687d820be54960b3376e689",
".git/objects/52/83591b43bff2adc981be347de97517b6e05781": "09cb9b4be73d8b3769b2ebe6b5ae4b02",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/20936bfbf0eb742e4b9245ce28128e93ad9c9f": "2797988884fb6bfec620c354e535c642",
".git/objects/5b/f4ec925497266c03c644cc758fa6f4aceb6056": "8c6c78959fee414515220c2f8c6dd86c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6a/9bc2cd235f11801a2628ed0e281ba6e2b7cf23": "80c954c26a146ce608dd32defafacb28",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/405b94b0fbcdc16ff2802483339cab87cbecbb": "fbf051b6af387ec8775e520f5136d3fd",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/74/797463119e176b0804e846d349a3a561d77655": "826ad2f2580dc9a06809f95e2c153600",
".git/objects/75/6dbc9e0086f428b2694ef7e4be8ce9bb652383": "1f576752a3c96f15752176f6c21f6406",
".git/objects/79/d29628e055436df08862eb656dbaecda9b7e7f": "e652c563b249a9bf39149b06475d8014",
".git/objects/7b/921aa014aa34141602da370c833ab8fb479ffc": "59d458050af86b3d5d21064f5d59a6d5",
".git/objects/7f/7cead523a0c00915d4be28362556f5023531a6": "176201de6d52d3e0e17637ed6517aaaa",
".git/objects/80/c12199782d3422b9845f07acca64e208748f50": "15e040dc5e82ba3ace4abdd3d2ebe1b7",
".git/objects/82/aa75fd80ed0e492f8dad97751c22c14d125071": "23aa9ce1ff8962f07bd0b62005fb25b9",
".git/objects/87/6f9b263b9390c447535e13f3e976f1a6e862e6": "d0307463d956a222b7ef936d29a08403",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c81dee33b19d113565de057b7b5e33e9e77f95": "a98454b6226a0fd01bda5dc232b19726",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/cce8b42dc344b4faa111c021915b6306f4301e": "bbec1d40ccdcb21f3fe1a3d7dbdc3719",
".git/objects/93/0cb1e3c60d3d5c0cb3bf584b75cc36817e42f6": "80ff6dc04e4e4440ca6114ea5025e45e",
".git/objects/9a/7ecd4b69f61e2646f788a8ab9f4b54c3c8ed41": "fb7eca38f1a283ba680d1321fce001fd",
".git/objects/9c/3f21919a06c9628505d12ad195cc30b32fd811": "67763adac191a362d17ac9d0079c1e68",
".git/objects/9e/75170b59ed1bb37c46ce4ed00820de10f63b15": "010d792eb628f0a1f91434f672a35bf5",
".git/objects/9f/d1512c99ae1021ac4cd83862d2ebf438c319ef": "9c43efa4d8c1d96cbc3cbaf02f1385ad",
".git/objects/a0/addfc91d70e9329733e3305c34b9fb25defd8a": "f3fb70bfccc9562ea3502223fd6e3281",
".git/objects/a1/afbf501bb4c4f8d9c0204fb1be24e213617f3a": "7c77c6f42996414f9fea90eb6b748671",
".git/objects/a4/a8cea583d2089607f3a289948a47a950adc021": "e0fc93836098ac12284f907a8c4a4b96",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/e57e89e2e84d9b95f346f432411d469dc3f7b5": "2f2c808fdd4c55cc6b8ad7445948dde6",
".git/objects/a8/1b0629d433357bd1913f80fef18feb70c5a5b1": "5e7edf66a2f3d4d569d7f62200ee65a8",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/af/1bc35c2329f17242c9d077cc62c312005daa04": "54da8652b8d1dbd5155807d8366687d7",
".git/objects/af/8129eef7b26f212a365398ba93591b4b24d489": "5baba66e9248f8c82651ef938dd26d18",
".git/objects/b0/de4a78442e9170350ea3a728c5f13006455453": "da358537046220de9e01fae270bbe0ed",
".git/objects/b2/5be83de08ee0d7ece9d4fbe48b7011c390a116": "a1e70ef8575c1c1b8018f0431c1dfe10",
".git/objects/b5/5c80852774f31117ab4d87641725400c059ce6": "37737395c1ade4383f153565e47c636c",
".git/objects/b5/5e0322b167cd6c8a61335e64e1a7ec5dc9a1ec": "0f52139af863bb8e851a4b9373b8e5ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a375715259d133e7018a2510f933ad97eb508a": "f1fe40344005eba64fdedf3a607ad5e5",
".git/objects/b8/135a8793a09e7f8b4eb162a78d989be20a1c0a": "07f545f2d87c298aa33e3e8104c6e61e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/834387ca1229f2abeefe163d45bb5ce193ad97": "e52edeba94f51bdf2604256516ea50b9",
".git/objects/ba/173217f9a20ecf53fd8141d9411b4ed4acd9b3": "6f94def4bdbab1760d67e684e2274a41",
".git/objects/bf/70aadc211426fd98b93dc2e210b31fa006a3a1": "dd3c22c26d9c38e2a747051c95de621d",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/08d602f0f5cb756bcb516fdcc5aa4467cb3b53": "38f517ec684b17b0906c04773b3f9ff3",
".git/objects/ce/8e002920d863624cd8c7739c46a468233377aa": "2e253b359faa7434cb81b0d3e4c77097",
".git/objects/d2/4a470836bd070afc1d01569719cc2620a87ec3": "3b67b27d4620064153d9cabf7b7ff87a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/193581345f6c97b9df8fa385fda552aae99313": "0700f7159ee42e701d42c6c793f7d386",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/5d587076177a3e01c27a45e13c8d8845ca2307": "2276ce22cec6b050c1b902e76612800f",
".git/objects/de/7e11e075d909f92289d7f5faea975291787282": "8dc0048b6c9a8c9902749bfca6113861",
".git/objects/de/b574012b460cfa758b06793793957ce7540c0e": "c7e9d78a116a96e8e86031e6671ac2ec",
".git/objects/df/a4c46abd89144c6cefc2b8400a01276d0dba34": "f47fbf7d313e5e6115b27e12f2907c2d",
".git/objects/e6/ca7e5b6f72029010c889a46c4c8902d6991768": "18e32ce09c58b25d37466ddfba9d2c1e",
".git/objects/e8/44bd0326b46ec418f86ec6ed5b243cac43d50a": "17189c66a32c51de115ceb27e44ce37a",
".git/objects/e8/b33d121170367520f88f141f106398da016baf": "d0adc55061c36031e9a9b58eef467930",
".git/objects/e8/c38315997080d23eef6d4fcd082c8fc26be22f": "2e179656e8160b3ff0275cfd71ecc964",
".git/objects/e9/6331897367b4b7f850ab70929e1bbebb61a3a0": "f0f9b2e0de62c48624c810eef9928cc2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/c2e749040e71fa661a5bafd1ed54b44d97c1c3": "25f0f1faa9f96add9bbf4e4cfc3eb785",
".git/objects/ea/c5b1d814b08713a31adce2d16036ff36663683": "d164f0b0762ee1808787b65c880ce555",
".git/objects/ea/d843fcbda7b7cafbead00700783a132b750b7a": "ab96606a10cc22062104d735a2680225",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/c694beedfa4491d86578227092e335382eccde": "3d62e54d6ea80841d8967897077a61ac",
".git/objects/f1/8408ca92c411bf2afeb5246410874d9e1b84a6": "8b47d933fd6cab3152bdcbc80d29aee2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/e6c6a8a5ac2dab47e506335e073638b873f784": "06e5e63c7017db8c0ee8156ef2bf9b3a",
".git/objects/f4/f45675164bc6cfb010acda6921b00a7e36888f": "acb8d07918b0f62d2f068dc36007e10c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/605ba66346f308610754fe8a9cbefb815c7aa1": "2d065da59e9c2e520993115385a7fb00",
".git/refs/heads/main": "cdf2d4e4e401a2789f24ea09b1e3b61d",
".git/refs/remotes/origin/main": "cdf2d4e4e401a2789f24ea09b1e3b61d",
"assets/AssetManifest.bin": "eb0eae21d0092fb5a971dbab077881c6",
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
"assets/assets/JAP_SKR_BSC_Katakana%2520words.csv": "fc87a2013e7b95c3bc786528d1a8fbc6",
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
"flutter_bootstrap.js": "f44eecc1468151edccdccb890959e3cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "588eef7e92152dd95914582822b677b0",
"/": "588eef7e92152dd95914582822b677b0",
"main.dart.js": "338c2b1448879a75561b476c355e27a0",
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
