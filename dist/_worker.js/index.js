globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C1FMn3JU.mjs';
import { manifest } from './manifest_C8L4RhOW.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/chirp.astro.mjs');
const _page1 = () => import('./pages/instachrome.astro.mjs');
const _page2 = () => import('./pages/projects.astro.mjs');
const _page3 = () => import('./pages/snapchat.astro.mjs');
const _page4 = () => import('./pages/uberchrome.astro.mjs');
const _page5 = () => import('./pages/wedding.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/chirp.astro", _page0],
    ["src/pages/instachrome.astro", _page1],
    ["src/pages/projects.astro", _page2],
    ["src/pages/snapchat.astro", _page3],
    ["src/pages/uberchrome.astro", _page4],
    ["src/pages/wedding.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
