import { Bar } from 'vue-chartjs'

let defaultOptions = {
  responsive: true,
  maintainAspectRatio: true,
  barPercentage: 1,
  categoryPercentage: 1,
  barThickness: 100,
  scales: {
    xAxes: [{
      gridLines: {
        offsetGridLines: true
      }
    }]
  }
}

export default Bar.extend({
  props: ['chartData', 'options'],
  mounted () {
    this.setDefaultColors(this.chartData)
    this.renderChart(this.chartData, Object.assign(defaultOptions))
  },
  methods: {
    setDefaultColors(chartData) {
      Object.assign(chartData.datasets[0], {
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      });
    }
  }
})