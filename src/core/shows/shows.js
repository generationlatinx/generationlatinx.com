const types = {
  FETCH_SHOWS: 'FETCH_SHOWS'
}

// initial state
const state = {
  count: 3,
  shows: [
    { id: 1, summary: '...SHOW at iO', isComingUp: true  },
    { id: 2, summary: '...SHOW at DCT', isComingUp: false },
    { id: 3, summary: '...SHOW at xDCT', isComingUp: true }
  ]
}

// getters
const getters = {
  // sidebarOpen: state => state.sidebarOpen
  // getPerformer: state => state.performer
  pendingShows: state => state.shows.filter(show => show.isComingUp),
  pendingShowsCount: (state, getters) => {
    return getters.pendingShows.length
  },
  getShowById: (state) => (id) => {
    return state.shows.find(show => show.id === id)
  }
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
  // actions,
  // mutations
}
