const prerender = true;
const OAUTH_GITHUB_CLIENT_ID = "Ov23li8SjAGS7v02VHO3";
const GET = ({ redirect }) => {
  const params = new URLSearchParams({
    client_id: OAUTH_GITHUB_CLIENT_ID,
    scope: "repo,user"
  });
  return redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
