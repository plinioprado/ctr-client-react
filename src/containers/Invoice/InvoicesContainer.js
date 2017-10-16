import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInvoices } from '../../redux/modules/invoices'

import Invoice from '../../components/Invoice'

class InvoiceContainer extends Component {

  componentDidMount() {
   this.props.getInvoices()
  }

  render() {
    console.log('this.props.invoice', this.props.invoice)
    return (
      this.props.invoice.isLoading ?
      <p>Loading</p>
      :
      <Invoice
      list={this.props.invoice.list} />
    )

  }
}

const mapStateToProps = state => {
  return {
    invoice: state.invoice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInvoices: () => dispatch(getInvoices())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceContainer)

