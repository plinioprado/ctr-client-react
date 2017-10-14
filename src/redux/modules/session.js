// Action creators

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGOUT = 'LOGOUT'

export function login(email, pass) {
  return dispatch => {
    try {
      if (email !== 'john@example.com' || pass !== '123456') throw new Error('invalid login')
      dispatch(loginSuccess({user: { email }}))
    } catch(error) {
      dispatch(loginError(error || 'error'))
    }    
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

function loginSuccess(session) {
  return {
    type: LOGIN_SUCCESS,
    session
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

// Reducers

const initialState = null

export function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        user: action.session.user,
        error: null
      }
    case 'LOGIN_ERROR':
      return {
        user: null,
        error: action.error
      }
    case 'LOGOUT':
      return null
    default:
      return state
  }
}