import api from '@/services/api.js'

export default {
  getPerformerDetails (params) {
    return api().get('/Bios/' + params )
  }
}
