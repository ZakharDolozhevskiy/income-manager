<template>
  <div class="time-period">
    <strong>Month: </strong>
    <md-input-container class="select">
      <md-select name="months" :value="current.month" v-on:selected="onMonthSelect">
        <md-option :value="'default'">Select Month</md-option>
        <md-option v-for="month in availableMonths" :key="month.value" :value="month.value">
          {{month.title}}
        </md-option>
      </md-select>
    </md-input-container>
    <strong>Year: </strong>
    <md-input-container class="select">
      <md-select name="months" :value="current.year" v-on:selected="onYearSelect">
        <md-option :value="'default'">Select Year</md-option>
        <md-option v-for="year in availableYears" :key="year.value" :value="year.value">
          {{year.title}}
        </md-option>
      </md-select>
    </md-input-container>
    <strong>Period: </strong>
    <md-input-container class="select">
      <md-select name="period" :value="current.period" v-on:selected="onPeriodSelect">
        <md-option :value="'default'">Select Period</md-option>
        <md-option v-for="period in availablePeriods" :key="period.value" :value="period.value">
          {{period.title}}
        </md-option>
      </md-select>
    </md-input-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import constants from '../store/constants'

  export default {
    computed: mapState({
      current: state => state.settings.selectedTimePeriod,

      availableMonths: state => state.settings.availableMonths,

      availableYears: state => state.settings.availableYears,

      availablePeriods: state => state.settings.availablePeriods,
    }),

    methods: {
      onMonthSelect(month) {
        month !== 'default' && this.$store.dispatch(constants.SET_TIME_PERIOD, { month });
      },

      onYearSelect(year) {
        year !== 'default' && this.$store.dispatch(constants.SET_TIME_PERIOD, { year });
      },

      onPeriodSelect(period) {
        period !== 'default' && this.$store.dispatch(constants.SET_TIME_PERIOD, { period });
      }
    }
  }
</script>

<style scoped>
  .time-period {
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 8px;
    padding-left: 36px;
  }

  .time-period strong {
    margin-right: 16px;
  }

  .time-period strong:not(:first-child) {
    margin-left: 16px;
  }

  .select {
    width: 150px;
  }
</style>
