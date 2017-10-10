import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  SET_EDITABLE_COMMENT,
  VOTE_COMMENT
} from '../const/actions'

const initialState = {
  comments: [],
  editableComment: null
}

function findKey(state, id) {
  return state.comments.findIndex(comment => id === comment.id)
}

function comments (state = initialState, action) {
  const comments = Object.values(state.comments)

  switch (action.type) {
    case GET_ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }

    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.payload
        ]
      }

    case SET_EDITABLE_COMMENT:
      return {
        ...state,
        editableComment: action.payload
      }

    case EDIT_COMMENT:
      comments[findKey(state, action.payload.id)] = action.payload

      return {
        comments: comments,
        editableComment: null
      }

    case VOTE_COMMENT:
      comments[findKey(state, action.payload.id)] = action.payload

      return {
        comments: comments,
        editableComment: null
      }

    default:
      return state
  }
}

export default comments
