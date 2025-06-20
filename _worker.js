export default {
  async fetch(request, env) {
    const _url = new URL(request.url);
    const req = new Request(_url, request);
    return fetch(req);
  },
};
