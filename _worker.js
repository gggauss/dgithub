// 针对Cloudflare Pages的GitHub镜像 - 使用Pages Functions
export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const path = url.pathname;
  const search = url.search;
  if(true) {
      return new Response("Hello, world!");
  }

}
