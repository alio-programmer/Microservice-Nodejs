const httpProxy = require("http-proxy"); // http-proxy is used to create reverse proxy server to redirect requests from one server to different servers based on the request URL path.

const proxy = httpProxy.createProxyServer();

let current = 0;

const roundrobin = (servers, req, res) => {
  const target = servers[current];
  console.log(target);
  current = (current + 1) % servers.length;

  proxy.web(req, res, { target: `http://${target.host}:${target.port}` });
};

module.exports = roundrobin;
