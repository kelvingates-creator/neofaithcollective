import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPresets, $ as $$Grid, a as $$Icon } from './grid_7BbutKON.mjs';
import { n as navbarConfig } from './_astro_content_eggaFy3m.mjs';
import { u as url } from './content_Bhz2NelC.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';
/* empty css                          */

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
async function getStaticPaths() {
  return navbarConfig.links.filter((link) => typeof link !== "number" && link.children && link.children.length > 0).map((link) => {
    const navLink = link;
    const slug = navLink.url.replace(/^\/|\/$/g, "");
    return {
      params: { menu: slug },
      props: { link: navLink }
    };
  });
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { link } = Astro2.props;
  const childrenLinks = link.children || [];
  const processedLinks = childrenLinks.map((child) => {
    if (typeof child === "number") {
      return LinkPresets[child];
    }
    return child;
  });
  const pageTitle = link.name;
  const pageDescription = link.description || "";
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "title": pageTitle, "description": pageDescription, "data-astro-cid-la6idv53": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32" data-astro-cid-la6idv53><div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-la6idv53>${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname, "data-astro-cid-la6idv53": true })}<!-- 标题 --><header class="mb-8" data-astro-cid-la6idv53><h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3" data-astro-cid-la6idv53>${pageTitle}</h1>${pageDescription && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400" data-astro-cid-la6idv53>${pageDescription}</p>`}</header><!-- 链接网格 --><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-la6idv53>${processedLinks.map((child) => renderTemplate`<a${addAttribute(child.external ? child.url : url(child.url), "href")}${addAttribute(child.external ? "_blank" : null, "target")} class="menu-card group flex flex-col items-center justify-center p-8 rounded-xl border transition-all duration-300" data-astro-cid-la6idv53><div class="icon-wrapper w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-all duration-300" data-astro-cid-la6idv53>${child.icon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": child.icon, "class": "text-3xl", "data-astro-cid-la6idv53": true })}`}</div><h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-(--primary) transition-colors duration-300 text-center" data-astro-cid-la6idv53>${child.name}</h2>${child.description && renderTemplate`<p class="text-sm text-neutral-600 dark:text-neutral-400 text-center mt-2 line-clamp-2" data-astro-cid-la6idv53>${child.description}</p>`}</a>`)}</div></div></div>` })}`;
}, "/workspaces/neofaithcollective/src/pages/[...menu].astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/[...menu].astro";
const $$url = "/[...menu]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
