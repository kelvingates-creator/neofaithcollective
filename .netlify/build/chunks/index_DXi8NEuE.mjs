import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { sortedAlbums } from './albums_ht1oWXRR.mjs';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import { $ as $$Grid, b as $$ImageWrapper } from './grid_7BbutKON.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';
/* empty css                         */

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const getStaticPaths = async () => {
  return sortedAlbums.filter((album) => album.visible).map((album) => ({
    params: { id: album.id },
    props: { album }
  }));
};
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { album } = Astro2.props;
  if (!album) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "title": album.title, "description": album.description || album.title, "data-astro-cid-rgidg7mq": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32" data-astro-cid-rgidg7mq><div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-rgidg7mq>${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "href": "/albums/", "text": i18n(I18nKey.albumsBackToList), "data-astro-cid-rgidg7mq": true })}<!-- 相册标题信息 --><header class="mb-8" data-astro-cid-rgidg7mq><h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3" data-astro-cid-rgidg7mq>${album.title}</h1>${album.description && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400 mb-4" data-astro-cid-rgidg7mq>${album.description}</p>`}<!-- 相册元数据 --><div class="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500" data-astro-cid-rgidg7mq><span data-astro-cid-rgidg7mq>${album.photos.length}${album.photos.length > 1 ? i18n(I18nKey.albumsPhotosCount) : i18n(I18nKey.albumsPhotoCount)}</span><time data-astro-cid-rgidg7mq>${new Date(album.date).toLocaleDateString("zh-CN")}</time>${album.location && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-rgidg7mq><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-rgidg7mq><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" data-astro-cid-rgidg7mq></path></svg>${album.location}</span>`}</div><!-- 标签 -->${album.tags && album.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-4" data-astro-cid-rgidg7mq>${album.tags.map((tag) => renderTemplate`<span class="btn-regular h-8 text-sm px-3 rounded-lg" data-astro-cid-rgidg7mq>${tag}</span>`)}</div>`}</header><!-- 照片网格 --><div${addAttribute(`photo-gallery moment-images ${album.layout === "masonry" ? "masonry-layout" : "grid-layout"}`, "class")}${addAttribute(album.layout || "grid", "data-layout")}${addAttribute(album.columns || 3, "data-columns")} data-astro-cid-rgidg7mq>${album.photos.map((photo, index) => renderTemplate`<figure class="photo-item group relative overflow-hidden rounded-lg" data-astro-cid-rgidg7mq>${renderComponent($$result2, "ImageWrapper", $$ImageWrapper, { "src": photo.src, "basePath": album.basePath, "alt": photo.alt, "class": "photo-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer", "data-astro-cid-rgidg7mq": true })}</figure>`)}</div></div></div>` })}`;
}, "/workspaces/neofaithcollective/src/pages/albums/[id]/index.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/albums/[id]/index.astro";
const $$url = "/albums/[id]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
