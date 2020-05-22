const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const config = getConfig();
if (!config) {
  return;
}

const { port = 3000, proxy } = config;

/**
 * TODO: sort route by priority or length
 */
Object.keys(proxy).forEach((route) => {
  app.use(route, createProxyMiddleware(proxy[route]));
});

app.listen(port);

function getConfig() {
  const configPath = path.resolve(process.cwd(), 'proxy.config.json');

  try {
    return require(configPath);
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('Oops...cannot find the proxy.config.json');
    }

    throw error;
  }
}
