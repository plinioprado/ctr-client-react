import React from 'react'

const InvoiceItem = (item) => (
  <tr>
    <td key="cod">{item.item.cod}</td>
    <td key="val">{item.item.val}</td>
  </tr>  
)

export default InvoiceItem