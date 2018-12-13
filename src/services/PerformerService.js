import Api from '@/services/Api.js'

export default {
  getPerformerDetails(params) {
    return Api().get('/Bios/' + params )
  }
}
