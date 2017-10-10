import * as API from '../utils/ReadableAPI'
import {
  ADD_POST,
  EDIT_POST,
  GET_ALL_POSTS,
  GET_POST,
  DELETE_POST,
  VOTE_POST,
  GET_ALL_CATEGORIES,
  SORT_POSTS,
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  SET_EDITABLE_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT
} from '../const/actions'
import uuid from 'uuid/v4'

export function addPost(post) {
  let res = API.addPost({
    ...post,
    id: uuid(),
    timestamp: Date.now()
  })

  return {
    type: ADD_POST,
    payload: res
  }
}

export function editPost(id, post) {
  const res = API.editPost(id, {
    ...post,
    timestamp: Date.now()
  })

  return {
    type: EDIT_POST,
    payload: res
  }
}

export function getAllCategories() {
  const res = API.getAllCategories()

  return {
    type: GET_ALL_CATEGORIES,
    payload: res
  }
}

export function getAllPosts(category=null) {
  const res = API.getAllPosts(category)

  return {
    type: GET_ALL_POSTS,
    payload: res
  }
}

export function getPost(id) {
  const res = API.getPost(id)

  return {
    type: GET_POST,
    payload: res
  }
}

export function deletePost(id) {
  const res = API.deletePost(id)

  return {
    type: DELETE_POST,
    payload: res
  }
}

export function votePost(id, vote) {
  const res = API.votePost(id, vote)

  return {
    type: VOTE_POST,
    payload: res
  }
}

export function sortPosts(type) {
  return {
    type: SORT_POSTS,
    payload: type
  }
}

export function getAllComments(id) {
  const res = API.getAllComments(id)

  return {
    type: GET_ALL_COMMENTS,
    payload: res
  }
}

export function addComment(comment) {
  const res = API.addComment({
    id: uuid(),
    ...comment
  })

  return {
    type: ADD_COMMENT,
    payload: res
  }
}

export function editComment(id, comment) {
  const res = API.editComment(id, {
    ...comment,
    timestamp: Date.now()
  })

  return {
    type: EDIT_COMMENT,
    payload: res
  }
}

export function deleteComment(id) {
  const res = API.deleteComment(id)

  return {
    type: DELETE_COMMENT,
    payload: res
  }
}

export function setEditableComment(id) {
  return {
    type: SET_EDITABLE_COMMENT,
    payload: id
  }
}

export function voteComment(id, vote) {
  const res = API.voteComment(id, vote)

  return {
    type: VOTE_COMMENT,
    payload: res
  }
}
