import { HorizontalBar } from 'vue-chartjs';
export default {
  extends: HorizontalBar,
  name: 'graph',
  props: ['availabilityData'],
  methods: {
    getLabels() {
      // var startDate = this.availabilityData.startDate;
      // var date = new Date(startDate);
      var n = this.availabilityData.availability.length;
      n = 50;
      var a = [];
      for (var i = 0; i < n; i++) {
        a.push(i);
      }
      return a;
    },
    getDataPoints() {
      return this.availabilityData.availability.splice(0, 50);
    }
  },
  mounted () {
    console.log(this.availabilityData);
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: this.getLabels(),
        datasets: [{
          label: '',
          backgroundColor: '#0000ff',
          data: this.getDataPoints()
        }]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      });
  }
};
