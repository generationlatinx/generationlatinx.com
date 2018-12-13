const types = {
  FETCH_SHOWS: 'FETCH_SHOWS'
}

// initial state
const state = {
  shows: []
}

// getters
const getters = {
  // sidebarOpen: state => state.sidebarOpen
  // getPerformer: state => state.performer
  getShows: state => state.shows
}

// actions
const actions = {
  // toggleSidebar ({ commit, state }) {
  //   commit(types.TOGGLE_SIDEBAR)
  // }
  // toggleProfile ({ commit, state }) {
  //   commit(types.TOGGLE_PROFILE)
  // }
  fetchShows({ commit, state }) {
    commit(types.FETCH_SHOWS)
  }
}

// mutations
const mutations = {
  // [types.TOGGLE_SIDEBAR] (state) {
  //   state.sidebarOpen = !state.sidebarOpen
  // }
  [types.FETCH_SHOWS] (state) {
    state.shows = id
  }
}
export default {
  state,
  getters,
  actions,
  // mutations
}
