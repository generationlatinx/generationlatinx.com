const types = {
  FETCH_SHOWS: 'FETCH_SHOWS'
}

// initial state
const state = {
  count: 3,
  shows: []
}

// getters
const getters = {
  pendingShows: state => state.shows.filter(show => show.isComingUp),
  pendingShowsCount: (state, getters) => {
    return getters.pendingShows.length
  },
  getShowById: state => id => {
    return state.shows.find(show => show.id === id)
  }
}

// actions
const actions = {
  fetchShows({ commit }) {
    commit(types.FETCH_SHOWS)
  }
}

// mutations
const mutations = {
  [types.FETCH_SHOWS](state, id) {
    state.shows = id
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
