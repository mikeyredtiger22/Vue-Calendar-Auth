<template>
  <div class="col-12 col-md-3 col-lg-2 p-0 sidebar">
    <nav class="navbar navbar-expand flex-column align-items-start py-2">
      <div class="collapse navbar-collapse">
        <ul class="flex-column navbar-nav w-100 justify-content-between">
          <li class="nav-item">
            <a class="nav-link pl-0 title" href="#">Society Scheduler</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#">Link 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0 heading" href="#">Link 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#">Link 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0 item" href="#">Link 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#">Link 5</a>
          </li>
        </ul>
      </div>
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
  computed: {
    getUserSocietiesInfo() {
      return this.$store.state.userSocietiesInfo;
    }
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
  font-size: 1rem;
  display: block;
}
</style>
