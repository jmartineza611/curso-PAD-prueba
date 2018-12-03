import api from './api'

export default {
  getUser() {
    return api().get('user')
  },
  addUser(data) {
    return api().post('add_user', data)
  }
}
