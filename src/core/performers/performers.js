const types = {
  FETCH_PROFILE: 'FETCH_PROFILE'
}

// initial state
const state = {
  performer: null
}

// getters
const getters = {
  getPerformerById: state => id => state.performerId
}

// actions
const actions = {
  FETCHProfile ({commit}) {
    commit(types.FETCH_PROFILE)
  }
}

// mutations
const mutations = {
  [types.FETCH_PROFILE] (state, id) {
    state.performer = id
  }
}
export default {
  state,
  getters,
  // actions,
  // mutations
}
