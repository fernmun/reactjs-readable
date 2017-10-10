import {
  ADD_POST,
  GET_POST,
  DELETE_POST,
  VOTE_POST,
  EDIT_POST
} from '../const/actions'

function post (state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return action.payload
    case EDIT_POST:
      return action.payload
    case DELETE_POST:
      return []
    case VOTE_POST:
      return action.payload
    case GET_POST:
      return action.payload
    default:
      return state
  }
}

export default post
