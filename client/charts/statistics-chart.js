import { Line } from 'vue-chartjs'

let defaultOptions = {
  responsive: true,
  maintainAspectRatio: false
}

export default Line.extend({
  props: ['chartData', 'options'],
  mounted () {
    this.setDefaultColors(this.chartData)
    this.renderChart(this.chartData, Object.assign(defaultOptions, this.options))
  },
  methods: {
    setDefaultColors(chartData) {
      Object.assign(chartData.datasets[0], {
        backgroundColor: 'rgba(77, 141, 54, .1)',
        borderColor: 'rgba(77, 141, 54, 1)',
        borderWidth: 1
      });

      Object.assign(chartData.datasets[1], {
        backgroundColor: 'rgba(173, 0, 0, .4)',
        borderColor: 'rgba(173, 0, 0, 1)',
        borderWidth: 1
      });
    }
  }
})