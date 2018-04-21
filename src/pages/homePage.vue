<template>
  <div>
    <h1>Home Page</h1>
    <p>
      {{userId}}
    </p>
    <p>
      Welcome Person {{getUserId}}
    </p>
  </div>

</template>

<script>
export default {
  name: 'homePage',
  props: ['userId'],
  computed: {
    getUserId () {
      return this.$store.state.userId;
    }
  }
};
</script>

<style scoped>
</style>
