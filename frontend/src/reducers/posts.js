import {
  VOTE_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  SORT_POSTS
} from '../const/actions'

function findKey(state, id) {
  return state.findIndex(post => id === post.id)
}

function posts (state = [], action) {
  let posts = Object.values(state)

  switch (action.type) {
    case VOTE_POST:
      posts[findKey(state, action.payload.id)] = action.payload
      return posts

    case DELETE_POST:
      delete posts[findKey(state, action.payload.id)]
      return posts

    case GET_ALL_POSTS:
      return Object.values(action.payload)

    default:
      return state
  }
}

export default posts
