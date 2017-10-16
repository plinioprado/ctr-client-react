import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { invoiceReducer } from './modules/invoices'
import { userReducer } from './modules/user'
import { sessionReducer } from './modules/session'

export default combineReducers({
  invoice: invoiceReducer,
  router: routerReducer,
  session: sessionReducer,
  user: userReducer
})