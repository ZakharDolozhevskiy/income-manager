<template>
    <div class="container">
        <TimePeriod/>
        <div class="doughnut-chart income-chart">
            <DoughnutChart :chartData="incomeChartData" :options="incomeChartOpt"/>
            <strong class="doughnut-chart-sum income total">
                +{{ totalIncome }} {{ currency }}
            </strong>
        </div>
        <div class="doughnut-chart expenses-chart">
            <DoughnutChart :chartData="expensesChartData" :options="expensesChartOpt"/>
            <strong class="doughnut-chart-sum expenses total">
                -{{ totalExpenses }} {{ currency }}
            </strong>
        </div>
        <md-table class="table">
            <md-table-header>
                <md-table-row>
                    <md-table-head>Title</md-table-head>
                    <md-table-head>Amount</md-table-head>
                </md-table-row>
            </md-table-header>

            <md-table-body>
                <md-table-row :key="key" v-for="(value, key) in income">
                    <md-table-cell>
                        <strong class="table-label">{{ key }}</strong>
                    </md-table-cell>
                    <md-table-cell>
                        <strong class="income">
                            + {{ value }} {{ currency }}
                        </strong>
                    </md-table-cell>
                </md-table-row>
                <md-table-row :key="key" v-for="(value, key) in expenses">
                    <md-table-cell>
                        <strong class="table-label">{{ key }}</strong>
                    </md-table-cell>
                    <md-table-cell>
                        <strong class="expenses">
                            - {{ value }} {{ currency }}
                        </strong>
                    </md-table-cell>
                </md-table-row>
                <md-table-row class="row-total">
                    <md-table-cell>
                        <strong class="table-label total">
                            Benefit
                        </strong>
                    </md-table-cell>
                    <md-table-cell>
                        <template v-if="total >= 0">
                            <strong class="income total">
                                +{{total}} {{currency}}
                            </strong>
                        </template>
                        <template v-else>
                            <strong class="expenses total">
                                -{{Math.abs(total)}} {{currency}}
                            </strong>
                        </template>
                    </md-table-cell>
                </md-table-row>
            </md-table-body>
        </md-table>
        <div class="line-chart">
            <StatChart :chartData="statisticsChartData" />
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import sumBy from 'lodash/sumBy'

  import types from '../store/constants'
  import router from '../router'
  import StatChart from '../charts/statistics-chart'
  import TimePeriod from '../components/TimePeriod.vue'
  import DoughnutChart from '../charts/doughnut-chart'
  import {getRandomColor} from '../utils/helpers';

  export default {
    components: {
      TimePeriod,
      StatChart,
      DoughnutChart
    },
    computed: mapState({
      income({ balance }) {
        return this.filterDataByType(balance.data, types.INCOME)
      },

      expenses({ balance }) {
        return this.filterDataByType(balance.data, types.EXPENSES)
      },

      incomeChartData() {
        return this.formatChartData(this.income)
      },

      expensesChartData() {
        return this.formatChartData(this.expenses)
      },

      totalIncome({ balance }) {
        return sumBy(balance.data[types.INCOME], 'amount')
      },

      totalExpenses({ balance }) {
        return sumBy(balance.data[types.EXPENSES], 'amount')
      },

      incomeChartOpt({ balance }) {
        return {
          onClick: this.onChartClick.bind(this, balance.data[types.INCOME])
        }
      },

      expensesChartOpt({ balance }) {
        return { onClick:
          this.onChartClick.bind(this, balance.data[types.EXPENSES])
        }
      },

      total() {
        return this.totalIncome - this.totalExpenses
      },

      statisticsChartData: state => state.balance.statistics,

      currency: state => state.settings.currency
    }),
    methods: {
      filterDataByType: (period, type = '') =>
        period[type].reduce((result, record) => {
          result[record.title] || (result[record.title] = 0)
          result[record.title] += record.amount
          return result
        }, {}),

      formatChartData: (input) => {
        let labels = Object.keys(input)
        let data = labels.map(label => input[label])
        let colors = labels.map(() => getRandomColor())

        return {labels, datasets: [{ data, backgroundColor: colors }]}
      },

      onChartClick: (data, event, element) => {
        let index = element[0] && element[0]._index
        let item = data[index];

        item && router.push({ name: 'category', params: { id: item.id } })
      }
    }
  }
</script>

<style scoped>
    .container {
        display: flex;
        padding: 8px 24px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .container > div:not(:first-child) {
        width: 33.33%;
    }

    .doughnut-chart {
        width: 25% !important;
        display: flex;
        position: relative;
    }

    .line-chart {
        padding-top: 48px;
        width: 66.66% !important;
    }

    .doughnut-chart-sum {
        position: absolute;
        bottom: -20px;
        left: 0;
        right: 0;
        text-align: center;
    }

    .table {
        width: 30%;
    }

    .table-label {
        color: rgba(0, 0, 0, 0.75);
        text-transform: capitalize;
    }

    .total {
        font-size: 15px;
    }

    .income {
        color: #4D8D36;
    }

    .expenses {
        color: #AD0000;
    }
</style>
