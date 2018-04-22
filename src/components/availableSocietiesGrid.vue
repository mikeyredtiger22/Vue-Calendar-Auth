<template>
  <div class="row">
    <div class="card m-3" style="width: auto">
      <div class="card-body">
        <h2 class="card-title">Southampton Unwdwdion Rugby</h2>
        <a class="btn btn-success">Join Society</a>
      </div>
    </div>
    <div class="card m-3" style="width: auto">
      <div class="card-body">
        <h2 class="card-title">Southa mpto nwd wddd Union Rugby</h2>
        <a class="btn btn-success">Join Society</a>
      </div>
    </div>
    <div v-for="society in availableSocieties" :key="society._id" class="card m-3" style="width: auto">
      <div class="card-body">
        <h2 class="card-title">{{society.name}}</h2>
        <a class="btn btn-success">Join Society</a>
      </div>
    </div>
    <div class="card m-3" style="width: auto">
      <div class="card-body">
        <h2 class="card-title">Southampton Union Rugby</h2>
        <a class="btn btn-success">Join Society</a>
      </div>
    </div>
    <div class="card m-3" style="width: auto">
      <div class="card-body">
        <h2 class="card-title">SouthamptonUnwdwdion Rugby</h2>
        <a class="btn btn-success">Join Society</a>
      </div>
    </div>
    <div class="card m-3" style="width: auto">
      <div class="card-body">
        <h2 class="card-title">Southa mpto nwd wddd Union Rugby</h2>
        <a class="btn btn-success">Join Society</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'availableSocietiesGrid',
  data: function() {
    return {
      availableSocieties: {}
    };
  },
  created: function() {
    this.availableSocieties = this.$store.state.userSocietiesInfo.available;
  }
};
</script>

<style scoped>

</style>
