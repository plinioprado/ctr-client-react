import React from 'react'

import InvoiceItem from './InvoiceItem'
   
 const InvoiceList = ({ list }) => (
     <div>
      <h2>Invoices and revenues</h2>
      <table className="table">
        <thead>
          <tr>
            <th key="doc">Doc</th>
            <th key="cliCod">Cod</th>
            <th key="cliName">Client</th>
            <th key="dt">Date</th>
            <th key="val">Value</th>
          </tr>
        </thead>
        <tbody>
          {
            list.length &&  
            list.map(item => <InvoiceItem key={item.cod} item={item} />)
          }
        </tbody>
      </table>
     </div>
   )

export default InvoiceList
