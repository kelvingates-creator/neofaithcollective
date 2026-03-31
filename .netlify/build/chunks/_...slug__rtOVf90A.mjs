import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, u as unescapeHTML, m as maybeRenderHead, d as addAttribute, F as Fragment } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { $ as $$Grid, a as $$Icon, b as $$ImageWrapper } from './grid_7BbutKON.mjs';
import { r as renderEntry, s as siteConfig, p as profileConfig, b as postConfig } from './_astro_content_eggaFy3m.mjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import { I as I18nKey, S as SUPPORTED_LANGUAGES, l as langToTranslateMap, f as getTranslation, d as getSortedPosts, r as removeFileExtension, i as i18n, a as getPostUrl, e as getFileDirFromPath, h as getPostUrlBySlug } from './content_Bhz2NelC.mjs';
import { formatDateToYYYYMMDD } from './date_CR68jilK.mjs';
import $$License from './license_C2Nn_o5Z.mjs';
import $$Markdown from './markdown_BHuyG1VL.mjs';
import $$Comment from './comment_BauLICE8.mjs';
import $$PasswordProtection from './passwordProtection_FKpgGX56.mjs';
import $$PostMeta from './postMeta_C0lHgjXO.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
async function getStaticPaths() {
  const blogEntries = await getSortedPosts();
  const paths = [];
  for (const entry of blogEntries) {
    const slug = removeFileExtension(entry.id);
    paths.push({
      params: { slug },
      props: { entry }
    });
    if (entry.data.routeName) {
      let routeName = entry.data.routeName.replace(/^\/+/, "").replace(/\/+$/, "");
      if (routeName.startsWith("posts/")) {
        routeName = routeName.replace(/^posts\//, "");
      }
      paths.push({
        params: { slug: routeName },
        props: { entry }
      });
    }
  }
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content, headings } = await renderEntry(entry);
  const { remarkPluginFrontmatter } = await renderEntry(entry);
  let isEncrypted = !!(entry.data.encrypted && entry.data.password);
  dayjs.extend(utc);
  const lastModified = dayjs(entry.data.updated || entry.data.published).utc().format("YYYY-MM-DDTHH:mm:ss");
  const lastModifiedKeys = [
    I18nKey.lastModifiedPrefix,
    I18nKey.year,
    I18nKey.month,
    I18nKey.day,
    I18nKey.hour,
    I18nKey.minute,
    I18nKey.second
  ];
  const lastModifiedTranslations = {};
  for (const lang of SUPPORTED_LANGUAGES) {
    const translateCode = langToTranslateMap[lang];
    lastModifiedTranslations[translateCode] = {};
    const translation = getTranslation(lang);
    for (const key of lastModifiedKeys) {
      lastModifiedTranslations[translateCode][key] = translation[key];
    }
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.data.title,
    description: entry.data.description || entry.data.title,
    keywords: entry.data.tags,
    author: {
      "@type": "Person",
      name: profileConfig.name,
      url: Astro2.site
    },
    datePublished: formatDateToYYYYMMDD(entry.data.published),
    inLanguage: entry.data.lang ? entry.data.lang.replace("_", "-") : siteConfig.lang.replace("_", "-")
    // TODO include cover image here
  };
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "banner": entry.data.cover, "title": entry.data.title, "description": entry.data.description, "lang": entry.data.lang, "setOGTypeArticle": true, "postSlug": entry.id, "headings": headings }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative mb-4"><div id="post-container"${addAttribute([
    "card-base z-10 px-6 md:px-9 pt-6 pb-4 relative w-full ",
    {}
  ], "class:list")}><!-- word count and reading time --><div class="flex flex-row text-black/30 dark:text-white/30 gap-5 mb-3 transition onload-animation-up"><div class="flex flex-row items-center"><div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2">${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:notes-rounded" })}</div><div class="text-sm">${remarkPluginFrontmatter.words}${" " + i18n(I18nKey.wordsCount)}</div></div><div class="flex flex-row items-center"><div class="transition h-6 w-6 rounded-md bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50 flex items-center justify-center mr-2">${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:schedule-outline-rounded" })}</div><div class="text-sm">${remarkPluginFrontmatter.minutes}${" " + i18n(
    remarkPluginFrontmatter.minutes === 1 ? I18nKey.minuteCount : I18nKey.minutesCount
  )}</div></div></div><!-- title --><div class="relative onload-animation-up"><div data-pagefind-body data-pagefind-weight="10" data-pagefind-meta="title" class="transition w-full block font-bold mb-3
                    text-3xl md:text-[2.25rem]/[2.75rem]
                    text-black/90 dark:text-white/90
                    md:before:w-1 before:h-5 before:rounded-md before:bg-(--primary)
                    before:absolute before:top-3 before:-left-4.5">${entry.data.title}</div></div><!-- metadata --><div class="onload-animation-up">${renderComponent($$result2, "PostMetadata", $$PostMeta, { "className": "mb-5", "published": entry.data.published, "updated": entry.data.updated, "tags": entry.data.tags, "category": entry.data.category, "postUrl": getPostUrl(entry) })}${(!entry.data.cover || entry.data.cover && !entry.data.coverInContent) && renderTemplate`<div class="mt-4 border-(--line-divider) border-dashed border-b mb-5"></div>`}</div><!-- always show cover as long as it has one -->${entry.data.cover && entry.data.coverInContent && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<div class="mt-4"></div>${renderComponent($$result3, "ImageWrapper", $$ImageWrapper, { "id": "post-cover", "src": entry.data.cover, "basePath": getFileDirFromPath(entry.filePath || ""), "class": "mb-8 rounded-xl banner-container onload-animation-up", "loading": "lazy" })}` })}`}${renderComponent($$result2, "PasswordProtection", $$PasswordProtection, { "isEncrypted": isEncrypted, "password": entry.data.password }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Markdown", $$Markdown, { "class": "mb-6 markdown-content onload-animation-up" }, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "Content", Content, {})}` })}${postConfig.license.enable && renderTemplate`${renderComponent($$result3, "License", $$License, { "title": entry.data.title, "id": entry.id, "pubDate": entry.data.published, "author": entry.data.author, "sourceLink": entry.data.sourceLink, "licenseName": entry.data.licenseName, "licenseUrl": entry.data.licenseUrl, "postUrl": getPostUrl(entry), "class": "mb-6 rounded-xl license-container onload-animation-up" })}`}` })}</div></div>${renderComponent($$result2, "Comment", $$Comment, { "post": entry })}${postConfig.showLastModified && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate(_a || (_a = __template(['<div id="last-modified" class="ignore"', "", "", ' style="display: none;"></div><div class="card-base p-6 mb-4"><script>\n                    function runtime() {\n                        const lastModifiedElement = document.getElementById(\'last-modified\');\n                        if (!lastModifiedElement) return;\n                        const startDate = new Date(lastModifiedElement.dataset.lastModified);\n                        const currentDate = new Date();\n                        const diff = currentDate - startDate;\n                        const seconds = Math.floor(diff / 1000);\n                        const days = Math.floor(seconds / 86400);\n                        const hours = Math.floor((seconds % 86400) / 3600);\n                        const minutes = Math.floor((seconds % 3600) / 60);\n                        const secs = seconds % 60;\n                        const years = Math.floor(days / 365);\n                        const months = Math.floor((days % 365) / 30);\n                        const remainingDays = days % 30;\n\n                        // \u83B7\u53D6\u5F53\u524D\u8BED\u8A00\u7FFB\u8BD1\u6570\u636E\n                        const translations = JSON.parse(lastModifiedElement.dataset.translations);\n                        const defaultLang = lastModifiedElement.dataset.defaultLang;\n                        // translate.js \u5728 localStorage \u4E2D\u4F7F\u7528 \'selected-language\' \u5B58\u50A8\u76EE\u6807\u8BED\u8A00\n                        const currentLang = localStorage.getItem(\'selected-language\') || defaultLang;\n                        \n                        // \u83B7\u53D6\u5BF9\u5E94\u7684\u7FFB\u8BD1\u6587\u672C\n                        const langTranslations = translations[currentLang] || translations[defaultLang] || Object.values(translations)[0];\n\n                        const prefix = langTranslations.lastModifiedPrefix;\n                        const yearKey = langTranslations.year;\n                        const monthKey = langTranslations.month;\n                        const dayKey = langTranslations.day;\n                        const hourKey = langTranslations.hour;\n                        const minuteKey = langTranslations.minute;\n                        const secondKey = langTranslations.second;\n\n                        let runtimeString = prefix + \' \';\n                        if (years > 0) {\n                            runtimeString += `${years} ${yearKey} `;\n                        }\n                        if (months > 0) {\n                            runtimeString += `${months} ${monthKey} `;\n                        }\n                        if (remainingDays > 0) {\n                            runtimeString += `${remainingDays} ${dayKey} `;\n                        }\n                        runtimeString += `${hours} ${hourKey} `;\n                        if (minutes < 10) {\n                            runtimeString += `0${minutes} ${minuteKey} `;\n                        } else {\n                            runtimeString += `${minutes} ${minuteKey} `;\n                        }\n                        if (secs < 10) {\n                            runtimeString += `0${secs} ${secondKey}`;\n                        } else {\n                            runtimeString += `${secs} ${secondKey}`;\n                        }\n                        document.getElementById("modifiedtime").innerHTML = runtimeString;\n                    }\n                    setInterval(runtime, 1000);\n                <\/script><div class="card-base p-1 mb-0.1"><div class="flex items-center gap-2"><div class="transition h-9 w-9 rounded-lg overflow-hidden relative flex items-center justify-center mr-0">', '</div><div class="flex flex-col gap-0.1"><div id="modifiedtime" class="text-[1.0rem] leading-tight text-black/75 dark:text-white/75 ignore"></div><p class="text-[0.8rem] leading-tight text-black/75 dark:text-white/75">', "</p></div></div></div></div>"], ['<div id="last-modified" class="ignore"', "", "", ' style="display: none;"></div><div class="card-base p-6 mb-4"><script>\n                    function runtime() {\n                        const lastModifiedElement = document.getElementById(\'last-modified\');\n                        if (!lastModifiedElement) return;\n                        const startDate = new Date(lastModifiedElement.dataset.lastModified);\n                        const currentDate = new Date();\n                        const diff = currentDate - startDate;\n                        const seconds = Math.floor(diff / 1000);\n                        const days = Math.floor(seconds / 86400);\n                        const hours = Math.floor((seconds % 86400) / 3600);\n                        const minutes = Math.floor((seconds % 3600) / 60);\n                        const secs = seconds % 60;\n                        const years = Math.floor(days / 365);\n                        const months = Math.floor((days % 365) / 30);\n                        const remainingDays = days % 30;\n\n                        // \u83B7\u53D6\u5F53\u524D\u8BED\u8A00\u7FFB\u8BD1\u6570\u636E\n                        const translations = JSON.parse(lastModifiedElement.dataset.translations);\n                        const defaultLang = lastModifiedElement.dataset.defaultLang;\n                        // translate.js \u5728 localStorage \u4E2D\u4F7F\u7528 \'selected-language\' \u5B58\u50A8\u76EE\u6807\u8BED\u8A00\n                        const currentLang = localStorage.getItem(\'selected-language\') || defaultLang;\n                        \n                        // \u83B7\u53D6\u5BF9\u5E94\u7684\u7FFB\u8BD1\u6587\u672C\n                        const langTranslations = translations[currentLang] || translations[defaultLang] || Object.values(translations)[0];\n\n                        const prefix = langTranslations.lastModifiedPrefix;\n                        const yearKey = langTranslations.year;\n                        const monthKey = langTranslations.month;\n                        const dayKey = langTranslations.day;\n                        const hourKey = langTranslations.hour;\n                        const minuteKey = langTranslations.minute;\n                        const secondKey = langTranslations.second;\n\n                        let runtimeString = prefix + \' \';\n                        if (years > 0) {\n                            runtimeString += \\`\\${years} \\${yearKey} \\`;\n                        }\n                        if (months > 0) {\n                            runtimeString += \\`\\${months} \\${monthKey} \\`;\n                        }\n                        if (remainingDays > 0) {\n                            runtimeString += \\`\\${remainingDays} \\${dayKey} \\`;\n                        }\n                        runtimeString += \\`\\${hours} \\${hourKey} \\`;\n                        if (minutes < 10) {\n                            runtimeString += \\`0\\${minutes} \\${minuteKey} \\`;\n                        } else {\n                            runtimeString += \\`\\${minutes} \\${minuteKey} \\`;\n                        }\n                        if (secs < 10) {\n                            runtimeString += \\`0\\${secs} \\${secondKey}\\`;\n                        } else {\n                            runtimeString += \\`\\${secs} \\${secondKey}\\`;\n                        }\n                        document.getElementById("modifiedtime").innerHTML = runtimeString;\n                    }\n                    setInterval(runtime, 1000);\n                <\/script><div class="card-base p-1 mb-0.1"><div class="flex items-center gap-2"><div class="transition h-9 w-9 rounded-lg overflow-hidden relative flex items-center justify-center mr-0">', '</div><div class="flex flex-col gap-0.1"><div id="modifiedtime" class="text-[1.0rem] leading-tight text-black/75 dark:text-white/75 ignore"></div><p class="text-[0.8rem] leading-tight text-black/75 dark:text-white/75">', "</p></div></div></div></div>"])), addAttribute(lastModified, "data-last-modified"), addAttribute(JSON.stringify(lastModifiedTranslations), "data-translations"), addAttribute(langToTranslateMap[siteConfig.lang], "data-default-lang"), renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols:history-rounded", "class": "text-4xl text-(--primary) transition-transform group-hover:translate-x-0.5 bg-(--enter-btn-bg) p-2 rounded-md" }), i18n(I18nKey.lastModifiedOutdated)) })}`}<div class="flex flex-col md:flex-row justify-between mb-4 gap-4 overflow-hidden w-full"><a${addAttribute(entry.data.nextSlug ? getPostUrlBySlug(entry.data.nextSlug) : "#", "href")}${addAttribute([
    "w-full font-bold overflow-hidden active:scale-95",
    { "pointer-events-none": !entry.data.nextSlug }
  ], "class:list")}>${entry.data.nextSlug && renderTemplate`<div class="btn-card rounded-2xl w-full h-15 max-w-full px-4 flex items-center justify-start! gap-4">${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:chevron-left-rounded", "class": "text-[2rem] text-(--primary)" })}<div class="overflow-hidden transition text-ellipsis whitespace-nowrap max-w-[calc(100%-3rem)] text-black/75 dark:text-white/75">${entry.data.nextTitle}</div></div>`}</a><a${addAttribute(entry.data.prevSlug ? getPostUrlBySlug(entry.data.prevSlug) : "#", "href")}${addAttribute([
    "w-full font-bold overflow-hidden active:scale-95",
    { "pointer-events-none": !entry.data.prevSlug }
  ], "class:list")}>${entry.data.prevSlug && renderTemplate`<div class="btn-card rounded-2xl w-full h-15 max-w-full px-4 flex items-center justify-end! gap-4"><div class="overflow-hidden transition text-ellipsis whitespace-nowrap max-w-[calc(100%-3rem)] text-black/75 dark:text-white/75">${entry.data.prevTitle}</div>${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:chevron-right-rounded", "class": "text-[2rem] text-(--primary)" })}</div>`}</a></div>`, "head": async ($$result2) => renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd))) })}`;
}, "/workspaces/neofaithcollective/src/pages/posts/[...slug].astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
