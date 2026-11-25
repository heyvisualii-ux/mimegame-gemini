/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/ai/words/route";
exports.ids = ["app/api/ai/words/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Fwords%2Froute&page=%2Fapi%2Fai%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Fwords%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Fwords%2Froute&page=%2Fapi%2Fai%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Fwords%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/request-meta */ \"(rsc)/./node_modules/next/dist/server/request-meta.js\");\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/server/lib/trace/tracer */ \"(rsc)/./node_modules/next/dist/server/lib/trace/tracer.js\");\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/shared/lib/router/utils/app-paths */ \"next/dist/shared/lib/router/utils/app-paths\");\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/base-http/node */ \"(rsc)/./node_modules/next/dist/server/base-http/node.js\");\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/server/web/spec-extension/adapters/next-request */ \"(rsc)/./node_modules/next/dist/server/web/spec-extension/adapters/next-request.js\");\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/server/lib/trace/constants */ \"(rsc)/./node_modules/next/dist/server/lib/trace/constants.js\");\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/server/instrumentation/utils */ \"(rsc)/./node_modules/next/dist/server/instrumentation/utils.js\");\n/* harmony import */ var next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/server/send-response */ \"(rsc)/./node_modules/next/dist/server/send-response.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/server/web/utils */ \"(rsc)/./node_modules/next/dist/server/web/utils.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dist/server/lib/cache-control */ \"(rsc)/./node_modules/next/dist/server/lib/cache-control.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dist/lib/constants */ \"(rsc)/./node_modules/next/dist/lib/constants.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dist/shared/lib/no-fallback-error.external */ \"next/dist/shared/lib/no-fallback-error.external\");\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/server/lib/route-cache-key */ \"(rsc)/./node_modules/next/dist/server/lib/route-cache-key.js\");\n/* harmony import */ var next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/dist/server/response-cache */ \"(rsc)/./node_modules/next/dist/server/response-cache/index.js\");\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _app_applet_src_app_api_ai_words_route_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/app/api/ai/words/route.ts */ \"(rsc)/./src/app/api/ai/words/route.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ai/words/route\",\n        pathname: \"/api/ai/words\",\n        filename: \"route\",\n        bundlePath: \"app/api/ai/words/route\"\n    },\n    distDir: \".next-dev\" || 0,\n    relativeProjectDir:  false || '',\n    resolvedPagePath: \"/app/applet/src/app/api/ai/words/route.ts\",\n    nextConfigOutput,\n    userland: _app_applet_src_app_api_ai_words_route_ts__WEBPACK_IMPORTED_MODULE_17__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\nasync function handler(req, res, ctx) {\n    var _nextConfig_experimental;\n    let srcPage = \"/api/ai/words/route\";\n    // turbopack doesn't normalize `/index` in the page name\n    // so we need to to process dynamic routes properly\n    // TODO: fix turbopack providing differing value from webpack\n    if (false) {} else if (srcPage === '/index') {\n        // we always normalize /index specifically\n        srcPage = '/';\n    }\n    const multiZoneDraftMode = false;\n    const prepareResult = await routeModule.prepare(req, res, {\n        srcPage,\n        multiZoneDraftMode\n    });\n    if (!prepareResult) {\n        res.statusCode = 400;\n        res.end('Bad Request');\n        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());\n        return null;\n    }\n    const { buildId, params, nextConfig, isDraftMode, prerenderManifest, routerServerContext, isOnDemandRevalidate, revalidateOnlyGenerated, resolvedPathname } = prepareResult;\n    const normalizedSrcPage = (0,next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__.normalizeAppPath)(srcPage);\n    // Only this route's prerenders can establish ISR or admit generated params.\n    const isPrerendered = Boolean(prerenderManifest.routes[resolvedPathname]) && (routeModule.isDev || (0,next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15__.isRouteCacheOwner)(resolvedPathname, routeModule.cacheOwner, prerenderManifest.routes[resolvedPathname]));\n    let isIsr = Boolean(prerenderManifest.dynamicRoutes[normalizedSrcPage] || isPrerendered);\n    if (isIsr && !isDraftMode) {\n        const prerenderInfo = prerenderManifest.dynamicRoutes[normalizedSrcPage];\n        if (prerenderInfo) {\n            if (prerenderInfo.fallback === false && !isPrerendered) {\n                throw new next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError();\n            }\n        }\n    }\n    let cacheKey = null;\n    if (isIsr && !routeModule.isDev && !isDraftMode) {\n        cacheKey = resolvedPathname;\n        // ensure /index and / is normalized to one key\n        cacheKey = cacheKey === '/index' ? '/' : cacheKey;\n    }\n    const supportsDynamicResponse = // If we're in development, we always support dynamic HTML\n    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports\n    // dynamic HTML.\n    !isIsr;\n    // This is a revalidation request if the request is for a static\n    // page and it is not being resumed from a postponed render and\n    // it is not a dynamic RSC request then it is a revalidation\n    // request.\n    const isRevalidate = isIsr && !supportsDynamicResponse;\n    const method = req.method || 'GET';\n    const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.getTracer)();\n    const activeSpan = tracer.getActiveScopeSpan();\n    const context = {\n        params,\n        prerenderManifest,\n        renderOpts: {\n            experimental: {\n                cacheComponents: Boolean(nextConfig.experimental.cacheComponents),\n                authInterrupts: Boolean(nextConfig.experimental.authInterrupts)\n            },\n            supportsDynamicResponse,\n            incrementalCache: (0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'incrementalCache'),\n            cacheLifeProfiles: (_nextConfig_experimental = nextConfig.experimental) == null ? void 0 : _nextConfig_experimental.cacheLife,\n            isRevalidate,\n            waitUntil: ctx.waitUntil,\n            onClose: (cb)=>{\n                res.on('close', cb);\n            },\n            onAfterTaskError: undefined,\n            onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext)\n        },\n        sharedContext: {\n            buildId\n        }\n    };\n    const nodeNextReq = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextRequest(req);\n    const nodeNextRes = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextResponse(res);\n    const nextReq = next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.NextRequestAdapter.fromNodeNextRequest(nodeNextReq, (0,next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.signalFromNodeResponse)(res));\n    try {\n        const invokeRouteModule = async (span)=>{\n            return routeModule.handle(nextReq, context).finally(()=>{\n                if (!span) return;\n                span.setAttributes({\n                    'http.status_code': res.statusCode,\n                    'next.rsc': false\n                });\n                const rootSpanAttributes = tracer.getRootSpanAttributes();\n                // We were unable to get attributes, probably OTEL is not enabled\n                if (!rootSpanAttributes) {\n                    return;\n                }\n                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest) {\n                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);\n                    return;\n                }\n                const route = rootSpanAttributes.get('next.route');\n                if (route) {\n                    const name = `${method} ${route}`;\n                    span.setAttributes({\n                        'next.route': route,\n                        'http.route': route,\n                        'next.span_name': name\n                    });\n                    span.updateName(name);\n                } else {\n                    span.updateName(`${method} ${req.url}`);\n                }\n            });\n        };\n        const handleResponse = async (currentSpan)=>{\n            var _cacheEntry_value;\n            const responseGenerator = async ({ previousCacheEntry })=>{\n                try {\n                    if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry) {\n                        res.statusCode = 404;\n                        // on-demand revalidate always sets this header\n                        res.setHeader('x-nextjs-cache', 'REVALIDATED');\n                        res.end('This page could not be found');\n                        return null;\n                    }\n                    const response = await invokeRouteModule(currentSpan);\n                    req.fetchMetrics = context.renderOpts.fetchMetrics;\n                    let pendingWaitUntil = context.renderOpts.pendingWaitUntil;\n                    // Attempt using provided waitUntil if available\n                    // if it's not we fallback to sendResponse's handling\n                    if (pendingWaitUntil) {\n                        if (ctx.waitUntil) {\n                            ctx.waitUntil(pendingWaitUntil);\n                            pendingWaitUntil = undefined;\n                        }\n                    }\n                    const cacheTags = context.renderOpts.collectedTags;\n                    // If the request is for a static response, we can cache it so long\n                    // as it's not edge.\n                    if (isIsr) {\n                        const blob = await response.blob();\n                        // Copy the headers from the response.\n                        const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.toNodeOutgoingHttpHeaders)(response.headers);\n                        if (cacheTags) {\n                            headers[next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER] = cacheTags;\n                        }\n                        if (!headers['content-type'] && blob.type) {\n                            headers['content-type'] = blob.type;\n                        }\n                        const revalidate = typeof context.renderOpts.collectedRevalidate === 'undefined' || context.renderOpts.collectedRevalidate >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? false : context.renderOpts.collectedRevalidate;\n                        const expire = typeof context.renderOpts.collectedExpire === 'undefined' || context.renderOpts.collectedExpire >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? undefined : context.renderOpts.collectedExpire;\n                        // Create the cache entry for the response.\n                        const cacheEntry = {\n                            value: {\n                                kind: next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__.CachedRouteKind.APP_ROUTE,\n                                status: response.status,\n                                body: Buffer.from(await blob.arrayBuffer()),\n                                headers\n                            },\n                            cacheControl: {\n                                revalidate,\n                                expire\n                            }\n                        };\n                        return cacheEntry;\n                    } else {\n                        // send response without caching if not ISR\n                        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, response, context.renderOpts.pendingWaitUntil);\n                        return null;\n                    }\n                } catch (err) {\n                    // if this is a background revalidate we need to report\n                    // the request error here as it won't be bubbled\n                    if (previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) {\n                        await routeModule.onRequestError(req, err, {\n                            routerKind: 'App Router',\n                            routePath: srcPage,\n                            routeType: 'route',\n                            revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                                isRevalidate,\n                                isOnDemandRevalidate\n                            })\n                        }, routerServerContext);\n                    }\n                    throw err;\n                }\n            };\n            const cacheEntry = await routeModule.handleResponse({\n                req,\n                nextConfig,\n                cacheKey,\n                routeKind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n                isFallback: false,\n                prerenderManifest,\n                isRoutePPREnabled: false,\n                isOnDemandRevalidate,\n                revalidateOnlyGenerated,\n                responseGenerator,\n                waitUntil: ctx.waitUntil\n            });\n            // we don't create a cacheEntry for ISR\n            if (!isIsr) {\n                return null;\n            }\n            if ((cacheEntry == null ? void 0 : (_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__.CachedRouteKind.APP_ROUTE) {\n                var _cacheEntry_value1;\n                throw Object.defineProperty(new Error(`Invariant: app-route received invalid cache entry ${cacheEntry == null ? void 0 : (_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), \"__NEXT_ERROR_CODE\", {\n                    value: \"E701\",\n                    enumerable: false,\n                    configurable: true\n                });\n            }\n            if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode')) {\n                res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');\n            }\n            // Draft mode should never be cached\n            if (isDraftMode) {\n                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');\n            }\n            const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.fromNodeOutgoingHttpHeaders)(cacheEntry.value.headers);\n            if (!((0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isIsr)) {\n                headers.delete(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER);\n            }\n            // If cache control is already set on the response we don't\n            // override it to allow users to customize it via next.config\n            if (cacheEntry.cacheControl && !res.getHeader('Cache-Control') && !headers.get('Cache-Control')) {\n                headers.set('Cache-Control', (0,next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__.getCacheControlHeader)(cacheEntry.cacheControl));\n            }\n            await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(cacheEntry.value.body, {\n                headers,\n                status: cacheEntry.value.status || 200\n            }));\n            return null;\n        };\n        // TODO: activeSpan code path is for when wrapped by\n        // next-server can be removed when this is no longer used\n        if (activeSpan) {\n            await handleResponse(activeSpan);\n        } else {\n            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest, {\n                    spanName: `${method} ${req.url}`,\n                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.SpanKind.SERVER,\n                    attributes: {\n                        'http.method': method,\n                        'http.target': req.url\n                    }\n                }, handleResponse));\n        }\n    } catch (err) {\n        if (!(err instanceof next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError)) {\n            await routeModule.onRequestError(req, err, {\n                routerKind: 'App Router',\n                routePath: normalizedSrcPage,\n                routeType: 'route',\n                revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                    isRevalidate,\n                    isOnDemandRevalidate\n                })\n            });\n        }\n        // rethrow so that we can handle serving error page\n        // If this is during static generation, throw the error again.\n        if (isIsr) throw err;\n        // Otherwise, send a 500 response.\n        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(null, {\n            status: 500\n        }));\n        return null;\n    }\n}\n\n//# sourceMappingURL=app-route.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhaSUyRndvcmRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhaSUyRndvcmRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWklMkZ3b3JkcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZhcHAlMkZhcHBsZXQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCUyRmFwcGxldCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QmaXNHbG9iYWxOb3RGb3VuZEVuYWJsZWQ9ISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2Q7QUFDUztBQUNPO0FBQ0s7QUFDbUM7QUFDakQ7QUFDTztBQUNmO0FBQ3NDO0FBQ3pCO0FBQ007QUFDQztBQUNUO0FBQ1A7QUFDSTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLFdBQW9DLElBQUksQ0FBRTtBQUN2RCx3QkFBd0IsTUFBdUM7QUFDL0Q7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZFQUE2RSxnRkFBYztBQUMzRixpQ0FBaUMsUUFBUSxFQUFFLFFBQVE7QUFDbkQsMEJBQTBCLHVFQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOLDZCQUE2Qiw2RkFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyRkFBbUI7QUFDckQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkVBQVk7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0IHsgZ2V0UmVxdWVzdE1ldGEgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yZXF1ZXN0LW1ldGFcIjtcbmltcG9ydCB7IGdldFRyYWNlciwgU3BhbktpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvdHJhY2UvdHJhY2VyXCI7XG5pbXBvcnQgeyBub3JtYWxpemVBcHBQYXRoIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hcHAtcGF0aHNcIjtcbmltcG9ydCB7IE5vZGVOZXh0UmVxdWVzdCwgTm9kZU5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Jhc2UtaHR0cC9ub2RlXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdEFkYXB0ZXIsIHNpZ25hbEZyb21Ob2RlUmVzcG9uc2UgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci93ZWIvc3BlYy1leHRlbnNpb24vYWRhcHRlcnMvbmV4dC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBCYXNlU2VydmVyU3BhbiB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi90cmFjZS9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFJldmFsaWRhdGVSZWFzb24gfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9pbnN0cnVtZW50YXRpb24vdXRpbHNcIjtcbmltcG9ydCB7IHNlbmRSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3NlbmQtcmVzcG9uc2VcIjtcbmltcG9ydCB7IGZyb21Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycywgdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0Q2FjaGVDb250cm9sSGVhZGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL2NhY2hlLWNvbnRyb2xcIjtcbmltcG9ydCB7IElORklOSVRFX0NBQ0hFLCBORVhUX0NBQ0hFX1RBR1NfSEVBREVSIH0gZnJvbSBcIm5leHQvZGlzdC9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOb0ZhbGxiYWNrRXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbm8tZmFsbGJhY2stZXJyb3IuZXh0ZXJuYWxcIjtcbmltcG9ydCB7IGlzUm91dGVDYWNoZU93bmVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3JvdXRlLWNhY2hlLWtleVwiO1xuaW1wb3J0IHsgQ2FjaGVkUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcmVzcG9uc2UtY2FjaGVcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvYXBwL2FwcGxldC9zcmMvYXBwL2FwaS9haS93b3Jkcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FpL3dvcmRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWkvd29yZHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FpL3dvcmRzL3JvdXRlXCJcbiAgICB9LFxuICAgIGRpc3REaXI6IHByb2Nlc3MuZW52Ll9fTkVYVF9SRUxBVElWRV9ESVNUX0RJUiB8fCAnJyxcbiAgICByZWxhdGl2ZVByb2plY3REaXI6IHByb2Nlc3MuZW52Ll9fTkVYVF9SRUxBVElWRV9QUk9KRUNUX0RJUiB8fCAnJyxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9hcHAvYXBwbGV0L3NyYy9hcHAvYXBpL2FpL3dvcmRzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMsIGN0eCkge1xuICAgIHZhciBfbmV4dENvbmZpZ19leHBlcmltZW50YWw7XG4gICAgbGV0IHNyY1BhZ2UgPSBcIi9hcGkvYWkvd29yZHMvcm91dGVcIjtcbiAgICAvLyB0dXJib3BhY2sgZG9lc24ndCBub3JtYWxpemUgYC9pbmRleGAgaW4gdGhlIHBhZ2UgbmFtZVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gdG8gcHJvY2VzcyBkeW5hbWljIHJvdXRlcyBwcm9wZXJseVxuICAgIC8vIFRPRE86IGZpeCB0dXJib3BhY2sgcHJvdmlkaW5nIGRpZmZlcmluZyB2YWx1ZSBmcm9tIHdlYnBhY2tcbiAgICBpZiAocHJvY2Vzcy5lbnYuVFVSQk9QQUNLKSB7XG4gICAgICAgIHNyY1BhZ2UgPSBzcmNQYWdlLnJlcGxhY2UoL1xcL2luZGV4JC8sICcnKSB8fCAnLyc7XG4gICAgfSBlbHNlIGlmIChzcmNQYWdlID09PSAnL2luZGV4Jykge1xuICAgICAgICAvLyB3ZSBhbHdheXMgbm9ybWFsaXplIC9pbmRleCBzcGVjaWZpY2FsbHlcbiAgICAgICAgc3JjUGFnZSA9ICcvJztcbiAgICB9XG4gICAgY29uc3QgbXVsdGlab25lRHJhZnRNb2RlID0gcHJvY2Vzcy5lbnYuX19ORVhUX01VTFRJX1pPTkVfRFJBRlRfTU9ERTtcbiAgICBjb25zdCBwcmVwYXJlUmVzdWx0ID0gYXdhaXQgcm91dGVNb2R1bGUucHJlcGFyZShyZXEsIHJlcywge1xuICAgICAgICBzcmNQYWdlLFxuICAgICAgICBtdWx0aVpvbmVEcmFmdE1vZGVcbiAgICB9KTtcbiAgICBpZiAoIXByZXBhcmVSZXN1bHQpIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XG4gICAgICAgIHJlcy5lbmQoJ0JhZCBSZXF1ZXN0Jyk7XG4gICAgICAgIGN0eC53YWl0VW50aWwgPT0gbnVsbCA/IHZvaWQgMCA6IGN0eC53YWl0VW50aWwuY2FsbChjdHgsIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgYnVpbGRJZCwgcGFyYW1zLCBuZXh0Q29uZmlnLCBpc0RyYWZ0TW9kZSwgcHJlcmVuZGVyTWFuaWZlc3QsIHJvdXRlclNlcnZlckNvbnRleHQsIGlzT25EZW1hbmRSZXZhbGlkYXRlLCByZXZhbGlkYXRlT25seUdlbmVyYXRlZCwgcmVzb2x2ZWRQYXRobmFtZSB9ID0gcHJlcGFyZVJlc3VsdDtcbiAgICBjb25zdCBub3JtYWxpemVkU3JjUGFnZSA9IG5vcm1hbGl6ZUFwcFBhdGgoc3JjUGFnZSk7XG4gICAgLy8gT25seSB0aGlzIHJvdXRlJ3MgcHJlcmVuZGVycyBjYW4gZXN0YWJsaXNoIElTUiBvciBhZG1pdCBnZW5lcmF0ZWQgcGFyYW1zLlxuICAgIGNvbnN0IGlzUHJlcmVuZGVyZWQgPSBCb29sZWFuKHByZXJlbmRlck1hbmlmZXN0LnJvdXRlc1tyZXNvbHZlZFBhdGhuYW1lXSkgJiYgKHJvdXRlTW9kdWxlLmlzRGV2IHx8IGlzUm91dGVDYWNoZU93bmVyKHJlc29sdmVkUGF0aG5hbWUsIHJvdXRlTW9kdWxlLmNhY2hlT3duZXIsIHByZXJlbmRlck1hbmlmZXN0LnJvdXRlc1tyZXNvbHZlZFBhdGhuYW1lXSkpO1xuICAgIGxldCBpc0lzciA9IEJvb2xlYW4ocHJlcmVuZGVyTWFuaWZlc3QuZHluYW1pY1JvdXRlc1tub3JtYWxpemVkU3JjUGFnZV0gfHwgaXNQcmVyZW5kZXJlZCk7XG4gICAgaWYgKGlzSXNyICYmICFpc0RyYWZ0TW9kZSkge1xuICAgICAgICBjb25zdCBwcmVyZW5kZXJJbmZvID0gcHJlcmVuZGVyTWFuaWZlc3QuZHluYW1pY1JvdXRlc1tub3JtYWxpemVkU3JjUGFnZV07XG4gICAgICAgIGlmIChwcmVyZW5kZXJJbmZvKSB7XG4gICAgICAgICAgICBpZiAocHJlcmVuZGVySW5mby5mYWxsYmFjayA9PT0gZmFsc2UgJiYgIWlzUHJlcmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm9GYWxsYmFja0Vycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNhY2hlS2V5ID0gbnVsbDtcbiAgICBpZiAoaXNJc3IgJiYgIXJvdXRlTW9kdWxlLmlzRGV2ICYmICFpc0RyYWZ0TW9kZSkge1xuICAgICAgICBjYWNoZUtleSA9IHJlc29sdmVkUGF0aG5hbWU7XG4gICAgICAgIC8vIGVuc3VyZSAvaW5kZXggYW5kIC8gaXMgbm9ybWFsaXplZCB0byBvbmUga2V5XG4gICAgICAgIGNhY2hlS2V5ID0gY2FjaGVLZXkgPT09ICcvaW5kZXgnID8gJy8nIDogY2FjaGVLZXk7XG4gICAgfVxuICAgIGNvbnN0IHN1cHBvcnRzRHluYW1pY1Jlc3BvbnNlID0gLy8gSWYgd2UncmUgaW4gZGV2ZWxvcG1lbnQsIHdlIGFsd2F5cyBzdXBwb3J0IGR5bmFtaWMgSFRNTFxuICAgIHJvdXRlTW9kdWxlLmlzRGV2ID09PSB0cnVlIHx8IC8vIElmIHRoaXMgaXMgbm90IFNTRyBvciBkb2VzIG5vdCBoYXZlIHN0YXRpYyBwYXRocywgdGhlbiBpdCBzdXBwb3J0c1xuICAgIC8vIGR5bmFtaWMgSFRNTC5cbiAgICAhaXNJc3I7XG4gICAgLy8gVGhpcyBpcyBhIHJldmFsaWRhdGlvbiByZXF1ZXN0IGlmIHRoZSByZXF1ZXN0IGlzIGZvciBhIHN0YXRpY1xuICAgIC8vIHBhZ2UgYW5kIGl0IGlzIG5vdCBiZWluZyByZXN1bWVkIGZyb20gYSBwb3N0cG9uZWQgcmVuZGVyIGFuZFxuICAgIC8vIGl0IGlzIG5vdCBhIGR5bmFtaWMgUlNDIHJlcXVlc3QgdGhlbiBpdCBpcyBhIHJldmFsaWRhdGlvblxuICAgIC8vIHJlcXVlc3QuXG4gICAgY29uc3QgaXNSZXZhbGlkYXRlID0gaXNJc3IgJiYgIXN1cHBvcnRzRHluYW1pY1Jlc3BvbnNlO1xuICAgIGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2QgfHwgJ0dFVCc7XG4gICAgY29uc3QgdHJhY2VyID0gZ2V0VHJhY2VyKCk7XG4gICAgY29uc3QgYWN0aXZlU3BhbiA9IHRyYWNlci5nZXRBY3RpdmVTY29wZVNwYW4oKTtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHByZXJlbmRlck1hbmlmZXN0LFxuICAgICAgICByZW5kZXJPcHRzOiB7XG4gICAgICAgICAgICBleHBlcmltZW50YWw6IHtcbiAgICAgICAgICAgICAgICBjYWNoZUNvbXBvbmVudHM6IEJvb2xlYW4obmV4dENvbmZpZy5leHBlcmltZW50YWwuY2FjaGVDb21wb25lbnRzKSxcbiAgICAgICAgICAgICAgICBhdXRoSW50ZXJydXB0czogQm9vbGVhbihuZXh0Q29uZmlnLmV4cGVyaW1lbnRhbC5hdXRoSW50ZXJydXB0cylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdXBwb3J0c0R5bmFtaWNSZXNwb25zZSxcbiAgICAgICAgICAgIGluY3JlbWVudGFsQ2FjaGU6IGdldFJlcXVlc3RNZXRhKHJlcSwgJ2luY3JlbWVudGFsQ2FjaGUnKSxcbiAgICAgICAgICAgIGNhY2hlTGlmZVByb2ZpbGVzOiAoX25leHRDb25maWdfZXhwZXJpbWVudGFsID0gbmV4dENvbmZpZy5leHBlcmltZW50YWwpID09IG51bGwgPyB2b2lkIDAgOiBfbmV4dENvbmZpZ19leHBlcmltZW50YWwuY2FjaGVMaWZlLFxuICAgICAgICAgICAgaXNSZXZhbGlkYXRlLFxuICAgICAgICAgICAgd2FpdFVudGlsOiBjdHgud2FpdFVudGlsLFxuICAgICAgICAgICAgb25DbG9zZTogKGNiKT0+e1xuICAgICAgICAgICAgICAgIHJlcy5vbignY2xvc2UnLCBjYik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25BZnRlclRhc2tFcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb25JbnN0cnVtZW50YXRpb25SZXF1ZXN0RXJyb3I6IChlcnJvciwgX3JlcXVlc3QsIGVycm9yQ29udGV4dCk9PnJvdXRlTW9kdWxlLm9uUmVxdWVzdEVycm9yKHJlcSwgZXJyb3IsIGVycm9yQ29udGV4dCwgcm91dGVyU2VydmVyQ29udGV4dClcbiAgICAgICAgfSxcbiAgICAgICAgc2hhcmVkQ29udGV4dDoge1xuICAgICAgICAgICAgYnVpbGRJZFxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBub2RlTmV4dFJlcSA9IG5ldyBOb2RlTmV4dFJlcXVlc3QocmVxKTtcbiAgICBjb25zdCBub2RlTmV4dFJlcyA9IG5ldyBOb2RlTmV4dFJlc3BvbnNlKHJlcyk7XG4gICAgY29uc3QgbmV4dFJlcSA9IE5leHRSZXF1ZXN0QWRhcHRlci5mcm9tTm9kZU5leHRSZXF1ZXN0KG5vZGVOZXh0UmVxLCBzaWduYWxGcm9tTm9kZVJlc3BvbnNlKHJlcykpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGludm9rZVJvdXRlTW9kdWxlID0gYXN5bmMgKHNwYW4pPT57XG4gICAgICAgICAgICByZXR1cm4gcm91dGVNb2R1bGUuaGFuZGxlKG5leHRSZXEsIGNvbnRleHQpLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICBpZiAoIXNwYW4pIHJldHVybjtcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAnaHR0cC5zdGF0dXNfY29kZSc6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICAgICAgICAgICAgICAnbmV4dC5yc2MnOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RTcGFuQXR0cmlidXRlcyA9IHRyYWNlci5nZXRSb290U3BhbkF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICAvLyBXZSB3ZXJlIHVuYWJsZSB0byBnZXQgYXR0cmlidXRlcywgcHJvYmFibHkgT1RFTCBpcyBub3QgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGlmICghcm9vdFNwYW5BdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvb3RTcGFuQXR0cmlidXRlcy5nZXQoJ25leHQuc3Bhbl90eXBlJykgIT09IEJhc2VTZXJ2ZXJTcGFuLmhhbmRsZVJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmV4cGVjdGVkIHJvb3Qgc3BhbiB0eXBlICcke3Jvb3RTcGFuQXR0cmlidXRlcy5nZXQoJ25leHQuc3Bhbl90eXBlJyl9Jy4gUGxlYXNlIHJlcG9ydCB0aGlzIE5leHQuanMgaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSByb290U3BhbkF0dHJpYnV0ZXMuZ2V0KCduZXh0LnJvdXRlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgJHttZXRob2R9ICR7cm91dGV9YDtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduZXh0LnJvdXRlJzogcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cC5yb3V0ZSc6IHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25leHQuc3Bhbl9uYW1lJzogbmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi51cGRhdGVOYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4udXBkYXRlTmFtZShgJHttZXRob2R9ICR7cmVxLnVybH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSBhc3luYyAoY3VycmVudFNwYW4pPT57XG4gICAgICAgICAgICB2YXIgX2NhY2hlRW50cnlfdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUdlbmVyYXRvciA9IGFzeW5jICh7IHByZXZpb3VzQ2FjaGVFbnRyeSB9KT0+e1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0UmVxdWVzdE1ldGEocmVxLCAnbWluaW1hbE1vZGUnKSAmJiBpc09uRGVtYW5kUmV2YWxpZGF0ZSAmJiByZXZhbGlkYXRlT25seUdlbmVyYXRlZCAmJiAhcHJldmlvdXNDYWNoZUVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uLWRlbWFuZCByZXZhbGlkYXRlIGFsd2F5cyBzZXRzIHRoaXMgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCd4LW5leHRqcy1jYWNoZScsICdSRVZBTElEQVRFRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVuZCgnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnZva2VSb3V0ZU1vZHVsZShjdXJyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5mZXRjaE1ldHJpY3MgPSBjb250ZXh0LnJlbmRlck9wdHMuZmV0Y2hNZXRyaWNzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGVuZGluZ1dhaXRVbnRpbCA9IGNvbnRleHQucmVuZGVyT3B0cy5wZW5kaW5nV2FpdFVudGlsO1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHVzaW5nIHByb3ZpZGVkIHdhaXRVbnRpbCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQncyBub3Qgd2UgZmFsbGJhY2sgdG8gc2VuZFJlc3BvbnNlJ3MgaGFuZGxpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdXYWl0VW50aWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHgud2FpdFVudGlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LndhaXRVbnRpbChwZW5kaW5nV2FpdFVudGlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nV2FpdFVudGlsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlVGFncyA9IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRUYWdzO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBpcyBmb3IgYSBzdGF0aWMgcmVzcG9uc2UsIHdlIGNhbiBjYWNoZSBpdCBzbyBsb25nXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGl0J3Mgbm90IGVkZ2UuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lzcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcHkgdGhlIGhlYWRlcnMgZnJvbSB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW05FWFRfQ0FDSEVfVEFHU19IRUFERVJdID0gY2FjaGVUYWdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoZWFkZXJzWydjb250ZW50LXR5cGUnXSAmJiBibG9iLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydjb250ZW50LXR5cGUnXSA9IGJsb2IudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmFsaWRhdGUgPSB0eXBlb2YgY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZFJldmFsaWRhdGUgPT09ICd1bmRlZmluZWQnIHx8IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRSZXZhbGlkYXRlID49IElORklOSVRFX0NBQ0hFID8gZmFsc2UgOiBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkUmV2YWxpZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IHR5cGVvZiBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkRXhwaXJlID09PSAndW5kZWZpbmVkJyB8fCBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkRXhwaXJlID49IElORklOSVRFX0NBQ0hFID8gdW5kZWZpbmVkIDogY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZEV4cGlyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY2FjaGUgZW50cnkgZm9yIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogQ2FjaGVkUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEJ1ZmZlci5mcm9tKGF3YWl0IGJsb2IuYXJyYXlCdWZmZXIoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlQ29udHJvbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZhbGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlRW50cnk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIHJlc3BvbnNlIHdpdGhvdXQgY2FjaGluZyBpZiBub3QgSVNSXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZW5kUmVzcG9uc2Uobm9kZU5leHRSZXEsIG5vZGVOZXh0UmVzLCByZXNwb25zZSwgY29udGV4dC5yZW5kZXJPcHRzLnBlbmRpbmdXYWl0VW50aWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGJhY2tncm91bmQgcmV2YWxpZGF0ZSB3ZSBuZWVkIHRvIHJlcG9ydFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcmVxdWVzdCBlcnJvciBoZXJlIGFzIGl0IHdvbid0IGJlIGJ1YmJsZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzQ2FjaGVFbnRyeSA9PSBudWxsID8gdm9pZCAwIDogcHJldmlvdXNDYWNoZUVudHJ5LmlzU3RhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHJvdXRlTW9kdWxlLm9uUmVxdWVzdEVycm9yKHJlcSwgZXJyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyS2luZDogJ0FwcCBSb3V0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlUGF0aDogc3JjUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZVR5cGU6ICdyb3V0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVJlYXNvbjogZ2V0UmV2YWxpZGF0ZVJlYXNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPbkRlbWFuZFJldmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcm91dGVyU2VydmVyQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBjYWNoZUVudHJ5ID0gYXdhaXQgcm91dGVNb2R1bGUuaGFuZGxlUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgICBuZXh0Q29uZmlnLFxuICAgICAgICAgICAgICAgIGNhY2hlS2V5LFxuICAgICAgICAgICAgICAgIHJvdXRlS2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgICAgICAgICBpc0ZhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcmVyZW5kZXJNYW5pZmVzdCxcbiAgICAgICAgICAgICAgICBpc1JvdXRlUFBSRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNPbkRlbWFuZFJldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZU9ubHlHZW5lcmF0ZWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VHZW5lcmF0b3IsXG4gICAgICAgICAgICAgICAgd2FpdFVudGlsOiBjdHgud2FpdFVudGlsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IGNyZWF0ZSBhIGNhY2hlRW50cnkgZm9yIElTUlxuICAgICAgICAgICAgaWYgKCFpc0lzcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChjYWNoZUVudHJ5ID09IG51bGwgPyB2b2lkIDAgOiAoX2NhY2hlRW50cnlfdmFsdWUgPSBjYWNoZUVudHJ5LnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2NhY2hlRW50cnlfdmFsdWUua2luZCkgIT09IENhY2hlZFJvdXRlS2luZC5BUFBfUk9VVEUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2NhY2hlRW50cnlfdmFsdWUxO1xuICAgICAgICAgICAgICAgIHRocm93IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXcgRXJyb3IoYEludmFyaWFudDogYXBwLXJvdXRlIHJlY2VpdmVkIGludmFsaWQgY2FjaGUgZW50cnkgJHtjYWNoZUVudHJ5ID09IG51bGwgPyB2b2lkIDAgOiAoX2NhY2hlRW50cnlfdmFsdWUxID0gY2FjaGVFbnRyeS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jYWNoZUVudHJ5X3ZhbHVlMS5raW5kfWApLCBcIl9fTkVYVF9FUlJPUl9DT0RFXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiRTcwMVwiLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWdldFJlcXVlc3RNZXRhKHJlcSwgJ21pbmltYWxNb2RlJykpIHtcbiAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCd4LW5leHRqcy1jYWNoZScsIGlzT25EZW1hbmRSZXZhbGlkYXRlID8gJ1JFVkFMSURBVEVEJyA6IGNhY2hlRW50cnkuaXNNaXNzID8gJ01JU1MnIDogY2FjaGVFbnRyeS5pc1N0YWxlID8gJ1NUQUxFJyA6ICdISVQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERyYWZ0IG1vZGUgc2hvdWxkIG5ldmVyIGJlIGNhY2hlZFxuICAgICAgICAgICAgaWYgKGlzRHJhZnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICdwcml2YXRlLCBuby1jYWNoZSwgbm8tc3RvcmUsIG1heC1hZ2U9MCwgbXVzdC1yZXZhbGlkYXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZnJvbU5vZGVPdXRnb2luZ0h0dHBIZWFkZXJzKGNhY2hlRW50cnkudmFsdWUuaGVhZGVycyk7XG4gICAgICAgICAgICBpZiAoIShnZXRSZXF1ZXN0TWV0YShyZXEsICdtaW5pbWFsTW9kZScpICYmIGlzSXNyKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMuZGVsZXRlKE5FWFRfQ0FDSEVfVEFHU19IRUFERVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgY2FjaGUgY29udHJvbCBpcyBhbHJlYWR5IHNldCBvbiB0aGUgcmVzcG9uc2Ugd2UgZG9uJ3RcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlIGl0IHRvIGFsbG93IHVzZXJzIHRvIGN1c3RvbWl6ZSBpdCB2aWEgbmV4dC5jb25maWdcbiAgICAgICAgICAgIGlmIChjYWNoZUVudHJ5LmNhY2hlQ29udHJvbCAmJiAhcmVzLmdldEhlYWRlcignQ2FjaGUtQ29udHJvbCcpICYmICFoZWFkZXJzLmdldCgnQ2FjaGUtQ29udHJvbCcpKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVycy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCBnZXRDYWNoZUNvbnRyb2xIZWFkZXIoY2FjaGVFbnRyeS5jYWNoZUNvbnRyb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHNlbmRSZXNwb25zZShub2RlTmV4dFJlcSwgbm9kZU5leHRSZXMsIG5ldyBSZXNwb25zZShjYWNoZUVudHJ5LnZhbHVlLmJvZHksIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIHN0YXR1czogY2FjaGVFbnRyeS52YWx1ZS5zdGF0dXMgfHwgMjAwXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVE9ETzogYWN0aXZlU3BhbiBjb2RlIHBhdGggaXMgZm9yIHdoZW4gd3JhcHBlZCBieVxuICAgICAgICAvLyBuZXh0LXNlcnZlciBjYW4gYmUgcmVtb3ZlZCB3aGVuIHRoaXMgaXMgbm8gbG9uZ2VyIHVzZWRcbiAgICAgICAgaWYgKGFjdGl2ZVNwYW4pIHtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZVJlc3BvbnNlKGFjdGl2ZVNwYW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdHJhY2VyLndpdGhQcm9wYWdhdGVkQ29udGV4dChyZXEuaGVhZGVycywgKCk9PnRyYWNlci50cmFjZShCYXNlU2VydmVyU3Bhbi5oYW5kbGVSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW5OYW1lOiBgJHttZXRob2R9ICR7cmVxLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiBTcGFuS2luZC5TRVJWRVIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwLm1ldGhvZCc6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwLnRhcmdldCc6IHJlcS51cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGhhbmRsZVJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgTm9GYWxsYmFja0Vycm9yKSkge1xuICAgICAgICAgICAgYXdhaXQgcm91dGVNb2R1bGUub25SZXF1ZXN0RXJyb3IocmVxLCBlcnIsIHtcbiAgICAgICAgICAgICAgICByb3V0ZXJLaW5kOiAnQXBwIFJvdXRlcicsXG4gICAgICAgICAgICAgICAgcm91dGVQYXRoOiBub3JtYWxpemVkU3JjUGFnZSxcbiAgICAgICAgICAgICAgICByb3V0ZVR5cGU6ICdyb3V0ZScsXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVJlYXNvbjogZ2V0UmV2YWxpZGF0ZVJlYXNvbih7XG4gICAgICAgICAgICAgICAgICAgIGlzUmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNPbkRlbWFuZFJldmFsaWRhdGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0aHJvdyBzbyB0aGF0IHdlIGNhbiBoYW5kbGUgc2VydmluZyBlcnJvciBwYWdlXG4gICAgICAgIC8vIElmIHRoaXMgaXMgZHVyaW5nIHN0YXRpYyBnZW5lcmF0aW9uLCB0aHJvdyB0aGUgZXJyb3IgYWdhaW4uXG4gICAgICAgIGlmIChpc0lzcikgdGhyb3cgZXJyO1xuICAgICAgICAvLyBPdGhlcndpc2UsIHNlbmQgYSA1MDAgcmVzcG9uc2UuXG4gICAgICAgIGF3YWl0IHNlbmRSZXNwb25zZShub2RlTmV4dFJlcSwgbm9kZU5leHRSZXMsIG5ldyBSZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICBzdGF0dXM6IDUwMFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Fwords%2Froute&page=%2Fapi%2Fai%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Fwords%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/ai/words/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/ai/words/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic),\n/* harmony export */   maxDuration: () => (/* binding */ maxDuration)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _google_genai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/genai */ \"(rsc)/./node_modules/@google/genai/dist/node/index.mjs\");\n/* harmony import */ var _lib_gemini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/gemini */ \"(rsc)/./src/lib/gemini.ts\");\n\n\n\nconst dynamic = 'force-dynamic';\nconst maxDuration = 60;\nasync function POST(req) {\n    try {\n        const body = await req.json().catch(()=>({}));\n        const { topic = 'فیلم و سریال', count = 5, difficulty = 'MEDIUM' } = body;\n        const safeCount = Math.min(20, Math.max(1, Number(count) || 5));\n        const prompt = `\nYou are \"Panto\" (پانتو), the groovy, comedic 70s AI Game Master for PantoMix (پانتومیکس - Persian Pantomime & Charades party game).\nGenerate ${safeCount} creative, hilarious, and playable Persian Pantomime words or situation phrases for the topic: \"${topic}\".\nDifficulty level: ${difficulty}.\n\nReturn ONLY a JSON array of ${safeCount} objects matching the requested schema.\nPoints guide: EASY=10, MEDIUM=20, HARD=35, EXTREME=50.\n`;\n        const result = await (0,_lib_gemini__WEBPACK_IMPORTED_MODULE_2__.generateWithGemini)({\n            route: '/api/ai/words',\n            prompt,\n            timeoutMs: _lib_gemini__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_GEMINI_TIMEOUT_MS,\n            responseMimeType: 'application/json',\n            responseSchema: {\n                type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.ARRAY,\n                items: {\n                    type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.OBJECT,\n                    properties: {\n                        text: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING,\n                            description: 'کلمه یا عبارت پانتومیم به فارسی'\n                        },\n                        difficulty: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING,\n                            description: 'EASY, MEDIUM, HARD, or EXTREME'\n                        },\n                        points: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.NUMBER,\n                            description: 'امتیاز کلمه'\n                        },\n                        hint: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING,\n                            description: 'یک راهنمایی کوتاه، هوشمندانه یا طنز برای بازیگر'\n                        }\n                    },\n                    required: [\n                        'text',\n                        'hint'\n                    ]\n                }\n            }\n        });\n        if (result.ok) {\n            try {\n                const rawWords = JSON.parse((0,_lib_gemini__WEBPACK_IMPORTED_MODULE_2__.stripJsonFences)(result.text));\n                if (Array.isArray(rawWords) && rawWords.length > 0) {\n                    const defaultPoints = difficulty === 'EASY' ? 10 : difficulty === 'MEDIUM' ? 20 : difficulty === 'HARD' ? 35 : 50;\n                    const words = rawWords.map((item, idx)=>({\n                            id: `ai_${Date.now()}_${idx}`,\n                            text: item.text || 'کلمه پانتومیم هوش مصنوعی',\n                            category: 'ai_generated',\n                            difficulty: item.difficulty || difficulty,\n                            points: Number(item.points) || defaultPoints,\n                            hint: item.hint || 'راهنمایی اختصاصی پانتو',\n                            isCustomAi: true\n                        }));\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        success: true,\n                        source: 'gemini',\n                        model: result.model,\n                        data: words\n                    });\n                }\n            } catch (parseErr) {\n                const parseMsg = parseErr instanceof Error ? parseErr.message : String(parseErr);\n                console.error(`[PantoMix][Gemini] route=/api/ai/words model=${result.model} durationMs=${result.durationMs} status=200 reason=invalid_response message=\"Invalid JSON: ${parseMsg}\"`);\n            }\n        }\n        const fallbackReason = result.ok ? 'invalid_response' : result.reason;\n        // Dynamic Fallback Words\n        const fallbackWords = [\n            {\n                id: `ai_fallback_1_${Date.now()}`,\n                text: `ربات هوش مصنوعی در حال رقصیدن سنتی ایرانی (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 25,\n                hint: 'حرکات مکانیکی دست هم‌زمان با بشکن زدن',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_2_${Date.now()}`,\n                text: `فضانوردی که کلاه ایمنی‌اش را گم کرده (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 30,\n                hint: 'نگه داشتن نفس و چشم گرد کردن در فضا',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_3_${Date.now()}`,\n                text: `آشپز معروفی که غذای بیش از حد تند درست کرده (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 20,\n                hint: 'آتش گرفتن زبان و باد زدن با دستمال',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_4_${Date.now()}`,\n                text: `تلاش برای بستن چمدان پر از سوغاتی (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 20,\n                hint: 'پریدن و نشستن با تمام وزن روی چمدان',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_5_${Date.now()}`,\n                text: `خواننده‌ای که متن ترانه را در کنسرت فراموش کرده (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 35,\n                hint: 'گرفتن میکروفن به سمت تماشاچی‌ها تا آنها بخوانند',\n                isCustomAi: true\n            }\n        ].slice(0, safeCount);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            source: 'fallback',\n            fallbackReason,\n            data: fallbackWords\n        });\n    } catch (error) {\n        console.error('Word API Error', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVlBO2dCQUNab0IsUUFBUTtnQkFDUkUsTUFBTTtnQkFDTmtCLFlBQVk7WUFDZDtTQUNELENBQUNnQixLQUFLLENBQUMsR0FBR3ZEO1FBRVgsT0FBT2YscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUN2QjZDLFNBQVM7WUFDVEMsUUFBUTtZQUNSVztZQUNBVCxNQUFNVztRQUNSO0lBQ0YsRUFBRSxPQUFPSixPQUFPO1FBQ2RELFFBQVFDLEtBQUssQ0FBQyxrQkFBa0JBO1FBQ2hDLE9BQU9qRSxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUU2QyxTQUFTO1lBQU9VLE9BQU87UUFBd0IsR0FBRztZQUFFTSxRQUFRO1FBQUk7SUFDN0Y7QUFDRiIsInNvdXJjZXMiOlsiL2FwcC9hcHBsZXQvc3JjL2FwcC9hcGkvYWkvd29yZHMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bnb29nbGUvZ2VuYWknO1xuaW1wb3J0IHsgV29yZCwgV29yZERpZmZpY3VsdHkgfSBmcm9tICdAL3R5cGVzL2dhbWUnO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9HRU1JTklfVElNRU9VVF9NUyxcbiAgZ2VuZXJhdGVXaXRoR2VtaW5pLFxuICBzdHJpcEpzb25GZW5jZXMsXG59IGZyb20gJ0AvbGliL2dlbWluaSc7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnO1xuZXhwb3J0IGNvbnN0IG1heER1cmF0aW9uID0gNjA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpO1xuICAgIGNvbnN0IHsgdG9waWMgPSAn2YHbjNmE2YUg2Ygg2LPYsduM2KfZhCcsIGNvdW50ID0gNSwgZGlmZmljdWx0eSA9ICdNRURJVU0nIH0gPSBib2R5O1xuICAgIGNvbnN0IHNhZmVDb3VudCA9IE1hdGgubWluKDIwLCBNYXRoLm1heCgxLCBOdW1iZXIoY291bnQpIHx8IDUpKTtcblxuICAgIGNvbnN0IHByb21wdCA9IGBcbllvdSBhcmUgXCJQYW50b1wiICjZvtin2YbYqtmIKSwgdGhlIGdyb292eSwgY29tZWRpYyA3MHMgQUkgR2FtZSBNYXN0ZXIgZm9yIFBhbnRvTWl4ICjZvtin2YbYqtmI2YXbjNqp2LMgLSBQZXJzaWFuIFBhbnRvbWltZSAmIENoYXJhZGVzIHBhcnR5IGdhbWUpLlxuR2VuZXJhdGUgJHtzYWZlQ291bnR9IGNyZWF0aXZlLCBoaWxhcmlvdXMsIGFuZCBwbGF5YWJsZSBQZXJzaWFuIFBhbnRvbWltZSB3b3JkcyBvciBzaXR1YXRpb24gcGhyYXNlcyBmb3IgdGhlIHRvcGljOiBcIiR7dG9waWN9XCIuXG5EaWZmaWN1bHR5IGxldmVsOiAke2RpZmZpY3VsdHl9LlxuXG5SZXR1cm4gT05MWSBhIEpTT04gYXJyYXkgb2YgJHtzYWZlQ291bnR9IG9iamVjdHMgbWF0Y2hpbmcgdGhlIHJlcXVlc3RlZCBzY2hlbWEuXG5Qb2ludHMgZ3VpZGU6IEVBU1k9MTAsIE1FRElVTT0yMCwgSEFSRD0zNSwgRVhUUkVNRT01MC5cbmA7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZVdpdGhHZW1pbmkoe1xuICAgICAgcm91dGU6ICcvYXBpL2FpL3dvcmRzJyxcbiAgICAgIHByb21wdCxcbiAgICAgIHRpbWVvdXRNczogREVGQVVMVF9HRU1JTklfVElNRU9VVF9NUyxcbiAgICAgIHJlc3BvbnNlTWltZVR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHJlc3BvbnNlU2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IFR5cGUuQVJSQVksXG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgdHlwZTogVHlwZS5PQkpFQ1QsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICB0eXBlOiBUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfaqdmE2YXZhyDbjNinINi52KjYp9ix2Kog2b7Yp9mG2KrZiNmF24zZhSDYqNmHINmB2KfYsdiz24wnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpZmZpY3VsdHk6IHtcbiAgICAgICAgICAgICAgdHlwZTogVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRUFTWSwgTUVESVVNLCBIQVJELCBvciBFWFRSRU1FJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICAgICAgdHlwZTogVHlwZS5OVU1CRVIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn2KfZhdiq24zYp9iyINqp2YTZhdmHJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaW50OiB7XG4gICAgICAgICAgICAgIHR5cGU6IFR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9uM2qkg2LHYp9mH2YbZhdin24zbjCDaqdmI2KrYp9mH2Iwg2YfZiNi02YXZhtiv2KfZhtmHINuM2Kcg2LfZhtiyINio2LHYp9uMINio2KfYstuM2q/YsScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWlyZWQ6IFsndGV4dCcsICdoaW50J10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdC5vaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmF3V29yZHMgPSBKU09OLnBhcnNlKHN0cmlwSnNvbkZlbmNlcyhyZXN1bHQudGV4dCkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXdXb3JkcykgJiYgcmF3V29yZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGRlZmF1bHRQb2ludHMgPVxuICAgICAgICAgICAgZGlmZmljdWx0eSA9PT0gJ0VBU1knID8gMTAgOiBkaWZmaWN1bHR5ID09PSAnTUVESVVNJyA/IDIwIDogZGlmZmljdWx0eSA9PT0gJ0hBUkQnID8gMzUgOiA1MDtcbiAgICAgICAgICBjb25zdCB3b3JkczogV29yZFtdID0gcmF3V29yZHMubWFwKChpdGVtOiBQYXJ0aWFsPFdvcmQ+LCBpZHg6IG51bWJlcikgPT4gKHtcbiAgICAgICAgICAgIGlkOiBgYWlfJHtEYXRlLm5vdygpfV8ke2lkeH1gLFxuICAgICAgICAgICAgdGV4dDogaXRlbS50ZXh0IHx8ICfaqdmE2YXZhyDZvtin2YbYqtmI2YXbjNmFINmH2YjYtCDZhdi12YbZiNi524wnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhaV9nZW5lcmF0ZWQnLFxuICAgICAgICAgICAgZGlmZmljdWx0eTogKGl0ZW0uZGlmZmljdWx0eSBhcyBXb3JkRGlmZmljdWx0eSkgfHwgKGRpZmZpY3VsdHkgYXMgV29yZERpZmZpY3VsdHkpLFxuICAgICAgICAgICAgcG9pbnRzOiBOdW1iZXIoaXRlbS5wb2ludHMpIHx8IGRlZmF1bHRQb2ludHMsXG4gICAgICAgICAgICBoaW50OiBpdGVtLmhpbnQgfHwgJ9ix2KfZh9mG2YXYp9uM24wg2KfYrtiq2LXYp9i124wg2b7Yp9mG2KrZiCcsXG4gICAgICAgICAgICBpc0N1c3RvbUFpOiB0cnVlLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIHNvdXJjZTogJ2dlbWluaScsXG4gICAgICAgICAgICBtb2RlbDogcmVzdWx0Lm1vZGVsLFxuICAgICAgICAgICAgZGF0YTogd29yZHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlTXNnID0gcGFyc2VFcnIgaW5zdGFuY2VvZiBFcnJvciA/IHBhcnNlRXJyLm1lc3NhZ2UgOiBTdHJpbmcocGFyc2VFcnIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBbUGFudG9NaXhdW0dlbWluaV0gcm91dGU9L2FwaS9haS93b3JkcyBtb2RlbD0ke3Jlc3VsdC5tb2RlbH0gZHVyYXRpb25Ncz0ke3Jlc3VsdC5kdXJhdGlvbk1zfSBzdGF0dXM9MjAwIHJlYXNvbj1pbnZhbGlkX3Jlc3BvbnNlIG1lc3NhZ2U9XCJJbnZhbGlkIEpTT046ICR7cGFyc2VNc2d9XCJgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmFsbGJhY2tSZWFzb24gPSByZXN1bHQub2sgPyAnaW52YWxpZF9yZXNwb25zZScgOiByZXN1bHQucmVhc29uO1xuXG4gICAgLy8gRHluYW1pYyBGYWxsYmFjayBXb3Jkc1xuICAgIGNvbnN0IGZhbGxiYWNrV29yZHM6IFdvcmRbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhaV9mYWxsYmFja18xXyR7RGF0ZS5ub3coKX1gLFxuICAgICAgICB0ZXh0OiBg2LHYqNin2Kog2YfZiNi0INmF2LXZhtmI2LnbjCDYr9ixINit2KfZhCDYsdmC2LXbjNiv2YYg2LPZhtiq24wg2KfbjNix2KfZhtuMICgke3RvcGljfSlgLFxuICAgICAgICBjYXRlZ29yeTogJ2FpX2dlbmVyYXRlZCcsXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHkgYXMgV29yZERpZmZpY3VsdHksXG4gICAgICAgIHBvaW50czogMjUsXG4gICAgICAgIGhpbnQ6ICfYrdix2qnYp9iqINmF2qnYp9mG24zaqduMINiv2LPYqiDZh9mF4oCM2LLZhdin2YYg2KjYpyDYqNi02qnZhiDYstiv2YYnLFxuICAgICAgICBpc0N1c3RvbUFpOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhaV9mYWxsYmFja18yXyR7RGF0ZS5ub3coKX1gLFxuICAgICAgICB0ZXh0OiBg2YHYttin2YbZiNix2K/bjCDaqdmHINqp2YTYp9mHINin24zZhdmG24zigIzYp9i0INix2Kcg2q/ZhSDaqdix2K/ZhyAoJHt0b3BpY30pYCxcbiAgICAgICAgY2F0ZWdvcnk6ICdhaV9nZW5lcmF0ZWQnLFxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5IGFzIFdvcmREaWZmaWN1bHR5LFxuICAgICAgICBwb2ludHM6IDMwLFxuICAgICAgICBoaW50OiAn2Ybar9mHINiv2KfYtNiq2YYg2YbZgdizINmIINqG2LTZhSDar9ix2K8g2qnYsdiv2YYg2K/YsSDZgdi22KcnLFxuICAgICAgICBpc0N1c3RvbUFpOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhaV9mYWxsYmFja18zXyR7RGF0ZS5ub3coKX1gLFxuICAgICAgICB0ZXh0OiBg2KLYtNm+2LIg2YXYudix2YjZgduMINqp2Ycg2LrYsNin24wg2KjbjNi0INin2LIg2K3YryDYqtmG2K8g2K/Ysdiz2Kog2qnYsdiv2YcgKCR7dG9waWN9KWAsXG4gICAgICAgIGNhdGVnb3J5OiAnYWlfZ2VuZXJhdGVkJyxcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZmljdWx0eSBhcyBXb3JkRGlmZmljdWx0eSxcbiAgICAgICAgcG9pbnRzOiAyMCxcbiAgICAgICAgaGludDogJ9ii2KrYtCDar9ix2YHYqtmGINiy2KjYp9mGINmIINio2KfYryDYstiv2YYg2KjYpyDYr9iz2KrZhdin2YQnLFxuICAgICAgICBpc0N1c3RvbUFpOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhaV9mYWxsYmFja180XyR7RGF0ZS5ub3coKX1gLFxuICAgICAgICB0ZXh0OiBg2KrZhNin2LQg2KjYsdin24wg2KjYs9iq2YYg2obZhdiv2KfZhiDZvtixINin2LIg2LPZiNi62KfYqtuMICgke3RvcGljfSlgLFxuICAgICAgICBjYXRlZ29yeTogJ2FpX2dlbmVyYXRlZCcsXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHkgYXMgV29yZERpZmZpY3VsdHksXG4gICAgICAgIHBvaW50czogMjAsXG4gICAgICAgIGhpbnQ6ICfZvtix24zYr9mGINmIINmG2LTYs9iq2YYg2KjYpyDYqtmF2KfZhSDZiNiy2YYg2LHZiNuMINqG2YXYr9in2YYnLFxuICAgICAgICBpc0N1c3RvbUFpOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGBhaV9mYWxsYmFja181XyR7RGF0ZS5ub3coKX1gLFxuICAgICAgICB0ZXh0OiBg2K7ZiNin2YbZhtiv2YfigIzYp9uMINqp2Ycg2YXYqtmGINiq2LHYp9mG2Ycg2LHYpyDYr9ixINqp2YbYs9ix2Kog2YHYsdin2YXZiNi0INqp2LHYr9mHICgke3RvcGljfSlgLFxuICAgICAgICBjYXRlZ29yeTogJ2FpX2dlbmVyYXRlZCcsXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHkgYXMgV29yZERpZmZpY3VsdHksXG4gICAgICAgIHBvaW50czogMzUsXG4gICAgICAgIGhpbnQ6ICfar9ix2YHYqtmGINmF24zaqdix2YjZgdmGINio2Ycg2LPZhdiqINiq2YXYp9i02KfahtuM4oCM2YfYpyDYqtinINii2YbZh9inINio2K7ZiNin2YbZhtivJyxcbiAgICAgICAgaXNDdXN0b21BaTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXS5zbGljZSgwLCBzYWZlQ291bnQpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBzb3VyY2U6ICdmYWxsYmFjaycsXG4gICAgICBmYWxsYmFja1JlYXNvbixcbiAgICAgIGRhdGE6IGZhbGxiYWNrV29yZHMsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignV29yZCBBUEkgRXJyb3InLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiVHlwZSIsIkRFRkFVTFRfR0VNSU5JX1RJTUVPVVRfTVMiLCJnZW5lcmF0ZVdpdGhHZW1pbmkiLCJzdHJpcEpzb25GZW5jZXMiLCJkeW5hbWljIiwibWF4RHVyYXRpb24iLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJjYXRjaCIsInRvcGljIiwiY291bnQiLCJkaWZmaWN1bHR5Iiwic2FmZUNvdW50IiwiTWF0aCIsIm1pbiIsIm1heCIsIk51bWJlciIsInByb21wdCIsInJlc3VsdCIsInJvdXRlIiwidGltZW91dE1zIiwicmVzcG9uc2VNaW1lVHlwZSIsInJlc3BvbnNlU2NoZW1hIiwidHlwZSIsIkFSUkFZIiwiaXRlbXMiLCJPQkpFQ1QiLCJwcm9wZXJ0aWVzIiwidGV4dCIsIlNUUklORyIsImRlc2NyaXB0aW9uIiwicG9pbnRzIiwiTlVNQkVSIiwiaGludCIsInJlcXVpcmVkIiwib2siLCJyYXdXb3JkcyIsIkpTT04iLCJwYXJzZSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImRlZmF1bHRQb2ludHMiLCJ3b3JkcyIsIm1hcCIsIml0ZW0iLCJpZHgiLCJpZCIsIkRhdGUiLCJub3ciLCJjYXRlZ29yeSIsImlzQ3VzdG9tQWkiLCJzdWNjZXNzIiwic291cmNlIiwibW9kZWwiLCJkYXRhIiwicGFyc2VFcnIiLCJwYXJzZU1zZyIsIkVycm9yIiwibWVzc2FnZSIsIlN0cmluZyIsImNvbnNvbGUiLCJlcnJvciIsImR1cmF0aW9uTXMiLCJmYWxsYmFja1JlYXNvbiIsInJlYXNvbiIsImZhbGxiYWNrV29yZHMiLCJzbGljZSIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/ai/words/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/gemini.ts":
/*!***************************!*\
  !*** ./src/lib/gemini.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_GEMINI_MODEL: () => (/* binding */ DEFAULT_GEMINI_MODEL),\n/* harmony export */   DEFAULT_GEMINI_TIMEOUT_MS: () => (/* binding */ DEFAULT_GEMINI_TIMEOUT_MS),\n/* harmony export */   generateWithGemini: () => (/* binding */ generateWithGemini),\n/* harmony export */   stripJsonFences: () => (/* binding */ stripJsonFences)\n/* harmony export */ });\n/* harmony import */ var _google_genai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/genai */ \"(rsc)/./node_modules/@google/genai/dist/node/index.mjs\");\n\nconst DEFAULT_GEMINI_MODEL = 'gemini-3.1-flash-lite';\nconst DEFAULT_GEMINI_TIMEOUT_MS = 30000;\nfunction getTargetModel() {\n    const custom = process.env.GEMINI_MODEL?.trim();\n    return custom || DEFAULT_GEMINI_MODEL;\n}\nfunction getErrorStatus(err) {\n    if (err && typeof err === 'object' && 'status' in err) {\n        const val = err.status;\n        if (typeof val === 'number') return val;\n    }\n    return undefined;\n}\nfunction redactSecrets(text, apiKey) {\n    let sanitized = text;\n    if (apiKey && apiKey.length >= 6) {\n        sanitized = sanitized.split(apiKey).join('[REDACTED_KEY]');\n    }\n    return sanitized.replace(/AIza[0-9A-Za-z_-]{10,}/g, '[REDACTED_KEY]').replace(/(x-goog-api-key\\s*[:=]\\s*)[^\\s,;]+/gi, '$1[REDACTED_KEY]').replace(/([?&]key=)[^&\\s]+/gi, '$1[REDACTED_KEY]').replace(/(Bearer\\s+)[A-Za-z0-9._-]+/gi, '$1[REDACTED_TOKEN]').replace(/\\s+/g, ' ').trim().slice(0, 300);\n}\nfunction classifyGeminiError(err) {\n    const status = getErrorStatus(err);\n    const msg = err instanceof Error ? err.message : String(err);\n    const name = err instanceof Error ? err.name.toLowerCase() : '';\n    const lower = msg.toLowerCase();\n    if (status === 401 || status === 403 || lower.includes('api_key_invalid') || lower.includes('api key not valid') || lower.includes('api key expired') || lower.includes('permission_denied')) {\n        return 'invalid_key';\n    }\n    if (status === 429 || lower.includes('resource_exhausted') || lower.includes('quota')) {\n        return 'quota_exceeded';\n    }\n    if (status === 503 || status === 500 || status === 502 || status === 504 || lower.includes('unavailable') || lower.includes('high demand') || lower.includes('overloaded')) {\n        return 'model_unavailable';\n    }\n    if (status === 404 || lower.includes('not_found') || lower.includes('is not found') || lower.includes('unsupported model')) {\n        return 'model_not_found';\n    }\n    if (status === 400 || lower.includes('invalid_argument')) {\n        return 'invalid_argument';\n    }\n    if (name === 'aborterror' || lower.includes('timeout') || lower.includes('timed out') || lower.includes('etimedout') || lower.includes('aborted')) {\n        return 'timeout';\n    }\n    return 'api_error';\n}\nfunction stripJsonFences(raw) {\n    return raw.trim().replace(/^```(?:json)?\\s*/i, '').replace(/\\s*```$/i, '').trim();\n}\nasync function generateWithGemini(params) {\n    const route = params.route || 'unknown';\n    const model = getTargetModel();\n    const timeoutMs = Math.max(1000, params.timeoutMs ?? DEFAULT_GEMINI_TIMEOUT_MS);\n    const startedAt = Date.now();\n    const apiKey = process.env.GEMINI_API_KEY?.trim();\n    if (!apiKey) {\n        const durationMs = Date.now() - startedAt;\n        console.warn(`[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=none reason=missing_key`);\n        return {\n            ok: false,\n            reason: 'missing_key',\n            model,\n            durationMs\n        };\n    }\n    const ai = new _google_genai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenAI({\n        apiKey,\n        httpOptions: {\n            timeout: timeoutMs,\n            headers: {\n                'User-Agent': 'aistudio-build'\n            }\n        }\n    });\n    const controller = new AbortController();\n    let timer;\n    try {\n        const timeoutPromise = new Promise((_, reject)=>{\n            timer = setTimeout(()=>{\n                const timeoutErr = new Error(`Gemini request timeout after ${timeoutMs}ms`);\n                controller.abort(timeoutErr);\n                reject(timeoutErr);\n            }, timeoutMs);\n        });\n        const generatePromise = ai.models.generateContent({\n            model,\n            contents: params.prompt,\n            config: {\n                abortSignal: controller.signal,\n                ...params.responseMimeType ? {\n                    responseMimeType: params.responseMimeType\n                } : {},\n                ...params.responseSchema ? {\n                    responseSchema: params.responseSchema\n                } : {}\n            }\n        });\n        const response = await Promise.race([\n            generatePromise,\n            timeoutPromise\n        ]);\n        const durationMs = Date.now() - startedAt;\n        const text = response?.text?.trim();\n        if (text) {\n            console.info(`[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=200 ok=true`);\n            return {\n                ok: true,\n                text,\n                model,\n                durationMs\n            };\n        }\n        console.warn(`[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=200 reason=invalid_response message=\"Empty text returned by Gemini\"`);\n        return {\n            ok: false,\n            reason: 'invalid_response',\n            model,\n            durationMs,\n            statusCode: 200\n        };\n    } catch (err) {\n        const durationMs = Date.now() - startedAt;\n        const reason = classifyGeminiError(err);\n        const statusCode = getErrorStatus(err);\n        const sanitizedError = redactSecrets(err instanceof Error ? err.message : String(err), apiKey);\n        console.error(`[PantoMix][Gemini] route=${route} model=${model} durationMs=${durationMs} status=${statusCode ?? 'none'} reason=${reason} message=\"${sanitizedError}\"`);\n        return {\n            ok: false,\n            reason,\n            model,\n            durationMs,\n            statusCode\n        };\n    } finally{\n        if (timer) clearTimeout(timer);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZUdlbkFJLCB0eXBlIFNjaGVtYSB9IGZyb20gJ0Bnb29nbGUvZ2VuYWknO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9HRU1JTklfTU9ERUwgPSAnZ2VtaW5pLTMuMS1mbGFzaC1saXRlJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0dFTUlOSV9USU1FT1VUX01TID0gMzAwMDA7XG5cbmV4cG9ydCB0eXBlIEdlbWluaUZhbGxiYWNrUmVhc29uID1cbiAgfCAnbWlzc2luZ19rZXknXG4gIHwgJ3RpbWVvdXQnXG4gIHwgJ2ludmFsaWRfa2V5J1xuICB8ICdxdW90YV9leGNlZWRlZCdcbiAgfCAnbW9kZWxfbm90X2ZvdW5kJ1xuICB8ICdtb2RlbF91bmF2YWlsYWJsZSdcbiAgfCAnaW52YWxpZF9hcmd1bWVudCdcbiAgfCAnaW52YWxpZF9yZXNwb25zZSdcbiAgfCAnYXBpX2Vycm9yJztcblxuZXhwb3J0IHR5cGUgR2VtaW5pR2VuZXJhdGVSZXN1bHQgPVxuICB8IHtcbiAgICAgIG9rOiB0cnVlO1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgbW9kZWw6IHN0cmluZztcbiAgICAgIGR1cmF0aW9uTXM6IG51bWJlcjtcbiAgICB9XG4gIHwge1xuICAgICAgb2s6IGZhbHNlO1xuICAgICAgcmVhc29uOiBHZW1pbmlGYWxsYmFja1JlYXNvbjtcbiAgICAgIG1vZGVsOiBzdHJpbmc7XG4gICAgICBkdXJhdGlvbk1zOiBudW1iZXI7XG4gICAgICBzdGF0dXNDb2RlPzogbnVtYmVyO1xuICAgIH07XG5cbmZ1bmN0aW9uIGdldFRhcmdldE1vZGVsKCk6IHN0cmluZyB7XG4gIGNvbnN0IGN1c3RvbSA9IHByb2Nlc3MuZW52LkdFTUlOSV9NT0RFTD8udHJpbSgpO1xuICByZXR1cm4gY3VzdG9tIHx8IERFRkFVTFRfR0VNSU5JX01PREVMO1xufVxuXG5mdW5jdGlvbiBnZXRFcnJvclN0YXR1cyhlcnI6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAoZXJyICYmIHR5cGVvZiBlcnIgPT09ICdvYmplY3QnICYmICdzdGF0dXMnIGluIGVycikge1xuICAgIGNvbnN0IHZhbCA9IChlcnIgYXMgeyBzdGF0dXM/OiB1bmtub3duIH0pLnN0YXR1cztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHJldHVybiB2YWw7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gcmVkYWN0U2VjcmV0cyh0ZXh0OiBzdHJpbmcsIGFwaUtleT86IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBzYW5pdGl6ZWQgPSB0ZXh0O1xuICBpZiAoYXBpS2V5ICYmIGFwaUtleS5sZW5ndGggPj0gNikge1xuICAgIHNhbml0aXplZCA9IHNhbml0aXplZC5zcGxpdChhcGlLZXkpLmpvaW4oJ1tSRURBQ1RFRF9LRVldJyk7XG4gIH1cbiAgcmV0dXJuIHNhbml0aXplZFxuICAgIC5yZXBsYWNlKC9BSXphWzAtOUEtWmEtel8tXXsxMCx9L2csICdbUkVEQUNURURfS0VZXScpXG4gICAgLnJlcGxhY2UoLyh4LWdvb2ctYXBpLWtleVxccypbOj1dXFxzKilbXlxccyw7XSsvZ2ksICckMVtSRURBQ1RFRF9LRVldJylcbiAgICAucmVwbGFjZSgvKFs/Jl1rZXk9KVteJlxcc10rL2dpLCAnJDFbUkVEQUNURURfS0VZXScpXG4gICAgLnJlcGxhY2UoLyhCZWFyZXJcXHMrKVtBLVphLXowLTkuXy1dKy9naSwgJyQxW1JFREFDVEVEX1RPS0VOXScpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgIC50cmltKClcbiAgICAuc2xpY2UoMCwgMzAwKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NpZnlHZW1pbmlFcnJvcihlcnI6IHVua25vd24pOiBHZW1pbmlGYWxsYmFja1JlYXNvbiB7XG4gIGNvbnN0IHN0YXR1cyA9IGdldEVycm9yU3RhdHVzKGVycik7XG4gIGNvbnN0IG1zZyA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKTtcbiAgY29uc3QgbmFtZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm5hbWUudG9Mb3dlckNhc2UoKSA6ICcnO1xuICBjb25zdCBsb3dlciA9IG1zZy50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChcbiAgICBzdGF0dXMgPT09IDQwMSB8fFxuICAgIHN0YXR1cyA9PT0gNDAzIHx8XG4gICAgbG93ZXIuaW5jbHVkZXMoJ2FwaV9rZXlfaW52YWxpZCcpIHx8XG4gICAgbG93ZXIuaW5jbHVkZXMoJ2FwaSBrZXkgbm90IHZhbGlkJykgfHxcbiAgICBsb3dlci5pbmNsdWRlcygnYXBpIGtleSBleHBpcmVkJykgfHxcbiAgICBsb3dlci5pbmNsdWRlcygncGVybWlzc2lvbl9kZW5pZWQnKVxuICApIHtcbiAgICByZXR1cm4gJ2ludmFsaWRfa2V5JztcbiAgfVxuICBpZiAoXG4gICAgc3RhdHVzID09PSA0MjkgfHxcbiAgICBsb3dlci5pbmNsdWRlcygncmVzb3VyY2VfZXhoYXVzdGVkJykgfHxcbiAgICBsb3dlci5pbmNsdWRlcygncXVvdGEnKVxuICApIHtcbiAgICByZXR1cm4gJ3F1b3RhX2V4Y2VlZGVkJztcbiAgfVxuICBpZiAoXG4gICAgc3RhdHVzID09PSA1MDMgfHxcbiAgICBzdGF0dXMgPT09IDUwMCB8fFxuICAgIHN0YXR1cyA9PT0gNTAyIHx8XG4gICAgc3RhdHVzID09PSA1MDQgfHxcbiAgICBsb3dlci5pbmNsdWRlcygndW5hdmFpbGFibGUnKSB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCdoaWdoIGRlbWFuZCcpIHx8XG4gICAgbG93ZXIuaW5jbHVkZXMoJ292ZXJsb2FkZWQnKVxuICApIHtcbiAgICByZXR1cm4gJ21vZGVsX3VuYXZhaWxhYmxlJztcbiAgfVxuICBpZiAoXG4gICAgc3RhdHVzID09PSA0MDQgfHxcbiAgICBsb3dlci5pbmNsdWRlcygnbm90X2ZvdW5kJykgfHxcbiAgICBsb3dlci5pbmNsdWRlcygnaXMgbm90IGZvdW5kJykgfHxcbiAgICBsb3dlci5pbmNsdWRlcygndW5zdXBwb3J0ZWQgbW9kZWwnKVxuICApIHtcbiAgICByZXR1cm4gJ21vZGVsX25vdF9mb3VuZCc7XG4gIH1cbiAgaWYgKHN0YXR1cyA9PT0gNDAwIHx8IGxvd2VyLmluY2x1ZGVzKCdpbnZhbGlkX2FyZ3VtZW50JykpIHtcbiAgICByZXR1cm4gJ2ludmFsaWRfYXJndW1lbnQnO1xuICB9XG4gIGlmIChcbiAgICBuYW1lID09PSAnYWJvcnRlcnJvcicgfHxcbiAgICBsb3dlci5pbmNsdWRlcygndGltZW91dCcpIHx8XG4gICAgbG93ZXIuaW5jbHVkZXMoJ3RpbWVkIG91dCcpIHx8XG4gICAgbG93ZXIuaW5jbHVkZXMoJ2V0aW1lZG91dCcpIHx8XG4gICAgbG93ZXIuaW5jbHVkZXMoJ2Fib3J0ZWQnKVxuICApIHtcbiAgICByZXR1cm4gJ3RpbWVvdXQnO1xuICB9XG4gIHJldHVybiAnYXBpX2Vycm9yJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwSnNvbkZlbmNlcyhyYXc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiByYXdcbiAgICAudHJpbSgpXG4gICAgLnJlcGxhY2UoL15gYGAoPzpqc29uKT9cXHMqL2ksICcnKVxuICAgIC5yZXBsYWNlKC9cXHMqYGBgJC9pLCAnJylcbiAgICAudHJpbSgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVXaXRoR2VtaW5pKHBhcmFtczoge1xuICByb3V0ZT86IHN0cmluZztcbiAgcHJvbXB0OiBzdHJpbmc7XG4gIHRpbWVvdXRNcz86IG51bWJlcjtcbiAgcmVzcG9uc2VNaW1lVHlwZT86IHN0cmluZztcbiAgcmVzcG9uc2VTY2hlbWE/OiBTY2hlbWE7XG59KTogUHJvbWlzZTxHZW1pbmlHZW5lcmF0ZVJlc3VsdD4ge1xuICBjb25zdCByb3V0ZSA9IHBhcmFtcy5yb3V0ZSB8fCAndW5rbm93bic7XG4gIGNvbnN0IG1vZGVsID0gZ2V0VGFyZ2V0TW9kZWwoKTtcbiAgY29uc3QgdGltZW91dE1zID0gTWF0aC5tYXgoMTAwMCwgcGFyYW1zLnRpbWVvdXRNcyA/PyBERUZBVUxUX0dFTUlOSV9USU1FT1VUX01TKTtcbiAgY29uc3Qgc3RhcnRlZEF0ID0gRGF0ZS5ub3coKTtcblxuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWT8udHJpbSgpO1xuICBpZiAoIWFwaUtleSkge1xuICAgIGNvbnN0IGR1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gc3RhcnRlZEF0O1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBbUGFudG9NaXhdW0dlbWluaV0gcm91dGU9JHtyb3V0ZX0gbW9kZWw9JHttb2RlbH0gZHVyYXRpb25Ncz0ke2R1cmF0aW9uTXN9IHN0YXR1cz1ub25lIHJlYXNvbj1taXNzaW5nX2tleWBcbiAgICApO1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgcmVhc29uOiAnbWlzc2luZ19rZXknLCBtb2RlbCwgZHVyYXRpb25NcyB9O1xuICB9XG5cbiAgY29uc3QgYWkgPSBuZXcgR29vZ2xlR2VuQUkoe1xuICAgIGFwaUtleSxcbiAgICBodHRwT3B0aW9uczoge1xuICAgICAgdGltZW91dDogdGltZW91dE1zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnVXNlci1BZ2VudCc6ICdhaXN0dWRpby1idWlsZCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlPG5ldmVyPigoXywgcmVqZWN0KSA9PiB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lb3V0RXJyID0gbmV3IEVycm9yKGBHZW1pbmkgcmVxdWVzdCB0aW1lb3V0IGFmdGVyICR7dGltZW91dE1zfW1zYCk7XG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQodGltZW91dEVycik7XG4gICAgICAgIHJlamVjdCh0aW1lb3V0RXJyKTtcbiAgICAgIH0sIHRpbWVvdXRNcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZW5lcmF0ZVByb21pc2UgPSBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIG1vZGVsLFxuICAgICAgY29udGVudHM6IHBhcmFtcy5wcm9tcHQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgYWJvcnRTaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAuLi4ocGFyYW1zLnJlc3BvbnNlTWltZVR5cGUgPyB7IHJlc3BvbnNlTWltZVR5cGU6IHBhcmFtcy5yZXNwb25zZU1pbWVUeXBlIH0gOiB7fSksXG4gICAgICAgIC4uLihwYXJhbXMucmVzcG9uc2VTY2hlbWEgPyB7IHJlc3BvbnNlU2NoZW1hOiBwYXJhbXMucmVzcG9uc2VTY2hlbWEgfSA6IHt9KSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFByb21pc2UucmFjZShbZ2VuZXJhdGVQcm9taXNlLCB0aW1lb3V0UHJvbWlzZV0pO1xuICAgIGNvbnN0IGR1cmF0aW9uTXMgPSBEYXRlLm5vdygpIC0gc3RhcnRlZEF0O1xuICAgIGNvbnN0IHRleHQgPSByZXNwb25zZT8udGV4dD8udHJpbSgpO1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgYFtQYW50b01peF1bR2VtaW5pXSByb3V0ZT0ke3JvdXRlfSBtb2RlbD0ke21vZGVsfSBkdXJhdGlvbk1zPSR7ZHVyYXRpb25Nc30gc3RhdHVzPTIwMCBvaz10cnVlYFxuICAgICAgKTtcbiAgICAgIHJldHVybiB7IG9rOiB0cnVlLCB0ZXh0LCBtb2RlbCwgZHVyYXRpb25NcyB9O1xuICAgIH1cblxuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBbUGFudG9NaXhdW0dlbWluaV0gcm91dGU9JHtyb3V0ZX0gbW9kZWw9JHttb2RlbH0gZHVyYXRpb25Ncz0ke2R1cmF0aW9uTXN9IHN0YXR1cz0yMDAgcmVhc29uPWludmFsaWRfcmVzcG9uc2UgbWVzc2FnZT1cIkVtcHR5IHRleHQgcmV0dXJuZWQgYnkgR2VtaW5pXCJgXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgcmVhc29uOiAnaW52YWxpZF9yZXNwb25zZScsXG4gICAgICBtb2RlbCxcbiAgICAgIGR1cmF0aW9uTXMsXG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgZHVyYXRpb25NcyA9IERhdGUubm93KCkgLSBzdGFydGVkQXQ7XG4gICAgY29uc3QgcmVhc29uID0gY2xhc3NpZnlHZW1pbmlFcnJvcihlcnIpO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSBnZXRFcnJvclN0YXR1cyhlcnIpO1xuICAgIGNvbnN0IHNhbml0aXplZEVycm9yID0gcmVkYWN0U2VjcmV0cyhcbiAgICAgIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBTdHJpbmcoZXJyKSxcbiAgICAgIGFwaUtleVxuICAgICk7XG5cbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFtQYW50b01peF1bR2VtaW5pXSByb3V0ZT0ke3JvdXRlfSBtb2RlbD0ke21vZGVsfSBkdXJhdGlvbk1zPSR7ZHVyYXRpb25Nc30gc3RhdHVzPSR7c3RhdHVzQ29kZSA/PyAnbm9uZSd9IHJlYXNvbj0ke3JlYXNvbn0gbWVzc2FnZT1cIiR7c2FuaXRpemVkRXJyb3J9XCJgXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBvazogZmFsc2UsXG4gICAgICByZWFzb24sXG4gICAgICBtb2RlbCxcbiAgICAgIGR1cmF0aW9uTXMsXG4gICAgICBzdGF0dXNDb2RlLFxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiR29vZ2xlR2VuQUkiLCJERUZBVUxUX0dFTUlOSV9NT0RFTCIsIkRFRkFVTFRfR0VNSU5JX1RJTUVPVVRfTVMiLCJnZXRUYXJnZXRNb2RlbCIsImN1c3RvbSIsInByb2Nlc3MiLCJlbnYiLCJHRU1JTklfTU9ERUwiLCJ0cmltIiwiZ2V0RXJyb3JTdGF0dXMiLCJlcnIiLCJ2YWwiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJyZWRhY3RTZWNyZXRzIiwidGV4dCIsImFwaUtleSIsInNhbml0aXplZCIsImxlbmd0aCIsInNwbGl0Iiwiam9pbiIsInJlcGxhY2UiLCJzbGljZSIsImNsYXNzaWZ5R2VtaW5pRXJyb3IiLCJtc2ciLCJFcnJvciIsIm1lc3NhZ2UiLCJTdHJpbmciLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJsb3dlciIsImluY2x1ZGVzIiwic3RyaXBKc29uRmVuY2VzIiwicmF3IiwiZ2VuZXJhdGVXaXRoR2VtaW5pIiwicGFyYW1zIiwicm91dGUiLCJtb2RlbCIsInRpbWVvdXRNcyIsIk1hdGgiLCJtYXgiLCJzdGFydGVkQXQiLCJEYXRlIiwibm93IiwiR0VNSU5JX0FQSV9LRVkiLCJkdXJhdGlvbk1zIiwiY29uc29sZSIsIndhcm4iLCJvayIsInJlYXNvbiIsImFpIiwiaHR0cE9wdGlvbnMiLCJ0aW1lb3V0IiwiaGVhZGVycyIsImNvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ0aW1lciIsInRpbWVvdXRQcm9taXNlIiwiUHJvbWlzZSIsIl8iLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGltZW91dEVyciIsImFib3J0IiwiZ2VuZXJhdGVQcm9taXNlIiwibW9kZWxzIiwiZ2VuZXJhdGVDb250ZW50IiwiY29udGVudHMiLCJwcm9tcHQiLCJjb25maWciLCJhYm9ydFNpZ25hbCIsInNpZ25hbCIsInJlc3BvbnNlTWltZVR5cGUiLCJyZXNwb25zZVNjaGVtYSIsInJlc3BvbnNlIiwicmFjZSIsImluZm8iLCJzdGF0dXNDb2RlIiwic2FuaXRpemVkRXJyb3IiLCJlcnJvciIsImNsZWFyVGltZW91dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/gemini.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "./work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "?32c4":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?66e9":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "next/dist/shared/lib/no-fallback-error.external":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external");

/***/ }),

/***/ "next/dist/shared/lib/router/utils/app-paths":
/*!**************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/app-paths" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/app-paths");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/promises":
/*!***************************************!*\
  !*** external "node:stream/promises" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/promises");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@google","vendor-chunks/google-auth-library","vendor-chunks/ws","vendor-chunks/bignumber.js","vendor-chunks/gaxios","vendor-chunks/json-bigint","vendor-chunks/google-logging-utils","vendor-chunks/gcp-metadata","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/retry","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/base64-js","vendor-chunks/extend","vendor-chunks/p-retry","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Fwords%2Froute&page=%2Fapi%2Fai%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Fwords%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!")));
module.exports = __webpack_exports__;

})();