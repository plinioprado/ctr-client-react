import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

export const history = createHistory()

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger,
      routerMiddleware(history)
    )
  )
)

export default store