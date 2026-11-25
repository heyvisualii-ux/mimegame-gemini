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
exports.id = "app/api/ai/recommend/route";
exports.ids = ["app/api/ai/recommend/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Frecommend%2Froute&page=%2Fapi%2Fai%2Frecommend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Frecommend%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Frecommend%2Froute&page=%2Fapi%2Fai%2Frecommend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Frecommend%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/request-meta */ \"(rsc)/./node_modules/next/dist/server/request-meta.js\");\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/server/lib/trace/tracer */ \"(rsc)/./node_modules/next/dist/server/lib/trace/tracer.js\");\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/shared/lib/router/utils/app-paths */ \"next/dist/shared/lib/router/utils/app-paths\");\n/* harmony import */ var next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/base-http/node */ \"(rsc)/./node_modules/next/dist/server/base-http/node.js\");\n/* harmony import */ var next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/server/web/spec-extension/adapters/next-request */ \"(rsc)/./node_modules/next/dist/server/web/spec-extension/adapters/next-request.js\");\n/* harmony import */ var next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/server/lib/trace/constants */ \"(rsc)/./node_modules/next/dist/server/lib/trace/constants.js\");\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/server/instrumentation/utils */ \"(rsc)/./node_modules/next/dist/server/instrumentation/utils.js\");\n/* harmony import */ var next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dist/server/send-response */ \"(rsc)/./node_modules/next/dist/server/send-response.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/server/web/utils */ \"(rsc)/./node_modules/next/dist/server/web/utils.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dist/server/lib/cache-control */ \"(rsc)/./node_modules/next/dist/server/lib/cache-control.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dist/lib/constants */ \"(rsc)/./node_modules/next/dist/lib/constants.js\");\n/* harmony import */ var next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dist/shared/lib/no-fallback-error.external */ \"next/dist/shared/lib/no-fallback-error.external\");\n/* harmony import */ var next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/server/lib/route-cache-key */ \"(rsc)/./node_modules/next/dist/server/lib/route-cache-key.js\");\n/* harmony import */ var next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/dist/server/response-cache */ \"(rsc)/./node_modules/next/dist/server/response-cache/index.js\");\n/* harmony import */ var next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _app_applet_src_app_api_ai_recommend_route_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/app/api/ai/recommend/route.ts */ \"(rsc)/./src/app/api/ai/recommend/route.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ai/recommend/route\",\n        pathname: \"/api/ai/recommend\",\n        filename: \"route\",\n        bundlePath: \"app/api/ai/recommend/route\"\n    },\n    distDir: \".next-dev\" || 0,\n    relativeProjectDir:  false || '',\n    resolvedPagePath: \"/app/applet/src/app/api/ai/recommend/route.ts\",\n    nextConfigOutput,\n    userland: _app_applet_src_app_api_ai_recommend_route_ts__WEBPACK_IMPORTED_MODULE_17__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\nasync function handler(req, res, ctx) {\n    var _nextConfig_experimental;\n    let srcPage = \"/api/ai/recommend/route\";\n    // turbopack doesn't normalize `/index` in the page name\n    // so we need to to process dynamic routes properly\n    // TODO: fix turbopack providing differing value from webpack\n    if (false) {} else if (srcPage === '/index') {\n        // we always normalize /index specifically\n        srcPage = '/';\n    }\n    const multiZoneDraftMode = false;\n    const prepareResult = await routeModule.prepare(req, res, {\n        srcPage,\n        multiZoneDraftMode\n    });\n    if (!prepareResult) {\n        res.statusCode = 400;\n        res.end('Bad Request');\n        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());\n        return null;\n    }\n    const { buildId, params, nextConfig, isDraftMode, prerenderManifest, routerServerContext, isOnDemandRevalidate, revalidateOnlyGenerated, resolvedPathname } = prepareResult;\n    const normalizedSrcPage = (0,next_dist_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_5__.normalizeAppPath)(srcPage);\n    // Only this route's prerenders can establish ISR or admit generated params.\n    const isPrerendered = Boolean(prerenderManifest.routes[resolvedPathname]) && (routeModule.isDev || (0,next_dist_server_lib_route_cache_key__WEBPACK_IMPORTED_MODULE_15__.isRouteCacheOwner)(resolvedPathname, routeModule.cacheOwner, prerenderManifest.routes[resolvedPathname]));\n    let isIsr = Boolean(prerenderManifest.dynamicRoutes[normalizedSrcPage] || isPrerendered);\n    if (isIsr && !isDraftMode) {\n        const prerenderInfo = prerenderManifest.dynamicRoutes[normalizedSrcPage];\n        if (prerenderInfo) {\n            if (prerenderInfo.fallback === false && !isPrerendered) {\n                throw new next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError();\n            }\n        }\n    }\n    let cacheKey = null;\n    if (isIsr && !routeModule.isDev && !isDraftMode) {\n        cacheKey = resolvedPathname;\n        // ensure /index and / is normalized to one key\n        cacheKey = cacheKey === '/index' ? '/' : cacheKey;\n    }\n    const supportsDynamicResponse = // If we're in development, we always support dynamic HTML\n    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports\n    // dynamic HTML.\n    !isIsr;\n    // This is a revalidation request if the request is for a static\n    // page and it is not being resumed from a postponed render and\n    // it is not a dynamic RSC request then it is a revalidation\n    // request.\n    const isRevalidate = isIsr && !supportsDynamicResponse;\n    const method = req.method || 'GET';\n    const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.getTracer)();\n    const activeSpan = tracer.getActiveScopeSpan();\n    const context = {\n        params,\n        prerenderManifest,\n        renderOpts: {\n            experimental: {\n                cacheComponents: Boolean(nextConfig.experimental.cacheComponents),\n                authInterrupts: Boolean(nextConfig.experimental.authInterrupts)\n            },\n            supportsDynamicResponse,\n            incrementalCache: (0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'incrementalCache'),\n            cacheLifeProfiles: (_nextConfig_experimental = nextConfig.experimental) == null ? void 0 : _nextConfig_experimental.cacheLife,\n            isRevalidate,\n            waitUntil: ctx.waitUntil,\n            onClose: (cb)=>{\n                res.on('close', cb);\n            },\n            onAfterTaskError: undefined,\n            onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext)\n        },\n        sharedContext: {\n            buildId\n        }\n    };\n    const nodeNextReq = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextRequest(req);\n    const nodeNextRes = new next_dist_server_base_http_node__WEBPACK_IMPORTED_MODULE_6__.NodeNextResponse(res);\n    const nextReq = next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.NextRequestAdapter.fromNodeNextRequest(nodeNextReq, (0,next_dist_server_web_spec_extension_adapters_next_request__WEBPACK_IMPORTED_MODULE_7__.signalFromNodeResponse)(res));\n    try {\n        const invokeRouteModule = async (span)=>{\n            return routeModule.handle(nextReq, context).finally(()=>{\n                if (!span) return;\n                span.setAttributes({\n                    'http.status_code': res.statusCode,\n                    'next.rsc': false\n                });\n                const rootSpanAttributes = tracer.getRootSpanAttributes();\n                // We were unable to get attributes, probably OTEL is not enabled\n                if (!rootSpanAttributes) {\n                    return;\n                }\n                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest) {\n                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);\n                    return;\n                }\n                const route = rootSpanAttributes.get('next.route');\n                if (route) {\n                    const name = `${method} ${route}`;\n                    span.setAttributes({\n                        'next.route': route,\n                        'http.route': route,\n                        'next.span_name': name\n                    });\n                    span.updateName(name);\n                } else {\n                    span.updateName(`${method} ${req.url}`);\n                }\n            });\n        };\n        const handleResponse = async (currentSpan)=>{\n            var _cacheEntry_value;\n            const responseGenerator = async ({ previousCacheEntry })=>{\n                try {\n                    if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isOnDemandRevalidate && revalidateOnlyGenerated && !previousCacheEntry) {\n                        res.statusCode = 404;\n                        // on-demand revalidate always sets this header\n                        res.setHeader('x-nextjs-cache', 'REVALIDATED');\n                        res.end('This page could not be found');\n                        return null;\n                    }\n                    const response = await invokeRouteModule(currentSpan);\n                    req.fetchMetrics = context.renderOpts.fetchMetrics;\n                    let pendingWaitUntil = context.renderOpts.pendingWaitUntil;\n                    // Attempt using provided waitUntil if available\n                    // if it's not we fallback to sendResponse's handling\n                    if (pendingWaitUntil) {\n                        if (ctx.waitUntil) {\n                            ctx.waitUntil(pendingWaitUntil);\n                            pendingWaitUntil = undefined;\n                        }\n                    }\n                    const cacheTags = context.renderOpts.collectedTags;\n                    // If the request is for a static response, we can cache it so long\n                    // as it's not edge.\n                    if (isIsr) {\n                        const blob = await response.blob();\n                        // Copy the headers from the response.\n                        const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.toNodeOutgoingHttpHeaders)(response.headers);\n                        if (cacheTags) {\n                            headers[next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER] = cacheTags;\n                        }\n                        if (!headers['content-type'] && blob.type) {\n                            headers['content-type'] = blob.type;\n                        }\n                        const revalidate = typeof context.renderOpts.collectedRevalidate === 'undefined' || context.renderOpts.collectedRevalidate >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? false : context.renderOpts.collectedRevalidate;\n                        const expire = typeof context.renderOpts.collectedExpire === 'undefined' || context.renderOpts.collectedExpire >= next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.INFINITE_CACHE ? undefined : context.renderOpts.collectedExpire;\n                        // Create the cache entry for the response.\n                        const cacheEntry = {\n                            value: {\n                                kind: next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__.CachedRouteKind.APP_ROUTE,\n                                status: response.status,\n                                body: Buffer.from(await blob.arrayBuffer()),\n                                headers\n                            },\n                            cacheControl: {\n                                revalidate,\n                                expire\n                            }\n                        };\n                        return cacheEntry;\n                    } else {\n                        // send response without caching if not ISR\n                        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, response, context.renderOpts.pendingWaitUntil);\n                        return null;\n                    }\n                } catch (err) {\n                    // if this is a background revalidate we need to report\n                    // the request error here as it won't be bubbled\n                    if (previousCacheEntry == null ? void 0 : previousCacheEntry.isStale) {\n                        await routeModule.onRequestError(req, err, {\n                            routerKind: 'App Router',\n                            routePath: srcPage,\n                            routeType: 'route',\n                            revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                                isRevalidate,\n                                isOnDemandRevalidate\n                            })\n                        }, routerServerContext);\n                    }\n                    throw err;\n                }\n            };\n            const cacheEntry = await routeModule.handleResponse({\n                req,\n                nextConfig,\n                cacheKey,\n                routeKind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n                isFallback: false,\n                prerenderManifest,\n                isRoutePPREnabled: false,\n                isOnDemandRevalidate,\n                revalidateOnlyGenerated,\n                responseGenerator,\n                waitUntil: ctx.waitUntil\n            });\n            // we don't create a cacheEntry for ISR\n            if (!isIsr) {\n                return null;\n            }\n            if ((cacheEntry == null ? void 0 : (_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== next_dist_server_response_cache__WEBPACK_IMPORTED_MODULE_16__.CachedRouteKind.APP_ROUTE) {\n                var _cacheEntry_value1;\n                throw Object.defineProperty(new Error(`Invariant: app-route received invalid cache entry ${cacheEntry == null ? void 0 : (_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), \"__NEXT_ERROR_CODE\", {\n                    value: \"E701\",\n                    enumerable: false,\n                    configurable: true\n                });\n            }\n            if (!(0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode')) {\n                res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');\n            }\n            // Draft mode should never be cached\n            if (isDraftMode) {\n                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');\n            }\n            const headers = (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_11__.fromNodeOutgoingHttpHeaders)(cacheEntry.value.headers);\n            if (!((0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_3__.getRequestMeta)(req, 'minimalMode') && isIsr)) {\n                headers.delete(next_dist_lib_constants__WEBPACK_IMPORTED_MODULE_13__.NEXT_CACHE_TAGS_HEADER);\n            }\n            // If cache control is already set on the response we don't\n            // override it to allow users to customize it via next.config\n            if (cacheEntry.cacheControl && !res.getHeader('Cache-Control') && !headers.get('Cache-Control')) {\n                headers.set('Cache-Control', (0,next_dist_server_lib_cache_control__WEBPACK_IMPORTED_MODULE_12__.getCacheControlHeader)(cacheEntry.cacheControl));\n            }\n            await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(cacheEntry.value.body, {\n                headers,\n                status: cacheEntry.value.status || 200\n            }));\n            return null;\n        };\n        // TODO: activeSpan code path is for when wrapped by\n        // next-server can be removed when this is no longer used\n        if (activeSpan) {\n            await handleResponse(activeSpan);\n        } else {\n            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_8__.BaseServerSpan.handleRequest, {\n                    spanName: `${method} ${req.url}`,\n                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_4__.SpanKind.SERVER,\n                    attributes: {\n                        'http.method': method,\n                        'http.target': req.url\n                    }\n                }, handleResponse));\n        }\n    } catch (err) {\n        if (!(err instanceof next_dist_shared_lib_no_fallback_error_external__WEBPACK_IMPORTED_MODULE_14__.NoFallbackError)) {\n            await routeModule.onRequestError(req, err, {\n                routerKind: 'App Router',\n                routePath: normalizedSrcPage,\n                routeType: 'route',\n                revalidateReason: (0,next_dist_server_instrumentation_utils__WEBPACK_IMPORTED_MODULE_9__.getRevalidateReason)({\n                    isRevalidate,\n                    isOnDemandRevalidate\n                })\n            });\n        }\n        // rethrow so that we can handle serving error page\n        // If this is during static generation, throw the error again.\n        if (isIsr) throw err;\n        // Otherwise, send a 500 response.\n        await (0,next_dist_server_send_response__WEBPACK_IMPORTED_MODULE_10__.sendResponse)(nodeNextReq, nodeNextRes, new Response(null, {\n            status: 500\n        }));\n        return null;\n    }\n}\n\n//# sourceMappingURL=app-route.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhaSUyRnJlY29tbWVuZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWklMkZyZWNvbW1lbmQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhaSUyRnJlY29tbWVuZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZhcHAlMkZhcHBsZXQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCUyRmFwcGxldCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QmaXNHbG9iYWxOb3RGb3VuZEVuYWJsZWQ9ISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2Q7QUFDUztBQUNPO0FBQ0s7QUFDbUM7QUFDakQ7QUFDTztBQUNmO0FBQ3NDO0FBQ3pCO0FBQ007QUFDQztBQUNUO0FBQ1A7QUFDUTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhLFdBQW9DLElBQUksQ0FBRTtBQUN2RCx3QkFBd0IsTUFBdUM7QUFDL0Q7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFX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O0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZFQUE2RSxnRkFBYztBQUMzRixpQ0FBaUMsUUFBUSxFQUFFLFFBQVE7QUFDbkQsMEJBQTBCLHVFQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOLDZCQUE2Qiw2RkFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyRkFBbUI7QUFDckQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkVBQVk7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0IHsgZ2V0UmVxdWVzdE1ldGEgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yZXF1ZXN0LW1ldGFcIjtcbmltcG9ydCB7IGdldFRyYWNlciwgU3BhbktpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvdHJhY2UvdHJhY2VyXCI7XG5pbXBvcnQgeyBub3JtYWxpemVBcHBQYXRoIH0gZnJvbSBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hcHAtcGF0aHNcIjtcbmltcG9ydCB7IE5vZGVOZXh0UmVxdWVzdCwgTm9kZU5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Jhc2UtaHR0cC9ub2RlXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdEFkYXB0ZXIsIHNpZ25hbEZyb21Ob2RlUmVzcG9uc2UgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci93ZWIvc3BlYy1leHRlbnNpb24vYWRhcHRlcnMvbmV4dC1yZXF1ZXN0XCI7XG5pbXBvcnQgeyBCYXNlU2VydmVyU3BhbiB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi90cmFjZS9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldFJldmFsaWRhdGVSZWFzb24gfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9pbnN0cnVtZW50YXRpb24vdXRpbHNcIjtcbmltcG9ydCB7IHNlbmRSZXNwb25zZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3NlbmQtcmVzcG9uc2VcIjtcbmltcG9ydCB7IGZyb21Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycywgdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0Q2FjaGVDb250cm9sSGVhZGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL2NhY2hlLWNvbnRyb2xcIjtcbmltcG9ydCB7IElORklOSVRFX0NBQ0hFLCBORVhUX0NBQ0hFX1RBR1NfSEVBREVSIH0gZnJvbSBcIm5leHQvZGlzdC9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOb0ZhbGxiYWNrRXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbm8tZmFsbGJhY2stZXJyb3IuZXh0ZXJuYWxcIjtcbmltcG9ydCB7IGlzUm91dGVDYWNoZU93bmVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3JvdXRlLWNhY2hlLWtleVwiO1xuaW1wb3J0IHsgQ2FjaGVkUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcmVzcG9uc2UtY2FjaGVcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvYXBwL2FwcGxldC9zcmMvYXBwL2FwaS9haS9yZWNvbW1lbmQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwic3RhbmRhbG9uZVwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9haS9yZWNvbW1lbmQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9haS9yZWNvbW1lbmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FpL3JlY29tbWVuZC9yb3V0ZVwiXG4gICAgfSxcbiAgICBkaXN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfRElTVF9ESVIgfHwgJycsXG4gICAgcmVsYXRpdmVQcm9qZWN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfUFJPSkVDVF9ESVIgfHwgJycsXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvYXBwL2FwcGxldC9zcmMvYXBwL2FwaS9haS9yZWNvbW1lbmQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcywgY3R4KSB7XG4gICAgdmFyIF9uZXh0Q29uZmlnX2V4cGVyaW1lbnRhbDtcbiAgICBsZXQgc3JjUGFnZSA9IFwiL2FwaS9haS9yZWNvbW1lbmQvcm91dGVcIjtcbiAgICAvLyB0dXJib3BhY2sgZG9lc24ndCBub3JtYWxpemUgYC9pbmRleGAgaW4gdGhlIHBhZ2UgbmFtZVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gdG8gcHJvY2VzcyBkeW5hbWljIHJvdXRlcyBwcm9wZXJseVxuICAgIC8vIFRPRE86IGZpeCB0dXJib3BhY2sgcHJvdmlkaW5nIGRpZmZlcmluZyB2YWx1ZSBmcm9tIHdlYnBhY2tcbiAgICBpZiAocHJvY2Vzcy5lbnYuVFVSQk9QQUNLKSB7XG4gICAgICAgIHNyY1BhZ2UgPSBzcmNQYWdlLnJlcGxhY2UoL1xcL2luZGV4JC8sICcnKSB8fCAnLyc7XG4gICAgfSBlbHNlIGlmIChzcmNQYWdlID09PSAnL2luZGV4Jykge1xuICAgICAgICAvLyB3ZSBhbHdheXMgbm9ybWFsaXplIC9pbmRleCBzcGVjaWZpY2FsbHlcbiAgICAgICAgc3JjUGFnZSA9ICcvJztcbiAgICB9XG4gICAgY29uc3QgbXVsdGlab25lRHJhZnRNb2RlID0gcHJvY2Vzcy5lbnYuX19ORVhUX01VTFRJX1pPTkVfRFJBRlRfTU9ERTtcbiAgICBjb25zdCBwcmVwYXJlUmVzdWx0ID0gYXdhaXQgcm91dGVNb2R1bGUucHJlcGFyZShyZXEsIHJlcywge1xuICAgICAgICBzcmNQYWdlLFxuICAgICAgICBtdWx0aVpvbmVEcmFmdE1vZGVcbiAgICB9KTtcbiAgICBpZiAoIXByZXBhcmVSZXN1bHQpIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDA7XG4gICAgICAgIHJlcy5lbmQoJ0JhZCBSZXF1ZXN0Jyk7XG4gICAgICAgIGN0eC53YWl0VW50aWwgPT0gbnVsbCA/IHZvaWQgMCA6IGN0eC53YWl0VW50aWwuY2FsbChjdHgsIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsgYnVpbGRJZCwgcGFyYW1zLCBuZXh0Q29uZmlnLCBpc0RyYWZ0TW9kZSwgcHJlcmVuZGVyTWFuaWZlc3QsIHJvdXRlclNlcnZlckNvbnRleHQsIGlzT25EZW1hbmRSZXZhbGlkYXRlLCByZXZhbGlkYXRlT25seUdlbmVyYXRlZCwgcmVzb2x2ZWRQYXRobmFtZSB9ID0gcHJlcGFyZVJlc3VsdDtcbiAgICBjb25zdCBub3JtYWxpemVkU3JjUGFnZSA9IG5vcm1hbGl6ZUFwcFBhdGgoc3JjUGFnZSk7XG4gICAgLy8gT25seSB0aGlzIHJvdXRlJ3MgcHJlcmVuZGVycyBjYW4gZXN0YWJsaXNoIElTUiBvciBhZG1pdCBnZW5lcmF0ZWQgcGFyYW1zLlxuICAgIGNvbnN0IGlzUHJlcmVuZGVyZWQgPSBCb29sZWFuKHByZXJlbmRlck1hbmlmZXN0LnJvdXRlc1tyZXNvbHZlZFBhdGhuYW1lXSkgJiYgKHJvdXRlTW9kdWxlLmlzRGV2IHx8IGlzUm91dGVDYWNoZU93bmVyKHJlc29sdmVkUGF0aG5hbWUsIHJvdXRlTW9kdWxlLmNhY2hlT3duZXIsIHByZXJlbmRlck1hbmlmZXN0LnJvdXRlc1tyZXNvbHZlZFBhdGhuYW1lXSkpO1xuICAgIGxldCBpc0lzciA9IEJvb2xlYW4ocHJlcmVuZGVyTWFuaWZlc3QuZHluYW1pY1JvdXRlc1tub3JtYWxpemVkU3JjUGFnZV0gfHwgaXNQcmVyZW5kZXJlZCk7XG4gICAgaWYgKGlzSXNyICYmICFpc0RyYWZ0TW9kZSkge1xuICAgICAgICBjb25zdCBwcmVyZW5kZXJJbmZvID0gcHJlcmVuZGVyTWFuaWZlc3QuZHluYW1pY1JvdXRlc1tub3JtYWxpemVkU3JjUGFnZV07XG4gICAgICAgIGlmIChwcmVyZW5kZXJJbmZvKSB7XG4gICAgICAgICAgICBpZiAocHJlcmVuZGVySW5mby5mYWxsYmFjayA9PT0gZmFsc2UgJiYgIWlzUHJlcmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm9GYWxsYmFja0Vycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGNhY2hlS2V5ID0gbnVsbDtcbiAgICBpZiAoaXNJc3IgJiYgIXJvdXRlTW9kdWxlLmlzRGV2ICYmICFpc0RyYWZ0TW9kZSkge1xuICAgICAgICBjYWNoZUtleSA9IHJlc29sdmVkUGF0aG5hbWU7XG4gICAgICAgIC8vIGVuc3VyZSAvaW5kZXggYW5kIC8gaXMgbm9ybWFsaXplZCB0byBvbmUga2V5XG4gICAgICAgIGNhY2hlS2V5ID0gY2FjaGVLZXkgPT09ICcvaW5kZXgnID8gJy8nIDogY2FjaGVLZXk7XG4gICAgfVxuICAgIGNvbnN0IHN1cHBvcnRzRHluYW1pY1Jlc3BvbnNlID0gLy8gSWYgd2UncmUgaW4gZGV2ZWxvcG1lbnQsIHdlIGFsd2F5cyBzdXBwb3J0IGR5bmFtaWMgSFRNTFxuICAgIHJvdXRlTW9kdWxlLmlzRGV2ID09PSB0cnVlIHx8IC8vIElmIHRoaXMgaXMgbm90IFNTRyBvciBkb2VzIG5vdCBoYXZlIHN0YXRpYyBwYXRocywgdGhlbiBpdCBzdXBwb3J0c1xuICAgIC8vIGR5bmFtaWMgSFRNTC5cbiAgICAhaXNJc3I7XG4gICAgLy8gVGhpcyBpcyBhIHJldmFsaWRhdGlvbiByZXF1ZXN0IGlmIHRoZSByZXF1ZXN0IGlzIGZvciBhIHN0YXRpY1xuICAgIC8vIHBhZ2UgYW5kIGl0IGlzIG5vdCBiZWluZyByZXN1bWVkIGZyb20gYSBwb3N0cG9uZWQgcmVuZGVyIGFuZFxuICAgIC8vIGl0IGlzIG5vdCBhIGR5bmFtaWMgUlNDIHJlcXVlc3QgdGhlbiBpdCBpcyBhIHJldmFsaWRhdGlvblxuICAgIC8vIHJlcXVlc3QuXG4gICAgY29uc3QgaXNSZXZhbGlkYXRlID0gaXNJc3IgJiYgIXN1cHBvcnRzRHluYW1pY1Jlc3BvbnNlO1xuICAgIGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2QgfHwgJ0dFVCc7XG4gICAgY29uc3QgdHJhY2VyID0gZ2V0VHJhY2VyKCk7XG4gICAgY29uc3QgYWN0aXZlU3BhbiA9IHRyYWNlci5nZXRBY3RpdmVTY29wZVNwYW4oKTtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHByZXJlbmRlck1hbmlmZXN0LFxuICAgICAgICByZW5kZXJPcHRzOiB7XG4gICAgICAgICAgICBleHBlcmltZW50YWw6IHtcbiAgICAgICAgICAgICAgICBjYWNoZUNvbXBvbmVudHM6IEJvb2xlYW4obmV4dENvbmZpZy5leHBlcmltZW50YWwuY2FjaGVDb21wb25lbnRzKSxcbiAgICAgICAgICAgICAgICBhdXRoSW50ZXJydXB0czogQm9vbGVhbihuZXh0Q29uZmlnLmV4cGVyaW1lbnRhbC5hdXRoSW50ZXJydXB0cylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdXBwb3J0c0R5bmFtaWNSZXNwb25zZSxcbiAgICAgICAgICAgIGluY3JlbWVudGFsQ2FjaGU6IGdldFJlcXVlc3RNZXRhKHJlcSwgJ2luY3JlbWVudGFsQ2FjaGUnKSxcbiAgICAgICAgICAgIGNhY2hlTGlmZVByb2ZpbGVzOiAoX25leHRDb25maWdfZXhwZXJpbWVudGFsID0gbmV4dENvbmZpZy5leHBlcmltZW50YWwpID09IG51bGwgPyB2b2lkIDAgOiBfbmV4dENvbmZpZ19leHBlcmltZW50YWwuY2FjaGVMaWZlLFxuICAgICAgICAgICAgaXNSZXZhbGlkYXRlLFxuICAgICAgICAgICAgd2FpdFVudGlsOiBjdHgud2FpdFVudGlsLFxuICAgICAgICAgICAgb25DbG9zZTogKGNiKT0+e1xuICAgICAgICAgICAgICAgIHJlcy5vbignY2xvc2UnLCBjYik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25BZnRlclRhc2tFcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb25JbnN0cnVtZW50YXRpb25SZXF1ZXN0RXJyb3I6IChlcnJvciwgX3JlcXVlc3QsIGVycm9yQ29udGV4dCk9PnJvdXRlTW9kdWxlLm9uUmVxdWVzdEVycm9yKHJlcSwgZXJyb3IsIGVycm9yQ29udGV4dCwgcm91dGVyU2VydmVyQ29udGV4dClcbiAgICAgICAgfSxcbiAgICAgICAgc2hhcmVkQ29udGV4dDoge1xuICAgICAgICAgICAgYnVpbGRJZFxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBub2RlTmV4dFJlcSA9IG5ldyBOb2RlTmV4dFJlcXVlc3QocmVxKTtcbiAgICBjb25zdCBub2RlTmV4dFJlcyA9IG5ldyBOb2RlTmV4dFJlc3BvbnNlKHJlcyk7XG4gICAgY29uc3QgbmV4dFJlcSA9IE5leHRSZXF1ZXN0QWRhcHRlci5mcm9tTm9kZU5leHRSZXF1ZXN0KG5vZGVOZXh0UmVxLCBzaWduYWxGcm9tTm9kZVJlc3BvbnNlKHJlcykpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGludm9rZVJvdXRlTW9kdWxlID0gYXN5bmMgKHNwYW4pPT57XG4gICAgICAgICAgICByZXR1cm4gcm91dGVNb2R1bGUuaGFuZGxlKG5leHRSZXEsIGNvbnRleHQpLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICBpZiAoIXNwYW4pIHJldHVybjtcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAnaHR0cC5zdGF0dXNfY29kZSc6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICAgICAgICAgICAgICAnbmV4dC5yc2MnOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RTcGFuQXR0cmlidXRlcyA9IHRyYWNlci5nZXRSb290U3BhbkF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICAvLyBXZSB3ZXJlIHVuYWJsZSB0byBnZXQgYXR0cmlidXRlcywgcHJvYmFibHkgT1RFTCBpcyBub3QgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGlmICghcm9vdFNwYW5BdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvb3RTcGFuQXR0cmlidXRlcy5nZXQoJ25leHQuc3Bhbl90eXBlJykgIT09IEJhc2VTZXJ2ZXJTcGFuLmhhbmRsZVJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmV4cGVjdGVkIHJvb3Qgc3BhbiB0eXBlICcke3Jvb3RTcGFuQXR0cmlidXRlcy5nZXQoJ25leHQuc3Bhbl90eXBlJyl9Jy4gUGxlYXNlIHJlcG9ydCB0aGlzIE5leHQuanMgaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSByb290U3BhbkF0dHJpYnV0ZXMuZ2V0KCduZXh0LnJvdXRlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgJHttZXRob2R9ICR7cm91dGV9YDtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduZXh0LnJvdXRlJzogcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cC5yb3V0ZSc6IHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25leHQuc3Bhbl9uYW1lJzogbmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi51cGRhdGVOYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4udXBkYXRlTmFtZShgJHttZXRob2R9ICR7cmVxLnVybH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSBhc3luYyAoY3VycmVudFNwYW4pPT57XG4gICAgICAgICAgICB2YXIgX2NhY2hlRW50cnlfdmFsdWU7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUdlbmVyYXRvciA9IGFzeW5jICh7IHByZXZpb3VzQ2FjaGVFbnRyeSB9KT0+e1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0UmVxdWVzdE1ldGEocmVxLCAnbWluaW1hbE1vZGUnKSAmJiBpc09uRGVtYW5kUmV2YWxpZGF0ZSAmJiByZXZhbGlkYXRlT25seUdlbmVyYXRlZCAmJiAhcHJldmlvdXNDYWNoZUVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uLWRlbWFuZCByZXZhbGlkYXRlIGFsd2F5cyBzZXRzIHRoaXMgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCd4LW5leHRqcy1jYWNoZScsICdSRVZBTElEQVRFRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVuZCgnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnZva2VSb3V0ZU1vZHVsZShjdXJyZW50U3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5mZXRjaE1ldHJpY3MgPSBjb250ZXh0LnJlbmRlck9wdHMuZmV0Y2hNZXRyaWNzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGVuZGluZ1dhaXRVbnRpbCA9IGNvbnRleHQucmVuZGVyT3B0cy5wZW5kaW5nV2FpdFVudGlsO1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHVzaW5nIHByb3ZpZGVkIHdhaXRVbnRpbCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQncyBub3Qgd2UgZmFsbGJhY2sgdG8gc2VuZFJlc3BvbnNlJ3MgaGFuZGxpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdXYWl0VW50aWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHgud2FpdFVudGlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LndhaXRVbnRpbChwZW5kaW5nV2FpdFVudGlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nV2FpdFVudGlsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlVGFncyA9IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRUYWdzO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBpcyBmb3IgYSBzdGF0aWMgcmVzcG9uc2UsIHdlIGNhbiBjYWNoZSBpdCBzbyBsb25nXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGl0J3Mgbm90IGVkZ2UuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lzcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvcHkgdGhlIGhlYWRlcnMgZnJvbSB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW05FWFRfQ0FDSEVfVEFHU19IRUFERVJdID0gY2FjaGVUYWdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoZWFkZXJzWydjb250ZW50LXR5cGUnXSAmJiBibG9iLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydjb250ZW50LXR5cGUnXSA9IGJsb2IudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmFsaWRhdGUgPSB0eXBlb2YgY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZFJldmFsaWRhdGUgPT09ICd1bmRlZmluZWQnIHx8IGNvbnRleHQucmVuZGVyT3B0cy5jb2xsZWN0ZWRSZXZhbGlkYXRlID49IElORklOSVRFX0NBQ0hFID8gZmFsc2UgOiBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkUmV2YWxpZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IHR5cGVvZiBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkRXhwaXJlID09PSAndW5kZWZpbmVkJyB8fCBjb250ZXh0LnJlbmRlck9wdHMuY29sbGVjdGVkRXhwaXJlID49IElORklOSVRFX0NBQ0hFID8gdW5kZWZpbmVkIDogY29udGV4dC5yZW5kZXJPcHRzLmNvbGxlY3RlZEV4cGlyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgY2FjaGUgZW50cnkgZm9yIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogQ2FjaGVkUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEJ1ZmZlci5mcm9tKGF3YWl0IGJsb2IuYXJyYXlCdWZmZXIoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlQ29udHJvbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZhbGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlRW50cnk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIHJlc3BvbnNlIHdpdGhvdXQgY2FjaGluZyBpZiBub3QgSVNSXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZW5kUmVzcG9uc2Uobm9kZU5leHRSZXEsIG5vZGVOZXh0UmVzLCByZXNwb25zZSwgY29udGV4dC5yZW5kZXJPcHRzLnBlbmRpbmdXYWl0VW50aWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGJhY2tncm91bmQgcmV2YWxpZGF0ZSB3ZSBuZWVkIHRvIHJlcG9ydFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcmVxdWVzdCBlcnJvciBoZXJlIGFzIGl0IHdvbid0IGJlIGJ1YmJsZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzQ2FjaGVFbnRyeSA9PSBudWxsID8gdm9pZCAwIDogcHJldmlvdXNDYWNoZUVudHJ5LmlzU3RhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHJvdXRlTW9kdWxlLm9uUmVxdWVzdEVycm9yKHJlcSwgZXJyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyS2luZDogJ0FwcCBSb3V0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlUGF0aDogc3JjUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZVR5cGU6ICdyb3V0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVJlYXNvbjogZ2V0UmV2YWxpZGF0ZVJlYXNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPbkRlbWFuZFJldmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcm91dGVyU2VydmVyQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBjYWNoZUVudHJ5ID0gYXdhaXQgcm91dGVNb2R1bGUuaGFuZGxlUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgICBuZXh0Q29uZmlnLFxuICAgICAgICAgICAgICAgIGNhY2hlS2V5LFxuICAgICAgICAgICAgICAgIHJvdXRlS2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgICAgICAgICBpc0ZhbGxiYWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwcmVyZW5kZXJNYW5pZmVzdCxcbiAgICAgICAgICAgICAgICBpc1JvdXRlUFBSRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNPbkRlbWFuZFJldmFsaWRhdGUsXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZU9ubHlHZW5lcmF0ZWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VHZW5lcmF0b3IsXG4gICAgICAgICAgICAgICAgd2FpdFVudGlsOiBjdHgud2FpdFVudGlsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHdlIGRvbid0IGNyZWF0ZSBhIGNhY2hlRW50cnkgZm9yIElTUlxuICAgICAgICAgICAgaWYgKCFpc0lzcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChjYWNoZUVudHJ5ID09IG51bGwgPyB2b2lkIDAgOiAoX2NhY2hlRW50cnlfdmFsdWUgPSBjYWNoZUVudHJ5LnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2NhY2hlRW50cnlfdmFsdWUua2luZCkgIT09IENhY2hlZFJvdXRlS2luZC5BUFBfUk9VVEUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2NhY2hlRW50cnlfdmFsdWUxO1xuICAgICAgICAgICAgICAgIHRocm93IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXcgRXJyb3IoYEludmFyaWFudDogYXBwLXJvdXRlIHJlY2VpdmVkIGludmFsaWQgY2FjaGUgZW50cnkgJHtjYWNoZUVudHJ5ID09IG51bGwgPyB2b2lkIDAgOiAoX2NhY2hlRW50cnlfdmFsdWUxID0gY2FjaGVFbnRyeS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jYWNoZUVudHJ5X3ZhbHVlMS5raW5kfWApLCBcIl9fTkVYVF9FUlJPUl9DT0RFXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiRTcwMVwiLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWdldFJlcXVlc3RNZXRhKHJlcSwgJ21pbmltYWxNb2RlJykpIHtcbiAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCd4LW5leHRqcy1jYWNoZScsIGlzT25EZW1hbmRSZXZhbGlkYXRlID8gJ1JFVkFMSURBVEVEJyA6IGNhY2hlRW50cnkuaXNNaXNzID8gJ01JU1MnIDogY2FjaGVFbnRyeS5pc1N0YWxlID8gJ1NUQUxFJyA6ICdISVQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERyYWZ0IG1vZGUgc2hvdWxkIG5ldmVyIGJlIGNhY2hlZFxuICAgICAgICAgICAgaWYgKGlzRHJhZnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICdwcml2YXRlLCBuby1jYWNoZSwgbm8tc3RvcmUsIG1heC1hZ2U9MCwgbXVzdC1yZXZhbGlkYXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gZnJvbU5vZGVPdXRnb2luZ0h0dHBIZWFkZXJzKGNhY2hlRW50cnkudmFsdWUuaGVhZGVycyk7XG4gICAgICAgICAgICBpZiAoIShnZXRSZXF1ZXN0TWV0YShyZXEsICdtaW5pbWFsTW9kZScpICYmIGlzSXNyKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMuZGVsZXRlKE5FWFRfQ0FDSEVfVEFHU19IRUFERVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgY2FjaGUgY29udHJvbCBpcyBhbHJlYWR5IHNldCBvbiB0aGUgcmVzcG9uc2Ugd2UgZG9uJ3RcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlIGl0IHRvIGFsbG93IHVzZXJzIHRvIGN1c3RvbWl6ZSBpdCB2aWEgbmV4dC5jb25maWdcbiAgICAgICAgICAgIGlmIChjYWNoZUVudHJ5LmNhY2hlQ29udHJvbCAmJiAhcmVzLmdldEhlYWRlcignQ2FjaGUtQ29udHJvbCcpICYmICFoZWFkZXJzLmdldCgnQ2FjaGUtQ29udHJvbCcpKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVycy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCBnZXRDYWNoZUNvbnRyb2xIZWFkZXIoY2FjaGVFbnRyeS5jYWNoZUNvbnRyb2wpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHNlbmRSZXNwb25zZShub2RlTmV4dFJlcSwgbm9kZU5leHRSZXMsIG5ldyBSZXNwb25zZShjYWNoZUVudHJ5LnZhbHVlLmJvZHksIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIHN0YXR1czogY2FjaGVFbnRyeS52YWx1ZS5zdGF0dXMgfHwgMjAwXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVE9ETzogYWN0aXZlU3BhbiBjb2RlIHBhdGggaXMgZm9yIHdoZW4gd3JhcHBlZCBieVxuICAgICAgICAvLyBuZXh0LXNlcnZlciBjYW4gYmUgcmVtb3ZlZCB3aGVuIHRoaXMgaXMgbm8gbG9uZ2VyIHVzZWRcbiAgICAgICAgaWYgKGFjdGl2ZVNwYW4pIHtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZVJlc3BvbnNlKGFjdGl2ZVNwYW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdHJhY2VyLndpdGhQcm9wYWdhdGVkQ29udGV4dChyZXEuaGVhZGVycywgKCk9PnRyYWNlci50cmFjZShCYXNlU2VydmVyU3Bhbi5oYW5kbGVSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW5OYW1lOiBgJHttZXRob2R9ICR7cmVxLnVybH1gLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiBTcGFuS2luZC5TRVJWRVIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwLm1ldGhvZCc6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwLnRhcmdldCc6IHJlcS51cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGhhbmRsZVJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgTm9GYWxsYmFja0Vycm9yKSkge1xuICAgICAgICAgICAgYXdhaXQgcm91dGVNb2R1bGUub25SZXF1ZXN0RXJyb3IocmVxLCBlcnIsIHtcbiAgICAgICAgICAgICAgICByb3V0ZXJLaW5kOiAnQXBwIFJvdXRlcicsXG4gICAgICAgICAgICAgICAgcm91dGVQYXRoOiBub3JtYWxpemVkU3JjUGFnZSxcbiAgICAgICAgICAgICAgICByb3V0ZVR5cGU6ICdyb3V0ZScsXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVJlYXNvbjogZ2V0UmV2YWxpZGF0ZVJlYXNvbih7XG4gICAgICAgICAgICAgICAgICAgIGlzUmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNPbkRlbWFuZFJldmFsaWRhdGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0aHJvdyBzbyB0aGF0IHdlIGNhbiBoYW5kbGUgc2VydmluZyBlcnJvciBwYWdlXG4gICAgICAgIC8vIElmIHRoaXMgaXMgZHVyaW5nIHN0YXRpYyBnZW5lcmF0aW9uLCB0aHJvdyB0aGUgZXJyb3IgYWdhaW4uXG4gICAgICAgIGlmIChpc0lzcikgdGhyb3cgZXJyO1xuICAgICAgICAvLyBPdGhlcndpc2UsIHNlbmQgYSA1MDAgcmVzcG9uc2UuXG4gICAgICAgIGF3YWl0IHNlbmRSZXNwb25zZShub2RlTmV4dFJlcSwgbm9kZU5leHRSZXMsIG5ldyBSZXNwb25zZShudWxsLCB7XG4gICAgICAgICAgICBzdGF0dXM6IDUwMFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Frecommend%2Froute&page=%2Fapi%2Fai%2Frecommend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Frecommend%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/ai/recommend/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/ai/recommend/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic),\n/* harmony export */   maxDuration: () => (/* binding */ maxDuration)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _google_genai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/genai */ \"(rsc)/./node_modules/@google/genai/dist/node/index.mjs\");\n/* harmony import */ var _lib_gemini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/gemini */ \"(rsc)/./src/lib/gemini.ts\");\n\n\n\nconst dynamic = 'force-dynamic';\nconst maxDuration = 60;\nasync function POST(req) {\n    try {\n        const body = await req.json().catch(()=>({}));\n        const { playerCount = 4, ageRange = '۱۸ تا ۳۵', groupType = 'FRIENDS', minutes = 30, mood = 'FUNNY' } = body;\n        const prompt = `\nYou are \"Panto\" (پانتو), the groovy, comedic 70s-style mascot and AI Game Master for \"PantoMix\" (پانتومیکس - Persian Pantomime Party Game).\nAnalyze this Iranian party setup:\n- Player Count: ${playerCount}\n- Age Range: ${ageRange}\n- Group Type: ${groupType} (FRIENDS, FAMILY, WORK, or KIDS)\n- Available Time: ${minutes} minutes\n- Group Mood: ${mood} (FUNNY, COMPETITIVE, ENERGETIC, or CHILL)\n\nReturn ONLY a valid JSON object matching the schema.\n\"recommendedModeId\" must be one of: \"CLASSIC\", \"SPEED_CHALLENGE\", \"TEAM_BATTLE\", \"AI_CHALLENGE\", \"FAMILY\", \"PARTY_EXTREME\".\n\"suggestedCategoryIds\" should use relevant IDs from: [\"cinema\", \"funny\", \"proverbs\", \"animals\", \"objects\", \"jobs\", \"sports\"].\n`;\n        const result = await (0,_lib_gemini__WEBPACK_IMPORTED_MODULE_2__.generateWithGemini)({\n            route: '/api/ai/recommend',\n            prompt,\n            timeoutMs: _lib_gemini__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_GEMINI_TIMEOUT_MS,\n            responseMimeType: 'application/json',\n            responseSchema: {\n                type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.OBJECT,\n                properties: {\n                    recommendedModeTitle: {\n                        type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING\n                    },\n                    recommendedModeId: {\n                        type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING\n                    },\n                    mimeoGreeting: {\n                        type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING\n                    },\n                    suggestedCategoryIds: {\n                        type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.ARRAY,\n                        items: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING\n                        }\n                    },\n                    targetRounds: {\n                        type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.NUMBER\n                    },\n                    roundTimerSeconds: {\n                        type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.NUMBER\n                    },\n                    funTip: {\n                        type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING\n                    }\n                },\n                required: [\n                    'recommendedModeTitle',\n                    'recommendedModeId',\n                    'mimeoGreeting',\n                    'suggestedCategoryIds',\n                    'targetRounds',\n                    'roundTimerSeconds',\n                    'funTip'\n                ]\n            }\n        });\n        if (result.ok) {\n            try {\n                const parsed = JSON.parse((0,_lib_gemini__WEBPACK_IMPORTED_MODULE_2__.stripJsonFences)(result.text));\n                if (parsed && parsed.recommendedModeTitle && parsed.mimeoGreeting) {\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        success: true,\n                        source: 'gemini',\n                        model: result.model,\n                        data: parsed\n                    });\n                }\n            } catch (parseErr) {\n                const parseMsg = parseErr instanceof Error ? parseErr.message : String(parseErr);\n                console.error(`[PantoMix][Gemini] route=/api/ai/recommend model=${result.model} durationMs=${result.durationMs} status=200 reason=invalid_response message=\"Invalid JSON: ${parseMsg}\"`);\n            }\n        }\n        const fallbackReason = result.ok ? 'invalid_response' : result.reason;\n        const fallback = getFallbackRecommendation(groupType, playerCount);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            source: 'fallback',\n            fallbackReason,\n            data: fallback\n        });\n    } catch (error) {\n        console.error('API Error', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\nfunction getFallbackRecommendation(groupType, playerCount) {\n    if (groupType === 'FAMILY' || groupType === 'KIDS') {\n        return {\n            recommendedModeTitle: 'بازی خانوادگی صمیمی 👨‍👩‍👧‍👦',\n            recommendedModeId: 'FAMILY',\n            mimeoGreeting: `سلام به جمع ${playerCount} نفره پرمحبت! پانتو کلمات شاد و پرخنده‌ای آماده کرده تا همه سنین حسابی لذت ببرن!`,\n            suggestedCategoryIds: [\n                'animals',\n                'objects',\n                'funny'\n            ],\n            targetRounds: 3,\n            roundTimerSeconds: 120,\n            funTip: 'کوچک‌ترها هم می‌تونن داور بشن یا با بزرگ‌ترها تیم مشترک تشکیل بدن!'\n        };\n    }\n    if (groupType === 'WORK') {\n        return {\n            recommendedModeTitle: 'رقابت حماسی تیم همکاران 💼',\n            recommendedModeId: 'TEAM_BATTLE',\n            mimeoGreeting: 'وقت شکستن یخ جلسه و نشون دادن استعدادهای پنهان بازیگری همکارانه! آماده‌اید رقبا رو مات کنید؟',\n            suggestedCategoryIds: [\n                'jobs',\n                'cinema',\n                'proverbs'\n            ],\n            targetRounds: 4,\n            roundTimerSeconds: 90,\n            funTip: 'استفاده از حرکات دست و نگاه‌های معنادار مجازه، اما لب زدن اکیداً ممنوع!'\n        };\n    }\n    return {\n        recommendedModeTitle: 'پارتی اکستریم پانتومیم 🔥',\n        recommendedModeId: 'PARTY_EXTREME',\n        mimeoGreeting: `سلام رفقا! پانتو اینجاست تا جمع ${playerCount} نفره‌تون رو با چالش‌های غیرمنتظره به آتیش بکشه!`,\n        suggestedCategoryIds: [\n            'cinema',\n            'funny',\n            'proverbs'\n        ],\n        targetRounds: 4,\n        roundTimerSeconds: 90,\n        funTip: 'قبل از شروع، حتماً عضلات صورت و دست‌هاتون رو خوب گرم کنید که قراره حسابی بخندیم!'\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDLGFBQWFBO1FBQzNCLE9BQU9yRCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVpQyxTQUFTO1lBQU9VLE9BQU87UUFBd0IsR0FBRztZQUFFTSxRQUFRO1FBQUk7SUFDN0Y7QUFDRjtBQUVBLFNBQVNELDBCQUEwQjVDLFNBQWlCLEVBQUVGLFdBQW1CO0lBQ3ZFLElBQUlFLGNBQWMsWUFBWUEsY0FBYyxRQUFRO1FBQ2xELE9BQU87WUFDTFksc0JBQXNCO1lBQ3RCRSxtQkFBbUI7WUFDbkJDLGVBQWUsQ0FBQyxZQUFZLEVBQUVqQixZQUFZLGdGQUFnRixDQUFDO1lBQzNIa0Isc0JBQXNCO2dCQUFDO2dCQUFXO2dCQUFXO2FBQVE7WUFDckRHLGNBQWM7WUFDZEUsbUJBQW1CO1lBQ25CQyxRQUFRO1FBQ1Y7SUFDRjtJQUVBLElBQUl0QixjQUFjLFFBQVE7UUFDeEIsT0FBTztZQUNMWSxzQkFBc0I7WUFDdEJFLG1CQUFtQjtZQUNuQkMsZUFBZTtZQUNmQyxzQkFBc0I7Z0JBQUM7Z0JBQVE7Z0JBQVU7YUFBVztZQUNwREcsY0FBYztZQUNkRSxtQkFBbUI7WUFDbkJDLFFBQVE7UUFDVjtJQUNGO0lBRUEsT0FBTztRQUNMVixzQkFBc0I7UUFDdEJFLG1CQUFtQjtRQUNuQkMsZUFBZSxDQUFDLGdDQUFnQyxFQUFFakIsWUFBWSxnREFBZ0QsQ0FBQztRQUMvR2tCLHNCQUFzQjtZQUFDO1lBQVU7WUFBUztTQUFXO1FBQ3JERyxjQUFjO1FBQ2RFLG1CQUFtQjtRQUNuQkMsUUFBUTtJQUNWO0FBQ0YiLCJzb3VyY2VzIjpbIi9hcHAvYXBwbGV0L3NyYy9hcHAvYXBpL2FpL3JlY29tbWVuZC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGdvb2dsZS9nZW5haSc7XG5pbXBvcnQgeyBBaUdhbWVSZWNvbW1lbmRhdGlvbiwgR2FtZU1vZGVJZCB9IGZyb20gJ0AvdHlwZXMvZ2FtZSc7XG5pbXBvcnQge1xuICBERUZBVUxUX0dFTUlOSV9USU1FT1VUX01TLFxuICBnZW5lcmF0ZVdpdGhHZW1pbmksXG4gIHN0cmlwSnNvbkZlbmNlcyxcbn0gZnJvbSAnQC9saWIvZ2VtaW5pJztcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSAnZm9yY2UtZHluYW1pYyc7XG5leHBvcnQgY29uc3QgbWF4RHVyYXRpb24gPSA2MDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCkuY2F0Y2goKCkgPT4gKHt9KSk7XG4gICAgY29uc3Qge1xuICAgICAgcGxheWVyQ291bnQgPSA0LFxuICAgICAgYWdlUmFuZ2UgPSAn27HbuCDYqtinINuz27UnLFxuICAgICAgZ3JvdXBUeXBlID0gJ0ZSSUVORFMnLFxuICAgICAgbWludXRlcyA9IDMwLFxuICAgICAgbW9vZCA9ICdGVU5OWScsXG4gICAgfSA9IGJvZHk7XG5cbiAgICBjb25zdCBwcm9tcHQgPSBgXG5Zb3UgYXJlIFwiUGFudG9cIiAo2b7Yp9mG2KrZiCksIHRoZSBncm9vdnksIGNvbWVkaWMgNzBzLXN0eWxlIG1hc2NvdCBhbmQgQUkgR2FtZSBNYXN0ZXIgZm9yIFwiUGFudG9NaXhcIiAo2b7Yp9mG2KrZiNmF24zaqdizIC0gUGVyc2lhbiBQYW50b21pbWUgUGFydHkgR2FtZSkuXG5BbmFseXplIHRoaXMgSXJhbmlhbiBwYXJ0eSBzZXR1cDpcbi0gUGxheWVyIENvdW50OiAke3BsYXllckNvdW50fVxuLSBBZ2UgUmFuZ2U6ICR7YWdlUmFuZ2V9XG4tIEdyb3VwIFR5cGU6ICR7Z3JvdXBUeXBlfSAoRlJJRU5EUywgRkFNSUxZLCBXT1JLLCBvciBLSURTKVxuLSBBdmFpbGFibGUgVGltZTogJHttaW51dGVzfSBtaW51dGVzXG4tIEdyb3VwIE1vb2Q6ICR7bW9vZH0gKEZVTk5ZLCBDT01QRVRJVElWRSwgRU5FUkdFVElDLCBvciBDSElMTClcblxuUmV0dXJuIE9OTFkgYSB2YWxpZCBKU09OIG9iamVjdCBtYXRjaGluZyB0aGUgc2NoZW1hLlxuXCJyZWNvbW1lbmRlZE1vZGVJZFwiIG11c3QgYmUgb25lIG9mOiBcIkNMQVNTSUNcIiwgXCJTUEVFRF9DSEFMTEVOR0VcIiwgXCJURUFNX0JBVFRMRVwiLCBcIkFJX0NIQUxMRU5HRVwiLCBcIkZBTUlMWVwiLCBcIlBBUlRZX0VYVFJFTUVcIi5cblwic3VnZ2VzdGVkQ2F0ZWdvcnlJZHNcIiBzaG91bGQgdXNlIHJlbGV2YW50IElEcyBmcm9tOiBbXCJjaW5lbWFcIiwgXCJmdW5ueVwiLCBcInByb3ZlcmJzXCIsIFwiYW5pbWFsc1wiLCBcIm9iamVjdHNcIiwgXCJqb2JzXCIsIFwic3BvcnRzXCJdLlxuYDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlV2l0aEdlbWluaSh7XG4gICAgICByb3V0ZTogJy9hcGkvYWkvcmVjb21tZW5kJyxcbiAgICAgIHByb21wdCxcbiAgICAgIHRpbWVvdXRNczogREVGQVVMVF9HRU1JTklfVElNRU9VVF9NUyxcbiAgICAgIHJlc3BvbnNlTWltZVR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHJlc3BvbnNlU2NoZW1hOiB7XG4gICAgICAgIHR5cGU6IFR5cGUuT0JKRUNULFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgcmVjb21tZW5kZWRNb2RlVGl0bGU6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICByZWNvbW1lbmRlZE1vZGVJZDogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICAgIG1pbWVvR3JlZXRpbmc6IHsgdHlwZTogVHlwZS5TVFJJTkcgfSxcbiAgICAgICAgICBzdWdnZXN0ZWRDYXRlZ29yeUlkczoge1xuICAgICAgICAgICAgdHlwZTogVHlwZS5BUlJBWSxcbiAgICAgICAgICAgIGl0ZW1zOiB7IHR5cGU6IFR5cGUuU1RSSU5HIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YXJnZXRSb3VuZHM6IHsgdHlwZTogVHlwZS5OVU1CRVIgfSxcbiAgICAgICAgICByb3VuZFRpbWVyU2Vjb25kczogeyB0eXBlOiBUeXBlLk5VTUJFUiB9LFxuICAgICAgICAgIGZ1blRpcDogeyB0eXBlOiBUeXBlLlNUUklORyB9LFxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1xuICAgICAgICAgICdyZWNvbW1lbmRlZE1vZGVUaXRsZScsXG4gICAgICAgICAgJ3JlY29tbWVuZGVkTW9kZUlkJyxcbiAgICAgICAgICAnbWltZW9HcmVldGluZycsXG4gICAgICAgICAgJ3N1Z2dlc3RlZENhdGVnb3J5SWRzJyxcbiAgICAgICAgICAndGFyZ2V0Um91bmRzJyxcbiAgICAgICAgICAncm91bmRUaW1lclNlY29uZHMnLFxuICAgICAgICAgICdmdW5UaXAnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZDogQWlHYW1lUmVjb21tZW5kYXRpb24gPSBKU09OLnBhcnNlKHN0cmlwSnNvbkZlbmNlcyhyZXN1bHQudGV4dCkpO1xuICAgICAgICBpZiAocGFyc2VkICYmIHBhcnNlZC5yZWNvbW1lbmRlZE1vZGVUaXRsZSAmJiBwYXJzZWQubWltZW9HcmVldGluZykge1xuICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgc291cmNlOiAnZ2VtaW5pJyxcbiAgICAgICAgICAgIG1vZGVsOiByZXN1bHQubW9kZWwsXG4gICAgICAgICAgICBkYXRhOiBwYXJzZWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlTXNnID0gcGFyc2VFcnIgaW5zdGFuY2VvZiBFcnJvciA/IHBhcnNlRXJyLm1lc3NhZ2UgOiBTdHJpbmcocGFyc2VFcnIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBbUGFudG9NaXhdW0dlbWluaV0gcm91dGU9L2FwaS9haS9yZWNvbW1lbmQgbW9kZWw9JHtyZXN1bHQubW9kZWx9IGR1cmF0aW9uTXM9JHtyZXN1bHQuZHVyYXRpb25Nc30gc3RhdHVzPTIwMCByZWFzb249aW52YWxpZF9yZXNwb25zZSBtZXNzYWdlPVwiSW52YWxpZCBKU09OOiAke3BhcnNlTXNnfVwiYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZhbGxiYWNrUmVhc29uID0gcmVzdWx0Lm9rID8gJ2ludmFsaWRfcmVzcG9uc2UnIDogcmVzdWx0LnJlYXNvbjtcbiAgICBjb25zdCBmYWxsYmFjazogQWlHYW1lUmVjb21tZW5kYXRpb24gPSBnZXRGYWxsYmFja1JlY29tbWVuZGF0aW9uKGdyb3VwVHlwZSwgcGxheWVyQ291bnQpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc291cmNlOiAnZmFsbGJhY2snLFxuICAgICAgZmFsbGJhY2tSZWFzb24sXG4gICAgICBkYXRhOiBmYWxsYmFjayxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBUEkgRXJyb3InLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEZhbGxiYWNrUmVjb21tZW5kYXRpb24oZ3JvdXBUeXBlOiBzdHJpbmcsIHBsYXllckNvdW50OiBudW1iZXIpOiBBaUdhbWVSZWNvbW1lbmRhdGlvbiB7XG4gIGlmIChncm91cFR5cGUgPT09ICdGQU1JTFknIHx8IGdyb3VwVHlwZSA9PT0gJ0tJRFMnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY29tbWVuZGVkTW9kZVRpdGxlOiAn2KjYp9iy24wg2K7Yp9mG2YjYp9iv2q/bjCDYtdmF24zZhduMIPCfkajigI3wn5Gp4oCN8J+Rp+KAjfCfkaYnLFxuICAgICAgcmVjb21tZW5kZWRNb2RlSWQ6ICdGQU1JTFknIGFzIEdhbWVNb2RlSWQsXG4gICAgICBtaW1lb0dyZWV0aW5nOiBg2LPZhNin2YUg2KjZhyDYrNmF2LkgJHtwbGF5ZXJDb3VudH0g2YbZgdix2Ycg2b7YsdmF2K3YqNiqISDZvtin2YbYqtmIINqp2YTZhdin2Kog2LTYp9ivINmIINm+2LHYrtmG2K/Zh+KAjNin24wg2KLZhdin2K/ZhyDaqdix2K/ZhyDYqtinINmH2YXZhyDYs9mG24zZhiDYrdiz2KfYqNuMINmE2LDYqiDYqNio2LHZhiFgLFxuICAgICAgc3VnZ2VzdGVkQ2F0ZWdvcnlJZHM6IFsnYW5pbWFscycsICdvYmplY3RzJywgJ2Z1bm55J10sXG4gICAgICB0YXJnZXRSb3VuZHM6IDMsXG4gICAgICByb3VuZFRpbWVyU2Vjb25kczogMTIwLFxuICAgICAgZnVuVGlwOiAn2qnZiNqG2qnigIzYqtix2YfYpyDZh9mFINmF24zigIzYqtmI2YbZhiDYr9in2YjYsSDYqNi02YYg24zYpyDYqNinINio2LLYsdqv4oCM2KrYsdmH2Kcg2KrbjNmFINmF2LTYqtix2qkg2KrYtNqp24zZhCDYqNiv2YYhJyxcbiAgICB9O1xuICB9XG5cbiAgaWYgKGdyb3VwVHlwZSA9PT0gJ1dPUksnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY29tbWVuZGVkTW9kZVRpdGxlOiAn2LHZgtin2KjYqiDYrdmF2KfYs9uMINiq24zZhSDZh9mF2qnYp9ix2KfZhiDwn5K8JyxcbiAgICAgIHJlY29tbWVuZGVkTW9kZUlkOiAnVEVBTV9CQVRUTEUnIGFzIEdhbWVNb2RlSWQsXG4gICAgICBtaW1lb0dyZWV0aW5nOiAn2YjZgtiqINi02qnYs9iq2YYg24zYriDYrNmE2LPZhyDZiCDZhti02YjZhiDYr9in2K/ZhiDYp9iz2KrYudiv2KfYr9mH2KfbjCDZvtmG2YfYp9mGINio2KfYstuM2q/YsduMINmH2YXaqdin2LHYp9mG2YchINii2YXYp9iv2YfigIzYp9uM2K8g2LHZgtio2Kcg2LHZiCDZhdin2Kog2qnZhtuM2K/YnycsXG4gICAgICBzdWdnZXN0ZWRDYXRlZ29yeUlkczogWydqb2JzJywgJ2NpbmVtYScsICdwcm92ZXJicyddLFxuICAgICAgdGFyZ2V0Um91bmRzOiA0LFxuICAgICAgcm91bmRUaW1lclNlY29uZHM6IDkwLFxuICAgICAgZnVuVGlwOiAn2KfYs9iq2YHYp9iv2Ycg2KfYsiDYrdix2qnYp9iqINiv2LPYqiDZiCDZhtqv2KfZh+KAjNmH2KfbjCDZhdi52YbYp9iv2KfYsSDZhdis2KfYstmH2Iwg2KfZhdinINmE2Kgg2LLYr9mGINin2qnbjNiv2KfZiyDZhdmF2YbZiNi5IScsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVjb21tZW5kZWRNb2RlVGl0bGU6ICfZvtin2LHYqtuMINin2qnYs9iq2LHbjNmFINm+2KfZhtiq2YjZhduM2YUg8J+UpScsXG4gICAgcmVjb21tZW5kZWRNb2RlSWQ6ICdQQVJUWV9FWFRSRU1FJyBhcyBHYW1lTW9kZUlkLFxuICAgIG1pbWVvR3JlZXRpbmc6IGDYs9mE2KfZhSDYsdmB2YLYpyEg2b7Yp9mG2KrZiCDYp9uM2YbYrNin2LPYqiDYqtinINis2YXYuSAke3BsYXllckNvdW50fSDZhtmB2LHZh+KAjNiq2YjZhiDYsdmIINio2Kcg2obYp9mE2LTigIzZh9in24wg2LrbjNix2YXZhtiq2LjYsdmHINio2Ycg2KLYqtuM2LQg2Kjaqdi02YchYCxcbiAgICBzdWdnZXN0ZWRDYXRlZ29yeUlkczogWydjaW5lbWEnLCAnZnVubnknLCAncHJvdmVyYnMnXSxcbiAgICB0YXJnZXRSb3VuZHM6IDQsXG4gICAgcm91bmRUaW1lclNlY29uZHM6IDkwLFxuICAgIGZ1blRpcDogJ9mC2KjZhCDYp9iyINi02LHZiNi52Iwg2K3YqtmF2KfZiyDYudi22YTYp9iqINi12YjYsdiqINmIINiv2LPYquKAjNmH2KfYqtmI2YYg2LHZiCDYrtmI2Kgg2q/YsdmFINqp2YbbjNivINqp2Ycg2YLYsdin2LHZhyDYrdiz2KfYqNuMINio2K7Zhtiv24zZhSEnLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlR5cGUiLCJERUZBVUxUX0dFTUlOSV9USU1FT1VUX01TIiwiZ2VuZXJhdGVXaXRoR2VtaW5pIiwic3RyaXBKc29uRmVuY2VzIiwiZHluYW1pYyIsIm1heER1cmF0aW9uIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwiY2F0Y2giLCJwbGF5ZXJDb3VudCIsImFnZVJhbmdlIiwiZ3JvdXBUeXBlIiwibWludXRlcyIsIm1vb2QiLCJwcm9tcHQiLCJyZXN1bHQiLCJyb3V0ZSIsInRpbWVvdXRNcyIsInJlc3BvbnNlTWltZVR5cGUiLCJyZXNwb25zZVNjaGVtYSIsInR5cGUiLCJPQkpFQ1QiLCJwcm9wZXJ0aWVzIiwicmVjb21tZW5kZWRNb2RlVGl0bGUiLCJTVFJJTkciLCJyZWNvbW1lbmRlZE1vZGVJZCIsIm1pbWVvR3JlZXRpbmciLCJzdWdnZXN0ZWRDYXRlZ29yeUlkcyIsIkFSUkFZIiwiaXRlbXMiLCJ0YXJnZXRSb3VuZHMiLCJOVU1CRVIiLCJyb3VuZFRpbWVyU2Vjb25kcyIsImZ1blRpcCIsInJlcXVpcmVkIiwib2siLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJ0ZXh0Iiwic3VjY2VzcyIsInNvdXJjZSIsIm1vZGVsIiwiZGF0YSIsInBhcnNlRXJyIiwicGFyc2VNc2ciLCJFcnJvciIsIm1lc3NhZ2UiLCJTdHJpbmciLCJjb25zb2xlIiwiZXJyb3IiLCJkdXJhdGlvbk1zIiwiZmFsbGJhY2tSZWFzb24iLCJyZWFzb24iLCJmYWxsYmFjayIsImdldEZhbGxiYWNrUmVjb21tZW5kYXRpb24iLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/ai/recommend/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@google","vendor-chunks/google-auth-library","vendor-chunks/ws","vendor-chunks/bignumber.js","vendor-chunks/gaxios","vendor-chunks/json-bigint","vendor-chunks/google-logging-utils","vendor-chunks/gcp-metadata","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/retry","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/base64-js","vendor-chunks/extend","vendor-chunks/p-retry","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai%2Frecommend%2Froute&page=%2Fapi%2Fai%2Frecommend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Frecommend%2Froute.ts&appDir=%2Fapp%2Fapplet%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp%2Fapplet&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D&isGlobalNotFoundEnabled=!")));
module.exports = __webpack_exports__;

})();