<template>
  <div class="container-fluid full-height">
    <div class="row full-height">
      <div class="col-12 col-md-4 col-lg-3 p-0">
        <sidebar></sidebar>
      </div>
      <div class="col-12 col-md-8 col-lg-9 p-4">
        <div class="homePage">
          <h1>Home Page</h1>
          <p>Welcome Person {{getUserId}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import sidebar from './sidebar';
export default {
  name: 'template',
  components: {sidebar},
  data: function() {
    return {
      page: ''
    };
  },
  computed: {
    getUserId() {
      return this.$store.state.userId;
    }
  },
  methods: {
    committeeClick(soc) {
      console.log('committee:');
      console.log(soc);
    },
    joinedSocietyClick(soc) {
      console.log('joined:');
      console.log(soc);
    },
    availableSocietyClick(soc) {
      console.log('available:');
      console.log(soc);
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
.full-height {
  min-height: 100%;
}
</style>
