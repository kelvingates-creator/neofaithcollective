import { c as createComponent, a as renderTemplate, g as defineScriptVars, f as renderScript, m as maybeRenderHead, b as createAstro } from './astro/server_D9U5-KZ2.mjs';
import 'piccolore';
import 'clsx';
import { b as postConfig } from './_astro_content_eggaFy3m.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://neofaithcollective.netlify.app/");
const $$Twikoo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Twikoo;
  const config = {
    ...postConfig.comment.twikoo,
    el: "#tcomment",
    path: Astro2.props.path
  };
  return renderTemplate(_a || (_a = __template(["", '<div id="tcomment"></div> ', " <script>(function(){", "\n    // \u52A8\u6001\u521B\u5EFA\u914D\u7F6E\u5BF9\u8C61\n    function createTwikooConfig() {\n        return {\n            ...config,\n            el: '#tcomment'\n        };\n    }\n\n    // \u52A0\u8F7D Twikoo \u811A\u672C\n    function loadTwikooScript() {\n        return new Promise((resolve, reject) => {\n            if (typeof twikoo !== 'undefined') {\n                resolve();\n                return;\n            }\n            const script = document.createElement('script');\n            script.src = '/assets/js/twikoo.all.min.js';\n            script.async = true;\n            script.onload = resolve;\n            script.onerror = reject;\n            document.head.appendChild(script);\n        });\n    }\n\n    // \u521D\u59CB\u5316 Twikoo\n    async function initTwikoo() {\n        const commentEl = document.getElementById('tcomment');\n        if (!commentEl) return;\n        try {\n            await loadTwikooScript();\n            if (typeof twikoo !== 'undefined') {\n                commentEl.innerHTML = '';\n                const dynamicConfig = createTwikooConfig();\n                console.log('[Twikoo] \u521D\u59CB\u5316\u914D\u7F6E:', dynamicConfig);\n                await twikoo.init(dynamicConfig);\n                console.log('[Twikoo] \u521D\u59CB\u5316\u5B8C\u6210');\n            }\n        } catch (error) {\n            console.error('[Twikoo] \u52A0\u8F7D\u6216\u521D\u59CB\u5316\u5931\u8D25:', error);\n        }\n    }\n\n    // \u4F7F\u7528 Intersection Observer \u5EF6\u8FDF\u52A0\u8F7D\n    function setupLazyLoad() {\n        const commentEl = document.getElementById('tcomment');\n        if (!commentEl) return;\n\n        const observer = new IntersectionObserver((entries) => {\n            if (entries[0].isIntersecting) {\n                initTwikoo();\n                observer.disconnect();\n            }\n        }, { rootMargin: '200px' }); // \u63D0\u524D 200px \u5F00\u59CB\u52A0\u8F7D\n\n        observer.observe(commentEl);\n    }\n\n    // \u9875\u9762\u52A0\u8F7D\u6216\u5207\u6362\u65F6\u8BBE\u7F6E\u5EF6\u8FDF\u52A0\u8F7D\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', setupLazyLoad);\n    } else {\n        setupLazyLoad();\n    }\n\n    // Swup \u9875\u9762\u5207\u6362\u540E\u91CD\u65B0\u8BBE\u7F6E\n    if (window.swup && window.swup.hooks) {\n        window.swup.hooks.on('content:replace', setupLazyLoad);\n    } else {\n        document.addEventListener('swup:enable', function() {\n            if (window.swup && window.swup.hooks) {\n                window.swup.hooks.on('content:replace', setupLazyLoad);\n            }\n        });\n    }\n\n    // \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\n    document.addEventListener('twilight:page:loaded', setupLazyLoad);\n})();<\/script>"])), maybeRenderHead(), renderScript($$result, "/workspaces/neofaithcollective/src/components/post/twikoo.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ config }));
}, "/workspaces/neofaithcollective/src/components/post/twikoo.astro", void 0);

export { $$Twikoo as default };
