import {
  GET_ALL_COMMENTS
} from '../const/actions'

function comments (state = [], action) {
  const { payload } = action

  switch (action.type) {
    case GET_ALL_COMMENTS:
      return payload

    default:
      return state
  }
}

export default comments
