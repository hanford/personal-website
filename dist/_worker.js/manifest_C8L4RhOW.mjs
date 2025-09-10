globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_DDHZGGjE.mjs';
import './chunks/astro-designed-error-pages_DDymdh3s.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_E1y6-WrC.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jackhanford/Developer/pw2/","cacheDir":"file:///Users/jackhanford/Developer/pw2/node_modules/.astro/","outDir":"file:///Users/jackhanford/Developer/pw2/dist/","srcDir":"file:///Users/jackhanford/Developer/pw2/src/","publicDir":"file:///Users/jackhanford/Developer/pw2/public/","buildClientDir":"file:///Users/jackhanford/Developer/pw2/dist/","buildServerDir":"file:///Users/jackhanford/Developer/pw2/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"chirp/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/chirp","isIndex":false,"type":"page","pattern":"^\\/chirp\\/?$","segments":[[{"content":"chirp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/chirp.astro","pathname":"/chirp","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"instachrome/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/instachrome","isIndex":false,"type":"page","pattern":"^\\/instachrome\\/?$","segments":[[{"content":"instachrome","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/instachrome.astro","pathname":"/instachrome","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"snapchat/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/snapchat","isIndex":false,"type":"page","pattern":"^\\/snapchat\\/?$","segments":[[{"content":"snapchat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/snapchat.astro","pathname":"/snapchat","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"uberchrome/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/uberchrome","isIndex":false,"type":"page","pattern":"^\\/uberchrome\\/?$","segments":[[{"content":"uberchrome","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/uberchrome.astro","pathname":"/uberchrome","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"wedding/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/wedding","isIndex":false,"type":"page","pattern":"^\\/wedding\\/?$","segments":[[{"content":"wedding","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/wedding.astro","pathname":"/wedding","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jackhanford/Developer/pw2/src/pages/chirp.astro",{"propagation":"none","containsHead":true}],["/Users/jackhanford/Developer/pw2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jackhanford/Developer/pw2/src/pages/instachrome.astro",{"propagation":"none","containsHead":true}],["/Users/jackhanford/Developer/pw2/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/jackhanford/Developer/pw2/src/pages/snapchat.astro",{"propagation":"none","containsHead":true}],["/Users/jackhanford/Developer/pw2/src/pages/uberchrome.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/chirp@_@astro":"pages/chirp.astro.mjs","\u0000@astro-page:src/pages/instachrome@_@astro":"pages/instachrome.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/snapchat@_@astro":"pages/snapchat.astro.mjs","\u0000@astro-page:src/pages/uberchrome@_@astro":"pages/uberchrome.astro.mjs","\u0000@astro-page:src/pages/wedding@_@astro":"pages/wedding.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C8L4RhOW.mjs","/Users/jackhanford/Developer/pw2/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Users/jackhanford/Developer/pw2/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DrGfDV6w.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jackhanford/Developer/pw2/src/pages/index.astro?astro&type=script&index=0&lang.ts","try{const e=document.getElementById(\"lcpMetric\");if(e&&\"PerformanceObserver\"in window){let n=null;const c=new PerformanceObserver(d=>{const o=d.getEntries(),i=o[o.length-1];i&&(n=i,e.textContent=`LCP: ${Math.round(n.startTime)} ms`)});c.observe({type:\"largest-contentful-paint\",buffered:!0}),document.addEventListener(\"visibilitychange\",()=>{if(document.visibilityState===\"hidden\")try{c.disconnect()}catch{}})}}catch{}const l=document.getElementById(\"contactBtn\"),t=document.getElementById(\"contactDialog\"),s=document.getElementById(\"closeBtn\");l&&t instanceof HTMLDialogElement&&s&&(l.addEventListener(\"click\",()=>{t.showModal()}),s.addEventListener(\"click\",()=>{t.close()}),t.addEventListener(\"click\",e=>{e.target===t&&t.close()}));"]],"assets":["/_headers","/apple-touch-icon.png","/chirp.jpg","/darkmode.jpg","/fast-flix.jpg","/favicon-16x16.png","/favicon-32x32.png","/favicon.svg","/github-trends.png","/icon144.png","/icon192.png","/icon512.png","/instachrome.jpg","/instachrome.zip","/manifest.json","/snapcode.png","/trends-dark-mac.png","/trends-dark.png","/trends-light-mac.png","/trends-light.png","/trends.jpg","/uber-chrome.jpg","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/fonts/brandon-medium.woff","/fonts/brandon-regular.woff","/_worker.js/chunks/Card_DtL_BSas.mjs","/_worker.js/chunks/Layout_Cqg27Azn.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_C1FMn3JU.mjs","/_worker.js/chunks/astro-designed-error-pages_DDymdh3s.mjs","/_worker.js/chunks/astro_DXNiPHMA.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/index_CXz8DJxv.mjs","/_worker.js/chunks/noop-middleware_E1y6-WrC.mjs","/_worker.js/pages/chirp.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/instachrome.astro.mjs","/_worker.js/pages/projects.astro.mjs","/_worker.js/pages/snapchat.astro.mjs","/_worker.js/pages/uberchrome.astro.mjs","/_worker.js/pages/wedding.astro.mjs","/_worker.js/chunks/astro/server_DDHZGGjE.mjs","/chirp/index.html","/instachrome/index.html","/projects/index.html","/snapchat/index.html","/uberchrome/index.html","/wedding/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"cXjsMxJlSFr1xUiu5in17GHt2++1llOse+LU7tO+r+A=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
