<template>
  <div>
    <b-alert dismissible variant="success" :show="!!joinedSociety" @dismissed="joinedSociety=null">
      You have joined {{joinedSociety}}!
    </b-alert>
    <h1>Societies</h1>
    <h2 v-show="availableSocieties">There are no societies to join at the moment.</h2>
    <div class="row">
      <div class="col" v-for="society in availableSocieties" :key="society._id">
        <div class="card m-3">
          <div class="card-body">
            <h2 class="card-title">{{society.name}}</h2>
            <a v-on:click="joinSociety(society)" class="btn btn-success">Join Society</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'availableSocietiesGrid',
  data: function() {
    return {
      joinedSociety: null
    };
  },
  computed: {
    availableSocieties() {
      return this.$store.state.userSocietiesInfo.available;
    }
  },
  methods: {
    joinSociety(society) {
      axios.put(process.env.api_url + '/user', null,
        {params: {userId: this.$store.state.userId, societyId: society._id}})
        .then((response) => {
          if (response.data.joined) {
            this.joinedSociety = society.name;
          }
          this.$emit('refresh');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
</style>
