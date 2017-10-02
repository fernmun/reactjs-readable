import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers/'
import promise from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promise)
  )
)

export default store
