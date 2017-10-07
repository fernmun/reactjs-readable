import { SORT_POSTS } from '../const/actions'
import { BY_DATE } from '../const/orderTypes'

function orderType(state = BY_DATE, action) {
  switch (action.type) {
    case SORT_POSTS:
      return action.payload
    default:
      return state
  }
}

export default orderType
