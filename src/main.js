import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
import 'fullpage.js/vendors/scrolloverflow';
import "fullpage.js/dist/fullpage.min.css";

Vue.config.productionTip = false
Vue.use(VueFullPage);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
