// Action creators

export const GET_USERS_BEGIN = 'GET_USERS_BEGIN'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export function getUsers() {

  return dispatch => {
    dispatch(getUsersBegin())
    fetch('http://localhost:4000/api/user',
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization': '123321'
        }
      }
    )
    .then(res => res.json())
    .then(json => dispatch(getUsersSuccess(json)))
    .catch(err => dispatch(getUsersError(err)))
  }
}

const getUsersBegin = () => ({
  type: GET_USERS_BEGIN
})

const getUsersSuccess = data => ({
  type: GET_USERS_SUCCESS,
  list: data
})

const getUsersError = err => ({
  type: GET_USERS_ERROR,
  error: err
})

// Reducers

const initialState = {
  list: [],
  error: null,
  isLoading: false
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS_BEGIN':
      return {
        list: [],
        error: null,
        isLoading: true
      }
    case 'GET_USERS_SUCCESS':
      return {
        list: action.list,
        error: null,
        isLoading: false
      }
    case 'GET_USERS_ERROR':
      return {
        list: [],
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

