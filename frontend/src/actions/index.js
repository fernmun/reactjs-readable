import * as API from '../utils/ReadableAPI'
import * from '../const/actions'
import uuid from 'uuid/v4'

export function addPost (post) {
  let res = API.addPost({
    ...post,
    id: uuid(),
    timestamp: Date.now()
  })

  return {
    type: ADD_POST,
    post: res
  }
}
