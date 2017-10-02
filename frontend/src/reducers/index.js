import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './posts'
import categories from './categories'

export default combineReducers({
  posts,
  categories,
  form: formReducer
})
