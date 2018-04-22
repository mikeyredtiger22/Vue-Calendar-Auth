<template>
  <nav class="navbar navbar-expand flex-column p-0 sidebar">
    <ul class="flex-column navbar-nav w-100">
      <!--sidebar content-->
      <li class="title m-3">
        Society Scheduler
      </li>
      <!--Committees-->
      <li v-if="userSocietiesInfo.committees" class="heading border-bottom border-dark mt-3 mx-3 pb-0">
        <a class="">Committees</a>
      </li>
      <li class="item pl-4 btn btn-outline-primary text-left">
        Southampton Union Rugby
      </li>
      <li v-for="society in userSocietiesInfo.committees" :key="'c'+society._id" v-on:click="committeeClick(society)"
          class="item pl-4 btn btn-outline-primary text-left">
        {{society.name}}
      </li>
      <!--Joined Societies-->
      <li v-if="userSocietiesInfo.joined" class="heading border-bottom border-dark mt-3 mx-3">
        <a class="">Societies</a>
      </li>
      <li v-for="society in userSocietiesInfo.joined" :key="'j'+society._id" v-on:click="committeeClick(society)"
          class="item px-4 btn btn-outline-primary text-left">
        {{society.name}}
      </li>
      <!--<li class="border-bottom mt-3 border-dark">-->
      <!--</li>-->
      <li v-on:click="showAvailableSocieties" class="mt-4 px-3 heading-item btn btn-outline-primary text-left">
        Join Societies
      </li>
      <li class="mt-4 px-3 heading-item btn btn-outline-primary text-left">
        Create Society
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'sidebar',
  data: function() {
    return {
      userSocietiesInfo: {}
    };
  },
  methods: {
    showAvailableSocieties() {
      // send event to parent event handler
      this.$emit('action', 'available');
    }
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
  min-height: 100vh;
}
.title {
  font-size: 3.25rem;
}
.heading {
  font-size: 2rem;
  border-color: #2e2e2e;
}
.item {
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: clip;
  border: none;
  border-radius: 0;
}
.heading-item {
  font-size: 2rem;
  overflow: hidden;
  text-overflow: clip;
  border: none;
  border-radius: 0;
}
</style>
