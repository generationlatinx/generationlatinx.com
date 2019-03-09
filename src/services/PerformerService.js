import Api from '@/services/Api.js'

export default {
  getPerformerById (params) {
    return Api().get('/Bios/' + params.id )
  }
}
