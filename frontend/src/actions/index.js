import * as API from '../utils/ReadableAPI'
import {
  ADD_POST,
  GET_CATEGORIES
} from '../const/actions'
import uuid from 'uuid/v4'

export function addPost(post) {
  console.log(post)
  let res = API.addPost({
    ...post,
    id: uuid(),
    timestamp: Date.now()
  })
  console.log(res)

  return {
    type: ADD_POST,
    payload: res
  }
}

export function getAllCategories() {
  const res = API.getAllCategories()

  return {
    type: GET_CATEGORIES,
    payload: res
  }
}
