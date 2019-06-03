import { createStore, combineReducers } from 'redux'
import * as allReducers from '../reducers/index'

const rootReducer = combineReducers(allReducers)

export default function configureStore() {
  return createStore(
    rootReducer,
    // applyMiddleware(thunk)
  )
}
