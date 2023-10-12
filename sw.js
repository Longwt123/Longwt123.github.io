/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/09/27/hello-world/index.html","37935f799bcb1c33df8e4f29481498d2"],["/2023/10/01/TAO-1001-test/index.html","9f8bd33578657ad274a1b265fd676ce4"],["/2023/10/10/山东大学NOSQL非关系数据库2020-2021期末考试题目（回忆）/index.html","6403adb6149ae6d3ce5b675a296b2975"],["/2023/10/10/山东大学数据科学导论2020-2021期末考试题目（回忆）/index.html","73384a884b832352de5f8f43d8f592e5"],["/2023/10/10/山东大学软件学院2020-2021NoSQL非关系数据库复习/index.html","ecd1e40fffb5fed915ef1c553b45209f"],["/2023/10/10/山东大学软件学院2021-6 《区块链》期末考试_孔老师_fromLWT_区块链期末考试题目回忆/index.html","4a03387a39521dc720333114016037db"],["/2023/10/10/山东大学软件工程项目实训_(2021-4)（1）/index.html","51504441239e5795de5d618d5dbbd36a"],["/2023/10/10/山东大学软件工程项目实训_(2021-4)（3）/index.html","fce95db39ea80d6d5e1811469287eea8"],["/2023/10/10/山东大学软件工程项目实训_(初~2021-3-21)/index.html","658e9efa07e3d9419a64e34e0a903d90"],["/about/index.html","bf41d903b92f8044c42c063b8e62a97d"],["/archives/2023/09/index.html","c905eb315a2055bb3f92160fb9081256"],["/archives/2023/10/index.html","2a9bf182819054b448712377142fa161"],["/archives/2023/10/page/2/index.html","3bf47caa9752f91e168888b8a3d4fe9d"],["/archives/2023/index.html","1f282a656faf319e7aca7557ca3d0d06"],["/archives/2023/page/2/index.html","b828af0f20af9568df1f967cd33c5d4e"],["/archives/index.html","fff0515d0f7060943af769958bd4032d"],["/archives/page/2/index.html","e62df84b8ee5d1f6dd70d1114df90cbb"],["/categories/index.html","878c937012076a49301eff9b1507258c"],["/categories/学习/index.html","ff1b9649b58db4c1a1f35c6a8ffeacd0"],["/categories/学习/page/2/index.html","3f8b0ccb11dde268e6e2ebd75cba1fd7"],["/categories/测试/index.html","1f3bbcdbf1371b56397538f8b25581c5"],["/css/index.css","362daa3c4fad391497b2614a34a25743"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/TAO_logo.png","da103a2878430549314437366e7e950e"],["/images/bar_beach.jpg","8d4c3f933b8e31436be2134bb2e05da1"],["/images/nav_log.jpg","3f7cebb45fee0f4c7ef7e97dde53366f"],["/images/other_images/csdn_logo.png","f2f46398dcbb544c22d8aefa164ee6cc"],["/images/other_images/error.gif","211daa47673983cdf7ba181896927465"],["/images/other_images/image_loading.gif","4fce8a191066c8288761b351ee847f5a"],["/images/other_images/weilab_logo.png","77499811a167960c6f7e0d11249bfb97"],["/images/paper_images/项目实训_1.png","1f18c7e96ad7de30a10a0abf9feee4e7"],["/images/paper_images/项目实训_2.png","e2ceed16a0004959bf877438ad58763d"],["/images/paper_images/项目实训_3.png","bb6299638979bf15c99a42fef3acbdb6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3457687f1c53c5c7e46d03016eaafe6b"],["/js/main.js","03943d2612100f564bc323bea79e7c5a"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/like_movies/index.html","aa9f105140e47830c075a593671efed7"],["/like_music/index.html","c4aaaff1dc1f02c3b5c03098cfe2df50"],["/like_pictures/index.html","4e5e30baaf06bfb92cac8b258a8fb41c"],["/link/index.html","d5c0795562a3e1559d6f79bb24744f9c"],["/page/2/index.html","b35bafb3d66a288fe9d464d70d61c56f"],["/sw-register.js","c2a88a858282f9d721934f3a461d54c7"],["/tags/NoSQL/index.html","20c8976890d27b508a3d79a7ff7e5d05"],["/tags/index.html","27cf7a56e61770294c9fbacfe6160bf8"],["/tags/区块链/index.html","ba812d9334fa5e6a8737703c21d5e448"],["/tags/数据科学/index.html","cc55c3bc7e38848a28493bd26a32a01f"],["/tags/测试/index.html","7bca6d7923130117de790f45d0480528"],["/tags/项目实训/index.html","aae46ee5ed09c6f1c042d71040417cd8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
