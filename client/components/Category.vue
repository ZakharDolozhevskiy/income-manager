<template>
  <md-layout md-flex="25">
    <md-card md-with-hover class="card">
      <md-card-media class="chart">
        <chart
            :data="category.test"
            :options="options"
            :width="320"
            :height="260"/>
      </md-card-media>

      <md-card-header class="md-title">
        {{ category.title }}
      </md-card-header>

      <md-card-content class="balance-section">
        <h4 class="md-subheading">
          Currently spent: {{category.test.current}} {{currency}}
        </h4>
        <div class="box">
          <template v-if="balance >= 0">
            <md-icon class="icon-up">arrow_drop_up</md-icon>
            <span>+{{balance}} {{currency}}</span>
          </template>
          <template v-else>
            <md-icon class="icon-down">arrow_drop_down</md-icon>
            <span>-{{Math.abs(balance)}} {{currency}}</span>
          </template>
        </div>
      </md-card-content>

    </md-card>
  </md-layout>
</template>

<script>
  import LineChart from '../charts/line-chart'

  let options = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: false } }]
    }
  }

  export default {
    props: ['category'],
    components: { chart: LineChart },
    computed: {
      balance() {
        return this.category.test.average - this.category.test.current;
      }
    },
    data: () => ({
      options,
      currency: '€'
    }),
  }
</script>

<style scoped>
  .card {
    margin: 8px;
  }

  .chart {
    padding: 0 8px;
  }

  .md-title {
    padding: 0 16px !important;
  }

  .balance-section {
    position: relative;
  }

  .balance-section .box {
    position: absolute;
    right: 16px;
    top: 0;
  }

  .icon-up {
    color: #4D8D36;
  }

  .icon-down {
    color: #AD0000;
  }
</style>
