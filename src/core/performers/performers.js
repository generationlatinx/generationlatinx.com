const types = {
  // TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR'
  TOGGLE_PROFILE: 'TOGGLE_PROFILE'
}

// initial state
const state = {
  // sidebarOpen: false
  performer: null
}

// getters
const getters = {
  // sidebarOpen: state => state.sidebarOpen
  getPerformer: state => state.performer
}

// actions
const actions = {
  // toggleSidebar ({ commit, state }) {
  //   commit(types.TOGGLE_SIDEBAR)
  // }
  toggleProfile ({ commit, state }) {
    commit(types.TOGGLE_PROFILE)
  }
}

// mutations
const mutations = {
  // [types.TOGGLE_SIDEBAR] (state) {
  //   state.sidebarOpen = !state.sidebarOpen
  // }
  [types.TOGGLE_PROFILE] (state, id) {
    state.performer = id
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
