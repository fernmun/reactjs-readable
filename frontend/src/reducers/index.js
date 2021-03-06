import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './posts'
import post from './post'
import categories from './categories'
import comments from './comments'
import orderType from './orderType'

export default combineReducers({
  posts,
  post,
  categories,
  comments,
  orderType,
  form: formReducer
})
