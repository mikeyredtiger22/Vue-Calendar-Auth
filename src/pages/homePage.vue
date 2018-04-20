<template>
  <div>
    <h1>Home Page</h1>
    <p>
      {{userId}}
    </p>
  </div>

</template>

<script>
export default {
  name: 'homePage',
  props: ['userId']
}
</script>

<style scoped>
</style>
