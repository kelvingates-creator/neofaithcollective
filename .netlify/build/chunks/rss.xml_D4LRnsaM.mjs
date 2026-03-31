import { g as getImage } from './_astro_assets_FYlfTl0G.mjs';
import { parse } from 'node-html-parser';
import rss from '@astrojs/rss';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { s as siteConfig } from './_astro_content_eggaFy3m.mjs';
import { d as getSortedPosts, e as getFileDirFromPath, m as getCategoryPathLabel, b as parseTags, a as getPostUrl } from './content_Bhz2NelC.mjs';

const prerender = true;
const markdownParser = new MarkdownIt();
const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/albums/example/智子_ASK.jpg": () => import('./智子_ASK_Cv0uUZLJ.mjs'),"/src/content/diary/example/Dawn.jpg": () => import('./Dawn_G62IAPhi.mjs'),"/src/content/posts/file_000000008e9471fd9ef14d8c518136ea.png": () => import('./file_000000008e9471fd9ef14d8c518136ea_Dt7CcX52.mjs'),"/src/content/projects/Twilight/Twilight_Cover.jpg": () => import('./Twilight_Cover_BUR9h7sI.mjs')


});
async function GET(context) {
  if (!context.site) {
    throw Error("site not set");
  }
  const posts = (await getSortedPosts()).filter((post) => !post.data.encrypted);
  const feed = [];
  for (const post of posts) {
    const body = markdownParser.render(String(post.body ?? ""));
    const html = parse.parse(body);
    const images = html.querySelectorAll("img");
    for (const img of images) {
      const src = img.getAttribute("src");
      if (!src) continue;
      if (src.startsWith("./") || src.startsWith("../") || !src.startsWith("http") && !src.startsWith("/")) {
        let importPath = null;
        const contentDirRaw = post.filePath ? getFileDirFromPath(post.filePath) : "src/content/posts";
        const contentDir = contentDirRaw.startsWith("src/") ? contentDirRaw : `src/${contentDirRaw}`;
        if (src.startsWith("./")) {
          const prefixRemoved = src.slice(2);
          importPath = `/${contentDir}/${prefixRemoved}`;
        } else if (src.startsWith("../")) {
          const cleaned = src.replace(/^\.\.\//, "");
          importPath = `/src/content/${cleaned}`;
        } else {
          importPath = `/${contentDir}/${src}`;
        }
        const imageMod = await imagesGlob[importPath]?.()?.then(
          (res) => res.default
        );
        if (imageMod) {
          const optimizedImg = await getImage({ src: imageMod });
          img.setAttribute("src", new URL(optimizedImg.src, context.site).href);
        } else {
          console.log(
            `Failed to load image: ${importPath} for post: ${post.id}`
          );
        }
      } else if (src.startsWith("/")) {
        img.setAttribute("src", new URL(src, context.site).href);
      }
    }
    const categories = [];
    const categoryLabel = getCategoryPathLabel(post.data.category);
    if (categoryLabel) categories.push(categoryLabel);
    const tags = parseTags(post.data.tags);
    if (tags && tags.length > 0) categories.push(...tags);
    feed.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: getPostUrl(post),
      categories,
      // sanitize the new html string with corrected image paths
      content: sanitizeHtml(html.toString(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      })
    });
  }
  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || "No description",
    site: context.site,
    items: feed,
    customData: `<language>${siteConfig.lang}</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
