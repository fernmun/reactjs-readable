import {
  ADD_POST
} from '../const/actions'

const initialState = {
  posts: null
}

function posts (state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state[posts],
          action.response
        }
      }
    default:
      return state
  }
}
