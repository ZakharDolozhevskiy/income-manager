export default {
  categoriesUpdate: (state, update) => {
    state.categories = update;
  },

  updateBalance: (state, data) => {
    state.balance.data = data;
  },

  updateTimePeriod: (state, selection) => {
    state.settings.selectedTimePeriod = {
      year: selection.year || 'default',
      month: selection.month || 'default',
      period: selection.period || 'default',
    }
  }
}