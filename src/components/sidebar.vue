<template>
  <div class="col-12 col-md-3 col-lg-2 p-0 sidebar">
    <nav class="navbar navbar-expand flex-column align-items-start p-0">
      <ul class="flex-column navbar-nav w-100 justify-content-between">
        <!--sidebar content-->
        <li class="nav-item pb-4 title m-3">Society Scheduler
        </li>
        <!--Committees-->
        <li v-if="userSocietiesInfo.committees" class="nav-item border-bottom border-top border-secondary">
          <a class="m-3 heading">Committees</a>
        </li>
        <li v-for="society in userSocietiesInfo.committees" :key="society._id" class="ml-3 py-1 item">
          <a v-on:click="committeeClick(society)" href="#" >{{society.name}}</a>
        </li>
        <!--Joined Societies-->
        <li v-if="userSocietiesInfo.joined" class="nav-item border-bottom border-top border-secondary">
          <a class="m-3 heading">My Societies</a>
        </li>
        <li v-for="society in userSocietiesInfo.joined" :key="society._id" class="ml-3 py-1 item">
          <a v-on:click="committeeClick(society)" href="#" >{{society.name}}</a>
        </li>
      </ul>
    </nav>
  </div>
    <!--<div class="sidebar col-12 col-md-3 col-lg-4">
      <h1>SOC</h1>
      <ul class="nav flex-column">
        <div v-if="getUserSocietiesInfo">
          &lt;!&ndash;committees&ndash;&gt;
          <div v-if="getUserSocietiesInfo.committees">
            <h2>Committees:</h2>
            <sb-item v-for="society in getUserSocietiesInfo.committees" :key="society._id"
               v-on:click="committeeClick(society)">
              {{society.name}}
            </sb-item>
          </div>
          &lt;!&ndash;societies&ndash;&gt;
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
    </div>-->
</template>

<script>
export default {
  name: 'sidebar',
  data: function() {
    return {
      userSocietiesInfo: {}
    };
  },
  created: function() {
    this.userSocietiesInfo = this.$store.state.userSocietiesInfo;
  }
};
</script>

<style scoped>
.sidebar {
  background: #9b9b9b;
  padding: 20px;
}
.title {
  font-size: 2rem;
}
.heading {
  font-size: 1.5rem;
}
.item {
  font-size: 1.25rem;
  display: block;
}
</style>
