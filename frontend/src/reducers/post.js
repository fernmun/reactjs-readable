import {
  GET_POST
} from '../const/actions'

function post (state = [], action) {
  switch (action.type) {
    case GET_POST:
      return action.payload
    default:
      return state
  }
}

export default post
