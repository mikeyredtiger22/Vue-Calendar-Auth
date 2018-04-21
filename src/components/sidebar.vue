<template>
    <div class="sidebar col-3">
      <sb-title>SOC</sb-title>
      <ul class="nav flex-column">
        <div v-if="getUserSocietiesInfo">
          <!--committees-->
          <div v-if="getUserSocietiesInfo.committees">
            <sb-heading>Committees:</sb-heading>
            <sb-item v-for="society in getUserSocietiesInfo.committees" :key="society._id"
               v-on:click="committeeClick(society)">
              {{society.name}}
            </sb-item>
          </div>
          <!--societies-->
          <div v-if="getUserSocietiesInfo.joined">
            <sb-heading>Joined Societies:</sb-heading>
            <p v-for="society in getUserSocietiesInfo.joined" :key="society._id"
               v-on:click="joinedSocietyClick(society)">
              {{society.name}}
            </p>
          </div>
        </div>
        <b-nav-item>Create Society</b-nav-item>
        <b-nav-item>Log Out</b-nav-item>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
    getUserSocietiesInfo() {
      return this.$store.state.userSocietiesInfo;
    }
  }
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  z-index: 1;
  top: 0;
  left: 0;
  background: #9b9b9b;
  padding: 20px;
  text-align: left;
}
sb-title {
  font-size: 3vw;
}
sb-heading {
  font-size: 1.5vw;
  color: #000;
}
sb-item {
  font-size: 1.5vw;
  display: block;
}
</style>
