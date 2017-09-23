<template>
  <div class="container">
    <TimePeriod />
    <div class="doughnut-chart income-chart">
      <DoughnutChart :chartData="incomeChartData" />
      <strong class="doughnut-chart-sum income total">
        +{{ totalIncome }} {{ currency }}
      </strong>
    </div>
    <div class="doughnut-chart expenses-chart">
      <DoughnutChart :chartData="expensesChartData" />
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
            <strong class="income">+ {{ value }} {{ currency }}</strong>
          </md-table-cell>
        </md-table-row>
        <md-table-row :key="key" v-for="(value, key) in expenses">
          <md-table-cell>
            <strong class="table-label">{{ key }}</strong>
          </md-table-cell>
          <md-table-cell>
            <strong class="expenses">- {{ value }} {{ currency }}</strong>
          </md-table-cell>
        </md-table-row>
        <md-table-row class="row-total">
          <md-table-cell>
            <strong class="table-label total">Benefit</strong>
          </md-table-cell>
          <md-table-cell>
            <template v-if="total >= 0">
              <strong class="income total">+{{total}} {{currency}}</strong>
            </template>
            <template v-else>
              <strong class="expenses total">-{{Math.abs(total)}} {{currency}}</strong>
            </template>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import sumBy from 'lodash/sumBy'

  import types from '../store/constants'
  import TimePeriod from '../components/TimePeriod.vue'
  import DoughnutChart from '../charts/doughnut-chart'
  import { getRandomColor } from '../utils/helpers';

  export default {
    components: {
      TimePeriod,
      DoughnutChart
    },
    computed: mapState({
      income(state) {
        return this.filterDataByType(state.balance.data, types.INCOME)
      },

      expenses(state) {
        return this.filterDataByType(state.balance.data, types.EXPENSES)
      },

      incomeChartData() {
        return this.formatChartData(this.income)
      },

      expensesChartData() {
        return this.formatChartData(this.expenses)
      },

      totalIncome(state) {
        return sumBy(state.balance.data[types.INCOME], 'amount')
      },

      totalExpenses(state) {
        return sumBy(state.balance.data[types.EXPENSES], 'amount')
      },

      total() {
        return this.totalIncome - this.totalExpenses
      },

      currency: state => state.settings.currency
    }),
    methods: {
      filterDataByType: (period, type = '') =>
        period[type].reduce((result, record) => {
          result[record.title] || (result[record.title] = 0)
          result[record.title] += record.amount
          return result;
        }, {}),

      formatChartData: (input) => {
        let labels = Object.keys(input)
        let data = labels.map(label => input[label])
        let colors = labels.map(() => getRandomColor());

        return { labels, datasets: [{ data, backgroundColor: colors }] };
      },
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    padding: 8px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .container > div:not(:first-child) {
    width: 33.33%;
  }

  .doughnut-chart {
    width: 25% !important;
    display: flex;
    position: relative;
  }

  .doughnut-chart-sum {
    position: absolute;
    bottom: 0;
    left: 0; right: 0;
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
