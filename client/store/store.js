import Vuex from 'vuex'

import defaultState from './state/state'
import defaultMutation from './mutation/mutation'
import getters from './getters/getter'
import actions from './action/action'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations: defaultMutation,
    getters: getters,
    actions: actions
  })
}
