import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import defaultState from './default'

Vue.use(Vuex)

const store = new Vuex.Store({
	actions,
	getters,
	mutations,
	state: defaultState
})

export default store
