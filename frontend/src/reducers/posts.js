import {
  ADD_POST
} from '../const/actions'

function posts (state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          comments: []
        }
      }
    default:
      return state
  }
}

export default posts
