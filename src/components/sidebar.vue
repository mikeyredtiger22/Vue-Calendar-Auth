<template>
  <div class="col-12 col-md-3 p-0 sidebar">
    <nav class="navbar navbar-expand flex-column p-0">
      <ul class="flex-column navbar-nav w-100">
        <!--sidebar content-->
        <li class="title m-3">
          Society Scheduler
        </li>
        <!--Committees-->
        <li v-if="userSocietiesInfo.committees" class="border-bottom border-top border-dark mt-3">
          <a class="m-3 heading">Committees</a>
        </li>
        <li class="mt-2 mx-2 item btn btn-outline-primary text-left">
          Southampton Union Rugby
        </li>
        <li v-for="society in userSocietiesInfo.committees" :key="society._id" v-on:click="committeeClick(society)"
            class="mt-2 mx-2 item btn btn-outline-primary text-left">
          {{society.name}}
        </li>
        <!--Joined Societies-->
        <li v-if="userSocietiesInfo.joined" class="border-bottom border-top border-dark mt-3">
          <a class="m-3 heading">Societies</a>
        </li>
        <li v-for="society in userSocietiesInfo.joined" :key="society._id" v-on:click="committeeClick(society)"
            class="mt-2 mx-2 item btn btn-outline-primary text-left">
          {{society.name}}
        </li>
        <li>

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
  background: #f1f1f1;
  padding: 20px;
}
.title {
  font-size: 2.5rem;
}
.heading {
  font-size: 1.5rem;
}
.item {
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: clip;
}
</style>
