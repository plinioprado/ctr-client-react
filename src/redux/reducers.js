import { combineReducers } from 'redux'
import { userReducer } from './modules/user'

export default combineReducers({
  user: userReducer
})