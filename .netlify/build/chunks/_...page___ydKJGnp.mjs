import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { $ as $$Grid, P as PAGE_SIZE } from './grid_7BbutKON.mjs';
import { d as getSortedPosts } from './content_Bhz2NelC.mjs';
import $$Pagination from './pagination_Er0FyBuI.mjs';
import $$PostPage from './postPage_BVzhbeqa.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const prerender = true;
const getStaticPaths = (async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "GridLayout", $$Grid, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation-up", "page": page, "style": `animation-delay: ${len * 50}ms` })} ` })}`;
}, "/workspaces/neofaithcollective/src/pages/[...page].astro", void 0);

const $$file = "/workspaces/neofaithcollective/src/pages/[...page].astro";
const $$url = "/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
