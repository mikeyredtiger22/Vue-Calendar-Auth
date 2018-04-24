<template>
  <div>
    <b-alert dismissible variant="success" :show="!!joinedSociety" @dismissed="joinedSociety=null">
      You have joined {{joinedSociety}}!
    </b-alert>
    <div class="row">
      <div v-for="society in availableSocieties" :key="society._id" class="card m-3" style="width: auto">
        <div class="card-body">
          <h2 class="card-title">{{society.name}}</h2>
          <a v-on:click="joinSociety(society)" class="btn btn-success">Join Society</a>
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
      axios.put('http://localhost:3000/user', null, // todo make api request file
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
