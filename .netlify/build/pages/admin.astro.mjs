import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, i as renderHead } from '../chunks/astro/server_CZeXsbw0.mjs';
import 'piccolore';
import 'clsx';
import { d as decapCMSVersion } from '../chunks/_virtual_decap-cms-config_DdbHNwLj.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_NcXBPHzO.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$Admin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  return renderTemplate(_a || (_a = __template(['<html> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><link', ' type="text/yaml" rel="cms-config-url"><title>Content Manager</title>', "</head> <body> <!-- Include the script that builds the page and powers Decap CMS --> <script", "><\/script> </body> </html>"])), addAttribute(`${Astro2.url.pathname.replace(/\/$/, "")}/config.yml`, "href"), renderHead(), addAttribute(`https://unpkg.com/decap-cms@^${decapCMSVersion}/dist/decap-cms.js`, "src"));
}, "/workspaces/neofaithcollective/node_modules/.pnpm/decap-cms-oauth-astro@0.1.1_astro@5.16.15_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@2._u3s3e4uugmhm6t7lwr2fj7ngge/node_modules/decap-cms-oauth-astro/src/admin.astro", void 0);

const $$file = "/workspaces/neofaithcollective/node_modules/.pnpm/decap-cms-oauth-astro@0.1.1_astro@5.16.15_@types+node@25.3.3_@vercel+functions@2.2.13_jiti@2._u3s3e4uugmhm6t7lwr2fj7ngge/node_modules/decap-cms-oauth-astro/src/admin.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Admin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
