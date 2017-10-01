export default {
  categories: [
    {
      title: 'Apartment', test: {
      labels: ["May", "June", "July", "August"],
      current: 250,
      average: 345,
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1,
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    },
    {
      title: 'Food', test: {
      labels: ["May", "June", "July", "August"],
      current: 250,
      average: 345,
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    },
    {
      title: 'Lunch', test: {
      labels: ["May", "June", "July", "August"],
      current: 450,
      average: 345,
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    },
    {
      title: 'Bar', test: {
      labels: ["May", "June", "July", "August"],
      current: 450,
      average: 345,
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    },
    {
      title: 'Fun', test: {
      current: 150,
      average: 345,
      labels: ["May", "June", "July", "August"],
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    },
    {
      title: 'Traveling', test: {
      labels: ["May", "June", "July", "August"],
      current: 150,
      average: 345,
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    },
    {
      title: 'Goods', test: {
      labels: ["May", "June", "July", "August"],
      current: 550,
      average: 345,
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .3)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        spanGaps: true,
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    },
    {
      title: 'Cafes', test: {
      labels: ["May", "June", "July", "August"],
      current: 150,
      average: 345,
      datasets: [{
        label: 'By months',
        data: [300, 350, 333, 400],
        backgroundColor: 'rgba(118, 165, 175, .2)',
        borderColor: 'rgba(118, 165, 175, 1)',
        borderWidth: 1
      }, {
        label: 'Current',
        data: [345, 345, 345, 345, 345, 345],
        pointRadius: 0,
        borderColor: '#00ACF1',
        backgroundColor: 'rgba(118, 165, 175, 0)',
        borderWidth: 2
      }]
    }
    }
  ],
  settings: {
    currency: '€',
    selectedTimePeriod: {
      month: '09.2017',
      year: 'default',
      period: 'default',
    },
    availableMonths: [
      { title: 'July 2017', value: '07.2017'},
      { title: 'August 2017', value: '08.2017'},
      { title: 'September 2017', value: '09.2017'}
    ],
    availableYears: [
      { title: '2017', value: '2017'},
      { title: '2016', value: '2016'},
      { title: '2015', value: '2015'},
    ],
    availablePeriods: [
      { title: 'Month', value: 'month'},
      { title: 'Quarter', value: 'quarter'},
      { title: 'Half-year', value: 'half a year'},
    ],
  },
  balance: {
    data: {
      timePeriod: '09.2017',
      income: [
        { type: 'salary:1', title: 'salary 1', amount: 10000 },
        { type: 'salary:2', title: 'salary 2', amount: 2000 },
        { type: 'invest:fonds', title: 'SEB Fond', amount: 2000 },
        { type: 'invest:stocks', title: 'stocks', amount: 100 },
      ],
      expenses: [
        { type: 'apartment', title: 'Apartment', amount: 100 },
        { type: 'food', title: 'Food', amount: 200000000 },
        { type: 'other', title: 'Other', amount: 300 }
      ]
    },
    statistics: {
        labels: ["May", "June", "July", "August"],
        datasets: [{
          label: 'Income',
          data: [3000, 3000, 3000, 3000],
          // add ui configuration with actions
          backgroundColor: 'rgba(77, 141, 54, .1)',
          borderColor: 'rgba(77, 141, 54, 1)',
          borderWidth: 1
        }, {
          label: 'Expenses',
          data: [1270, 1200, 1130, 900],
          // add ui configuration with actions
          backgroundColor: 'rgba(173, 0, 0, .4)',
          borderColor: 'rgba(173, 0, 0, 1)',
          borderWidth: 1
        }]
    }
  }
}