// ABOUT: CloudFlare Worker for serving Game Play Randomiser static assets
// ABOUT: Uses Workers Assets API to serve HTML, JS, and handle routing

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Try to get the asset from the ASSETS binding
      let asset;

      // Handle root path
      if (url.pathname === '/') {
        asset = await env.ASSETS.fetch(new URL('/index.html', request.url));
      } else {
        asset = await env.ASSETS.fetch(request);
      }

      // If asset exists, return it with proper headers
      if (asset && asset.status === 200) {
        const response = new Response(asset.body, asset);

        // Add cache headers for static assets
        response.headers.set('Cache-Control', 'public, max-age=86400');

        // Ensure proper content types
        if (url.pathname.endsWith('.js')) {
          response.headers.set('Content-Type', 'application/javascript');
        } else if (url.pathname.endsWith('.html') || url.pathname === '/') {
          response.headers.set('Content-Type', 'text/html');
        }

        return response;
      }

      // If no asset found, return 404
      return new Response('Not Found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });

    } catch (error) {
      // Handle errors
      return new Response('Internal Server Error', {
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  },
};