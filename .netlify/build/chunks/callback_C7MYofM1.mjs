const prerender = true;
const OAUTH_GITHUB_CLIENT_ID = "Ov23li8SjAGS7v02VHO3";
const OAUTH_GITHUB_CLIENT_SECRET = "8700ebcd6362387280ebc3a6a6bf39a97791cdd8";
const GET = async ({ url, redirect }) => {
  const code = url.searchParams.get("code");
  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        client_id: OAUTH_GITHUB_CLIENT_ID,
        client_secret: OAUTH_GITHUB_CLIENT_SECRET,
        code
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const body = await response.json();
    const content = {
      token: body.access_token,
      provider: "github"
    };
    const script = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:${content.provider}:success:${JSON.stringify(content)}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:${content.provider}", "*");
      </script>
    `;
    return new Response(script, {
      headers: { "Content-Type": "text/html" }
    });
  } catch (err) {
    console.log(err);
    return redirect("/?error=auth_failed");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
