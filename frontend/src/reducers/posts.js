import {
  ADD_POST,
  VOTE_POST,
  GET_ALL_POSTS
} from '../const/actions'

function posts (state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          comments: []
        }
      }
    case VOTE_POST:
      const key = state.findIndex(post => action.payload.id === post.id)
      let posts = Object.values(state)
      posts[key] = action.payload

      return posts
    case GET_ALL_POSTS:
      return Object.values(action.payload)
    default:
      return state
  }
}

export default posts
