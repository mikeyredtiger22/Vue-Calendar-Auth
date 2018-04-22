<template>
  <div class="row">
    <div v-for="society in availableSocieties" :key="society._id" class="card m-3" style="width: auto">
      <div class="card-body">
        <h2 class="card-title">{{society.name}}</h2>
        <a v-on:click="joinSociety(society)" class="btn btn-success">Join Society</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'availableSocietiesGrid',
  computed: {
    availableSocieties() {
      return this.$store.state.userSocietiesInfo.available;
    }
  },
  methods: {
    joinSociety(event) {
      console.log(event);
      this.$emit('aaa', 'available');
    }
  }
};
</script>

<style scoped>

</style>
