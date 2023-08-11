import Vue from 'vue'
import App from './App'

 // var jWeixin = require('./utils/jweixins')
// VueI18n
import VueI18n from 'vue-i18n'
import messages from './i18n';
// VueI18n
Vue.use(VueI18n)

Vue.config.productionTip = false

// VueI18n
// 注意下述代码务必放在代码 "Vue.prototype._i18n = i18n" 上方
const i18n = new VueI18n({
  // 默认语言
  locale: 'cn',
  // 引入语言文件
  messages
})
// VueI18n
Vue.prototype._i18n = i18n

// Vue.use(jWeixin);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
