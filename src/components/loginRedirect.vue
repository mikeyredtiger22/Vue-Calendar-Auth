<template><div></div></template>
<script>
export default {
  name: 'loginRedirect',
  beforeCreate: function () {
    this.$store.commit('setUserId', (this.$route.params.userId));
    this.$router.replace({name: 'template'});
  }
};
</script>
