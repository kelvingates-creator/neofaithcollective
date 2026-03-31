export const prerender = true;
import type { APIRoute } from "astro";

const OAUTH_GITHUB_CLIENT_ID = import.meta.env.OAUTH_GITHUB_CLIENT_ID;

export const GET: APIRoute = ({ url }) => {
  const params = new URLSearchParams({
    client_id: OAUTH_GITHUB_CLIENT_ID,
    scope: "repo,user",
  });

  const redirectUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;

  return new Response(
    `<!doctype html><html><head></head><body><script>window.location.replace("${redirectUrl}");</script></body></html>`,
    { 
      status: 200,
      headers: { "Content-Type": "text/html" } 
    }
  );
};