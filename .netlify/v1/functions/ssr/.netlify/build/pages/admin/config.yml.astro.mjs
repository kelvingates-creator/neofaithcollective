import { c as configYaml } from '../../chunks/_virtual_decap-cms-config_DdbHNwLj.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_NcXBPHzO.mjs';

const GET = () => {
  return new Response(configYaml, {
    headers: {
      "content-type": "text/yaml; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
