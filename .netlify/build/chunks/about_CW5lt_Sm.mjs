import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPreset, g as getEntry, r as renderEntry } from './_astro_content_eggaFy3m.mjs';
import { L as LinkPresets, $ as $$Grid } from './grid_7BbutKON.mjs';
import $$Markdown from './markdown_BHuyG1VL.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = LinkPresets[LinkPreset.About].name;
  const pageDescription = LinkPresets[LinkPreset.About].description;
  const aboutPost = await getEntry("spec", "about");
  if (!aboutPost) {
    throw new Error("About page content not found");
  }
  const { Content } = await renderEntry(aboutPost);
  return renderTemplate`${renderComponent($$result, "GridLayout", $$Grid, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32"> <div class="card-base z-10 px-9 py-6 relative w-full "> ${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname })} ${renderComponent($$result2, "Markdown", $$Markdown, { "class": "mt-2" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} </div> </div> ` })}`;
}, "/workspaces/neofaithcollective/src/pages/about.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/about.astro";
const $$url = "/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
