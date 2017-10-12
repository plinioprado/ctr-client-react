import { combineReducers } from 'redux'
import { userReducer } from './modules/user'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  user: userReducer,
  router: routerReducer
})