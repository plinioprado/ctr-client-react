// Action creators

const LOGOUT = 'LOGOUT'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

export function login(email, pass) {
  return dispatch => {
    // try {
      fetch('http://localhost:4000/api/login', {
        method: 'post',
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body: JSON.stringify({email, pass})
        })
        .then(res => {
          if (res.status !== 200) throw `${res.statusText} (${res.status})`
          return res.json()}
        )
        .then(json => {
          dispatch(loginSuccess(json))}
        )
        .catch(err => {
          console.log('error at reducer', err);
          dispatch(loginError(err.message || 'error'))
        })

    // } catch(error) {
    //   console.log('error at reducer2', error);
    //   dispatch(loginError(error || 'error2'))
    // }    
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

const initialState = {};

export function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        error: null
      }
    case 'LOGIN_ERROR':
    console.log('error in reducer', action.error )
      return {
        ...state,
        error: action.error
      }
    case 'LOGOUT':
      return {};
    default:
      return state
  }
}
