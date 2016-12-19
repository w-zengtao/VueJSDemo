import { UserResource, WorkResource} from './resource'

export default {
  getUser: function() {
    return UserResource.get({
      id: 10
    })
  },
  getWorks: function() {
    return WorkResource.get({
      id: 108
    })
  }
}
