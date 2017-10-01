import { Line } from 'vue-chartjs'

let defaultOptions = {
	responsive: false,
	maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true
    }]
  }
}

export default Line.extend({
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, Object.assign(defaultOptions, this.options))
	}
})