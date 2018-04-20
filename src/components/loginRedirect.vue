<template><div></div></template>
<script>
export default {
  name: 'loginRedirect',
  beforeCreate: function () {
    this.$router.replace({name: 'homePage', params: {userId: this.$route.params.userId}})
  }
}
</script>
