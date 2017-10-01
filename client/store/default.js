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
      month: '08.2017',
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
      timePeriod: '08.2017',
      income: [
        { id: '1', title: 'Pipedrive employment', amount: 3000 },
        { id: '2', title: 'Brightgrove employment', amount: 1700 },
      ],
      expenses: [
        { id: '3', title: 'Apartment', amount: 548.97 },
        { id: '4', title: 'Clothes', amount: 140.00 },
        { id: '5', title: 'Food', amount: 137.28 },
        { id: '6', title: 'Cafes', amount: 97.60 },
        { id: '7', title: 'Transport', amount: 71.50 },
        { id: '8', title: 'Hygiene', amount: 28.00 },
        { id: '9', title: 'Presents', amount: 15.90 },
      ]
    },
    statistics: {
        labels: ["May", "June", "July", "August"],
        datasets: [{
          label: 'Income',
          data: [3000, 3000, 3000, 3000],
        }, {
          label: 'Expenses',
          data: [1270, 1200, 1130, 900],
        }]
    }
  },
  category: {
    id: '',
    data: {
      'May': [
        { title: 'action 1', date: '22.05.2017', value: 10 },
        { title: 'action 2', date: '22.05.2017', value: 10 },
        { title: 'action 3', date: '22.05.2017', value: 10 },
      ],
      'June': [
        { title: 'action 1', date: '23.06.2017', value: 10 },
        { title: 'action 2', date: '23.06.2017', value: 10 },
        { title: 'action 3', date: '23.06.2017', value: 10 },
      ],
      'July': [
        { title: 'action 1', date: '24.07.2017', value: 10 },
        { title: 'action 2', date: '24.07.2017', value: 10 },
        { title: 'action 3', date: '24.07.2017', value: 10 },
      ],
      'August': [
        { title: 'action 1', date: '25.08.2017', value: 10 },
        { title: 'action 2', date: '25.08.2017', value: 10 },
        { title: 'action 3', date: '25.08.2017', value: 10 },
      ]
    },
    statistics: {
      labels: ["May", "June", "July", "August"],
      data: [109, 120, 99.80, 105]
    }
  }
}