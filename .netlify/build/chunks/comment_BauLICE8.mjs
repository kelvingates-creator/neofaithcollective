import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import { a as getPostUrl } from './content_Bhz2NelC.mjs';
import { b as postConfig } from './_astro_content_eggaFy3m.mjs';
import $$Twikoo from './twikoo_C_9kyekn.mjs';

const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$Comment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Comment;
  const { post } = Astro2.props;
  const path = getPostUrl(post);
  let commentService = "";
  if (postConfig.comment?.enable && post.data.comment && postConfig.comment?.twikoo) {
    commentService = "twikoo";
  }
  return renderTemplate`${postConfig.comment?.enable && post.data.comment && renderTemplate`${maybeRenderHead()}<div class="card-base p-6 mb-4">${commentService === "twikoo" && renderTemplate`${renderComponent($$result, "Twikoo", $$Twikoo, { "path": path })}`}${commentService === "" && null}</div>`}`;
}, "/workspaces/neofaithcollective/src/components/post/comment.astro", void 0);

export { $$Comment as default };
