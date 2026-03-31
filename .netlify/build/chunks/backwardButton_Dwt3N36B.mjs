import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import 'clsx';
import { getParentLink } from './navigation_BMRz2Mso.mjs';
import { u as url, i as i18n, I as I18nKey } from './content_Bhz2NelC.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$BackwardButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackwardButton;
  const { currentPath, href, text } = Astro2.props;
  let targetUrl = href;
  let targetText = text;
  if (currentPath && !targetUrl) {
    const parentLink = getParentLink(currentPath);
    if (parentLink) {
      targetUrl = url(parentLink.url);
      targetText = `${i18n(I18nKey.backTo)} ${parentLink.name}`;
    }
  }
  if (!targetUrl) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<div class="mb-6"> <a${addAttribute(targetUrl, "href")} class="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-(--primary) transition-colors group"> <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> <span class="text-sm font-medium"> ${targetText} </span> </a> </div>`;
}, "/workspaces/neofaithcollective/src/components/backwardButton.astro", void 0);

export { $$BackwardButton as default };
