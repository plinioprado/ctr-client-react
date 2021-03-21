// Actions

import config from '../../config.json'
import helpers from '../../helpers/invoice'

const GET_INVOICE_BEGIN = 'GET_INVOICE_BEGIN'
const GET_INVOICES_SUCCESS = 'GET_INVOICES_SUCCESS'
const GET_INVOICE_SUCCESS = 'GET_INVOICE_SUCCESS'
const RESET_INVOICE = 'RESET_INVOICE'
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
            'Content-Type': 'application/json',
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

export const setInvoice = (data) => {
  return dispatch => {
    console.log('in setInvoice, data=', data)
    try {
      dispatch(getInvoiceBegin())
      const fetchMethod = data.cod === '0' ? 'post' : 'put'
      fetch(
        `${config.requestUrlBase}/invoice`,
        {
          method: fetchMethod,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '123321'
          },
          body: JSON.stringify(data)
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


export const getInvoice = (id) => {
  return dispatch => {
    try {
      if (id === 0) {
        const json = helpers.newInvoice()
        dispatch(getInvoiceSuccess(json))
      } else {
        fetch(`${config.requestUrlBase}/invoice/${id}`,
          {
            method: 'get',
            headers: {
              'Authorization': '123321'
            }
          })
          .then(res => res.json())
          .then(json => dispatch(getInvoiceSuccess(json)))
          .catch(err => { throw err })
      }
    } catch(error) {
      console.log('error', error)
      dispatch(getInvoiceError(error))
    }
  }
}

export const deleteInvoice = (id) => {
  return dispatch => {
    try {
      fetch(`${config.requestUrlBase}/invoice/${id}`,
        {
          method: 'delete',
          headers: {
            'Authorization': '123321'
          }
        })
        .then(res => res.json())
        .then(json => dispatch(getInvoicesSuccess(json)))
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
        isLoading: false,
        invoice: null
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
    default:
      return state
  }
}