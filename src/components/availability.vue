<template>
  <div>
    <h1>
      {{society.name}} Availability
    </h1>
    <h2 v-if="availabilityData.error">
      This society has no members
    </h2>
    <graph v-else class="chart-container" v-bind:availabilityData="availabilityData">
    </graph>
  </div>
</template>
<script>
import graph from './graph';
export default {
  name: 'availability',
  props: ['availabilityData', 'society'],
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
  height: 200vh;
  width: 50%;
}
</style>
