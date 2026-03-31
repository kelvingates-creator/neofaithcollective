export const prerender = true;
import type { APIRoute } from "astro";

const OAUTH_GITHUB_CLIENT_ID = import.meta.env.OAUTH_GITHUB_CLIENT_ID;

export const GET: APIRoute = ({ url }) => {
  const params = new URLSearchParams({
    client_id: OAUTH_GITHUB_CLIENT_ID,
    scope: "repo,user",
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
    },
  });
};