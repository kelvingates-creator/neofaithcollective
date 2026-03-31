import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { L as LinkPresets, $ as $$Grid, b as $$ImageWrapper } from './grid_7BbutKON.mjs';
import { L as LinkPreset, s as siteConfig } from './_astro_content_eggaFy3m.mjs';
import { sortedMoments } from './diary_Dk4fs5-1.mjs';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import $$BackwardButton from './backwardButton_Dwt3N36B.mjs';
/* empty css                         */

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const $$Diary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Diary;
  const pageTitle = LinkPresets[LinkPreset.Diary].name;
  const pageDescription = LinkPresets[LinkPreset.Diary].description;
  function formatTime(dateString) {
    var TG = 8;
    if (siteConfig.timeZone >= -12 && siteConfig.timeZone <= 12) TG = siteConfig.timeZone;
    const timeGap = TG;
    const now = /* @__PURE__ */ new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor(
      (now.getTime() + timeGap * 60 * 60 * 1e3 - date.getTime()) / (1e3 * 60)
    );
    if (diffInMinutes < 60) {
      return `${diffInMinutes}${i18n(I18nKey.diaryMinutesAgo)}`;
    }
    if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours}${i18n(I18nKey.diaryHoursAgo)}`;
    }
    const days = Math.floor(diffInMinutes / 1440);
    return `${days}${i18n(I18nKey.diaryDaysAgo)}`;
  }
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "title": pageTitle, "description": pageDescription, "data-astro-cid-pyfuvgrx": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-32" data-astro-cid-pyfuvgrx><div class="card-base z-10 px-4 py-4 md:px-6 md:py-5 relative w-full" data-astro-cid-pyfuvgrx>${renderComponent($$result2, "BackwardButton", $$BackwardButton, { "currentPath": Astro2.url.pathname, "data-astro-cid-pyfuvgrx": true })}<div class="relative max-w-4xl" data-astro-cid-pyfuvgrx><!-- 页面头部 --><div class="moments-header mb-6" data-astro-cid-pyfuvgrx><div class="header-content" data-astro-cid-pyfuvgrx><div class="header-info" data-astro-cid-pyfuvgrx><h1 class="moments-title text-xl md:text-2xl lg:text-3xl font-bold text-90 mb-1" data-astro-cid-pyfuvgrx>${pageTitle}</h1><p class="moments-subtitle text-sm md:text-base lg:text-lg text-75" data-astro-cid-pyfuvgrx>${pageDescription}</p></div><div class="header-stats" data-astro-cid-pyfuvgrx><div class="stat-item text-center" data-astro-cid-pyfuvgrx><span class="stat-number text-lg md:text-xl lg:text-2xl font-bold text-(--primary)" data-astro-cid-pyfuvgrx>${sortedMoments.length}</span><span class="stat-label text-xs md:text-sm lg:text-base text-75" data-astro-cid-pyfuvgrx>${i18n(I18nKey.diaryCount)}</span></div></div></div></div><!-- 短文列表 --><div class="moments-timeline" data-astro-cid-pyfuvgrx><div class="timeline-list space-y-4" data-astro-cid-pyfuvgrx>${sortedMoments.map((moment) => renderTemplate`<div class="moment-item card-base p-4 md:p-6 lg:p-8 hover:shadow-lg transition-all" data-astro-cid-pyfuvgrx><div class="moment-content" data-astro-cid-pyfuvgrx>${moment.title && renderTemplate`<h2 class="moment-title text-base md:text-lg lg:text-xl font-bold text-90 mb-2" data-astro-cid-pyfuvgrx>${moment.title}</h2>`}<p class="moment-text text-sm md:text-base lg:text-lg text-90 leading-relaxed mb-3 md:mb-4" data-astro-cid-pyfuvgrx>${moment.content}</p>${moment.images && moment.images.length > 0 && renderTemplate`<div class="moment-images flex flex-wrap gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4" data-astro-cid-pyfuvgrx>${moment.images.map((image, index) => renderTemplate`<div class="image-item relative rounded-md overflow-hidden cursor-pointer hover:scale-105 transition max-w-full" data-astro-cid-pyfuvgrx>${renderComponent($$result2, "ImageWrapper", $$ImageWrapper, { "src": image, "basePath": moment.basePath, "alt": i18n(I18nKey.diaryImage), "class": "w-auto h-auto max-h-[300px] md:max-h-[400px] object-contain rounded-md", "data-astro-cid-pyfuvgrx": true })}</div>`)}</div>`}</div><hr class="moment-divider border-t border-(--line-divider) my-3 md:my-4" data-astro-cid-pyfuvgrx><div class="moment-footer flex justify-between items-center" data-astro-cid-pyfuvgrx><div class="moment-time flex items-center gap-1.5 text-75 text-xs md:text-sm lg:text-base" data-astro-cid-pyfuvgrx><i class="time-icon text-xs md:text-sm" data-astro-cid-pyfuvgrx>🕐</i><time${addAttribute(moment.date, "datetime")} data-astro-cid-pyfuvgrx>${formatTime(moment.date)}</time></div></div></div>`)}</div></div><!-- 底部提示 --><div class="moments-tips text-center mt-6 md:mt-8 lg:mt-10 text-75 text-xs md:text-sm lg:text-base italic" data-astro-cid-pyfuvgrx>${i18n(I18nKey.diaryTips)}</div></div></div></div>` })}`;
}, "/workspaces/neofaithcollective/src/pages/diary.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/diary.astro";
const $$url = "/diary/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Diary,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
