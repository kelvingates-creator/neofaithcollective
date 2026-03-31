import { r as renderers } from './chunks/_@astro-renderers_NcXBPHzO.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BClR64qA.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/config.yml.astro.mjs');
const _page4 = () => import('./pages/admin.astro.mjs');
const _page5 = () => import('./pages/albums/_id_.astro.mjs');
const _page6 = () => import('./pages/albums.astro.mjs');
const _page7 = () => import('./pages/anime.astro.mjs');
const _page8 = () => import('./pages/archive.astro.mjs');
const _page9 = () => import('./pages/atom.astro.mjs');
const _page10 = () => import('./pages/atom.xml.astro.mjs');
const _page11 = () => import('./pages/diary.astro.mjs');
const _page12 = () => import('./pages/friends.astro.mjs');
const _page13 = () => import('./pages/oauth/callback.astro.mjs');
const _page14 = () => import('./pages/oauth.astro.mjs');
const _page15 = () => import('./pages/og/_---slug_.png.astro.mjs');
const _page16 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page17 = () => import('./pages/projects.astro.mjs');
const _page18 = () => import('./pages/robots.txt.astro.mjs');
const _page19 = () => import('./pages/rss.astro.mjs');
const _page20 = () => import('./pages/rss.xml.astro.mjs');
const _page21 = () => import('./pages/skills.astro.mjs');
const _page22 = () => import('./pages/timeline.astro.mjs');
const _page23 = () => import('./pages/_---menu_.astro.mjs');
const _page24 = () => import('./pages/_---page_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.15_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.31.1_roll_3srgeclotxphs7yceh4z6vplgi/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["node_modules/.pnpm/decap-cms-oauth-astro@0.1.1_astro@5.16.15_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@2._u3s3e4uugmhm6t7lwr2fj7ngge/node_modules/decap-cms-oauth-astro/src/config.ts", _page3],
    ["node_modules/.pnpm/decap-cms-oauth-astro@0.1.1_astro@5.16.15_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@2._u3s3e4uugmhm6t7lwr2fj7ngge/node_modules/decap-cms-oauth-astro/src/admin.astro", _page4],
    ["src/pages/albums/[id]/index.astro", _page5],
    ["src/pages/albums.astro", _page6],
    ["src/pages/anime.astro", _page7],
    ["src/pages/archive.astro", _page8],
    ["src/pages/atom.astro", _page9],
    ["src/pages/atom.xml.ts", _page10],
    ["src/pages/diary.astro", _page11],
    ["src/pages/friends.astro", _page12],
    ["src/pages/oauth/callback.ts", _page13],
    ["src/pages/oauth/index.ts", _page14],
    ["src/pages/og/[...slug].png.ts", _page15],
    ["src/pages/posts/[...slug].astro", _page16],
    ["src/pages/projects.astro", _page17],
    ["src/pages/robots.txt.ts", _page18],
    ["src/pages/rss.astro", _page19],
    ["src/pages/rss.xml.ts", _page20],
    ["src/pages/skills.astro", _page21],
    ["src/pages/timeline.astro", _page22],
    ["src/pages/[...menu].astro", _page23],
    ["src/pages/[...page].astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3f48045c-3069-4010-b54c-31d258b1c8c6"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
