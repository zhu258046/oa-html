// vue.config.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 选项...
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        /* @ -> src目录*/
        '@': resolve('src')
      }
    }
  }
};
