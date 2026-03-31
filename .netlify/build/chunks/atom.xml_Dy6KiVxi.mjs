import { g as getImage } from './_astro_assets_FYlfTl0G.mjs';
import { parse } from 'node-html-parser';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { s as siteConfig, p as profileConfig } from './_astro_content_eggaFy3m.mjs';
import { d as getSortedPosts, e as getFileDirFromPath, a as getPostUrl, c as getCategoryPathParts, b as parseTags } from './content_Bhz2NelC.mjs';

const prerender = true;
const markdownParser = new MarkdownIt();
const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/albums/example/智子_ASK.jpg": () => import('./智子_ASK_Cv0uUZLJ.mjs'),"/src/content/diary/example/Dawn.jpg": () => import('./Dawn_G62IAPhi.mjs'),"/src/content/posts/file_000000008e9471fd9ef14d8c518136ea.png": () => import('./file_000000008e9471fd9ef14d8c518136ea_Dt7CcX52.mjs'),"/src/content/projects/Twilight/Twilight_Cover.jpg": () => import('./Twilight_Cover_BUR9h7sI.mjs')


});
async function GET(context) {
  if (!context.site) {
    throw Error("site not set");
  }
  const posts = (await getSortedPosts()).filter((post) => !post.data.encrypted && post.data.draft !== true);
  let atomFeed = `<?xml version="1.0" encoding="utf-8"?>
        <feed xmlns="http://www.w3.org/2005/Atom">
        <title>${siteConfig.title}</title>
        <subtitle>${siteConfig.subtitle || "No description"}</subtitle>
        <link href="${context.site}" rel="alternate" type="text/html"/>
        <link href="${new URL("atom.xml", context.site)}" rel="self" type="application/atom+xml"/>
        <id>${context.site}</id>
        <updated>${(/* @__PURE__ */ new Date()).toISOString()}</updated>
        <language>${siteConfig.lang}</language>`;
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
    const postUrl = new URL(getPostUrl(post), context.site).href;
    const content = sanitizeHtml(html.toString(), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
    });
    atomFeed += `
        <entry>
            <title>${post.data.title}</title>
            <link href="${postUrl}" rel="alternate" type="text/html"/>
            <id>${postUrl}</id>
            <published>${post.data.published.toISOString()}</published>
            <updated>${post.data.updated?.toISOString() || post.data.published.toISOString()}</updated>
            <summary>${post.data.description || ""}</summary>
            <content type="html"><![CDATA[${content}]]></content>
            <author>
                <name>${profileConfig.name}</name>
            </author>`;
    const categoryParts = getCategoryPathParts(post.data.category);
    if (categoryParts && categoryParts.length > 0) {
      for (let i = 0; i < categoryParts.length; i++) {
        const term = categoryParts.slice(0, i + 1).join(" / ");
        atomFeed += `
            <category term="${term}"></category>`;
      }
    }
    const postTags = parseTags(post.data.tags);
    if (postTags && postTags.length > 0) {
      for (const tag of postTags) {
        atomFeed += `
            <category term="${tag}" label="${tag}"></category>`;
      }
    }
    atomFeed += `
            </entry>`;
  }
  atomFeed += `
        </feed>`;
  return new Response(atomFeed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
