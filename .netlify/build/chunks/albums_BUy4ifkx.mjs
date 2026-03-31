import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPresets, $ as $$Grid, b as $$ImageWrapper } from './grid_7BbutKON.mjs';
import { L as LinkPreset } from './_astro_content_eggaFy3m.mjs';
import { sortedAlbums } from './albums_ht1oWXRR.mjs';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';
/* empty css                          */

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const $$Albums = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Albums;
  const pageTitle = LinkPresets[LinkPreset.Albums].name;
  const pageDescription = LinkPresets[LinkPreset.Albums].description;
  const albumsData = sortedAlbums.filter((album) => album.visible);
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "title": pageTitle, "description": pageDescription, "data-astro-cid-b6yaaygw": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32" data-astro-cid-b6yaaygw><div class="card-base z-10 px-9 py-6 relative w-full" data-astro-cid-b6yaaygw>${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname, "data-astro-cid-b6yaaygw": true })}<!-- 页面标题 --><header class="mb-8" data-astro-cid-b6yaaygw><h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3" data-astro-cid-b6yaaygw>${pageTitle}</h1><p class="text-neutral-600 dark:text-neutral-400" data-astro-cid-b6yaaygw>${pageDescription}</p></header><!-- 相册网格 --><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-b6yaaygw>${albumsData.map((album) => renderTemplate`<article class="album-card group bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 dark:border-neutral-800" data-astro-cid-b6yaaygw><a${addAttribute(`/albums/${album.id}/`, "href")} class="block" data-astro-cid-b6yaaygw><!-- 封面图片 --><div class="aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-700" data-astro-cid-b6yaaygw>${renderComponent($$result2, "ImageWrapper", $$ImageWrapper, { "src": album.cover, "basePath": album.basePath, "alt": album.title, "class": "w-full h-full object-cover group-hover:scale-105 transition duration-300", "data-astro-cid-b6yaaygw": true })}</div><!-- 相册信息 --><div class="p-4" data-astro-cid-b6yaaygw><h3 class="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-(--primary) transition-colors" data-astro-cid-b6yaaygw>${album.title}</h3>${album.description && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2" data-astro-cid-b6yaaygw>${album.description}</p>`}<!-- 元数据 --><div class="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-500" data-astro-cid-b6yaaygw><div class="flex items-center gap-4" data-astro-cid-b6yaaygw><span data-astro-cid-b6yaaygw>${album.photos.length}${album.photos.length > 1 ? i18n(I18nKey.albumsPhotosCount) : i18n(I18nKey.albumsPhotoCount)}</span>${album.location && renderTemplate`<span class="flex items-center gap-1" data-astro-cid-b6yaaygw><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-b6yaaygw><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" data-astro-cid-b6yaaygw></path></svg>${album.location}</span>`}</div><time data-astro-cid-b6yaaygw>${new Date(album.date).toLocaleDateString("zh-CN")}</time></div><!-- 标签 -->${album.tags && album.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-1 mt-3" data-astro-cid-b6yaaygw>${album.tags.slice(0, 3).map((tag) => renderTemplate`<span class="btn-regular h-6 text-xs px-2 rounded-lg" data-astro-cid-b6yaaygw>${tag}</span>`)}${album.tags.length > 3 && renderTemplate`<span class="btn-regular h-6 text-xs px-2 rounded-lg" data-astro-cid-b6yaaygw>
+${album.tags.length - 3}</span>`}</div>`}</div></a></article>`)}</div><!-- 空状态 -->${albumsData.length === 0 && renderTemplate`<div class="text-center py-12" data-astro-cid-b6yaaygw><div class="text-neutral-400 dark:text-neutral-600 mb-4" data-astro-cid-b6yaaygw><svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-b6yaaygw><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-b6yaaygw></path></svg></div><h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2" data-astro-cid-b6yaaygw>${i18n(I18nKey.albumsEmpty)}</h3><p class="text-neutral-600 dark:text-neutral-400" data-astro-cid-b6yaaygw>${i18n(I18nKey.albumsEmptyDesc)}</p></div>`}</div></div>` })}`;
}, "/workspaces/neofaithcollective/src/pages/albums.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/albums.astro";
const $$url = "/albums/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Albums,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
