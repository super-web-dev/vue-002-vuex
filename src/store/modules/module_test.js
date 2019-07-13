import { ACTION_TEST } from '../actions/action_test'

const state = {
	test_data: ''
}

const getters = {
	getTestData: state => state.test_data
}

const actions = {
	[ACTION_TEST]: ({commit, dispatch}, value) => {
		commit(ACTION_TEST, value)
	}
}

const mutations = {
	[ACTION_TEST]: (state, value) => {
		state.test_data = value
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}