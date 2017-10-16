// Actions

const GET_INVOICE_BEGIN = 'GET_INVOICE_BEGIN'
const GET_INVOICES_SUCCESS = 'GET_INVOICES_SUCCESS'
const GET_INVOICE_ERROR = 'GET_INVOICE_ERROR'

export const getInvoices = () => {
  return dispatch => {
    try {
      dispatch(getInvoiceBegin())
      fetch('http://localhost:4000/api/recins')
        .then(res => res.json())
        .then(json => dispatch(getInvoicesSuccess(json)))
        .catch(err => { throw err })
    } catch(error) {
      console.log('error', error)
      dispatch(getInvoiceError(error))
    }
  }
}

const getInvoiceBegin = () => ({
  type: GET_INVOICE_BEGIN
})

const getInvoicesSuccess = (data) => ({
  type: GET_INVOICES_SUCCESS,
  data
})

const getInvoiceError = (error) => ({
  type: GET_INVOICE_ERROR,
  error
})

// Reducers

const initialState = {
  list: [],
  error: null,
  isLoading: false
}

export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INVOICE_BEGIN':
    return {
      list: [],
      error: null,
      isLoading: true
      }
    case 'GET_INVOICES_SUCCESS':
      return {
        list: action.data,
        error: null,
        isLoading: false
        }
    case 'GET_INVOICE_ERROR':
      return {
        list: [],
        error: action.error,
        isLoading: false
        }
    default:
      return state
  }
}