import React from 'react'

import InvoiceItem from './InvoiceItem'

 const InvoiceList = (list) => (
     <div>
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th key="cod">Cod</th>
            <th key="val">Val</th>
          </tr>
        </thead>
        <tbody>
          { list.list.map(item => <InvoiceItem key={item.cod} item={item} />) }
        </tbody>
      </table>
     </div>
   )

export default InvoiceList
