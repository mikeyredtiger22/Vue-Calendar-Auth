<template>
    <div class="sidebar">
      <b-nav vertical>
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
        <b-nav-item>Create Society</b-nav-item>
        <b-nav-item>Log Out</b-nav-item>
      </b-nav>
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
  width: auto;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1;
  top: 0;
  left: 0;
  background: linear-gradient(#0eba00, #0004dd);
  padding: 20px;
  text-align: left;
}
h1 {
  color: #000;
}
</style>
