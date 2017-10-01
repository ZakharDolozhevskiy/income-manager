import { Doughnut, mixins } from 'vue-chartjs'

let defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  events: ['click'],
}

export default Doughnut.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, Object.assign(defaultOptions, this.options))
  }
})