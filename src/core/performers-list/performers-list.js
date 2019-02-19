const types = {
  FETCH_PERFORMERS_LIST_PENDING: 'FETCH_PERFORMERS_LIST_PENDING',
  FETCH_PERFORMERS_LIST_FULFILLED: 'FETCH_PERFORMERS_LIST_FULFILLED',
  FETCH_PERFORMERS_LIST_FAILED: 'FETCH_PERFORMERS_LIST_FAILED'
}

// initial state
const state = {
  loading: false,
  error: null,
  airtable: {
    apiKey: null,
    readOnlyApiKey: null
  },
  bios: [],
  biosPerformerId: ''
}

const getters = {
  getPerformersList: state => state.bios
}



const actions = {
  fetchPerformersListFailed ({commit}) {
    commit(types.FETCH_PERFORMERS_LIST_FAILED)
  },
  fetchPerformersListFulfilled ({commit}) {
    commit(types.FETCH_PERFORMERS_LIST_FULFILLED)
  },
  fetchPerformersListPending ({commit}) {
    commit(types.FETCH_PERFORMERS_LIST_PENDING)
  }
}

const mutations = {
  [types.FETCH_PERFORMERS_LIST_PENDING] (state) {
    state.loading = true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
