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

/**
 * 处理CORS预检请求
 */
function handleCORS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400'
    }
  });
}

/**
 * 重写HTML中的GitHub链接为代理链接
 * @param {string} html HTML内容
 * @param {string} proxyOrigin 代理的源地址
 * @returns {string} 重写后的HTML
 */
function rewriteGitHubLinks(html, proxyOrigin) {
  // 替换绝对链接
  html = html.replace(/https:\/\/github\.com\//g, `${proxyOrigin}/`);
  html = html.replace(/https:\/\/api\.github\.com\//g, `${proxyOrigin}/api/`);
  html = html.replace(/https:\/\/raw\.githubusercontent\.com\//g, `${proxyOrigin}/raw/`);
  
  // 替换相对链接
  html = html.replace(/href="\/([^"]*)"/g, `href="${proxyOrigin}/$1"`);
  html = html.replace(/src="\/([^"]*)"/g, `src="${proxyOrigin}/$1"`);
  
  return html;
}
