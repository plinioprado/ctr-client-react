// Action creators

import config from '../../config.json'

const LOGOUT = 'LOGOUT'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

export function login(email, pass) {
  return dispatch => {
    fetch(`${config.requestUrlBase}/login`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, pass})
      })
      .then(res => {
        if (res.status !== 200) throw new Error(`${res.statusText} (${res.status})`)
        return res.json()}
      )
      .then(json => {
        dispatch(loginSuccess(json))}
      )
      .catch(err => {
        console.log('error at reducer', err);
        if (err.status === 403) dispatch(loginError('Error: Invalid login'))
        else dispatch(loginError(err.message || 'error'))
      })
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

const loginSuccess = session => {
  console.log('loginSuccess', session)
  return {
    type: LOGIN_SUCCESS,
    session
  }
}

function loginError(error) {
  console.log('loginError', error)
  return {
    type: LOGIN_ERROR,
    error
  }
}

// Reducers

const initialState = {}

export function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        entity: action.session.entity,
        user: action.session.user,
        token: action.session.token,
        error: null
      }
    case 'LOGIN_ERROR':
    console.log('error in reducer', action.error )
      return {
        ...state,
        error: action.error
      }
    case 'LOGOUT':
      return initialState;
    default:
      return state
  }
}
