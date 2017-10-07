import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './posts'
import post from './post'
import categories from './categories'
import orderType from './orderType'

export default combineReducers({
  posts,
  post,
  categories,
  orderType,
  form: formReducer
})
