import {
  GET_POST,
  EDIT_POST
} from '../const/actions'

function post (state = [], action) {
  switch (action.type) {
    case EDIT_POST:
      return action.payload
    case GET_POST:
      return action.payload
    default:
      return state
  }
}

export default post
