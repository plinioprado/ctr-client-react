import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInvoices, getInvoice, setInvoice, resetInvoice } from '../../redux/modules/invoices'

import Invoice from '../../components/Invoice'

class InvoiceContainer extends Component {

  componentDidMount() {
   this.props.getInvoices()
  }

  onSelect = (id) => this.props.getInvoice(id)

  onModalCancel = () => this.props.resetInvoice()

  onModalSubmit = (form) => {
    const data = {
      cod: form.cod,
      cp: {
        address: {
          addr: form.cpAddressAddr,
          city: form.cpAddressCity,
          country: form.cpAddressCountry,
          neigh: form.cpAddressNeigh,
          state: form.cpAddressState,
          zip: form.cpAddressZip
        },
        cod: form.cpCod,
        name: form.cpName
      },
      std: form.std,
      dt: new Date(form.dtString),
      recList: [{dt: '3920-03-02T08:00:00.000+00:00', val: 0}],
      val: form.val
    }
    this.props.setInvoice(data)
  }

  render() {
    return (
      this.props.invoice.isLoading ?
      <p>Loading</p>
      :
      <Invoice
        list={this.props.invoice.list}
        invoice={this.props.invoice.invoice}
        onSelect={(id) => this.onSelect(id)}
        onModalCancel={() => this.onModalCancel()}
        onModalSubmit={(data) => this.onModalSubmit(data)}
      />
    )
  }
}

InvoiceContainer.PropTypes = {
  getInvoices: PropTypes.func.isRequired,
  getInvoice: PropTypes.func.isRequired,
  setInvoice: PropTypes.func.isRequired,
  invoice: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    invoice: state.invoice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInvoices: () => dispatch(getInvoices()),
    getInvoice: (id) => dispatch(getInvoice(id)),
    resetInvoice: () => dispatch(resetInvoice()),
    setInvoice: (data) => dispatch(setInvoice(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceContainer)

