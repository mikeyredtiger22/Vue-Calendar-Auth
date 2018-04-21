import Vue from 'vue';
import Router from 'vue-router';
import store from '../main.js';
import loginRedirect from '../components/loginRedirect.vue';
import login from '../components/login';
import homePage from '../pages/homePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // todo authenticate all paths
    {
      path: '/',
      name: 'home',
      component: homePage,
      beforeEnter: (to, from, next) => {
        if (store && store._modules.root.state.userId) {
          next('/home');
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/auth/:userId',
      component: loginRedirect
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage
    }
  ]
});
