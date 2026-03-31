import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPresets, $ as $$Grid } from './grid_7BbutKON.mjs';
import { L as LinkPreset } from './_astro_content_eggaFy3m.mjs';
import { g as getSortedPostsList } from './content_Bhz2NelC.mjs';
import ArchivePanel from './archivePanel_DvYd_oi3.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archive;
  const pageTitle = LinkPresets[LinkPreset.Archive].name;
  const pageDescription = LinkPresets[LinkPreset.Archive].description;
  const sortedPostsList = await getSortedPostsList();
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"><div class="card-base z-10 px-9 py-6 relative w-full ">${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname })}<!-- 标题 --><header class="mb-8"><h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">${pageTitle}</h1>${pageDescription && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400">${pageDescription}</p>`}</header><!-- 归档面板 -->${renderComponent($$result2, "ArchivePanel", ArchivePanel, { "sortedPosts": sortedPostsList, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/archivePanel.svelte", "client:component-export": "default" })}</div></div>` })}`;
}, "/workspaces/neofaithcollective/src/pages/archive.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/archive.astro";
const $$url = "/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Archive,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
