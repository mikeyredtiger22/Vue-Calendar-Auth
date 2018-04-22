<template>
  <div class="container-fluid full-height">
    <div class="row full-height">
      <sidebar></sidebar>
      <div class="col-12 col-md-9 col-lg-8">
        <div class="homePage">
          <h1>Home Page</h1>
          <p>Welcome Person {{getUserId}}</p>
          <!--societies-->
          <div v-if="getUserSocietiesInfo">
            <!--committees-->
            <div v-if="getUserSocietiesInfo.committees">
              <h1>Committees:</h1>
              <p v-for="society in getUserSocietiesInfo.committees" :key="society._id" v-on:click="committeeClick(society)">
                {{society.name}}
              </p>
            </div>
            <!--societies-->
            <div v-if="getUserSocietiesInfo.joined">
              <h1>Joined Societies:</h1>
              <p v-for="society in getUserSocietiesInfo.joined" :key="society._id" v-on:click="joinedSocietyClick(society)">
                {{society.name}}
              </p>
            </div>
            <!--available-->
            <div v-if="getUserSocietiesInfo.available">
              <h1>Available Societies:</h1>
              <p v-for="society in getUserSocietiesInfo.available" :key="society._id" v-on:click="availableSocietyClick(society)">
                {{society.name}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import sidebar from '../components/sidebar';
export default {
  name: 'homePage',
  components: {sidebar},
  computed: {
    getUserId() {
      return this.$store.state.userId;
    },
    getUserSocietiesInfo() {
      return this.$store.state.userSocietiesInfo;
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
  height: 100vh;
}
</style>
