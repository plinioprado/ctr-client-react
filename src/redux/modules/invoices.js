// Actions

import config from '../../config.json'

const GET_INVOICE_BEGIN = 'GET_INVOICE_BEGIN'
const GET_INVOICES_SUCCESS = 'GET_INVOICES_SUCCESS'
const GET_INVOICE_SUCCESS = 'GET_INVOICE_SUCCESS'
const RESET_INVOICE = 'RESET_INVOICE'
const UPD_INVOICE_SUCCESS = 'UPD_INVOICE_SUCCESS'
const INVOICE_ERROR = 'INVOICE_ERROR'

export const getInvoices = () => {
  return dispatch => {
    try {
      dispatch(getInvoiceBegin())
      fetch(
        `${config.requestUrlBase}/invoice`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': '123321'
          }
        }
      )
      .then(res => res.json())
      .then(json => dispatch(getInvoicesSuccess(json)))
      .catch(err => { throw err })
    } catch(error) {
      console.log('error', error)
      dispatch(getInvoiceError(error))
    }
  }
}

export const resetInvoice = () => {
  return {
    type: RESET_INVOICE
  }
}

export const updInvoice = (data) => {
  return dispatch => {
    dispatch(updInvoiceSuccess(data))
  }
}

const updInvoiceSuccess = (data) => {
  return {
    type: UPD_INVOICE_SUCCESS
  }
}

export const getInvoice = (id) => {
  return dispatch => {
    try {
      fetch(`${config.requestUrlBase}/invoice/${id}`)
        .then(res => res.json())
        .then(json => dispatch(getInvoiceSuccess(json)))
        .catch(err => { throw err })
    } catch(error) {
      console.log('error', error)
      dispatch(getInvoiceError(error))
    }
  }
}

export const getInvoiceSuccess = (data) => {
  return {
    type: GET_INVOICE_SUCCESS,
    data
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
  type: INVOICE_ERROR,
  error
})

// Reducers

const initialState = {
  list: [],
  error: null,
  isLoading: false,
  invoice: null
}

export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INVOICE_BEGIN':
    return {
      ...state,
      list: [],
      isLoading: true
      }
      case 'GET_INVOICES_SUCCESS':
      return {
        ...state,
        list: action.data,
        isLoading: false
        }
    case 'GET_INVOICE_SUCCESS':
        return {
            ...state,
            invoice: action.data,
            isLoading: false
          }
    case 'INVOICE_ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false
        }
    case 'RESET_INVOICE':
      return {
        ...state,
        invoice: null
        }
    case 'UPD_INVOICE_SUCCESS':
      return {
        ...state,
        invoice: null
        }
    default:
      return state
  }
}