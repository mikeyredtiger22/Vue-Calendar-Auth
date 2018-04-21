<template>
  <div>
    <sidebar></sidebar>
    <h1>Home Page</h1>
    <p>{{userId}}</p>
    <p>Welcome Person {{getUserId}}</p>
    <button v-on:click="getUserSocObj">GetSocObj</button>
    <!--societies-->
    <div v-if="socObj">
      <!--committees-->
      <div v-if="socObj.committees">
        <h1>Committees:</h1>
        <p v-for="society in socObj.committees" :key="society._id" v-on:click="committeeClick(society)">
          {{society.name}}
        </p>
      </div>
      <!--societies-->
      <div v-if="socObj.joined">
        <h1>Joined Societies:</h1>
        <p v-for="society in socObj.joined" :key="society._id" v-on:click="joinedSocietyClick(society)">
          {{society.name}}
        </p>
      </div>
      <!--available-->
      <div v-if="socObj.available">
        <h1>Available Societies:</h1>
        <p v-for="society in socObj.available" :key="society._id" v-on:click="availableSocietyClick(society)">
          {{society.name}}
        </p>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import Sidebar from '../components/sidebar';
export default {
  name: 'homePage',
  components: {Sidebar},
  props: ['userId'],
  data: function() {
    return {
      socObj: {}
    };
  },
  computed: {
    getUserId () {
      return this.$store.state.userId;
    }
  },
  methods: {
    getUserSocObj() {
      axios.get('http://localhost:3000/user', {params: {userId: this.$store.state.userId}})
        .then((response) => {
          console.log(response.data);
          this.socObj = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
  created: function () {
    this.getUserSocObj();
  }
};
</script>

<style scoped>
</style>
