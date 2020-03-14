import Vue from 'vue';

import buggyfill from 'viewport-units-buggyfill';
import './styles/index';
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks';
import App from './App.vue';


buggyfill.init({
  hacks,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');