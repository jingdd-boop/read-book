const { override, addLessLoader, overrideDevServer } = require('customize-cra');
const path = require('path');

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/api/': {
      target: 'https://mock.apifox.cn/m1/1130371-0-default',
      changeOrigin: true,
      //   pathRewrite: { '^/api': '/' },
    },
    '/docs/': {
      target: 'https://www.juhe.cn',
      changeOrigin: true,
      //   pathRewrite: { '^/api': '/' },
    },
  };

  return configFunction;
};

const addLessConfig = () => {
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
    },
  });
};

module.exports = {
  devServer: overrideDevServer(addProxy()),
  lessOptions: overrideDevServer(addLessConfig()),
};
