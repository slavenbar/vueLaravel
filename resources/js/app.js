/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
Vue.use(require('bootstrap-vue'));
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//import VueRouter from 'vue-router';
//import { createRouter, createWebHistory } from 'vue-router';
//Vue.use(VueRouter);

window.Vue = require('vue');
//Vue.use(BootstrapVue);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Здесь подключаем  Vue компонеты к JS
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('my-app', require('./components/myApp.vue').default);
//Vue.component('main-header', require('./components/mainHeader.vue').default);
//Vue.component('main-header', require('./components/mainHeader.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//import { createRouter } from 'vue-router'

// const routes = [
//     { path: '/', component: require('./components/mainHeader.vue').default},
//     { path: '/blog', component: require('./components/myApp.vue').default}
// ]

// const router = new VueRouter({
//     routes: routes,
//     mode: "history"
// })

const app = new Vue({
    el: '#app',
});
