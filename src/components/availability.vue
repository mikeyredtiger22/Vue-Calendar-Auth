<template>
  <div>
    <h1>
      Availability
    </h1>
    <graph class="chart-container" v-bind:availabilityData="availabilityData">
    </graph>
  </div>
</template>
<script>
import graph from './graph';
export default {
  name: 'availability',
  props: ['availabilityData'],
  components: {
    graph
  },
  data: function () {
    return {
      chartData: this.availabilityData
    };
  }
};
</script>
<style scoped>
.chart-container {
  position: relative;
  height: 100vh;
  width: 50%;
}
</style>
