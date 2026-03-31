import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { a as $$Icon } from './grid_7BbutKON.mjs';
import { h as getPostUrlBySlug, i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import { p as profileConfig, b as postConfig } from './_astro_content_eggaFy3m.mjs';
import { formatDateToYYYYMMDD } from './date_CR68jilK.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$License = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$License;
  const { title, id, pubDate, author, sourceLink, licenseName, licenseUrl, postUrl: propPostUrl } = Astro2.props;
  const className = Astro2.props.class;
  const profileConf = profileConfig;
  const licenseConf = postConfig.license;
  const postUrl = sourceLink || propPostUrl || getPostUrlBySlug(id);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative transition overflow-hidden bg-(--license-block-bg) py-5 px-6 ${className}`, "class")}> <div class="transition font-bold text-black/75 dark:text-white/75"> ${title} </div> <a${addAttribute(postUrl, "href")} class="link text-(--primary)"> ${postUrl} </a> <div class="flex gap-6 mt-2"> <div> <div class="transition text-black/30 dark:text-white/30 text-sm">${i18n(I18nKey.author)}</div> <div class="transition text-black/75 dark:text-white/75 line-clamp-2">${author || profileConf.name}</div> </div> <div> <div class="transition text-black/30 dark:text-white/30 text-sm">${i18n(I18nKey.publishedAt)}</div> <div class="transition text-black/75 dark:text-white/75 line-clamp-2">${formatDateToYYYYMMDD(pubDate)}</div> </div> <div> <div class="transition text-black/30 dark:text-white/30 text-sm">${i18n(I18nKey.license)}</div> <a${addAttribute(licenseName ? licenseUrl || void 0 : licenseConf.url, "href")} target="_blank" class="link text-(--primary) line-clamp-2">${licenseName || licenseConf.name}</a> </div> </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "fa6-brands:creative-commons", "class": "transition text-[15rem] absolute pointer-events-none right-6 top-1/2 -translate-y-1/2 text-black/5 dark:text-white/5" })} </div>`;
}, "/workspaces/neofaithcollective/src/components/post/license.astro", void 0);

export { $$License as default };
