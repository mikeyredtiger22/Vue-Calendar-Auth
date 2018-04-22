<template>
<div class="row d-flex text-center align-items-center pb-5"
     style="height: 100vh; background: linear-gradient(to bottom right,greenyellow,aqua);">
  <div class="col">
    <h1 class="mb-5">Log in to Society Scheduler</h1>
    <button v-on:click="handleAuthClick" class="btn btn-primary px-4 mb-5">Login</button>
  </div>
</div>
</template>
<script>
export default {
  name: 'login',
  methods: {
    handleAuthClick() {
      var authRequest = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        'client_id=595041614107-vquf4bbtc6agdv9tl906q22gjf2vj7sd.apps.googleusercontent.com' +
        '&redirect_uri=http://localhost:3000/auth' +
        '&scope=https://www.googleapis.com/auth/calendar.readonly profile' +
        '&access_type=offline' +
        '&response_type=code';
      window.location.href = (authRequest);
    }
  }
};
</script>
