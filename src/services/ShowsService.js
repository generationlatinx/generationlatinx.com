import Api from '@/services/Api.js'

export default {
  getShows(params) {
    return Api().get('/ReZap%20Scheduled%20Events%20A/maxRecords=10&view=Shows' + params )
  }
}
