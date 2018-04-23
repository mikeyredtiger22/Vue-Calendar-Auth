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
      <li v-on:click="createSociety" class="mt-4 px-3 heading-item btn btn-outline-primary text-left">
        Create Society
      </li>
      <li v-on:click="createSociety" class="mt-4 px-3 heading-item btn btn-outline-primary text-left">
        Delete Society
      </li>
      <!--Joined Societies-->
      <li v-if="userSocietiesInfo.joined" class="heading border-bottom border-dark mt-3 mx-3">
        <a class="">Societies</a>
      </li>
      <li v-for="society in userSocietiesInfo.joined" :key="'j'+society._id" v-on:click="committeeClick(society)"
          class="item px-4 btn btn-outline-primary text-left">
        {{society.name}}
      </li>
      <li v-on:click="showAvailableSocieties" class="mt-4 px-3 heading-item btn btn-outline-primary text-left">
        Join Societies
      </li>
      <li id="leave-button" v-on:click="openedLeaveSociety" class="mt-4 px-3 heading-item btn btn-outline-primary text-left">
        Leave Society
      </li>
      <b-popover placement="rightbottom" target="leave-button" title="Select society to leave">
        <b-dropdown text="Select">
          <b-dropdown-item-button v-for="society in userSocietiesInfo.joined" :key="'d'+society._id"
                                  v-on:click="choseLeaveSociety(society)">
            {{society.name}}
          </b-dropdown-item-button>
        </b-dropdown>
        <button v-on:click="leaveSociety" class="btn btn-success">Leave</button>
      </b-popover>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  name: 'sidebar',
  data: function() {
    return {
      societyToLeave: null
    };
  },
  methods: {
    showAvailableSocieties() {
      // send event to parent event handler
      this.$emit('action', 'available');
    },
    createSociety() {
      var societyName = prompt('Enter name of society');
      if (societyName) {
        axios.post('http://localhost:3000/user', null,
          {params: {userId: this.$store.state.userId, societyName: societyName}})
          .then((response) => {
            console.log(response.data);
            this.$emit('refresh');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    deleteSociety() {
    },
    openedLeaveSociety() {
      // reset society to leave
      this.societyToLeave = null;
    },
    choseLeaveSociety(society) {
      this.societyToLeave = society;
    },
    leaveSociety() {
      if (this.societyToLeave) {
        axios.delete('http://localhost:3000/user',
          {params: {userId: this.$store.state.userId, societyId: this.societyToLeave._id}})
          .then((response) => {
            console.log(response.data);
            this.$emit('refresh');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  },
  computed: {
    userSocietiesInfo() {
      return this.$store.state.userSocietiesInfo;
    }
  }
};
</script>

<style scoped>
.sidebar {
  background: #f1f1f1;
  padding: 20px;
  min-height: 100vh;
  box-shadow: 0 0 20px #c0c0c0;
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
