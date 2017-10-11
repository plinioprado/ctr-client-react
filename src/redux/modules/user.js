// Action creators

export const GET_USERS = 'GET_USERS'

export function getUsers() {
  return {
    type: GET_USERS,
    list: [
        {
          id: 1,
          email: 'john@example.com',
          name: 'John Smith'
        },
        {
          id: 1,
          email: 'mary@example.com',
          name: 'Mary Smith'
        }
      ]
  }
}

// Reducers

const initialState = {
  list: [],
  error: {},
  isLoading: false
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

