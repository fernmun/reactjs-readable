import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  VOTE_COMMENT
} from '../const/actions'

function comments (state = [], action) {
  const { payload } = action

  switch (action.type) {
    case GET_ALL_COMMENTS:
      return payload

    case ADD_COMMENT:
      return [
        ...state,
        action.payload
      ]

    case VOTE_COMMENT:
      const key = state.findIndex(comment => action.payload.id === comment.id)
      let comments = Object.values(state)
      comments[key] = action.payload

      return comments

    default:
      return state
  }
}

export default comments
