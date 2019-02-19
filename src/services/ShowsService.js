import api from '@/services/api.js'

export default {
  getShows (params) {
    return api().get('/ReZap%20Scheduled%20Events%20A/maxRecords=10&view=Shows' + params )
  }
}
