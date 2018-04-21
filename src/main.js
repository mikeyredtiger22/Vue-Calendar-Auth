// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import App from './App';
import router from './router';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'societyScheduler',
  storage: window.localStorage
});

const store = new Vuex.Store({
  state: {
    userId: 'init', // todo test
    societiesObject: {}
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    clearUserId(state) {
      state.userId = '';
    }
  },
  plugins: [vuexLocalStorage.plugin]
});

export default store;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
