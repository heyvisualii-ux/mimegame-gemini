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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _google_genai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google/genai */ \"(rsc)/./node_modules/@google/genai/dist/node/index.mjs\");\n/* harmony import */ var _lib_gemini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/gemini */ \"(rsc)/./src/lib/gemini.ts\");\n\n\n\nasync function POST(req) {\n    try {\n        const body = await req.json().catch(()=>({}));\n        const { topic = 'فیلم و سریال', count = 5, difficulty = 'MEDIUM' } = body;\n        const safeCount = Math.min(20, Math.max(1, Number(count) || 5));\n        const prompt = `\nYou are \"Panto\" (پانتو), the groovy, comedic 70s AI Game Master for PantoMix (پانتومیکس - Persian Pantomime & Charades party game).\nGenerate ${safeCount} creative, hilarious, and playable Persian Pantomime words or situation phrases for the topic: \"${topic}\".\nDifficulty level: ${difficulty}.\n\nReturn ONLY a JSON array of ${safeCount} objects matching the requested schema.\nPoints guide: EASY=10, MEDIUM=20, HARD=35, EXTREME=50.\n`;\n        const result = await (0,_lib_gemini__WEBPACK_IMPORTED_MODULE_2__.generateWithGemini)({\n            prompt,\n            timeoutMs: 11000,\n            responseMimeType: 'application/json',\n            responseSchema: {\n                type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.ARRAY,\n                items: {\n                    type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.OBJECT,\n                    properties: {\n                        text: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING,\n                            description: 'کلمه یا عبارت پانتومیم به فارسی'\n                        },\n                        difficulty: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING,\n                            description: 'EASY, MEDIUM, HARD, or EXTREME'\n                        },\n                        points: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.NUMBER,\n                            description: 'امتیاز کلمه'\n                        },\n                        hint: {\n                            type: _google_genai__WEBPACK_IMPORTED_MODULE_1__.Type.STRING,\n                            description: 'یک راهنمایی کوتاه، هوشمندانه یا طنز برای بازیگر'\n                        }\n                    },\n                    required: [\n                        'text',\n                        'hint'\n                    ]\n                }\n            }\n        });\n        if (result.ok) {\n            try {\n                const rawWords = JSON.parse((0,_lib_gemini__WEBPACK_IMPORTED_MODULE_2__.stripJsonFences)(result.text));\n                if (Array.isArray(rawWords) && rawWords.length > 0) {\n                    const defaultPoints = difficulty === 'EASY' ? 10 : difficulty === 'MEDIUM' ? 20 : difficulty === 'HARD' ? 35 : 50;\n                    const words = rawWords.map((item, idx)=>({\n                            id: `ai_${Date.now()}_${idx}`,\n                            text: item.text || 'کلمه پانتومیم هوش مصنوعی',\n                            category: 'ai_generated',\n                            difficulty: item.difficulty || difficulty,\n                            points: Number(item.points) || defaultPoints,\n                            hint: item.hint || 'راهنمایی اختصاصی پانتو',\n                            isCustomAi: true\n                        }));\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        success: true,\n                        source: 'gemini',\n                        model: result.model,\n                        data: words\n                    });\n                }\n            } catch (parseErr) {\n                console.error('[PantoMix][Gemini] Invalid JSON from /api/ai/words:', parseErr);\n            }\n        }\n        const fallbackReason = result.ok ? 'invalid_response' : result.reason;\n        // Dynamic Fallback Words\n        const fallbackWords = [\n            {\n                id: `ai_fallback_1_${Date.now()}`,\n                text: `ربات هوش مصنوعی در حال رقصیدن سنتی ایرانی (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 25,\n                hint: 'حرکات مکانیکی دست هم‌زمان با بشکن زدن',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_2_${Date.now()}`,\n                text: `فضانوردی که کلاه ایمنی‌اش را گم کرده (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 30,\n                hint: 'نگه داشتن نفس و چشم گرد کردن در فضا',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_3_${Date.now()}`,\n                text: `آشپز معروفی که غذای بیش از حد تند درست کرده (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 20,\n                hint: 'آتش گرفتن زبان و باد زدن با دستمال',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_4_${Date.now()}`,\n                text: `تلاش برای بستن چمدان پر از سوغاتی (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 20,\n                hint: 'پریدن و نشستن با تمام وزن روی چمدان',\n                isCustomAi: true\n            },\n            {\n                id: `ai_fallback_5_${Date.now()}`,\n                text: `خواننده‌ای که متن ترانه را در کنسرت فراموش کرده (${topic})`,\n                category: 'ai_generated',\n                difficulty: difficulty,\n                points: 35,\n                hint: 'گرفتن میکروفن به سمت تماشاچی‌ها تا آنها بخوانند',\n                isCustomAi: true\n            }\n        ].slice(0, safeCount);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            source: 'fallback',\n            fallbackReason,\n            data: fallbackWords\n        });\n    } catch (error) {\n        console.error('Word API Error', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPekQscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFNEMsU0FBUztZQUFPTSxPQUFPO1FBQXdCLEdBQUc7WUFBRUssUUFBUTtRQUFJO0lBQzdGO0FBQ0YiLCJzb3VyY2VzIjpbIi9hcHAvYXBwbGV0L3NyYy9hcHAvYXBpL2FpL3dvcmRzL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAZ29vZ2xlL2dlbmFpJztcbmltcG9ydCB7IFdvcmQsIFdvcmREaWZmaWN1bHR5IH0gZnJvbSAnQC90eXBlcy9nYW1lJztcbmltcG9ydCB7IGdlbmVyYXRlV2l0aEdlbWluaSwgc3RyaXBKc29uRmVuY2VzIH0gZnJvbSAnQC9saWIvZ2VtaW5pJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCkuY2F0Y2goKCkgPT4gKHt9KSk7XG4gICAgY29uc3QgeyB0b3BpYyA9ICfZgduM2YTZhSDZiCDYs9ix24zYp9mEJywgY291bnQgPSA1LCBkaWZmaWN1bHR5ID0gJ01FRElVTScgfSA9IGJvZHk7XG4gICAgY29uc3Qgc2FmZUNvdW50ID0gTWF0aC5taW4oMjAsIE1hdGgubWF4KDEsIE51bWJlcihjb3VudCkgfHwgNSkpO1xuXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuWW91IGFyZSBcIlBhbnRvXCIgKNm+2KfZhtiq2YgpLCB0aGUgZ3Jvb3Z5LCBjb21lZGljIDcwcyBBSSBHYW1lIE1hc3RlciBmb3IgUGFudG9NaXggKNm+2KfZhtiq2YjZhduM2qnYsyAtIFBlcnNpYW4gUGFudG9taW1lICYgQ2hhcmFkZXMgcGFydHkgZ2FtZSkuXG5HZW5lcmF0ZSAke3NhZmVDb3VudH0gY3JlYXRpdmUsIGhpbGFyaW91cywgYW5kIHBsYXlhYmxlIFBlcnNpYW4gUGFudG9taW1lIHdvcmRzIG9yIHNpdHVhdGlvbiBwaHJhc2VzIGZvciB0aGUgdG9waWM6IFwiJHt0b3BpY31cIi5cbkRpZmZpY3VsdHkgbGV2ZWw6ICR7ZGlmZmljdWx0eX0uXG5cblJldHVybiBPTkxZIGEgSlNPTiBhcnJheSBvZiAke3NhZmVDb3VudH0gb2JqZWN0cyBtYXRjaGluZyB0aGUgcmVxdWVzdGVkIHNjaGVtYS5cblBvaW50cyBndWlkZTogRUFTWT0xMCwgTUVESVVNPTIwLCBIQVJEPTM1LCBFWFRSRU1FPTUwLlxuYDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdlbmVyYXRlV2l0aEdlbWluaSh7XG4gICAgICBwcm9tcHQsXG4gICAgICB0aW1lb3V0TXM6IDExMDAwLFxuICAgICAgcmVzcG9uc2VNaW1lVHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgcmVzcG9uc2VTY2hlbWE6IHtcbiAgICAgICAgdHlwZTogVHlwZS5BUlJBWSxcbiAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICB0eXBlOiBUeXBlLk9CSkVDVCxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIHR5cGU6IFR5cGUuU1RSSU5HLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9qp2YTZhdmHINuM2Kcg2LnYqNin2LHYqiDZvtin2YbYqtmI2YXbjNmFINio2Ycg2YHYp9ix2LPbjCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlmZmljdWx0eToge1xuICAgICAgICAgICAgICB0eXBlOiBUeXBlLlNUUklORyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFQVNZLCBNRURJVU0sIEhBUkQsIG9yIEVYVFJFTUUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvaW50czoge1xuICAgICAgICAgICAgICB0eXBlOiBUeXBlLk5VTUJFUixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfYp9mF2KrbjNin2LIg2qnZhNmF2YcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpbnQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogVHlwZS5TVFJJTkcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn24zaqSDYsdin2YfZhtmF2KfbjNuMINqp2YjYqtin2YfYjCDZh9mI2LTZhdmG2K/Yp9mG2Ycg24zYpyDYt9mG2LIg2KjYsdin24wg2KjYp9iy24zar9ixJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogWyd0ZXh0JywgJ2hpbnQnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByYXdXb3JkcyA9IEpTT04ucGFyc2Uoc3RyaXBKc29uRmVuY2VzKHJlc3VsdC50ZXh0KSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJhd1dvcmRzKSAmJiByYXdXb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdFBvaW50cyA9XG4gICAgICAgICAgICBkaWZmaWN1bHR5ID09PSAnRUFTWScgPyAxMCA6IGRpZmZpY3VsdHkgPT09ICdNRURJVU0nID8gMjAgOiBkaWZmaWN1bHR5ID09PSAnSEFSRCcgPyAzNSA6IDUwO1xuICAgICAgICAgIGNvbnN0IHdvcmRzOiBXb3JkW10gPSByYXdXb3Jkcy5tYXAoKGl0ZW06IFBhcnRpYWw8V29yZD4sIGlkeDogbnVtYmVyKSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGBhaV8ke0RhdGUubm93KCl9XyR7aWR4fWAsXG4gICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQgfHwgJ9qp2YTZhdmHINm+2KfZhtiq2YjZhduM2YUg2YfZiNi0INmF2LXZhtmI2LnbjCcsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2FpX2dlbmVyYXRlZCcsXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiAoaXRlbS5kaWZmaWN1bHR5IGFzIFdvcmREaWZmaWN1bHR5KSB8fCAoZGlmZmljdWx0eSBhcyBXb3JkRGlmZmljdWx0eSksXG4gICAgICAgICAgICBwb2ludHM6IE51bWJlcihpdGVtLnBvaW50cykgfHwgZGVmYXVsdFBvaW50cyxcbiAgICAgICAgICAgIGhpbnQ6IGl0ZW0uaGludCB8fCAn2LHYp9mH2YbZhdin24zbjCDYp9iu2KrYtdin2LXbjCDZvtin2YbYqtmIJyxcbiAgICAgICAgICAgIGlzQ3VzdG9tQWk6IHRydWUsXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgc291cmNlOiAnZ2VtaW5pJyxcbiAgICAgICAgICAgIG1vZGVsOiByZXN1bHQubW9kZWwsXG4gICAgICAgICAgICBkYXRhOiB3b3JkcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAocGFyc2VFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1BhbnRvTWl4XVtHZW1pbmldIEludmFsaWQgSlNPTiBmcm9tIC9hcGkvYWkvd29yZHM6JywgcGFyc2VFcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZhbGxiYWNrUmVhc29uID0gcmVzdWx0Lm9rID8gJ2ludmFsaWRfcmVzcG9uc2UnIDogcmVzdWx0LnJlYXNvbjtcblxuICAgIC8vIER5bmFtaWMgRmFsbGJhY2sgV29yZHNcbiAgICBjb25zdCBmYWxsYmFja1dvcmRzOiBXb3JkW10gPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWlfZmFsbGJhY2tfMV8ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGV4dDogYNix2KjYp9iqINmH2YjYtCDZhdi12YbZiNi524wg2K/YsSDYrdin2YQg2LHZgti124zYr9mGINiz2YbYqtuMINin24zYsdin2YbbjCAoJHt0b3BpY30pYCxcbiAgICAgICAgY2F0ZWdvcnk6ICdhaV9nZW5lcmF0ZWQnLFxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5IGFzIFdvcmREaWZmaWN1bHR5LFxuICAgICAgICBwb2ludHM6IDI1LFxuICAgICAgICBoaW50OiAn2K3Ysdqp2KfYqiDZhdqp2KfZhtuM2qnbjCDYr9iz2Kog2YfZheKAjNiy2YXYp9mGINio2Kcg2KjYtNqp2YYg2LLYr9mGJyxcbiAgICAgICAgaXNDdXN0b21BaTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWlfZmFsbGJhY2tfMl8ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGV4dDogYNmB2LbYp9mG2YjYsdiv24wg2qnZhyDaqdmE2KfZhyDYp9uM2YXZhtuM4oCM2KfYtCDYsdinINqv2YUg2qnYsdiv2YcgKCR7dG9waWN9KWAsXG4gICAgICAgIGNhdGVnb3J5OiAnYWlfZ2VuZXJhdGVkJyxcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZmljdWx0eSBhcyBXb3JkRGlmZmljdWx0eSxcbiAgICAgICAgcG9pbnRzOiAzMCxcbiAgICAgICAgaGludDogJ9mG2q/ZhyDYr9in2LTYqtmGINmG2YHYsyDZiCDahti02YUg2q/YsdivINqp2LHYr9mGINiv2LEg2YHYttinJyxcbiAgICAgICAgaXNDdXN0b21BaTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWlfZmFsbGJhY2tfM18ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGV4dDogYNii2LTZvtiyINmF2LnYsdmI2YHbjCDaqdmHINi62LDYp9uMINio24zYtCDYp9iyINit2K8g2KrZhtivINiv2LHYs9iqINqp2LHYr9mHICgke3RvcGljfSlgLFxuICAgICAgICBjYXRlZ29yeTogJ2FpX2dlbmVyYXRlZCcsXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHkgYXMgV29yZERpZmZpY3VsdHksXG4gICAgICAgIHBvaW50czogMjAsXG4gICAgICAgIGhpbnQ6ICfYotiq2LQg2q/YsdmB2KrZhiDYstio2KfZhiDZiCDYqNin2K8g2LLYr9mGINio2Kcg2K/Ys9iq2YXYp9mEJyxcbiAgICAgICAgaXNDdXN0b21BaTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWlfZmFsbGJhY2tfNF8ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGV4dDogYNiq2YTYp9i0INio2LHYp9uMINio2LPYqtmGINqG2YXYr9in2YYg2b7YsSDYp9iyINiz2YjYutin2KrbjCAoJHt0b3BpY30pYCxcbiAgICAgICAgY2F0ZWdvcnk6ICdhaV9nZW5lcmF0ZWQnLFxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5IGFzIFdvcmREaWZmaWN1bHR5LFxuICAgICAgICBwb2ludHM6IDIwLFxuICAgICAgICBoaW50OiAn2b7YsduM2K/ZhiDZiCDZhti02LPYqtmGINio2Kcg2KrZhdin2YUg2YjYstmGINix2YjbjCDahtmF2K/Yp9mGJyxcbiAgICAgICAgaXNDdXN0b21BaTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBgYWlfZmFsbGJhY2tfNV8ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGV4dDogYNiu2YjYp9mG2YbYr9mH4oCM2KfbjCDaqdmHINmF2KrZhiDYqtix2KfZhtmHINix2Kcg2K/YsSDaqdmG2LPYsdiqINmB2LHYp9mF2YjYtCDaqdix2K/ZhyAoJHt0b3BpY30pYCxcbiAgICAgICAgY2F0ZWdvcnk6ICdhaV9nZW5lcmF0ZWQnLFxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5IGFzIFdvcmREaWZmaWN1bHR5LFxuICAgICAgICBwb2ludHM6IDM1LFxuICAgICAgICBoaW50OiAn2q/YsdmB2KrZhiDZhduM2qnYsdmI2YHZhiDYqNmHINiz2YXYqiDYqtmF2KfYtNin2obbjOKAjNmH2Kcg2KrYpyDYotmG2YfYpyDYqNiu2YjYp9mG2YbYrycsXG4gICAgICAgIGlzQ3VzdG9tQWk6IHRydWUsXG4gICAgICB9LFxuICAgIF0uc2xpY2UoMCwgc2FmZUNvdW50KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc291cmNlOiAnZmFsbGJhY2snLFxuICAgICAgZmFsbGJhY2tSZWFzb24sXG4gICAgICBkYXRhOiBmYWxsYmFja1dvcmRzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dvcmQgQVBJIEVycm9yJywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlR5cGUiLCJnZW5lcmF0ZVdpdGhHZW1pbmkiLCJzdHJpcEpzb25GZW5jZXMiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJjYXRjaCIsInRvcGljIiwiY291bnQiLCJkaWZmaWN1bHR5Iiwic2FmZUNvdW50IiwiTWF0aCIsIm1pbiIsIm1heCIsIk51bWJlciIsInByb21wdCIsInJlc3VsdCIsInRpbWVvdXRNcyIsInJlc3BvbnNlTWltZVR5cGUiLCJyZXNwb25zZVNjaGVtYSIsInR5cGUiLCJBUlJBWSIsIml0ZW1zIiwiT0JKRUNUIiwicHJvcGVydGllcyIsInRleHQiLCJTVFJJTkciLCJkZXNjcmlwdGlvbiIsInBvaW50cyIsIk5VTUJFUiIsImhpbnQiLCJyZXF1aXJlZCIsIm9rIiwicmF3V29yZHMiLCJKU09OIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJkZWZhdWx0UG9pbnRzIiwid29yZHMiLCJtYXAiLCJpdGVtIiwiaWR4IiwiaWQiLCJEYXRlIiwibm93IiwiY2F0ZWdvcnkiLCJpc0N1c3RvbUFpIiwic3VjY2VzcyIsInNvdXJjZSIsIm1vZGVsIiwiZGF0YSIsInBhcnNlRXJyIiwiY29uc29sZSIsImVycm9yIiwiZmFsbGJhY2tSZWFzb24iLCJyZWFzb24iLCJmYWxsYmFja1dvcmRzIiwic2xpY2UiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/ai/words/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/gemini.ts":
/*!***************************!*\
  !*** ./src/lib/gemini.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateWithGemini: () => (/* binding */ generateWithGemini),\n/* harmony export */   stripJsonFences: () => (/* binding */ stripJsonFences)\n/* harmony export */ });\n/* harmony import */ var _google_genai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/genai */ \"(rsc)/./node_modules/@google/genai/dist/node/index.mjs\");\n\nconst DEFAULT_MODEL_CANDIDATES = [\n    'gemini-4-hydrogen',\n    'gemini-3.1-flash-lite'\n];\nfunction getCandidateModels() {\n    const custom = process.env.GEMINI_MODEL?.trim();\n    const list = custom ? [\n        custom,\n        ...DEFAULT_MODEL_CANDIDATES\n    ] : [\n        ...DEFAULT_MODEL_CANDIDATES\n    ];\n    return Array.from(new Set(list));\n}\nfunction getErrorStatus(err) {\n    if (err && typeof err === 'object' && 'status' in err) {\n        const val = err.status;\n        if (typeof val === 'number') return val;\n    }\n    return undefined;\n}\nfunction redactSecrets(text) {\n    return text.replace(/AIza[0-9A-Za-z_-]{20,}/g, '[REDACTED_KEY]').slice(0, 260);\n}\nfunction classifyGeminiError(err) {\n    const status = getErrorStatus(err);\n    const msg = err instanceof Error ? err.message : String(err);\n    const lower = msg.toLowerCase();\n    if (status === 401 || status === 403 || lower.includes('api_key_invalid') || lower.includes('api key not valid') || lower.includes('api key expired') || lower.includes('permission_denied')) {\n        return 'invalid_key';\n    }\n    if (status === 429 || lower.includes('resource_exhausted') || lower.includes('quota')) {\n        return 'quota_exceeded';\n    }\n    if (status === 503 || status === 500 || status === 502 || status === 504 || lower.includes('unavailable') || lower.includes('high demand') || lower.includes('overloaded')) {\n        return 'model_unavailable';\n    }\n    if (status === 404 || lower.includes('not_found') || lower.includes('is not found') || lower.includes('unsupported model')) {\n        return 'model_not_found';\n    }\n    if (status === 400 || lower.includes('invalid_argument')) {\n        return 'invalid_argument';\n    }\n    if (lower.includes('timeout') || lower.includes('aborted')) {\n        return 'timeout';\n    }\n    return 'api_error';\n}\nfunction stripJsonFences(raw) {\n    return raw.trim().replace(/^```(?:json)?\\s*/i, '').replace(/\\s*```$/i, '').trim();\n}\nasync function generateWithGemini(params) {\n    const apiKey = process.env.GEMINI_API_KEY?.trim();\n    if (!apiKey) {\n        return {\n            ok: false,\n            reason: 'missing_key'\n        };\n    }\n    const ai = new _google_genai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenAI({\n        apiKey,\n        httpOptions: {\n            headers: {\n                'User-Agent': 'aistudio-build'\n            }\n        }\n    });\n    const models = getCandidateModels();\n    const startedAt = Date.now();\n    let lastReason = 'api_error';\n    let lastModel;\n    let lastStatus;\n    for (const model of models){\n        const elapsed = Date.now() - startedAt;\n        const remainingMs = params.timeoutMs - elapsed;\n        if (remainingMs <= 500) {\n            return {\n                ok: false,\n                reason: 'timeout',\n                model: lastModel,\n                statusCode: lastStatus\n            };\n        }\n        lastModel = model;\n        const supportsThinkingLevel = model.startsWith('gemini-4-') || model.startsWith('gemini-3.');\n        let timer;\n        try {\n            const timeoutPromise = new Promise((_, reject)=>{\n                timer = setTimeout(()=>reject(new Error('Gemini request timeout')), remainingMs);\n            });\n            const generatePromise = ai.models.generateContent({\n                model,\n                contents: params.prompt,\n                config: {\n                    ...params.responseMimeType ? {\n                        responseMimeType: params.responseMimeType\n                    } : {},\n                    ...params.responseSchema ? {\n                        responseSchema: params.responseSchema\n                    } : {},\n                    ...supportsThinkingLevel ? {\n                        thinkingConfig: {\n                            thinkingLevel: _google_genai__WEBPACK_IMPORTED_MODULE_0__.ThinkingLevel.LOW\n                        }\n                    } : {}\n                }\n            });\n            const response = await Promise.race([\n                generatePromise,\n                timeoutPromise\n            ]);\n            const text = response?.text?.trim();\n            if (text) {\n                return {\n                    ok: true,\n                    text,\n                    model\n                };\n            }\n            lastReason = 'invalid_response';\n        } catch (err) {\n            lastReason = classifyGeminiError(err);\n            lastStatus = getErrorStatus(err);\n            const errMsg = redactSecrets(err instanceof Error ? err.message : String(err));\n            console.error(`[PantoMix][Gemini] model=${model} reason=${lastReason} status=${lastStatus ?? 'none'}: ${errMsg}`);\n            // Stop immediately if the API key itself is rejected; otherwise try backup model candidates\n            if (lastReason === 'invalid_key') {\n                return {\n                    ok: false,\n                    reason: lastReason,\n                    model,\n                    statusCode: lastStatus\n                };\n            }\n        } finally{\n            if (timer) clearTimeout(timer);\n        }\n    }\n    return {\n        ok: false,\n        reason: lastReason,\n        model: lastModel,\n        statusCode: lastStatus\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxHQUFHQyxPQUFPWjtZQUN6RTRELFFBQVFDLEtBQUssQ0FBQyxDQUFDLHlCQUF5QixFQUFFM0IsTUFBTSxRQUFRLEVBQUVILFdBQVcsUUFBUSxFQUFFRSxjQUFjLE9BQU8sRUFBRSxFQUFFMEIsUUFBUTtZQUVoSCw0RkFBNEY7WUFDNUYsSUFBSTVCLGVBQWUsZUFBZTtnQkFDaEMsT0FBTztvQkFDTFQsSUFBSTtvQkFDSkMsUUFBUVE7b0JBQ1JHO29CQUNBSSxZQUFZTDtnQkFDZDtZQUNGO1FBQ0YsU0FBVTtZQUNSLElBQUlRLE9BQU9xQixhQUFhckI7UUFDMUI7SUFDRjtJQUVBLE9BQU87UUFDTG5CLElBQUk7UUFDSkMsUUFBUVE7UUFDUkcsT0FBT0Y7UUFDUE0sWUFBWUw7SUFDZDtBQUNGIiwic291cmNlcyI6WyIvYXBwL2FwcGxldC9zcmMvbGliL2dlbWluaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVHZW5BSSwgVGhpbmtpbmdMZXZlbCwgdHlwZSBTY2hlbWEgfSBmcm9tICdAZ29vZ2xlL2dlbmFpJztcblxuZXhwb3J0IHR5cGUgR2VtaW5pRmFsbGJhY2tSZWFzb24gPVxuICB8ICdtaXNzaW5nX2tleSdcbiAgfCAndGltZW91dCdcbiAgfCAnaW52YWxpZF9rZXknXG4gIHwgJ3F1b3RhX2V4Y2VlZGVkJ1xuICB8ICdtb2RlbF9ub3RfZm91bmQnXG4gIHwgJ21vZGVsX3VuYXZhaWxhYmxlJ1xuICB8ICdpbnZhbGlkX2FyZ3VtZW50J1xuICB8ICdpbnZhbGlkX3Jlc3BvbnNlJ1xuICB8ICdhcGlfZXJyb3InO1xuXG5leHBvcnQgdHlwZSBHZW1pbmlHZW5lcmF0ZVJlc3VsdCA9XG4gIHwge1xuICAgICAgb2s6IHRydWU7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBtb2RlbDogc3RyaW5nO1xuICAgIH1cbiAgfCB7XG4gICAgICBvazogZmFsc2U7XG4gICAgICByZWFzb246IEdlbWluaUZhbGxiYWNrUmVhc29uO1xuICAgICAgbW9kZWw/OiBzdHJpbmc7XG4gICAgICBzdGF0dXNDb2RlPzogbnVtYmVyO1xuICAgIH07XG5cbmNvbnN0IERFRkFVTFRfTU9ERUxfQ0FORElEQVRFUyA9IFtcbiAgJ2dlbWluaS00LWh5ZHJvZ2VuJyxcbiAgJ2dlbWluaS0zLjEtZmxhc2gtbGl0ZScsXG5dIGFzIGNvbnN0O1xuXG5mdW5jdGlvbiBnZXRDYW5kaWRhdGVNb2RlbHMoKTogc3RyaW5nW10ge1xuICBjb25zdCBjdXN0b20gPSBwcm9jZXNzLmVudi5HRU1JTklfTU9ERUw/LnRyaW0oKTtcbiAgY29uc3QgbGlzdCA9IGN1c3RvbVxuICAgID8gW2N1c3RvbSwgLi4uREVGQVVMVF9NT0RFTF9DQU5ESURBVEVTXVxuICAgIDogWy4uLkRFRkFVTFRfTU9ERUxfQ0FORElEQVRFU107XG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQobGlzdCkpO1xufVxuXG5mdW5jdGlvbiBnZXRFcnJvclN0YXR1cyhlcnI6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAoZXJyICYmIHR5cGVvZiBlcnIgPT09ICdvYmplY3QnICYmICdzdGF0dXMnIGluIGVycikge1xuICAgIGNvbnN0IHZhbCA9IChlcnIgYXMgeyBzdGF0dXM/OiB1bmtub3duIH0pLnN0YXR1cztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHJldHVybiB2YWw7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gcmVkYWN0U2VjcmV0cyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC9BSXphWzAtOUEtWmEtel8tXXsyMCx9L2csICdbUkVEQUNURURfS0VZXScpLnNsaWNlKDAsIDI2MCk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5R2VtaW5pRXJyb3IoZXJyOiB1bmtub3duKTogR2VtaW5pRmFsbGJhY2tSZWFzb24ge1xuICBjb25zdCBzdGF0dXMgPSBnZXRFcnJvclN0YXR1cyhlcnIpO1xuICBjb25zdCBtc2cgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycik7XG4gIGNvbnN0IGxvd2VyID0gbXNnLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKFxuICAgIHN0YXR1cyA9PT0gNDAxIHx8XG4gICAgc3RhdHVzID09PSA0MDMgfHxcbiAgICBsb3dlci5pbmNsdWRlcygnYXBpX2tleV9pbnZhbGlkJykgfHxcbiAgICBsb3dlci5pbmNsdWRlcygnYXBpIGtleSBub3QgdmFsaWQnKSB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCdhcGkga2V5IGV4cGlyZWQnKSB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCdwZXJtaXNzaW9uX2RlbmllZCcpXG4gICkge1xuICAgIHJldHVybiAnaW52YWxpZF9rZXknO1xuICB9XG4gIGlmIChcbiAgICBzdGF0dXMgPT09IDQyOSB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCdyZXNvdXJjZV9leGhhdXN0ZWQnKSB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCdxdW90YScpXG4gICkge1xuICAgIHJldHVybiAncXVvdGFfZXhjZWVkZWQnO1xuICB9XG4gIGlmIChcbiAgICBzdGF0dXMgPT09IDUwMyB8fFxuICAgIHN0YXR1cyA9PT0gNTAwIHx8XG4gICAgc3RhdHVzID09PSA1MDIgfHxcbiAgICBzdGF0dXMgPT09IDUwNCB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCd1bmF2YWlsYWJsZScpIHx8XG4gICAgbG93ZXIuaW5jbHVkZXMoJ2hpZ2ggZGVtYW5kJykgfHxcbiAgICBsb3dlci5pbmNsdWRlcygnb3ZlcmxvYWRlZCcpXG4gICkge1xuICAgIHJldHVybiAnbW9kZWxfdW5hdmFpbGFibGUnO1xuICB9XG4gIGlmIChcbiAgICBzdGF0dXMgPT09IDQwNCB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCdub3RfZm91bmQnKSB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCdpcyBub3QgZm91bmQnKSB8fFxuICAgIGxvd2VyLmluY2x1ZGVzKCd1bnN1cHBvcnRlZCBtb2RlbCcpXG4gICkge1xuICAgIHJldHVybiAnbW9kZWxfbm90X2ZvdW5kJztcbiAgfVxuICBpZiAoXG4gICAgc3RhdHVzID09PSA0MDAgfHxcbiAgICBsb3dlci5pbmNsdWRlcygnaW52YWxpZF9hcmd1bWVudCcpXG4gICkge1xuICAgIHJldHVybiAnaW52YWxpZF9hcmd1bWVudCc7XG4gIH1cbiAgaWYgKGxvd2VyLmluY2x1ZGVzKCd0aW1lb3V0JykgfHwgbG93ZXIuaW5jbHVkZXMoJ2Fib3J0ZWQnKSkge1xuICAgIHJldHVybiAndGltZW91dCc7XG4gIH1cbiAgcmV0dXJuICdhcGlfZXJyb3InO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBKc29uRmVuY2VzKHJhdzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJhd1xuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvXmBgYCg/Ompzb24pP1xccyovaSwgJycpXG4gICAgLnJlcGxhY2UoL1xccypgYGAkL2ksICcnKVxuICAgIC50cmltKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVdpdGhHZW1pbmkocGFyYW1zOiB7XG4gIHByb21wdDogc3RyaW5nO1xuICB0aW1lb3V0TXM6IG51bWJlcjtcbiAgcmVzcG9uc2VNaW1lVHlwZT86IHN0cmluZztcbiAgcmVzcG9uc2VTY2hlbWE/OiBTY2hlbWE7XG59KTogUHJvbWlzZTxHZW1pbmlHZW5lcmF0ZVJlc3VsdD4ge1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWT8udHJpbSgpO1xuICBpZiAoIWFwaUtleSkge1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgcmVhc29uOiAnbWlzc2luZ19rZXknIH07XG4gIH1cblxuICBjb25zdCBhaSA9IG5ldyBHb29nbGVHZW5BSSh7XG4gICAgYXBpS2V5LFxuICAgIGh0dHBPcHRpb25zOiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdVc2VyLUFnZW50JzogJ2Fpc3R1ZGlvLWJ1aWxkJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgbW9kZWxzID0gZ2V0Q2FuZGlkYXRlTW9kZWxzKCk7XG4gIGNvbnN0IHN0YXJ0ZWRBdCA9IERhdGUubm93KCk7XG4gIGxldCBsYXN0UmVhc29uOiBHZW1pbmlGYWxsYmFja1JlYXNvbiA9ICdhcGlfZXJyb3InO1xuICBsZXQgbGFzdE1vZGVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGxldCBsYXN0U3RhdHVzOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdDtcbiAgICBjb25zdCByZW1haW5pbmdNcyA9IHBhcmFtcy50aW1lb3V0TXMgLSBlbGFwc2VkO1xuICAgIGlmIChyZW1haW5pbmdNcyA8PSA1MDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgcmVhc29uOiAndGltZW91dCcsXG4gICAgICAgIG1vZGVsOiBsYXN0TW9kZWwsXG4gICAgICAgIHN0YXR1c0NvZGU6IGxhc3RTdGF0dXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxhc3RNb2RlbCA9IG1vZGVsO1xuICAgIGNvbnN0IHN1cHBvcnRzVGhpbmtpbmdMZXZlbCA9XG4gICAgICBtb2RlbC5zdGFydHNXaXRoKCdnZW1pbmktNC0nKSB8fCBtb2RlbC5zdGFydHNXaXRoKCdnZW1pbmktMy4nKTtcblxuICAgIGxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2U8bmV2ZXI+KChfLCByZWplY3QpID0+IHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgRXJyb3IoJ0dlbWluaSByZXF1ZXN0IHRpbWVvdXQnKSksIHJlbWFpbmluZ01zKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBnZW5lcmF0ZVByb21pc2UgPSBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgICAgbW9kZWwsXG4gICAgICAgIGNvbnRlbnRzOiBwYXJhbXMucHJvbXB0LFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAuLi4ocGFyYW1zLnJlc3BvbnNlTWltZVR5cGUgPyB7IHJlc3BvbnNlTWltZVR5cGU6IHBhcmFtcy5yZXNwb25zZU1pbWVUeXBlIH0gOiB7fSksXG4gICAgICAgICAgLi4uKHBhcmFtcy5yZXNwb25zZVNjaGVtYSA/IHsgcmVzcG9uc2VTY2hlbWE6IHBhcmFtcy5yZXNwb25zZVNjaGVtYSB9IDoge30pLFxuICAgICAgICAgIC4uLihzdXBwb3J0c1RoaW5raW5nTGV2ZWxcbiAgICAgICAgICAgID8geyB0aGlua2luZ0NvbmZpZzogeyB0aGlua2luZ0xldmVsOiBUaGlua2luZ0xldmVsLkxPVyB9IH1cbiAgICAgICAgICAgIDoge30pLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtnZW5lcmF0ZVByb21pc2UsIHRpbWVvdXRQcm9taXNlXSk7XG4gICAgICBjb25zdCB0ZXh0ID0gcmVzcG9uc2U/LnRleHQ/LnRyaW0oKTtcbiAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB7IG9rOiB0cnVlLCB0ZXh0LCBtb2RlbCB9O1xuICAgICAgfVxuXG4gICAgICBsYXN0UmVhc29uID0gJ2ludmFsaWRfcmVzcG9uc2UnO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbGFzdFJlYXNvbiA9IGNsYXNzaWZ5R2VtaW5pRXJyb3IoZXJyKTtcbiAgICAgIGxhc3RTdGF0dXMgPSBnZXRFcnJvclN0YXR1cyhlcnIpO1xuICAgICAgY29uc3QgZXJyTXNnID0gcmVkYWN0U2VjcmV0cyhlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycikpO1xuICAgICAgY29uc29sZS5lcnJvcihgW1BhbnRvTWl4XVtHZW1pbmldIG1vZGVsPSR7bW9kZWx9IHJlYXNvbj0ke2xhc3RSZWFzb259IHN0YXR1cz0ke2xhc3RTdGF0dXMgPz8gJ25vbmUnfTogJHtlcnJNc2d9YCk7XG5cbiAgICAgIC8vIFN0b3AgaW1tZWRpYXRlbHkgaWYgdGhlIEFQSSBrZXkgaXRzZWxmIGlzIHJlamVjdGVkOyBvdGhlcndpc2UgdHJ5IGJhY2t1cCBtb2RlbCBjYW5kaWRhdGVzXG4gICAgICBpZiAobGFzdFJlYXNvbiA9PT0gJ2ludmFsaWRfa2V5Jykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgICByZWFzb246IGxhc3RSZWFzb24sXG4gICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgc3RhdHVzQ29kZTogbGFzdFN0YXR1cyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2s6IGZhbHNlLFxuICAgIHJlYXNvbjogbGFzdFJlYXNvbixcbiAgICBtb2RlbDogbGFzdE1vZGVsLFxuICAgIHN0YXR1c0NvZGU6IGxhc3RTdGF0dXMsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiR29vZ2xlR2VuQUkiLCJUaGlua2luZ0xldmVsIiwiREVGQVVMVF9NT0RFTF9DQU5ESURBVEVTIiwiZ2V0Q2FuZGlkYXRlTW9kZWxzIiwiY3VzdG9tIiwicHJvY2VzcyIsImVudiIsIkdFTUlOSV9NT0RFTCIsInRyaW0iLCJsaXN0IiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZ2V0RXJyb3JTdGF0dXMiLCJlcnIiLCJ2YWwiLCJzdGF0dXMiLCJ1bmRlZmluZWQiLCJyZWRhY3RTZWNyZXRzIiwidGV4dCIsInJlcGxhY2UiLCJzbGljZSIsImNsYXNzaWZ5R2VtaW5pRXJyb3IiLCJtc2ciLCJFcnJvciIsIm1lc3NhZ2UiLCJTdHJpbmciLCJsb3dlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdHJpcEpzb25GZW5jZXMiLCJyYXciLCJnZW5lcmF0ZVdpdGhHZW1pbmkiLCJwYXJhbXMiLCJhcGlLZXkiLCJHRU1JTklfQVBJX0tFWSIsIm9rIiwicmVhc29uIiwiYWkiLCJodHRwT3B0aW9ucyIsImhlYWRlcnMiLCJtb2RlbHMiLCJzdGFydGVkQXQiLCJEYXRlIiwibm93IiwibGFzdFJlYXNvbiIsImxhc3RNb2RlbCIsImxhc3RTdGF0dXMiLCJtb2RlbCIsImVsYXBzZWQiLCJyZW1haW5pbmdNcyIsInRpbWVvdXRNcyIsInN0YXR1c0NvZGUiLCJzdXBwb3J0c1RoaW5raW5nTGV2ZWwiLCJzdGFydHNXaXRoIiwidGltZXIiLCJ0aW1lb3V0UHJvbWlzZSIsIlByb21pc2UiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdlbmVyYXRlUHJvbWlzZSIsImdlbmVyYXRlQ29udGVudCIsImNvbnRlbnRzIiwicHJvbXB0IiwiY29uZmlnIiwicmVzcG9uc2VNaW1lVHlwZSIsInJlc3BvbnNlU2NoZW1hIiwidGhpbmtpbmdDb25maWciLCJ0aGlua2luZ0xldmVsIiwiTE9XIiwicmVzcG9uc2UiLCJyYWNlIiwiZXJyTXNnIiwiY29uc29sZSIsImVycm9yIiwiY2xlYXJUaW1lb3V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/gemini.ts\n");

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