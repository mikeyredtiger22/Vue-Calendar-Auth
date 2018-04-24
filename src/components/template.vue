<template>
  <div class="container-fluid cont">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 p-0 sb">
        <sidebar v-on:action="showAvailableSocieties" v-on:refresh="refreshUserSocietiesInfo"></sidebar>
      </div>
      <div class="col-12 col-md-8 col-lg-9 p-4">
        <div class="grid">
          <available-societies-grid v-if="this.page === 'available'" v-on:refresh="refreshUserSocietiesInfo">
          </available-societies-grid>
          <div v-if="this.page === 'home'" class="homePage">
            <h1>Home Page</h1>
            <p>Welcome Person {{getUserId}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import sidebar from './sidebar';
import availableSocietiesGrid from './availableSocietiesGrid';
export default {
  name: 'Template',
  components: {sidebar, availableSocietiesGrid},
  data: function() {
    return {
      page: 'home'
    };
  },
  computed: {
    getUserId() {
      return this.$store.state.userId;
    }
  },
  methods: {
    showAvailableSocieties(event) {
      // todo will update when more pages are added
      if (this.page === 'home') {
        this.page = 'available';
      } else {
        this.page = 'home';
      }
    },
    refreshUserSocietiesInfo() {
      axios.get('http://localhost:3000/user', {params: {userId: this.$store.state.userId}})
        .then((response) => {
          this.$store.commit('setUserSocietiesInfo', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  beforeCreate: function() {
    axios.get('http://localhost:3000/user', {params: {userId: this.$store.state.userId}})
      .then((response) => {
        this.$store.commit('setUserSocietiesInfo', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
</script>
<style scoped>
@media (min-width: 768px) {
  .grid {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    overflow-y: scroll;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
