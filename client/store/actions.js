import types from './constants'

let bogusdata = {
  '09.2017': {
    timePeriod: '09.2017',
    income: [
      { type: 'salary:1', title: 'salary 1', amount: 100000000 },
      { type: 'salary:2', title: 'salary 2', amount: 200000 },
      { type: 'invest:fonds', title: 'SEB Fond', amount: 2000 },
      { type: 'invest:stocks', title: 'stocks', amount: 100 },
    ],
    expenses: [
      { type: 'apartment', title: 'Apartment', amount: 100 },
      { type: 'food', title: 'Food', amount: 20000000000 },
      { type: 'other', title: 'Other', amount: 300 }
    ]
  },
  '08.2017': {
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
  '07.2017': {
    timePeriod: '07.2017',
    income: [
      { type: 'salary', title: 'salary 1', amount: 100000000 },
      { type: 'salary', title: 'salary 2', amount: 200000 },
    ],
    expenses: [
      { type: 'apartment', title: 'Apartment', amount: 100 },
      { type: 'food', title: 'Food', amount: 200 },
      { type: 'other', title: 'Other', amount: 300 }
    ]
  },
  'quarter': {
    timePeriod: 'quarter',
    income: [
      { type: 'salary', title: 'salary 1', amount: 100000000 },
      { type: 'salary', title: 'salary 2', amount: 200000 },
    ],
    expenses: [
      { type: 'apartment', title: 'Apartment', amount: 1 },
      { type: 'food', title: 'Food', amount: 1 },
      { type: 'other', title: 'Other', amount: 3300 }
    ]
  },
  'half a year': {
    timePeriod: 'half a year',
    income: [
      { type: 'salary', title: 'salary 1', amount: 100000000 },
      { type: 'salary', title: 'salary 2', amount: 200000 },
    ],
    expenses: [
      { type: 'apartment', title: 'Apartment', amount: 1100 },
      { type: 'food', title: 'Food', amount: 2200 },
      { type: 'other', title: 'Other', amount: 3300 }
    ]
  },
  '2017': {
    timePeriod: '2017',
    income: [
      { type: 'salary:1', title: 'salary 1', amount: 100000000 },
      { type: 'salary:2', title: 'salary 2', amount: 200000 },
      { type: 'invest:fonds', title: 'SEB Fond', amount: 2000 },
      { type: 'invest:stocks', title: 'stocks', amount: 100 },
    ],
    expenses: [
      { type: 'apartment', title: 'Apartment', amount: 100 },
      { type: 'food', title: 'Food', amount: 200 },
      { type: 'other', title: 'Other', amount: 300 }
    ]
  }
}

export default {
  [types.SET_TIME_PERIOD]: (store, timePeriod) => {
    // Replace with request to BE
    let payload =
      bogusdata[timePeriod.month] ||
      bogusdata[timePeriod.year] ||
      bogusdata[timePeriod.period];
    // --------------------------

    store.commit('updateBalance', payload);
    store.commit('updateTimePeriod', timePeriod)
  },
}