const path = require('path');
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  // transpileDependencies:['@dcloudio/uni-ui']
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('/'))
      .set('@com', resolve('/components'))
      // .set('@api', resolve('/api'))
      // .set('@utils', resolve('/utils'))
      // .set('@mixins', resolve('/mixins'))
      // .set('@img', resolve('/static/images'));
  },
};