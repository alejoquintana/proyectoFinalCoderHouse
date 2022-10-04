import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import VueForm from 'vue-form';

import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueForm);

Vue.filter('url', function (value) {
	value = (value%12)+1
	return `/${value}.jpg`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
