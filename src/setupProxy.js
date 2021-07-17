const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
      changeOrigin: true,
    }),
  );
};
