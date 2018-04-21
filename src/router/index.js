import Vue from 'vue';
import Router from 'vue-router';
import loginRedirect from '../components/loginRedirect.vue';
import helloWorld from '../components/HelloWorld.vue';
import homePage from '../pages/homePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Society Scheduler',
      component: helloWorld
    },
    {
      path: '/auth/:userId',
      component: loginRedirect
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage,
      props: true
    }
  ]
});
