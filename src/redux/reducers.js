import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { userReducer } from './modules/user'
import { sessionReducer } from './modules/session'

export default combineReducers({
  router: routerReducer,
  session: sessionReducer,
  user: userReducer
})