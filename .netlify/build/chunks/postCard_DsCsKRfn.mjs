import { c as createComponent, h as defineStyleVars, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import { a as $$Icon, b as $$ImageWrapper } from './grid_7BbutKON.mjs';
import { r as renderEntry } from './_astro_content_eggaFy3m.mjs';
import { a as getPostUrl, e as getFileDirFromPath, i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import $$PostMeta from './postMeta_C0lHgjXO.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const className = Astro2.props.class;
  const { entry, style } = Astro2.props;
  const url = getPostUrl(entry);
  const {
    title,
    published,
    updated,
    description,
    cover,
    tags,
    category,
    pinned
  } = entry.data;
  const hasCover = cover !== void 0 && cover !== null && cover !== "";
  const coverWidth = "28%";
  const { remarkPluginFrontmatter } = await renderEntry(entry);
  const imageBaseDir = getFileDirFromPath(entry.filePath || "");
  const $$definedVars = defineStyleVars([{ coverWidth }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["card-base flex flex-col-reverse md:flex-col w-full rounded-(--radius-large) overflow-hidden relative", className], "class:list")}${addAttribute(`${style}; ${$$definedVars}`, "style")} data-astro-cid-3alsyrqt> <div${addAttribute(["pl-6 md:pl-9 pr-6 md:pr-2 pt-6 md:pt-7 pb-6 relative", { "w-full md:w-[calc(100%-52px-12px)]": !hasCover, "w-full md:w-[calc(100%-var(--coverWidth)-12px)]": hasCover }], "class:list")} data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> <a${addAttribute(url, "href")} class="transition group w-full block font-bold mb-3 text-3xl text-90
            hover:text-(--primary) dark:hover:text-(--primary)
            active:text-(--title-active) dark:active:text-(--title-active)
            before:w-1 before:h-5 before:rounded-md before:bg-(--primary)
            before:absolute before:top-[35px] before:left-[18px] before:hidden md:before:block
        " data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> ${pinned && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:pin", "class": "inline text-(--primary) text-2xl mr-2 -translate-y-0.5", "data-astro-cid-3alsyrqt": true })}`} ${title} ${renderComponent($$result, "Icon", $$Icon, { "class": "inline text-[2rem] text-(--primary) md:hidden translate-y-0.5 absolute", "name": "material-symbols:chevron-right-rounded", "data-astro-cid-3alsyrqt": true })} ${renderComponent($$result, "Icon", $$Icon, { "class": "text-(--primary) text-[2rem] transition hidden md:inline absolute translate-y-0.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0", "name": "material-symbols:chevron-right-rounded", "data-astro-cid-3alsyrqt": true })} </a> <!-- metadata --> ${renderComponent($$result, "PostMetadata", $$PostMeta, { "published": published, "updated": updated, "tags": tags, "category": category || void 0, "hideTagsForMobile": true, "hideUpdateDate": true, "postUrl": url, "className": "mb-4", "data-astro-cid-3alsyrqt": true })} <!-- description --> <div${addAttribute(["transition text-75 mb-3.5 pr-4", { "line-clamp-2 md:line-clamp-1": !description }], "class:list")} data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> ${description || remarkPluginFrontmatter.excerpt} </div> <!-- word count and read time  --> <div class="text-sm text-black/30 dark:text-white/30 flex gap-4 transition" data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> <div data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> ${remarkPluginFrontmatter.words} ${" " + i18n(remarkPluginFrontmatter.words === 1 ? I18nKey.wordCount : I18nKey.wordsCount)} </div> <div data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}>|</div> <div data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> ${remarkPluginFrontmatter.minutes} ${" " + i18n(remarkPluginFrontmatter.minutes === 1 ? I18nKey.minuteCount : I18nKey.minutesCount)} </div> </div> </div> ${hasCover && renderTemplate`<a${addAttribute(url, "href")}${addAttribute(title, "aria-label")}${addAttribute([
    "group",
    "max-h-[20vh] md:max-h-none mx-4 mt-4 -mb-2 md:mb-0 md:mx-0 md:mt-0",
    "md:w-(--coverWidth) relative md:absolute md:top-3 md:bottom-3 md:right-3 rounded-xl overflow-hidden active:scale-95"
  ], "class:list")} data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> <div class="absolute pointer-events-none z-10 w-full h-full group-hover:bg-black/30 group-active:bg-black/50 transition" data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}></div> <div class="absolute pointer-events-none z-20 w-full h-full flex items-center justify-center " data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:chevron-right-rounded", "class": "transition opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 text-white text-5xl", "data-astro-cid-3alsyrqt": true })} </div> ${renderComponent($$result, "ImageWrapper", $$ImageWrapper, { "src": cover, "basePath": imageBaseDir, "alt": "Cover Image of the Post", "class": "w-full h-full", "data-astro-cid-3alsyrqt": true })} </a>`} ${!hasCover && renderTemplate`<a${addAttribute(url, "href")}${addAttribute(title, "aria-label")} class="hidden! md:flex! btn-regular w-13
            absolute right-3 top-3 bottom-3 rounded-xl bg-(--enter-btn-bg)
            hover:bg-(--enter-btn-bg-hover) active:bg-(--enter-btn-bg-active) active:scale-95
        " data-astro-cid-3alsyrqt${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:chevron-right-rounded", "class": "transition text-(--primary) text-4xl mx-auto", "data-astro-cid-3alsyrqt": true })} </a>`} </div> `;
}, "/workspaces/neofaithcollective/src/components/post/postCard.astro", void 0);

export { $$PostCard as default };
