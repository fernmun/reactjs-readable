import {
  ADD_POST,
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
    case GET_ALL_POSTS:
      return action.payload
    default:
      return state
  }
}

export default posts
