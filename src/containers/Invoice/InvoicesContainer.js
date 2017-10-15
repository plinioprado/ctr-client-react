import React, { Component } from 'react'

import Invoice from '../../components/Invoice'

class InvoiceContainer extends Component {

  render() {
    const list = [{cod: '1', val: 100}]
    return (
      list ?
      <Invoice
      list={list} />
      :
      <p>Loading</p>  
    )

  }
}

export default InvoiceContainer

