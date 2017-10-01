<template>
    <div class="container">
        <TimePeriod/>
        <md-table class="table">
            <md-table-header>
                <md-table-row>
                    <md-table-head>Date</md-table-head>
                    <md-table-head>Title</md-table-head>
                    <md-table-head>Value</md-table-head>
                </md-table-row>
            </md-table-header>
            <md-table-body>
                <template v-for="(data, key) in recordsTableData">
                    <md-table-row :key="key + 0">
                        <md-table-cell>
                            <strong class="table-label">{{ key }}</strong>
                        </md-table-cell>
                        <md-table-cell></md-table-cell>
                        <md-table-cell></md-table-cell>
                    </md-table-row>
                    <md-table-row :key="value.date" v-for="(value, key) in data">
                        <md-table-cell>{{ value.date }}</md-table-cell>
                        <md-table-cell>{{ value.title }}</md-table-cell>
                        <md-table-cell>{{ value.value }} {{ currency }}</md-table-cell>
                    </md-table-row>
                </template>

                <md-table-row class="row-total">
                    <md-table-cell>total</md-table-cell>
                    <md-table-cell></md-table-cell>
                    <md-table-cell>100.10 {{ currency }}</md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>
        <div class="line-chart">
            <LineChart :data="barChartData" />
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import sumBy from 'lodash/sumBy'

  import LineChart from '../charts/line-chart'
  import TimePeriod from '../components/TimePeriod.vue'

  export default {
    computed: mapState({
      currency: state => state.settings.currency,
      recordsTableData: state => state.category.data,
      barChartData: (state) => {
        return {
          labels: state.category.statistics.labels,
          datasets: [{
            data: state.category.statistics.data,
            backgroundColor: 'rgba(118, 165, 175, .2)',
            borderColor: 'rgba(118, 165, 175, 1)',
          }]
        }
      }
    }),
    components: { TimePeriod, LineChart }
  }
</script>

<style scoped>
    .container {
        padding: 8px 24px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .line-chart {
        width: 50% !important;
        display: flex;
        position: relative;
    }

    .table {
        width: 50%;
        padding-left: 12px;
    }

    .table-label {
        color: rgba(0, 0, 0, 0.75);
        text-transform: capitalize;
    }

    .total {
        font-size: 15px;
    }
</style>
