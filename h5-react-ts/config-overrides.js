const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");
module.exports = override(
  // babel-plugin-import
  // fixBabelImports('import', { libraryName: 'antd', style: true }),
  //增加路径别名的处理
  addWebpackAlias({
    "@": path.resolve("./src"),
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: {
    //   "@primary-color": "#1DA57A"
    // }
  })
);
