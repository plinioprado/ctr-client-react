import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInvoices, getInvoice, setInvoice, deleteInvoice, resetInvoice } from '../../redux/modules/invoices'

import Invoice from '../../components/Invoice'

class InvoiceContainer extends Component {

  componentDidMount() {
   this.props.getInvoices()
  }

  onSelect = (id) => this.props.getInvoice(id)

  onModalCancel = () => this.props.resetInvoice()

  onModalDelete = (id) => this.props.deleteInvoice(id)

  onModalSubmit = (data) => this.props.setInvoice(data)

  render() {
    return (
      this.props.invoice.isLoading ?
      <p>Loading</p>
      :
      <Invoice
        list={this.props.invoice.list}
        invoice={this.props.invoice.invoice}
        onSelect={(id) => this.onSelect(id)}
        onModalDelete={(id) => this.onModalDelete(id)}
        onModalCancel={() => this.onModalCancel()}
        onModalSubmit={(data) => this.onModalSubmit(data)}
      />
    )
  }
}

InvoiceContainer.PropTypes = {
  getInvoices: PropTypes.func.isRequired,
  getInvoice: PropTypes.func.isRequired,
  deleteInvoice: PropTypes.func.isRequired,
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
    deleteInvoice: (id) => dispatch(deleteInvoice(id)),
    resetInvoice: () => dispatch(resetInvoice()),
    setInvoice: (data) => dispatch(setInvoice(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceContainer)

