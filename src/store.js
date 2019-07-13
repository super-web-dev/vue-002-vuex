import Vue from 'vue'
import Vuex from 'vuex'

import module_test from '@/store/modules/module_test'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		module_test,
	}
})