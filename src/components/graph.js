import { HorizontalBar } from 'vue-chartjs';
export default {
  extends: HorizontalBar,
  name: 'graph',
  props: ['availabilityData'],
  watch: {
    availabilityData: function() {
      this.$data._chart.destroy();
      this.renderData();
    }
  },
  computed: {
    getLabels: function() {
      var startDate = this.availabilityData.startDate;
      var date = new Date(startDate); // automatically converts to local timezone
      var n = this.availabilityData.availability.length;
      n = 100;
      var labels = [];
      for (var i = 0; i < n; i++) {
        labels.push(date.toLocaleString());
        date.setHours(date.getHours() + 1);
      }
      return labels;
    },
    getDataPoints() {
      return this.availabilityData.availability.splice(0, 100);
    }
  },
  methods: {
    renderData() {
      this.renderChart(
        {
          labels: this.getLabels,
          datasets: [{
            label: '',
            backgroundColor: '#0000ff',
            data: this.getDataPoints
          }]
        },
        {
          responsive: true,
          maintainAspectRatio: false
        });
    }
  },
  mounted () {
    this.renderData();
  }
};
