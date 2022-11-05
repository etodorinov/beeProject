const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:30303",
      // target: "https://react-beeproject-server.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
