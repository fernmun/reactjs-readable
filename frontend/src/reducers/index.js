import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './posts'
import post from './post'
import categories from './categories'

export default combineReducers({
  posts,
  post,
  categories,
  form: formReducer
})
