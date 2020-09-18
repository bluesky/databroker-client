const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/db',
    createProxyMiddleware({
      target: 'http://localhost:6942',
      changeOrigin: true,
      pathRewrite: {
        "^/db": "",
      },
    })
  );
};
