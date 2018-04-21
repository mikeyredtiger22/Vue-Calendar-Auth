import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
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

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#vueApp',
  router,
  store,
  components: { App },
  template: '<App/>'
});

export default store;
