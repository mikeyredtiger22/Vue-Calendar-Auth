<template>
  <nav class="navbar navbar-expand flex-column p-0 sidebar">
    <ul class="flex-column navbar-nav w-100">
      <!--sidebar content-->
      <li class="title m-3">
        Society Scheduler
      </li>
      <!--Committees-->
      <li class="divider">
      </li>
      <li id="create-button" tabindex="-1"
          class="py-2 px-3 heading-item btn btn-outline-primary text-left">
        Create Society <span class="pl-2">&#9656;</span>
      </li>
      <li class="divider">
      </li>
      <li v-show="userSocietiesInfo.committees.length" id="delete-button" v-on:click="openedDeleteSociety"  tabindex="-1"
          class="py-2 px-3 heading-item btn btn-outline-primary text-left">
        Delete Society <span class="pl-2">&#9656;</span>
      </li>
      <li v-show="userSocietiesInfo.committees.length" class="heading px-3 py-2">
        <a class="">My Societies</a>
      </li>
      <li v-for="society in userSocietiesInfo.committees" :key="'c'+society._id"
          v-on:click="getSocietyAvailability(society)" class="item pl-4 btn btn-outline-primary text-left">
        {{society.name}}
      </li>
      <!--Joined Societies-->
      <li v-on:click="showJoined"
          class="py-2 px-3 heading-item btn btn-outline-primary text-left">
        Join Societies <span class="pl-2">&#9656;</span>
      </li>
      <li class="divider">
      </li>
      <li v-show="userSocietiesInfo.joined.length"  v-on:click="openedLeaveSociety" id="leave-button" tabindex="-1"
           class="py-2 px-3 heading-item btn btn-outline-primary text-left">
        Leave Society <span class="pl-2">&#9656;</span>
      </li>
      <li v-show="userSocietiesInfo.joined.length" class="heading px-3 py-2">
        <a>Joined Societies</a>
      </li>
      <li v-for="society in userSocietiesInfo.joined" :key="'j'+society._id"
          class="item px-4 btn disabled btn-outline-dark text-left">
        {{society.name}}
      </li>
    </ul>
    <!--Create society popup-->
    <b-popover triggers="click blur" placement="auto" target="create-button" title="Enter name of new society">
      <div class="input-group">
          <input v-model.lazy="newSocietyName" class="form-control" type="text" title="">
        <div class="input-group-append">
          <button v-on:click="createSociety" class="btn btn-success">Create</button>
        </div>
      </div>
    </b-popover>
    <!--Delete society popup-->
    <b-popover triggers="click blur" placement="auto" target="delete-button" title="Select society to delete">
      <div class="input-group">
        <select v-model="societyToDelete" class="custom-select" title="">
          <option disabled value="">Please select one</option>
          <option v-for="society in userSocietiesInfo.committees"
                  :key="'d'+society._id" :value="society">{{society.name}}</option>
        </select>
        <div class="input-group-append">
          <button v-on:click="deleteSociety" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </b-popover>
    <!--Leave society popup-->
    <b-popover triggers="click blur" placement="auto" target="leave-button" title="Select society to leave">
      <div class="input-group">
        <select v-model="societyToLeave" class="custom-select" title="">
          <option disabled value="">Please select one</option>
          <option v-for="society in userSocietiesInfo.joined"
                  :key="'d'+society._id" :value="society">{{society.name}}</option>
        </select>
        <div class="input-group-append">
          <button v-on:click="leaveSociety" class="btn btn-danger">Leave</button>
        </div>
      </div>
    </b-popover>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  name: 'sidebar',
  data: function() {
    return {
      societyToLeave: null,
      societyToDelete: null,
      newSocietyName: ''
    };
  },
  methods: {
    createSociety() {
      if (this.newSocietyName) {
        axios.post('http://localhost:3000/user', null,
          {params: {userId: this.$store.state.userId, societyName: this.newSocietyName}})
          .then((response) => {
            console.log(response.data);
            if (response.data.societyId) {
              this.$emit('successMsg', 'Society \'' + this.newSocietyName + '\' created.');
            }
            if (response.data.nameDuplicate) {
              this.$emit('errorMsg', 'This society name has already been taken. Please choose a unique name.');
            }
            this.$emit('refresh');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    openedDeleteSociety() {
      // reset society to delete
      this.societyToDelete = null;
    },
    deleteSociety() {
      if (this.societyToDelete) {
        axios.delete('http://localhost:3000/society',
          {params: {userId: this.$store.state.userId, societyId: this.societyToDelete._id}})
          .then((response) => {
            if (response.data.deleted) {
              this.$emit('successMsg', 'Society \'' + this.societyToDelete.name + '\' deleted.');
            }
            this.$emit('refresh');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    getSocietyAvailability(society) {
      axios.get('http://localhost:3000/society',
        {params: {userId: this.$store.state.userId, societyId: society._id}})
        .then((response) => {
          this.$emit('showAvailability', response.data, society);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    showJoined() {
      this.$emit('showJoined');
    },
    openedLeaveSociety() {
      // reset society to leave
      this.societyToLeave = null;
    },
    leaveSociety() {
      if (this.societyToLeave) {
        axios.delete('http://localhost:3000/user',
          {params: {userId: this.$store.state.userId, societyId: this.societyToLeave._id}})
          .then((response) => {
            if (response.data.removed) {
              this.$emit('successMsg', 'You have left \'' + this.societyToLeave.name + '\'.');
            }
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
  box-shadow: 0 0 5px 2.5px #e0e0e0;
}
.title {
  font-size: 3.25rem;
}
.heading {
  font-size: 1.5rem;
  border-color: #b9b9b9;
  background: #cccccc;
}
.item {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: clip;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #b9b9b9;
}
.heading-item {
  width: 100%;
  font-size: 1.5rem;
  text-overflow: clip;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.divider {
  border-bottom: 1px solid #b9b9b9;
}
@media (min-width: 768px) {
  .sidebar {
    min-height: 100vh;
  }
}
</style>
