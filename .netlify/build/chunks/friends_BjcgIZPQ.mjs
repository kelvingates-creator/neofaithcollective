import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPreset, g as getEntry, r as renderEntry } from './_astro_content_eggaFy3m.mjs';
import { L as LinkPresets, $ as $$Grid } from './grid_7BbutKON.mjs';
import { friendsData } from './friends_CHEya4tc.mjs';
import $$Markdown from './markdown_BHuyG1VL.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';
/* empty css                           */

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const $$Friends = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Friends;
  const pageTitle = LinkPresets[LinkPreset.Friends].name;
  const pageDescription = LinkPresets[LinkPreset.Friends].description;
  const friendsPost = await getEntry("spec", "friends");
  if (!friendsPost) {
    throw new Error("friends page content not found");
  }
  const { Content } = await renderEntry(friendsPost);
  const items = friendsData;
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  const shuffledItems = shuffleArray(items);
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "title": pageTitle, "description": pageDescription, "data-astro-cid-spp2p3no": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32" data-astro-cid-spp2p3no><div class="card-base z-10 px-9 py-6 relative w-full " data-astro-cid-spp2p3no>${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname, "data-astro-cid-spp2p3no": true })}<!-- 标题 --><header class="mb-8" data-astro-cid-spp2p3no><h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3" data-astro-cid-spp2p3no>${pageTitle}</h1>${pageDescription && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400" data-astro-cid-spp2p3no>${pageDescription}</p>`}</header><!-- 链接网格 --><div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4" data-astro-cid-spp2p3no>${shuffledItems.map((item) => renderTemplate`<a${addAttribute(item.siteurl, "href")} target="_blank" rel="noopener noreferrer" class="menu-card group flex flex-row items-center p-4 rounded-xl border transition-all duration-300 gap-4" data-astro-cid-spp2p3no><div class="icon-wrapper w-20 h-20 shrink-0 flex items-center justify-center rounded-full transition-all duration-300 overflow-hidden bg-zinc-200 dark:bg-zinc-900" data-astro-cid-spp2p3no><img${addAttribute(item.imgurl, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover transition duration-300 group-hover:scale-110" data-astro-cid-spp2p3no></div><div class="flex flex-col justify-center overflow-hidden" data-astro-cid-spp2p3no><h2 class="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-(--primary) transition-colors duration-300 truncate" data-astro-cid-spp2p3no>${item.title}</h2><p class="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1 mt-1" data-astro-cid-spp2p3no>${item.desc}</p>${item.tags && item.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1.5 mt-2" data-astro-cid-spp2p3no>${item.tags.slice(0, 2).map((tag) => renderTemplate`<span class="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700" data-astro-cid-spp2p3no>${tag}</span>`)}${item.tags.length > 2 && renderTemplate`<span class="text-[10px] px-2 py-0.5 text-neutral-400" data-astro-cid-spp2p3no>
+${item.tags.length - 2}</span>`}</div>`}</div></a>`)}</div>${renderComponent($$result2, "Markdown", $$Markdown, { "class": "mt-2", "data-astro-cid-spp2p3no": true }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", Content, { "data-astro-cid-spp2p3no": true })}` })}</div></div>` })}`;
}, "/workspaces/neofaithcollective/src/pages/friends.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/friends.astro";
const $$url = "/friends/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Friends,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
