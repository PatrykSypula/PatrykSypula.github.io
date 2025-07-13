'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "40cdc8ea20f615b4295a770bcfbfe54e",
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
".git/index": "3629a29c346b0100ece83d955470c857",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "001999d302f8614ecf0bc7750bc51819",
".git/logs/refs/heads/main": "001999d302f8614ecf0bc7750bc51819",
".git/logs/refs/remotes/origin/main": "0a2403e4ca3f2646f7136a1bd725717b",
".git/objects/01/09289a3f70344d694c24dbc16d318c178aaae3": "b27d875ffad9f37aadaee2247e2e1d89",
".git/objects/02/3f2c3cf8522d2524aea467c51c0fb6f9848a92": "1315064744659c0df0114cbfffabdd17",
".git/objects/02/6cb6bc71db170fceeeed4d28d35e7535567226": "4c42f2dd15721cd5903dce71e12eca83",
".git/objects/07/76bff801ff27abcc1f9f2d51fa7e11916a2a14": "7132c90e032210e4c755c250f85105a1",
".git/objects/08/903ba428ebcbd80950f6a476398f3f7fdee8fb": "c962c889d546f88a66d73ba39ac8d726",
".git/objects/08/c973139755fd1991759c1ed42148b84f8405bb": "7f0fb88b667ebb9b9fd0a6f62cfe4b20",
".git/objects/0e/ee2326b84c1e40dac1ce61d3c05f15b5cc102a": "5ca9814e609dec170e99411c76c8951b",
".git/objects/1c/6b2df9ae1c1dfcdb1e96f800a830e675817d4f": "a0090a6cb46ff0e5790c206d6ed1d245",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/20/822bf370dbf6ffc475862d188dd483420e965d": "f3b0f60a8df0b41b43b68212a6a7b13c",
".git/objects/24/e055623bcb09262fbbd907b8f9d90f2118ceba": "7ffc100a2ab6ca83976f1e0a28f61b73",
".git/objects/2e/8950693bf86ac5044fea0721529c17f352e209": "30e53e1d965435ca9856f0717e47d0ff",
".git/objects/31/a45dd1524e16dd8f4674166b0992b6ab53b88c": "68f00089b9e36f5f0eaf7840d38d5924",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/9eb4244569e3ffc03b0a533f19b419f4c4945d": "e079a9af49662f5d703738fec65c8467",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/78671d77e3fb030f19112120068b8d5316987d": "9123061e502526215bfdc4f3c5b9f2a8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/755de88f93bbcae3c97df4354e72a3cf5f32a9": "a085ea76bd99462d17e26303767a193e",
".git/objects/46/8aa6b9be4fd3591bc33f0f7c53f0aeae1e1267": "454b4274ece43b06cd3960f2895ab8c6",
".git/objects/47/1cad7bc64597120442c6de19fc59c11f18cd43": "1327203bae15079d0b38e0a85d57e06f",
".git/objects/4a/72bb7f9da3050ce9545c744ffa4ef79dc0bbcb": "985ab8b89e8a9279039582fe1bd96982",
".git/objects/51/b869fb8f78d82af127bdef0140ab82b5d939c7": "a8f3505a6986e496b11c0f9654fb83f5",
".git/objects/52/83591b43bff2adc981be347de97517b6e05781": "09cb9b4be73d8b3769b2ebe6b5ae4b02",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/20936bfbf0eb742e4b9245ce28128e93ad9c9f": "2797988884fb6bfec620c354e535c642",
".git/objects/5b/f4ec925497266c03c644cc758fa6f4aceb6056": "8c6c78959fee414515220c2f8c6dd86c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/4b63d08edba7de181f38a6686057d30350576a": "b9a8565deb97a5ca05996d412c54f372",
".git/objects/61/25b73b357526e8f3e16fb37044a88e35ef8b01": "e9e98cd43f0ad70cf6030b3535357d4d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/69cafda5646812882bf73746506e0f89aa7057": "2e47455e9992deea67ec5c7c3ed7bd32",
".git/objects/6d/f74191d36fd529e5661c58e53d55344659980d": "8274c8858cb0d2dea64266f3e3eebca0",
".git/objects/6e/58b55ca20cb1338f0dc25d415b2258509a472e": "ed3fbc33222147ee10c9085c02103f53",
".git/objects/6f/83d2063245afbbcb8226b4a40309467f8b2369": "931a5e8c724e9f36695631def314d2b2",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/74/797463119e176b0804e846d349a3a561d77655": "826ad2f2580dc9a06809f95e2c153600",
".git/objects/7a/07ec844cbe73ec7db3b2b005d1956f34ea31be": "3a5b75b68f9ad95514f9b3020c16a15f",
".git/objects/7a/7102cbf637fd6bb80f756fb37e9b15abe5d7e0": "0e3b6cb4f204642ab2d2a1f4bc9eaaf9",
".git/objects/7b/921aa014aa34141602da370c833ab8fb479ffc": "59d458050af86b3d5d21064f5d59a6d5",
".git/objects/7e/65aa0f53c85356da615e1dbb781ebed75eac06": "176216bc0e6a8f71adecd9c7613fc273",
".git/objects/7e/6dbf9bd61ffdb6302a073f8c04016018f1cfc1": "873ba62e767cfc007448344a27a58a17",
".git/objects/7f/7cead523a0c00915d4be28362556f5023531a6": "176201de6d52d3e0e17637ed6517aaaa",
".git/objects/87/6f9b263b9390c447535e13f3e976f1a6e862e6": "d0307463d956a222b7ef936d29a08403",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/1c2d374ba593d8f3b4cbaca245fdcb6880a547": "5572591ed04d0087bb95cff48e623a00",
".git/objects/8e/1bb0e063a21756206554940d8186b7aff98e61": "65b0379dfc1139d78aa7ee87bdf1dc75",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/cce8b42dc344b4faa111c021915b6306f4301e": "bbec1d40ccdcb21f3fe1a3d7dbdc3719",
".git/objects/9a/7ecd4b69f61e2646f788a8ab9f4b54c3c8ed41": "fb7eca38f1a283ba680d1321fce001fd",
".git/objects/9c/3f21919a06c9628505d12ad195cc30b32fd811": "67763adac191a362d17ac9d0079c1e68",
".git/objects/9d/7f25c10ee2e9694578885acfb64723c4c2a2f5": "565a9e6e4dcecaab6504d5dd557b1b17",
".git/objects/9e/75170b59ed1bb37c46ce4ed00820de10f63b15": "010d792eb628f0a1f91434f672a35bf5",
".git/objects/a0/addfc91d70e9329733e3305c34b9fb25defd8a": "f3fb70bfccc9562ea3502223fd6e3281",
".git/objects/a1/afbf501bb4c4f8d9c0204fb1be24e213617f3a": "7c77c6f42996414f9fea90eb6b748671",
".git/objects/a3/1047663199c0ddd12c4db5814d2d01db2938f6": "24ffee0df1eecdcc0a00ad9999ceea8d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/5735612caf313b7f45cdfa81e9f89d23bc2e79": "812cae589d4d99469b3ba1a9b84fecc4",
".git/objects/af/1bc35c2329f17242c9d077cc62c312005daa04": "54da8652b8d1dbd5155807d8366687d7",
".git/objects/af/8129eef7b26f212a365398ba93591b4b24d489": "5baba66e9248f8c82651ef938dd26d18",
".git/objects/b0/f651cb5b1cbc4299c11033268db5c2911642ff": "6254bf027ac0b389e49ea86be9d9bfa7",
".git/objects/b2/2c7ea258b1aa881a4d17f2d3bb0803625e424b": "37673001191c5f6c1f05935af827f8f4",
".git/objects/b3/d1a3eb2ecbc9cb4a27091cd1ce7018be3b4d48": "44219320e63ba49ed160314565ffe71e",
".git/objects/b5/5c80852774f31117ab4d87641725400c059ce6": "37737395c1ade4383f153565e47c636c",
".git/objects/b7/a375715259d133e7018a2510f933ad97eb508a": "f1fe40344005eba64fdedf3a607ad5e5",
".git/objects/b8/135a8793a09e7f8b4eb162a78d989be20a1c0a": "07f545f2d87c298aa33e3e8104c6e61e",
".git/objects/b9/834387ca1229f2abeefe163d45bb5ce193ad97": "e52edeba94f51bdf2604256516ea50b9",
".git/objects/bf/70aadc211426fd98b93dc2e210b31fa006a3a1": "dd3c22c26d9c38e2a747051c95de621d",
".git/objects/c0/9adf45554c972409b397bb9a4d07b8c5dafb4a": "00a707877179995b9f8b1acc23014c65",
".git/objects/c1/35f43443510944f0dc913cf6230afc2aa0bb95": "6ad4c9852fec0eeae655ce0b017270cb",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/8e002920d863624cd8c7739c46a468233377aa": "2e253b359faa7434cb81b0d3e4c77097",
".git/objects/d2/3ac2467b725fcf1f3783ab5554e7bdeb5bfc72": "7071785e7a4ac9499cb18002740dd8f1",
".git/objects/d2/4a470836bd070afc1d01569719cc2620a87ec3": "3b67b27d4620064153d9cabf7b7ff87a",
".git/objects/d3/950b6f88b54ee2c31b3d81c77ed79c9bfab539": "1dace5f6a17cac8261655600c4b57803",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/de4a37558ceeef13c3fc1446c267639f9641f9": "430c0ec1b13ccf8e48b5ca44ae5579a8",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/193581345f6c97b9df8fa385fda552aae99313": "0700f7159ee42e701d42c6c793f7d386",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/5d587076177a3e01c27a45e13c8d8845ca2307": "2276ce22cec6b050c1b902e76612800f",
".git/objects/dc/e086c3b3648b52a7f62e3b1ecf2dfd92b8f160": "fce4027646dc39c7528b089d1ac02eb3",
".git/objects/de/33e504916df3945eb3c88e01b54f96ebd111ea": "49d187c76f4046beceee2b1818c83ccf",
".git/objects/de/7e11e075d909f92289d7f5faea975291787282": "8dc0048b6c9a8c9902749bfca6113861",
".git/objects/de/b574012b460cfa758b06793793957ce7540c0e": "c7e9d78a116a96e8e86031e6671ac2ec",
".git/objects/e0/5055873fc04218748b2c1651df3d77b58969a2": "63b816dcf4ee0e1de5b5f6c907587a8f",
".git/objects/e5/df86eef794f1a03d2988757dd03b158e1324f3": "5f4d23b5653b86934146239d49549181",
".git/objects/e6/ca7e5b6f72029010c889a46c4c8902d6991768": "18e32ce09c58b25d37466ddfba9d2c1e",
".git/objects/e9/6331897367b4b7f850ab70929e1bbebb61a3a0": "f0f9b2e0de62c48624c810eef9928cc2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/d86bbe0dff6111d8d0cc6a85b107918a6f63df": "c27eea443881cb72746cbc54ff2911da",
".git/objects/ea/787e305cf788b92e2999ffa8774e01a55e6d51": "8a7e51c5ab2213846743e6e0d3f1498a",
".git/objects/ea/c5b1d814b08713a31adce2d16036ff36663683": "d164f0b0762ee1808787b65c880ce555",
".git/objects/ea/d843fcbda7b7cafbead00700783a132b750b7a": "ab96606a10cc22062104d735a2680225",
".git/objects/ea/f94d9f7730186d2a8076c466278d281acf34ad": "8137760fd5c70669c88a6b7f07b02ae8",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/bcbb33e2481cc427e61f7202a36cce1b6cd2b5": "9f389a1674d3b4692a78cb6f188c4098",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/c694beedfa4491d86578227092e335382eccde": "3d62e54d6ea80841d8967897077a61ac",
".git/objects/f1/8408ca92c411bf2afeb5246410874d9e1b84a6": "8b47d933fd6cab3152bdcbc80d29aee2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/d4895fb88d2ec3e0cb0b1d0e48ce0be84c58d3": "3e9e429ba499138ef55c5cd63df6d939",
".git/objects/f4/e6c6a8a5ac2dab47e506335e073638b873f784": "06e5e63c7017db8c0ee8156ef2bf9b3a",
".git/objects/f4/f45675164bc6cfb010acda6921b00a7e36888f": "acb8d07918b0f62d2f068dc36007e10c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/7189497f51ea5f372ebdf2f1c1038462ebcfd2": "2aea39fcc13726eca765d419a7ac8e47",
".git/objects/fb/f3647235745516bc0f463a84b871427d925f9c": "fb3203c3d9b15f62b8c9e73c3c5a8982",
".git/objects/fe/605ba66346f308610754fe8a9cbefb815c7aa1": "2d065da59e9c2e520993115385a7fb00",
".git/refs/heads/main": "f72a0e46056328f48a5eaca2d62d4798",
".git/refs/remotes/origin/main": "f72a0e46056328f48a5eaca2d62d4798",
"assets/AssetManifest.bin": "3c39264632437e6bca7c44fd4d9976f9",
"assets/AssetManifest.bin.json": "f4e6f457f23f38b0a68029396e7e8433",
"assets/AssetManifest.json": "a337ec2244fdf31afa7d990c171133d4",
"assets/assets/english/Random/1-100.csv": "bd6a4cc9750ad0fe0c9a742bf2d1736d",
"assets/assets/english/Random/1001-1100.csv": "5d7460ea8f04c6a6812b2e6f87f3ba2d",
"assets/assets/english/Random/101-200.csv": "bcb69162d28f379bddd916643f65af1e",
"assets/assets/english/Random/1101-1200.csv": "17c2873841ce42fefcc486fb23f02991",
"assets/assets/english/Random/1201-1300.csv": "347d314ce9d6140d117135cd8df120e0",
"assets/assets/english/Random/1301-1400.csv": "ddf85077fbff8208a1e21ce3b245984f",
"assets/assets/english/Random/1401-1500.csv": "deee286549b53dc4fd9cbb0a142d149f",
"assets/assets/english/Random/1501-1600.csv": "ac5be37d1d44e33e73f27f352631e9cb",
"assets/assets/english/Random/1601-1700.csv": "ae2c5152ac3fd5c395dd6fd253393e96",
"assets/assets/english/Random/201-300.csv": "54e23c593d7c91ddfe66344784554877",
"assets/assets/english/Random/301-400.csv": "064391bf756c58a8b74ed2333eeab5f7",
"assets/assets/english/Random/401-500.csv": "e053ff7fe9f0a3bafe5ae0b82991729a",
"assets/assets/english/Random/501-600.csv": "3bc9aab972f213a108832730caf2b883",
"assets/assets/english/Random/601-700.csv": "2260df70509c96ea318f211cf4d12849",
"assets/assets/english/Random/701-800.csv": "514e09ebc4018c8e9b8cb0b3925e1c18",
"assets/assets/english/Random/801-900.csv": "13fde74026980500683ea2558b0cf409",
"assets/assets/english/Random/901-1000.csv": "c2eaf869b5784020adb782e1f86f014b",
"assets/assets/japanese/Mine/Basic/Academic%2520subjects%2520and%2520others.csv": "3281dcad5390be28e14a55fd6090829b",
"assets/assets/japanese/Mine/Basic/Countries.csv": "d342c38fa138c161e4d2282f2187f0fe",
"assets/assets/japanese/Mine/Basic/Daily%2520Expressions.csv": "b0b004d7434891c1911c421a7ed0863d",
"assets/assets/japanese/Mine/Basic/Family.csv": "41afb67b64fd85b44096fb15f220b9d0",
"assets/assets/japanese/Mine/Basic/Hiragana%2520ya,%2520yu,%2520yo.csv": "577e7539e8de21530b685730e7836619",
"assets/assets/japanese/Mine/Basic/Hiragana.csv": "c9f41020397ebef3cbfb0d401052b657",
"assets/assets/japanese/Mine/Basic/Hobby.csv": "2a8ce0bd90c8c17edc6b16b3a9df109a",
"assets/assets/japanese/Mine/Basic/Japan%2520Phrases.csv": "4bea284e4f259ea3ba99562c452ddd84",
"assets/assets/japanese/Mine/Basic/Jobs.csv": "893b6f24dbe36251c6ede3e1e4c80e3b",
"assets/assets/japanese/Mine/Basic/Katakana%2520ya,%2520yu,%2520yo.csv": "4670dab39b7b607ef4e2b143f86e83ff",
"assets/assets/japanese/Mine/Basic/Katakana.csv": "1dcc7843321764a7584ccc77fc7ee2b9",
"assets/assets/japanese/Mine/Basic/Personal%2520pronouns.csv": "5df0a84b36a87060e7809adaec206a4f",
"assets/assets/japanese/Mine/Basic/Time.csv": "050823b4b7e9b4c58c58d14a6d9628c3",
"assets/assets/japanese/Mine/Kanji/N5%2520-%2520Part%25201.csv": "86d3e875ed58df2629786bc0d18573cd",
"assets/assets/japanese/Mine/Kanji/N5%2520-%2520Part%25202.csv": "8faa061ca71a574b68bac4a2347cffe1",
"assets/assets/japanese/Mine/Words/Adjectives%252050.csv": "6e88ed6b4f386f6eee867fe81a79b960",
"assets/assets/japanese/Mine/Words/Nouns%252050.csv": "ece4e4aa17bdd99d76ba3ffaec1b7442",
"assets/assets/japanese/Mine/Words/Verbs%252050.csv": "bbfae28900176cc3acca2aae4559cbd1",
"assets/assets/japanese/Sakura/Basic/Age%2520and%2520phone%2520number.csv": "5669ccf56972652c6582ffabf85c2b67",
"assets/assets/japanese/Sakura/Basic/Classroom%2520words.csv": "2076b84251e01371f7126592fb086d89",
"assets/assets/japanese/Sakura/Basic/Countries.csv": "661af392a7efd0a8b9ecb13b3a43bd5a",
"assets/assets/japanese/Sakura/Basic/Family.csv": "3204148983021a1c839c098d97cbf6b1",
"assets/assets/japanese/Sakura/Basic/Frequency.csv": "eb8316e92d8e4f0ed2190ac2d6423eaa",
"assets/assets/japanese/Sakura/Basic/Greetings.csv": "9fe3c2c91084b6018415f40c733abaf7",
"assets/assets/japanese/Sakura/Basic/Katakana.csv": "5203fee8d877555df3ec98a74c382580",
"assets/assets/japanese/Sakura/Basic/Like.csv": "2d64199481f28f3a25e7c704c089e839",
"assets/assets/japanese/Sakura/Basic/Numbers.csv": "311623c97c86e8381df66175925e44cc",
"assets/assets/japanese/Sakura/Basic/Past%2520and%2520week%2520days.csv": "cf0d9053f853ed5a9cc6f47d146c4bf7",
"assets/assets/japanese/Sakura/Basic/Self%2520introduction.csv": "a03f2e133940b1c38b2a47c82f31d47e",
"assets/assets/japanese/Sakura/Basic/Someone's.csv": "270f4d6ef64f69ba78cecad05a5c6798",
"assets/assets/japanese/Sakura/Basic/This%2520is,%2520too.csv": "bf0e508b4555ab875940c7dbb310c2f2",
"assets/assets/japanese/Sakura/Basic/Time%2520period.csv": "5d421aeb13afe0c7de92438b3c20e8be",
"assets/assets/japanese/Sakura/Basic/Time.csv": "7379ed4bde78b6945ebfea75e32fc0a2",
"assets/assets/japanese/Sakura/Basic/To%2520do%2520something.csv": "a6f3766896e7a16fd6bfcaaf44499c6d",
"assets/assets/japanese/Sakura/Basic/Verb%2520combinations.csv": "847d2870fabea78652522eb5da1d130e",
"assets/assets/japanese/Sakura/Kanji/Kanji.csv": "286d6a6570a6d3c5b2eada7d51204584",
"assets/assets/japanese/Sakura/Words/Animals.csv": "19874525554c73d74a8f170e37629fc5",
"assets/assets/japanese/Sakura/Words/Fruits.csv": "25d3dede43c337da893fa6c7e9dc08da",
"assets/assets/japanese/Sakura/Words/Hiragana%2520words%25202.csv": "e114463c2ed9b7808315e7b8ce5d0f27",
"assets/assets/japanese/Sakura/Words/Hiragana%2520words.csv": "a9ef93a02600d3049b7ebc67284615c7",
"assets/assets/japanese/Sakura/Words/Katakana%2520words.csv": "8ddd06eea6d723e81b98dd55d5adfc32",
"assets/assets/japanese/Sakura/Words/Sports.csv": "4fa40e450cb2f7f72511187729493e50",
"assets/assets/japanese/Sakura/Words/Vegetables.csv": "37a70bb2cd2cbd4dea48f2ad310373e2",
"assets/assets/japanese/Sakura/Words/Verbs.csv": "e605d26a003110e17060c19f9bcce8ea",
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
"favicon.png": "b50c634fd2ee983ac520e54ba328154e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e0a7818b8d4a6435a3205294ea305b71",
"icons/Icon-192.png": "7af226e698e239af59ae57ccf5e6310f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "7af226e698e239af59ae57ccf5e6310f",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "588eef7e92152dd95914582822b677b0",
"/": "588eef7e92152dd95914582822b677b0",
"main.dart.js": "5acd4be5bf917cff7ee8284db62d661e",
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
