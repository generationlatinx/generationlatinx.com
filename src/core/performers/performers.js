const types = {
  TOGGLE_PROFILE: 'TOGGLE_PROFILE'
}

// initial state
const state = {
  performer: null
}

// getters
const getters = {
  getPerformer: state => state.performer
}

// actions
const actions = {
  toggleProfile({commit}) {
    commit(types.TOGGLE_PROFILE)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_PROFILE](state, id) {
    state.performer = id
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
