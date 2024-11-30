import type { APIRoute } from "astro";

export const get: APIRoute = ({ url }): Response => {
  // const { searchParams } = new URL(request.url);
  const query: string | null = url.searchParams.get("query");
  //   console.log(query);

  //--Handle if query is null:
  if (query === null) {
    return new Response(JSON.stringify({ error: "No query provided" }), {
      status: 400, //<-- Bad request
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ query }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
