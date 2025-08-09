'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8f898b22d33b4ae6b360ec4725a2d646",
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
".git/index": "d59efa0987f36273eeaea98f90391d20",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "244a38d37361104e57cebf67198b70b2",
".git/logs/refs/heads/main": "244a38d37361104e57cebf67198b70b2",
".git/logs/refs/remotes/origin/main": "dd94085fb74f43ca945f12de1500c52d",
".git/objects/01/09289a3f70344d694c24dbc16d318c178aaae3": "b27d875ffad9f37aadaee2247e2e1d89",
".git/objects/01/b3c0f01e227359842951539f78fbfe4ad75419": "a27acb56b2eaa4c400fe5378b96db518",
".git/objects/02/3f2c3cf8522d2524aea467c51c0fb6f9848a92": "1315064744659c0df0114cbfffabdd17",
".git/objects/02/6cb6bc71db170fceeeed4d28d35e7535567226": "4c42f2dd15721cd5903dce71e12eca83",
".git/objects/03/c158548dcac14ab9df24ef93e6d4f1df7e3beb": "e9025de582589706d8ab21706d7d9d1d",
".git/objects/07/04b41db93a7ee0063d5cdf8547b7b39b5c234b": "58f76116fc8cfc71167a7f9bcf023126",
".git/objects/07/76bff801ff27abcc1f9f2d51fa7e11916a2a14": "7132c90e032210e4c755c250f85105a1",
".git/objects/08/426215c362b2ceb9eafe49b139ea41a2f7ff9c": "96cd9c0b35a514f8a8500af6b0b4aad6",
".git/objects/08/903ba428ebcbd80950f6a476398f3f7fdee8fb": "c962c889d546f88a66d73ba39ac8d726",
".git/objects/08/c973139755fd1991759c1ed42148b84f8405bb": "7f0fb88b667ebb9b9fd0a6f62cfe4b20",
".git/objects/0e/ab4bc106ed8a74b2d7991b90e486d1b6047822": "47aedb1093580f650ebc7a32de11d5be",
".git/objects/0e/ee2326b84c1e40dac1ce61d3c05f15b5cc102a": "5ca9814e609dec170e99411c76c8951b",
".git/objects/12/e3e82110b638aa7726639e921e93083cf4ae94": "5d62869cd0583c451c23fe4c3b492472",
".git/objects/12/ea7cf3388c06ebdb96c440f4c9af9694710a73": "7155911d7692ea8a4f765d058a1aac90",
".git/objects/1b/212fa567b4537ecf115f23ddf69e26929d6ccc": "c7313e7f17f2f84d87bddcc79909bb01",
".git/objects/1c/6b2df9ae1c1dfcdb1e96f800a830e675817d4f": "a0090a6cb46ff0e5790c206d6ed1d245",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1e/59802a3a031f1c32996309bbfa5a9d70dc7451": "536d2f08e6911d1150d4e7641e30d09b",
".git/objects/1f/0f876ab7171f1ccd351215e4cd819dbb40012d": "3c6ece7c358cda997f66657cbffd8794",
".git/objects/20/822bf370dbf6ffc475862d188dd483420e965d": "f3b0f60a8df0b41b43b68212a6a7b13c",
".git/objects/20/bac910233e96141d7be027bcd195bcc886b13f": "872150477e95f10c2c974721935d983e",
".git/objects/21/c9240c6abf144f9a10824d78709f3ba5840de5": "d20d3c4ea77ae52db4e44db3b7c50269",
".git/objects/23/91cc8296426e2c8232545114d82e69cc1e2520": "e709f804e051ef3544acc9f8a0e64743",
".git/objects/24/e055623bcb09262fbbd907b8f9d90f2118ceba": "7ffc100a2ab6ca83976f1e0a28f61b73",
".git/objects/25/ef372d6cc5a7fbb52b11fcc83f651df503ef88": "da3b2d10ac2dd29427b77b02d3c389c1",
".git/objects/26/5becd41014701f67b894d8fe2e1162e1556e30": "223b66f5eab25e25811b93a65b11b88e",
".git/objects/26/5d603794c97afa69b34c9f4118670fa858ee05": "0064fd80a7bb2fd437844d3405295807",
".git/objects/27/300bd2ecca0f935dbe12ffe32c533acfa443d1": "c7f12244edbfd10530cb3ca3ad36e767",
".git/objects/2b/4116ad1e73d21cdb5e819d497b9a21e4d0815c": "fec0af4941a9eaf2172824e6acfc3483",
".git/objects/2e/8950693bf86ac5044fea0721529c17f352e209": "30e53e1d965435ca9856f0717e47d0ff",
".git/objects/2e/941b5d99d896ca36633bf1059d7ce4bfa1c2b5": "4efa1a28579f3d7dbaba91c2ab8e4dcb",
".git/objects/2f/6a0f3b188bba127d9adf0fd0525969543f05af": "e5f1d6c26a579b1cdf1295a7b9022c51",
".git/objects/30/a7ccd230ff295e1f983731516a41aed9a6cc68": "a115c8cf0d3ba9283008bf176634d031",
".git/objects/30/da8d229597e2ac9642727fd2287b973f8a45ac": "e7c4219f7573cf1aaeaee4c10cb91944",
".git/objects/31/a45dd1524e16dd8f4674166b0992b6ab53b88c": "68f00089b9e36f5f0eaf7840d38d5924",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/0a7ff2f4678bcb4fb186d87b92b1040822b509": "a2bc209d03c20ec08cb21f44221e810d",
".git/objects/3a/9eb4244569e3ffc03b0a533f19b419f4c4945d": "e079a9af49662f5d703738fec65c8467",
".git/objects/3b/a09be4849436bc218fca060fe9771a1c73eda2": "d326a6b39305d2c76a925efa9c1c7818",
".git/objects/3d/7f6a583707e087a56257af3dd35402c718b403": "7a3375c1637901893bff4545fe191a6a",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3e/fea56027e3753b85641f91d93b2693949c2790": "bbffb2223626c8ead50b0f3ec15a5ae7",
".git/objects/40/0b712b0912566edad941dd08eccc8ffc205ad7": "7d447bb20f984b0353afbba6fbf191a8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/78671d77e3fb030f19112120068b8d5316987d": "9123061e502526215bfdc4f3c5b9f2a8",
".git/objects/46/0b7a0c9224dcc8f60800d833b9033b5324c5bd": "d39aad1d152d0472ae2ed23792b203af",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/755de88f93bbcae3c97df4354e72a3cf5f32a9": "a085ea76bd99462d17e26303767a193e",
".git/objects/46/8aa6b9be4fd3591bc33f0f7c53f0aeae1e1267": "454b4274ece43b06cd3960f2895ab8c6",
".git/objects/47/00a2c5f7bf025f31d78e1457018b0db04ce843": "e24b5c3bae762c3f5d3e0644a842c071",
".git/objects/47/01c38570f95ede7b2d74cefa4462695896377a": "848b631fed3ba09063f5260da53cedb2",
".git/objects/47/1cad7bc64597120442c6de19fc59c11f18cd43": "1327203bae15079d0b38e0a85d57e06f",
".git/objects/47/542a89d404f71c105d04b2af5c9cb308df124c": "99782ec8ab96d4ab81598b5e152dd985",
".git/objects/48/2f64526a3948d05725f47e60ed6153ec03350f": "7c3250741bb79018f22e342f48d40e98",
".git/objects/4a/72bb7f9da3050ce9545c744ffa4ef79dc0bbcb": "985ab8b89e8a9279039582fe1bd96982",
".git/objects/4c/6c1bd820d2c0255bd58b14a0399622fe4af280": "963a150c7673b73d6634a9c9d137ff53",
".git/objects/4d/e76e65d7d6f7fd23018a8fe1283484570d5cd2": "d1b4495d23f9af48410b1c0bcbc1d1ce",
".git/objects/4f/bef2250af13b0ef92d50ef706d1bdc167361a0": "7909711d087efcb34bc81a893772a328",
".git/objects/51/b869fb8f78d82af127bdef0140ab82b5d939c7": "a8f3505a6986e496b11c0f9654fb83f5",
".git/objects/52/83591b43bff2adc981be347de97517b6e05781": "09cb9b4be73d8b3769b2ebe6b5ae4b02",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/62d27fd40306c6ba2e6e1531b35313311bbbaa": "5094a103a3ee5a6274ad67ed2a751f58",
".git/objects/55/00019a1337f489584f668e16b2f886435a477b": "d0133374a9688a4a8f7d78925955b4dc",
".git/objects/55/32bc86b7ea8f32fe4cbe7338454474a434ac4a": "88de6bcadaa34c7933b796b307a66de1",
".git/objects/56/26d5ce31306e04408723dc5f72d4be585591e5": "a7ef2e5b3f89a59d94b3dd2aa9f6ef93",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/20936bfbf0eb742e4b9245ce28128e93ad9c9f": "2797988884fb6bfec620c354e535c642",
".git/objects/58/b5dce4cc4fbd8a436bec3dd976da7de5641ae3": "667d00b841122993214a11cbca84a0ad",
".git/objects/5a/bae3a4b0abfd25642066d2163b22384b7a22d5": "cfce443acfbd48ff0f729787d7ea1ebc",
".git/objects/5b/79c54974d0939d65ddfe659fb7684cadc4b7f3": "8275d3ca527a07bd5e7222d34b9c28b0",
".git/objects/5b/f4ec925497266c03c644cc758fa6f4aceb6056": "8c6c78959fee414515220c2f8c6dd86c",
".git/objects/5c/2533568f62b83e2d22450c644a6331260daa14": "15ed0a0833a512af92d2ad8880fead41",
".git/objects/5c/3d40671f42ad5562b5e77ecc8a3ea489b82ad4": "9804985164c7acef7ba19c05b121fab4",
".git/objects/5e/802aa7f33885b3c99dba0142c97a3b128224ae": "717f33c6db799d0652eb1e006109249f",
".git/objects/5f/74d12f4e0069b4ea4665626b4117b85dea7ca2": "ac40f02e99aa2faaebb889283ca4c17b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/4b63d08edba7de181f38a6686057d30350576a": "b9a8565deb97a5ca05996d412c54f372",
".git/objects/61/25b73b357526e8f3e16fb37044a88e35ef8b01": "e9e98cd43f0ad70cf6030b3535357d4d",
".git/objects/61/3142cd4cab2e9c905aa9c9315777284d8172e8": "c2ac8b414de5b7701eeb4af696fe1e52",
".git/objects/61/9ea8454353c4847cd257d58fca261799569010": "bc7f3017647be7f662fb235f7841edfe",
".git/objects/61/ba16d4f862ddfc96e16043e406caa9df35e149": "12d916c021f7cc07d1fa1fd296f848a3",
".git/objects/61/e596791da431dc62936373be0f7979eeea551e": "8e1367f9bbf0512ecc0300d08619bb0c",
".git/objects/63/767c6b06f2dd5e3f6431784059cfa3bc548b86": "d9f492fef8674142c3128263b49bc019",
".git/objects/63/f56b9124229e9dc92e1121624deb9e0b4b3b61": "4ff8dbf79d3dece2a296801c77752b13",
".git/objects/64/f5453945693669a13343926a3c3a505a7bee90": "2f1b49a9eb6deb108ec363934281f9c0",
".git/objects/67/480e8c489d128d78119d03f2ec589cf01e1178": "9a420a37d07ca00ce93373d4c5544254",
".git/objects/67/743758729305b6ddec7a4431d407da2eda3a04": "6f718346b7a216db892c6bf5ea5efc00",
".git/objects/69/02af4d7620878045ced9c6e534662de8c6d510": "e7f0b9b533e659a69a38306c3e8b0b32",
".git/objects/6a/b4f2854c9d3d21ce4322aca4370a82d9934eb4": "8c0280e52a65ed088fa72230d6f9faac",
".git/objects/6b/87323d4c63a918cef78a2860c6b456c48787e5": "bfbc0821bbf3b0a1b1595e342b466f55",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/69cafda5646812882bf73746506e0f89aa7057": "2e47455e9992deea67ec5c7c3ed7bd32",
".git/objects/6d/f74191d36fd529e5661c58e53d55344659980d": "8274c8858cb0d2dea64266f3e3eebca0",
".git/objects/6e/58b55ca20cb1338f0dc25d415b2258509a472e": "ed3fbc33222147ee10c9085c02103f53",
".git/objects/6f/83d2063245afbbcb8226b4a40309467f8b2369": "931a5e8c724e9f36695631def314d2b2",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/baa00242370964aedfb4710c9b7e1006a4bcd1": "f502f1284dfcd55b4063300453769539",
".git/objects/74/797463119e176b0804e846d349a3a561d77655": "826ad2f2580dc9a06809f95e2c153600",
".git/objects/75/f43996353e1f8452b6004c1bee1395d35b5545": "42b040b7e4a807a9730ba88f08727b63",
".git/objects/76/bfb18d21fed51569e1c594a1e5bb8576799286": "b14de4635bb84ad394d9de5e47342bde",
".git/objects/77/50bc26f9aa024963d6df5bc90b5557cdce4a8a": "2b1a4755d7b0c54c869df4590f94eb04",
".git/objects/7a/07ec844cbe73ec7db3b2b005d1956f34ea31be": "3a5b75b68f9ad95514f9b3020c16a15f",
".git/objects/7a/4f6e4246391fb0c3c660a7ae9938af1fb75527": "52e85ea06f215340b3ee82544ec93aa9",
".git/objects/7a/7102cbf637fd6bb80f756fb37e9b15abe5d7e0": "0e3b6cb4f204642ab2d2a1f4bc9eaaf9",
".git/objects/7a/91d6514e47769dfffbfa7e06962fa2694855df": "a9b31d1ddb785cfb380f8a3ddcd793df",
".git/objects/7a/e022539831cbd1f7e4d116c1a4c6709ca75d0e": "69253a1c7675709b6476788563a5e1d7",
".git/objects/7b/921aa014aa34141602da370c833ab8fb479ffc": "59d458050af86b3d5d21064f5d59a6d5",
".git/objects/7b/bd61a41a3b02c1ea1bd1816e09bb771ed63b81": "14056af15cb9896841480e92a2378456",
".git/objects/7e/223ae67f0076865f537a71490edea96e2b3d05": "cef2c599e667ec76d4f3b931a0c2e1f8",
".git/objects/7e/3f93141719ec75544461c60466bc5540c632c7": "a42d5bfa27fc2d35ed693c94d49c5c63",
".git/objects/7e/65aa0f53c85356da615e1dbb781ebed75eac06": "176216bc0e6a8f71adecd9c7613fc273",
".git/objects/7e/6dbf9bd61ffdb6302a073f8c04016018f1cfc1": "873ba62e767cfc007448344a27a58a17",
".git/objects/7f/7cead523a0c00915d4be28362556f5023531a6": "176201de6d52d3e0e17637ed6517aaaa",
".git/objects/7f/980697fb4873622488210edba3354cc25fc64b": "7049436930443a4d970e8da0cb043514",
".git/objects/87/6f9b263b9390c447535e13f3e976f1a6e862e6": "d0307463d956a222b7ef936d29a08403",
".git/objects/87/dd57928ed51f2cf381df72f8e9cf06d1083a0b": "3ced5dea30d419b8d65f594ecbb1d5f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5f3a5be8bd10590f9168345ccca7a32e515616": "f0620bc6997d446fc12838457263d784",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa7ab8c3e7b5abe4eb68119b1aa95ec2e520e2": "87a2ffc796f79e50072eac0ec6d2f983",
".git/objects/8c/1c2d374ba593d8f3b4cbaca245fdcb6880a547": "5572591ed04d0087bb95cff48e623a00",
".git/objects/8d/7f32fbc7dd0afee52676304d01789907f764c8": "f95f15e4ed3134f7449b2bed61aa377c",
".git/objects/8e/1bb0e063a21756206554940d8186b7aff98e61": "65b0379dfc1139d78aa7ee87bdf1dc75",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/d2d16a37fc5051bea4245bd97be374a9f3e367": "f0aeaec28412396a5975a0fae31c8fe7",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/cce8b42dc344b4faa111c021915b6306f4301e": "bbec1d40ccdcb21f3fe1a3d7dbdc3719",
".git/objects/94/4eef928446e4593c6131a02f15dc992f3e5ed7": "93bf4b4d3d9be6e99a49c2d40bc753cc",
".git/objects/94/9da365b10e5d6a1ef826ccc225c0d6f749bc2d": "3aab5a0c0d4ecae7467d683b097cae99",
".git/objects/94/a5bd6c59800f4cf68e6e2a8f14930c588b87b2": "f1c316c14f1be306a32bc48f4f6bcf83",
".git/objects/95/3ab5b18bac5a3372358a7e5016d4c7fe0a9aa2": "d589f4f532738b03df463a23f80aca01",
".git/objects/98/285b0140b3748de69a2de392cac7aaf6f12df2": "a24fadcc83169830c011bbddacd3470d",
".git/objects/9a/7ecd4b69f61e2646f788a8ab9f4b54c3c8ed41": "fb7eca38f1a283ba680d1321fce001fd",
".git/objects/9b/94aca06d71d6968e196c07c7a72093969a289f": "e453f97c4dd68fd07fe410cf5c4d2f8e",
".git/objects/9c/3f21919a06c9628505d12ad195cc30b32fd811": "67763adac191a362d17ac9d0079c1e68",
".git/objects/9d/7f25c10ee2e9694578885acfb64723c4c2a2f5": "565a9e6e4dcecaab6504d5dd557b1b17",
".git/objects/9d/be61eeb81996e05d04bfebcd9d9581b27e7558": "12fe17ccd6073a2c2866e4160c9d21eb",
".git/objects/9e/75170b59ed1bb37c46ce4ed00820de10f63b15": "010d792eb628f0a1f91434f672a35bf5",
".git/objects/a0/a7c0094cc7ba979076204d7f71be056b121e8b": "884404f5c8b53af63d403e27261b41e3",
".git/objects/a0/addfc91d70e9329733e3305c34b9fb25defd8a": "f3fb70bfccc9562ea3502223fd6e3281",
".git/objects/a1/afbf501bb4c4f8d9c0204fb1be24e213617f3a": "7c77c6f42996414f9fea90eb6b748671",
".git/objects/a3/1047663199c0ddd12c4db5814d2d01db2938f6": "24ffee0df1eecdcc0a00ad9999ceea8d",
".git/objects/a3/6376e7cadac09ddd4dcfe5f3b9eae5e2c1c928": "d84f429961100236c40a04e98bf57e8b",
".git/objects/a5/531a18cbe8c6688246977e406b232cb5f1f658": "0d0d8cc5989d3327cd04cef0d14b2b3d",
".git/objects/a5/c0a2c46525eb11c998e2b82f2db290725b1b2f": "205667140fc66b6b4bedd7b8f4c4e468",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/320d62ea86b21243cc1e2c44bd2b9401e6dd3a": "16126276ea0eb9a01fd47ee31ab69324",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/c5bb4b144297b1763788ce82b2dd1ca08a57e9": "1d1fccfb190213ec0f8ff2c80c4dc8ac",
".git/objects/a9/f27866716d4139f8f71f7be08b1baa4b985a29": "1db8054705ebd134d75d4035e94a7ef2",
".git/objects/ac/6afbbaa6d40b9abb8dfbe4a3b0648d798fbd34": "edff59982cf5db6c10b0c13852c861aa",
".git/objects/ae/5735612caf313b7f45cdfa81e9f89d23bc2e79": "812cae589d4d99469b3ba1a9b84fecc4",
".git/objects/ae/73c00657e6a2a363a4a4269b034538ac62be8d": "a2ff301574ff1bc07d517e5fea333a1f",
".git/objects/af/1bc35c2329f17242c9d077cc62c312005daa04": "54da8652b8d1dbd5155807d8366687d7",
".git/objects/af/8129eef7b26f212a365398ba93591b4b24d489": "5baba66e9248f8c82651ef938dd26d18",
".git/objects/af/bdca7563543f7db5a1d25537d24c943cec13ed": "b187d3ddd97c7a9ad8a1e2e0867922f7",
".git/objects/b0/f651cb5b1cbc4299c11033268db5c2911642ff": "6254bf027ac0b389e49ea86be9d9bfa7",
".git/objects/b2/2c7ea258b1aa881a4d17f2d3bb0803625e424b": "37673001191c5f6c1f05935af827f8f4",
".git/objects/b3/9cbf2771ef64d509b2a26c4a7af76367ddbcca": "2adba8675697a671ccd8ce801159f2b0",
".git/objects/b3/d1a3eb2ecbc9cb4a27091cd1ce7018be3b4d48": "44219320e63ba49ed160314565ffe71e",
".git/objects/b5/5c80852774f31117ab4d87641725400c059ce6": "37737395c1ade4383f153565e47c636c",
".git/objects/b7/a375715259d133e7018a2510f933ad97eb508a": "f1fe40344005eba64fdedf3a607ad5e5",
".git/objects/b8/135a8793a09e7f8b4eb162a78d989be20a1c0a": "07f545f2d87c298aa33e3e8104c6e61e",
".git/objects/b9/834387ca1229f2abeefe163d45bb5ce193ad97": "e52edeba94f51bdf2604256516ea50b9",
".git/objects/ba/ac7e0c96d1c9c620ce0db023a441c1d253739b": "aefb78ccfa89bf6825e84e64799c7049",
".git/objects/bc/951780d09c22c8f1f3acc243b343e6ec3f31cf": "0af84ab4ab0737eff960ebca22dd556e",
".git/objects/be/4fd8a9d758d2a384c0b37c57297c5a46926211": "692f85220815069277412e72a8a5ff91",
".git/objects/bf/70aadc211426fd98b93dc2e210b31fa006a3a1": "dd3c22c26d9c38e2a747051c95de621d",
".git/objects/c0/9adf45554c972409b397bb9a4d07b8c5dafb4a": "00a707877179995b9f8b1acc23014c65",
".git/objects/c1/35f43443510944f0dc913cf6230afc2aa0bb95": "6ad4c9852fec0eeae655ce0b017270cb",
".git/objects/c3/bde9f93a3559e68d7326bcbaaecbc3bae6332e": "8f7e8c0ddfc5d29e7b6d42795868ddbc",
".git/objects/c5/6d72995dd50b0a6f77779dffc5899e3fed208d": "45ee51330960e53ef1fedbd59710c4c6",
".git/objects/c8/da0d97af9c0690d2e1aca3cf1a4a24910aef50": "891e9c88870bab373c8ffa23d30916c4",
".git/objects/ca/de4627d95f2f7d33b52645e49dac2e5a528386": "a588ffdf3fe8a57f1019773ccdd84c97",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/8e002920d863624cd8c7739c46a468233377aa": "2e253b359faa7434cb81b0d3e4c77097",
".git/objects/d2/3ac2467b725fcf1f3783ab5554e7bdeb5bfc72": "7071785e7a4ac9499cb18002740dd8f1",
".git/objects/d2/4a470836bd070afc1d01569719cc2620a87ec3": "3b67b27d4620064153d9cabf7b7ff87a",
".git/objects/d2/f6c17784a9844718dce7c70e486a433b470522": "e83141ccb466e19177e6f3637470922d",
".git/objects/d3/950b6f88b54ee2c31b3d81c77ed79c9bfab539": "1dace5f6a17cac8261655600c4b57803",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/991a5b03fb0adcf509553f67e6761b0eff61d7": "36b10a4b01fc3e5cc92fa45a180696af",
".git/objects/d6/8beb91a255b72cda255647a29e1e7ac000e9f6": "4feabe16fd058cd0bb7ee05657d74b5c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/de4a37558ceeef13c3fc1446c267639f9641f9": "430c0ec1b13ccf8e48b5ca44ae5579a8",
".git/objects/d6/f091aaefb5a2885f889b47aa8188aa15c969bb": "21537487668689358e5e46b299ad42fc",
".git/objects/d7/0d74c882f57e95eb262646a64f2588c4a41f61": "8e74596cda55c6f88ca9a11f73150079",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/193581345f6c97b9df8fa385fda552aae99313": "0700f7159ee42e701d42c6c793f7d386",
".git/objects/d8/ba3dabcb06703754d45a15ef76fde7f3495798": "8cd6ef1464204fbbb422067c1bb09e6c",
".git/objects/d9/3310258f7e093319679876cc3fefbf722ead92": "07bcf5d83c9091b0e1960d2156981db0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/59482b1cf7872aff4b2a3b0a0fc27d53680f9e": "8638c9f9ba9f4cfeb4b0a09ea7167e5c",
".git/objects/da/5d587076177a3e01c27a45e13c8d8845ca2307": "2276ce22cec6b050c1b902e76612800f",
".git/objects/dc/e086c3b3648b52a7f62e3b1ecf2dfd92b8f160": "fce4027646dc39c7528b089d1ac02eb3",
".git/objects/de/33e504916df3945eb3c88e01b54f96ebd111ea": "49d187c76f4046beceee2b1818c83ccf",
".git/objects/de/7e11e075d909f92289d7f5faea975291787282": "8dc0048b6c9a8c9902749bfca6113861",
".git/objects/de/b574012b460cfa758b06793793957ce7540c0e": "c7e9d78a116a96e8e86031e6671ac2ec",
".git/objects/de/f75d2602a781d870e5419c4a7c434e475e04e5": "b677684dc1ac71dce5bced686ed64afc",
".git/objects/df/698b3c05fa19769c9a89b0a6f2dc33020e3815": "ed5c9b6f44b9f584f714b19dbfedf402",
".git/objects/e0/5055873fc04218748b2c1651df3d77b58969a2": "63b816dcf4ee0e1de5b5f6c907587a8f",
".git/objects/e0/cb118bf25a725ca94654d42b849ba7a0738302": "1f3b30b0df7a16e7a2aa6377816b5642",
".git/objects/e2/7422f1f6cb47d52eecf1b81188996f6e8bbe3e": "9b10a333074d73ed940f08e4e470da65",
".git/objects/e5/df86eef794f1a03d2988757dd03b158e1324f3": "5f4d23b5653b86934146239d49549181",
".git/objects/e6/ca7e5b6f72029010c889a46c4c8902d6991768": "18e32ce09c58b25d37466ddfba9d2c1e",
".git/objects/e7/c2a0fa39417d0ba735fce48e53dd7542f314af": "4fcd625b1b6dd62cf26d139327c7bec8",
".git/objects/e9/6331897367b4b7f850ab70929e1bbebb61a3a0": "f0f9b2e0de62c48624c810eef9928cc2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/d86bbe0dff6111d8d0cc6a85b107918a6f63df": "c27eea443881cb72746cbc54ff2911da",
".git/objects/ea/787e305cf788b92e2999ffa8774e01a55e6d51": "8a7e51c5ab2213846743e6e0d3f1498a",
".git/objects/ea/c5b1d814b08713a31adce2d16036ff36663683": "d164f0b0762ee1808787b65c880ce555",
".git/objects/ea/d843fcbda7b7cafbead00700783a132b750b7a": "ab96606a10cc22062104d735a2680225",
".git/objects/ea/f94d9f7730186d2a8076c466278d281acf34ad": "8137760fd5c70669c88a6b7f07b02ae8",
".git/objects/ec/a4b71c96d9077ab0837dd6fc68f701d39ff5fd": "f587e70eede16b41bb17e6cedff911f6",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/bcbb33e2481cc427e61f7202a36cce1b6cd2b5": "9f389a1674d3b4692a78cb6f188c4098",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/c694beedfa4491d86578227092e335382eccde": "3d62e54d6ea80841d8967897077a61ac",
".git/objects/f1/1333d227f2651c23dbfe013667072ea2459936": "3105b89dc5c4b217fcae1ebaa9bf2337",
".git/objects/f1/8408ca92c411bf2afeb5246410874d9e1b84a6": "8b47d933fd6cab3152bdcbc80d29aee2",
".git/objects/f1/fc62aa6a721addcd2d48659ea9a95a0a9f2423": "63f50f31773758d7058f523ed684f560",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/01d5cf21bbdf65331509c4f5ef375bff57e236": "c57804b1742f74ad4123aa9ed826facd",
".git/objects/f3/1abc5df62bd49527897390ed9491b088412a09": "52eb6477ead414faf57de85c48279956",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/d4895fb88d2ec3e0cb0b1d0e48ce0be84c58d3": "3e9e429ba499138ef55c5cd63df6d939",
".git/objects/f4/e6c6a8a5ac2dab47e506335e073638b873f784": "06e5e63c7017db8c0ee8156ef2bf9b3a",
".git/objects/f4/f45675164bc6cfb010acda6921b00a7e36888f": "acb8d07918b0f62d2f068dc36007e10c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/b95c433ca2ef3fb6d0884ac1138326089934f7": "a4e78821854223555ccc1dda5e706b52",
".git/objects/f7/47ce21eb2783aaf0de1dfed544d5af1526aec1": "648bad08b3ab5c8d80f74136ff1059bd",
".git/objects/f9/aac00ddf7a90ca54a5afc9678836c078e6c3c9": "939f578f2774115f77fc79edf3e07055",
".git/objects/fa/678d63a03dfa265ceecb47e5f3df2cb9ee1d30": "d7dbe9d1152daf4e58c31578d24daa89",
".git/objects/fb/7189497f51ea5f372ebdf2f1c1038462ebcfd2": "2aea39fcc13726eca765d419a7ac8e47",
".git/objects/fb/f3647235745516bc0f463a84b871427d925f9c": "fb3203c3d9b15f62b8c9e73c3c5a8982",
".git/objects/fd/f04c3e82549f00d71c5038b11d1c7ce3c34005": "4104a91edc547985bf9bb8035c074014",
".git/objects/fe/605ba66346f308610754fe8a9cbefb815c7aa1": "2d065da59e9c2e520993115385a7fb00",
".git/refs/heads/main": "34dc7c465294a172cf422840137fba03",
".git/refs/remotes/origin/main": "34dc7c465294a172cf422840137fba03",
"assets/AssetManifest.bin": "dbae07555eef2f8de8ccab3a974894e3",
"assets/AssetManifest.bin.json": "0c8a3d0c2801842aafcf7a12eeaa2e4d",
"assets/AssetManifest.json": "e88b40c33647782c01e1ceeb3c3068c0",
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
"assets/assets/japanese/JLPT/N5/Adjectives/i/Adjectives%2520i%2520Part%25201.csv": "d6151e5855f7d8c79bb16f0a3d6c26c5",
"assets/assets/japanese/JLPT/N5/Adjectives/i/Adjectives%2520i%2520Part%25202.csv": "7766765d352b24acaa5ab742bfc6f428",
"assets/assets/japanese/JLPT/N5/Adjectives/na/Adjectives%2520na.csv": "47a80210e1cf915819f0a421b19a04ff",
"assets/assets/japanese/JLPT/N5/Adverbs/Adverbs.csv": "9d54115c3dcff895da9d7ae659ffc94b",
"assets/assets/japanese/JLPT/N5/Grammar/Grammar%2520Part%25201.csv": "429c9683dd27a5c86f78e82b663793de",
"assets/assets/japanese/JLPT/N5/Grammar/Grammar%2520Part%25202.csv": "f3893d5f9235ccfed7445a82c4e32799",
"assets/assets/japanese/JLPT/N5/Grammar/Grammar%2520Part%25203.csv": "3de10bceb6d08507fdc55b5e86498193",
"assets/assets/japanese/JLPT/N5/Kanji/Kanji%2520Part%25201.csv": "4196464108c143f22092ef45639557ea",
"assets/assets/japanese/JLPT/N5/Kanji/Kanji%2520Part%25202.csv": "ba8797f0722a3d0f511f29d7950ed8bd",
"assets/assets/japanese/JLPT/N5/Katakana%2520words/Katakana%2520words.csv": "64c873340f5534eb4137807d060b36bf",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25201.csv": "acb85d4473ad0c2a096ccc3cc6d8fe27",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25202.csv": "68e8281275e88a9b7d3310c8b4132b6d",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25203.csv": "fe568c1835a03976116769db2e3f9eb3",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25204.csv": "639f4081cd44fc31601b486bf85ccbc6",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25205.csv": "7a03a3560460bdf095bf027854e8b8cf",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25206.csv": "0aef205981fd5efb91383352c01ed816",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25207.csv": "5a87d19a3f063ade25ea44981de8c79f",
"assets/assets/japanese/JLPT/N5/Nouns/Nouns%2520Part%25208.csv": "a34bea2d066c30e57b7072e932ad1c57",
"assets/assets/japanese/JLPT/N5/Particles/Particles.csv": "62c5894a6271e663fce3ca787a5f4322",
"assets/assets/japanese/JLPT/N5/Pre-noun%2520adjectivals/Pre-noun%2520adjectivals.csv": "15d86df5df857e7872a7aeb49d56e110",
"assets/assets/japanese/JLPT/N5/Verbs/Verbs%2520Part%25201.csv": "30710eddbacec920131e845913eff443",
"assets/assets/japanese/JLPT/N5/Verbs/Verbs%2520Part%25202.csv": "8e6754e0a9fc1794f89898d072e8c14e",
"assets/assets/japanese/JLPT/N5/Verbs/Verbs%2520Part%25203.csv": "0fb7f7d83deac0a9b462156a46119d16",
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
"assets/assets/japanese/Sakura/Basic/Adjectives.csv": "88b43b747b5ced6fb42f979d405122c1",
"assets/assets/japanese/Sakura/Basic/Age%2520and%2520phone%2520number.csv": "5669ccf56972652c6582ffabf85c2b67",
"assets/assets/japanese/Sakura/Basic/Big%2520numbers.csv": "a53eff40bb2276164a05827cca53e779",
"assets/assets/japanese/Sakura/Basic/Classroom%2520words.csv": "2076b84251e01371f7126592fb086d89",
"assets/assets/japanese/Sakura/Basic/Countries.csv": "661af392a7efd0a8b9ecb13b3a43bd5a",
"assets/assets/japanese/Sakura/Basic/Family.csv": "3204148983021a1c839c098d97cbf6b1",
"assets/assets/japanese/Sakura/Basic/Frequency.csv": "eb8316e92d8e4f0ed2190ac2d6423eaa",
"assets/assets/japanese/Sakura/Basic/Go,%2520come,%2520return.csv": "f27ed32786e0fea503b6cef241dd6e08",
"assets/assets/japanese/Sakura/Basic/Greetings.csv": "9fe3c2c91084b6018415f40c733abaf7",
"assets/assets/japanese/Sakura/Basic/How%2520much,%2520favourite,%2520location%2520marker.csv": "0ae7c936a7a3edeb799140e66033acec",
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
"assets/assets/japanese/Sakura/Words/Adjectives.csv": "b490a9369167f2a16788640b835a5015",
"assets/assets/japanese/Sakura/Words/Animals.csv": "19874525554c73d74a8f170e37629fc5",
"assets/assets/japanese/Sakura/Words/Fruits.csv": "25d3dede43c337da893fa6c7e9dc08da",
"assets/assets/japanese/Sakura/Words/Hiragana%2520words%25202.csv": "0e001347cb2e4c2c61d0dbf25b26e7b5",
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
"flutter_bootstrap.js": "7f4966f8c5c1112a55bcb98c83997408",
"icons/Icon-192.png": "7af226e698e239af59ae57ccf5e6310f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "7af226e698e239af59ae57ccf5e6310f",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "588eef7e92152dd95914582822b677b0",
"/": "588eef7e92152dd95914582822b677b0",
"main.dart.js": "6b3adda9c5b83f0876c941c0d298501b",
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
