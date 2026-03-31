import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { $ as $$Grid, a as $$Icon } from './grid_7BbutKON.mjs';
import { i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';
import './_menu_.b25736c9_N1WwpSDh.mjs';

const prerender = true;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`export const prerender = true;
${renderComponent($$result, "GridLayout", $$Grid, { "title": i18n(I18nKey.notFound), "description": i18n(I18nKey.notFoundDescription), "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex w-full rounded-(--radius-large) overflow-hidden relative min-h-96" data-astro-cid-zetdm5md><div class="card-base z-10 px-9 py-12 relative w-full flex flex-col items-center justify-center text-center" data-astro-cid-zetdm5md><!-- 404 大号数字 --><div class="text-8xl md:text-9xl font-bold text-(--primary) opacity-20 mb-4" data-astro-cid-zetdm5md>${i18n(I18nKey.notFound)}</div><!-- 404 图标 --><div class="mb-6" data-astro-cid-zetdm5md>${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:error-outline", "class": "text-6xl text-(--primary)", "data-astro-cid-zetdm5md": true })}</div><!-- 标题 --><h1 class="text-3xl md:text-4xl font-bold mb-4 text-90" data-astro-cid-zetdm5md>${i18n(I18nKey.notFoundTitle)}</h1><!-- 描述 --><p class="text-lg text-75 mb-8 max-w-md" data-astro-cid-zetdm5md>${i18n(I18nKey.notFoundDescription)}</p><!-- 返回首页按钮 --><a href="/" class="inline-flex items-center gap-2 px-6 py-3 bg-(--primary) text-white rounded-(--radius-large) hover:bg-(--primary-dark) transition-colors duration-300 font-medium" data-astro-cid-zetdm5md>${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:home", "class": "text-xl", "data-astro-cid-zetdm5md": true })}${i18n(I18nKey.backToHome)}</a><!-- 装饰性元素 --><div class="absolute top-4 left-4 opacity-10" data-astro-cid-zetdm5md>${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:sentiment-sad", "class": "text-4xl text-(--primary)", "data-astro-cid-zetdm5md": true })}</div><div class="absolute bottom-4 right-4 opacity-10" data-astro-cid-zetdm5md>${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols:search-off", "class": "text-4xl text-(--primary)", "data-astro-cid-zetdm5md": true })}</div></div></div>` })}`;
}, "/workspaces/neofaithcollective/src/pages/404.astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
