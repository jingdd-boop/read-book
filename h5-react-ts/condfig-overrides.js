const { override, overrideDevServer } = require('customize-cra');

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/api/': {
      target: 'https://api.apiopen.top',
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

module.exports = {
  devServer: overrideDevServer(addProxy()),
};
