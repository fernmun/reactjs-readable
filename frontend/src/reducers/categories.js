import {
  GET_CATEGORIES
} from '../const/actions'

function categories (state = [], action) {
  const { payload } = action

  switch (action.type) {
    case GET_CATEGORIES:
      return payload.categories
    default:
      return state
  }
}

export default categories
