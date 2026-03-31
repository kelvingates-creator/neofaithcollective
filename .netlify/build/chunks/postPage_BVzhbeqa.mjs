import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import $$PostCard from './postCard_DsCsKRfn.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$PostPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPage;
  const { page } = Astro2.props;
  let delay = 0;
  const interval = 30;
  return renderTemplate`${maybeRenderHead()}<div class="transition flex flex-col gap-3 py-1 md:py-0 md:gap-4 mb-4"> ${page.data.map((entry) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "entry": entry, "class:list": "onload-animation-up", "style": `animation-delay: ${delay++ * interval}ms;` })}`)} </div>`;
}, "/workspaces/neofaithcollective/src/components/postPage.astro", void 0);

export { $$PostPage as default };
