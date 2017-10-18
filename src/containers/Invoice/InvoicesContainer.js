import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInvoices, getInvoice, updInvoice, resetInvoice } from '../../redux/modules/invoices'

import Invoice from '../../components/Invoice'

class InvoiceContainer extends Component {

  componentDidMount() {
   this.props.getInvoices()
  }

  onSelect = (id) => this.props.getInvoice(id)

  onModalCancel = () => this.props.resetInvoice()

  onModalSubmit = (data) => this.props.updInvoice(data)

  render() {
    return (
      this.props.invoice.isLoading ?
      <p>Loading</p>
      :
      <Invoice
        list={this.props.invoice.list}
        selected={this.props.invoice.selected}
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
  updInvoice: PropTypes.func.isRequired,
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
    updInvoice: (data) => dispatch(updInvoice(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceContainer)

