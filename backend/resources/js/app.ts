import './bootstrap.ts';
import Vue from 'vue';
// @ts-ignore
const files = require.context('./', true, /\.vue$/i);

// @ts-ignore
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('root-component', require('./components/RootComponent.vue').default);

import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const app = new Vue({
    router,
    el: '#app',
});
