import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment, f as renderScript, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { a as $$Icon } from './grid_7BbutKON.mjs';
import { u as url, c as getCategoryPathParts, j as getCategoryUrl, i as i18n, I as I18nKey, k as getTagUrl } from './content_Bhz2NelC.mjs';
import { formatDateToYYYYMMDD } from './date_CR68jilK.mjs';
import { u as umamiConfig } from './_astro_content_eggaFy3m.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$PostMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostMeta;
  const {
    published,
    updated,
    category,
    tags,
    hideUpdateDate,
    hideTagsForMobile,
    isHome,
    className = "",
    slug,
    postUrl
  } = Astro2.props;
  const finalPostUrl = postUrl || (slug ? url(`/posts/${slug}/`) : "");
  const categoryParts = getCategoryPathParts(category ?? null);
  const umamiEnabled = umamiConfig.enabled || false;
  const umamiWebsiteId = umamiConfig.scripts.match(/data-website-id="([^"]+)"/)?.[1] || "";
  const umamiApiKey = "";
  const umamiBaseUrl = umamiConfig.baseUrl || "";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-wrap text-neutral-500 dark:text-neutral-400 items-center gap-x-4 gap-y-2", className], "class:list")}> <!-- publish date --> <div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:calendar-today-outline-rounded", "class": "text-xl" })} </div> <span class="text-50 text-sm font-medium">${formatDateToYYYYMMDD(published)}</span> </div> <!-- update date --> ${!hideUpdateDate && updated && updated.getTime() !== published.getTime() && renderTemplate`<div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:edit-calendar-outline-rounded", "class": "text-xl" })} </div> <span class="text-50 text-sm font-medium">${formatDateToYYYYMMDD(updated)}</span> </div>`} <!-- categories --> <div class="flex items-center"> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:book-2-outline-rounded", "class": "text-xl" })} </div> <div class="flex flex-row flex-nowrap items-center"> ${categoryParts && categoryParts.length > 0 ? categoryParts.map((categoryName, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${index > 0 && renderTemplate`<div class="mx-1.5 text-(--meta-divider) text-sm">/</div>`}<a${addAttribute(getCategoryUrl(categoryParts.slice(0, index + 1)), "href")}${addAttribute(`View all posts in the ${categoryName} category`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                                        hover:text-(--primary) dark:hover:text-(--primary) whitespace-nowrap"> ${categoryName} </a> ` })}`) : renderTemplate`<a${addAttribute(getCategoryUrl(null), "href")}${addAttribute(`View all posts in the ${i18n(I18nKey.uncategorized)} category`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                                hover:text-(--primary) dark:hover:text-(--primary) whitespace-nowrap"> ${i18n(I18nKey.uncategorized)} </a>`} </div> </div> <!-- tags --> <div${addAttribute(["items-center", { "flex": !hideTagsForMobile, "hidden md:flex": hideTagsForMobile }], "class:list")}> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:tag-rounded", "class": "text-xl" })} </div> <div class="flex flex-row flex-nowrap items-center"> ${tags && tags.length > 0 && tags.map((tag, i) => renderTemplate`<div${addAttribute([{ "hidden": i == 0 }, "mx-1.5 text-(--meta-divider) text-sm"], "class:list")}>/</div>
                <a${addAttribute(getTagUrl(tag), "href")}${addAttribute(`View all posts with the ${tag.trim()} tag`, "aria-label")} class="link-lg transition text-50 text-sm font-medium
                                hover:text-(--primary) dark:hover:text-(--primary) whitespace-nowrap"> ${tag.trim()} </a>`)} ${!(tags && tags.length > 0) && renderTemplate`<div class="transition text-50 text-sm font-medium">${i18n(I18nKey.noTags)}</div>`} </div> </div> <!-- 访问量（首页不显示，且umami.enabled为true时显示） --> ${!isHome && umamiEnabled && finalPostUrl && renderTemplate`<div class="flex items-center page-views-container"${addAttribute(finalPostUrl, "data-page-url")}${addAttribute(umamiBaseUrl, "data-umami-base-url")}${addAttribute(umamiApiKey, "data-umami-api-key")}${addAttribute(umamiWebsiteId, "data-umami-website-id")}${addAttribute(i18n(I18nKey.pageViews), "data-i18n-views")}${addAttribute(i18n(I18nKey.visitors), "data-i18n-visitors")}${addAttribute(i18n(I18nKey.statsError), "data-i18n-error")}> <div class="meta-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:visibility-outline-rounded", "class": "text-xl" })} </div> <span class="text-50 text-sm font-medium page-views-display">${i18n(I18nKey.statsLoading)}</span> </div>`} </div> <!-- 只有在非首页且启用umami且有finalPostUrl时才加载脚本 --> ${!isHome && umamiEnabled && finalPostUrl && renderTemplate`${renderScript($$result, "/workspaces/neofaithcollective/src/components/post/postMeta.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "/workspaces/neofaithcollective/src/components/post/postMeta.astro", void 0);

export { $$PostMeta as default };
