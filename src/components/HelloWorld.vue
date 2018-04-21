<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="http://google.com">
      <input type="submit" value="Go to Google" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
