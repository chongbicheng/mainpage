import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import $ from 'jquery'
import { Message,LoadingBar,Spin,Card,Input,Select,Option,Tag,Button,Upload} from 'iview'
import 'iview/dist/styles/iview.css'
import '../static/live2dw/lib/L2Dwidget.min.js'
import animated from "animate.css"
import vueToTop from 'vue-totop'
import axios from 'axios'


Vue.config.productionTip = false

Vue.component('Message',Message)
Vue.component('LoadingBar',LoadingBar)
Vue.component('Spin',Spin)
Vue.component('Card',Card)
Vue.component('Input',Input)
Vue.component('Select',Select)
Vue.component('Option',Option)
Vue.component('Tag',Tag)
Vue.component('Button',Button)
Vue.component('Upload',Upload)
Vue.use(animated);
Vue.use(vueToTop);
Vue.prototype.$axios = axios;
Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
