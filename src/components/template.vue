<template>
  <div class="container-fluid cont">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 p-0 sb">
        <!--sidebar-->
        <sidebar v-on:showJoined="showJoined" v-on:showAvailability="showAvailability"
                 v-on:refresh="refreshUserSocietiesInfo" v-on:successMsg="successMsg" v-on:errorMsg="errorMsg">
        </sidebar>
      </div>
      <div class="col-12 col-md-8 col-lg-9 p-0">
        <div class="grid p-4">
          <!--alert messages-->
          <b-alert dismissible variant="success" :show="!!successMessage" @dismissed="successMessage=null">
            {{successMessage}}
          </b-alert>
          <b-alert dismissible variant="danger" :show="!!errorMessage" @dismissed="errorMessage=null">
            {{errorMessage}}
          </b-alert>
          <!--available societies grid page-->
          <available-societies-grid v-if="this.page === 'join'" v-on:refresh="refreshUserSocietiesInfo">
          </available-societies-grid>
          <!--home page-->
          <div v-if="this.page === 'home'" class="homePage">
            <h1>Home Page</h1>
            <p>Welcome Person {{getUserId}}</p>
          </div>
          <availability v-if="this.page === 'availability'" v-bind:availabilityData="availabilityData">
          </availability>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import sidebar from './sidebar';
import availableSocietiesGrid from './availableSocietiesGrid';
import availability from './availability';
export default {
  name: 'Template',
  components: {availability, sidebar, availableSocietiesGrid},
  data: function() {
    return {
      page: 'home',
      successMessage: null,
      errorMessage: null,
      availabilityData: null
    };
  },
  computed: {
    getUserId() {
      return this.$store.state.userId;
    }
  },
  methods: {
    refreshUserSocietiesInfo() {
      axios.get('http://localhost:3000/user', {params: {userId: this.$store.state.userId}})
        .then((response) => {
          this.$store.commit('setUserSocietiesInfo', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    successMsg(message) {
      this.successMessage = message;
    },
    errorMsg(message) {
      this.errorMessage = message;
    },
    showJoined() {
      this.page = ((this.page === 'join') ? 'home' : 'join');
    },
    showAvailability(availabilityData) {
      this.availabilityData = availabilityData;
      this.page = 'availability';
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
