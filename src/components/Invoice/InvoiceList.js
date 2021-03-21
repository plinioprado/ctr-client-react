import React from 'react'

import InvoiceItem from './InvoiceItem'
import InvoiceModal from './InvoiceModal'
   
 const InvoiceList = ({ list, invoice, onSelect, onModalCancel, onModalDelete, onModalSubmit }) => (
     <div>
      <h2>Invoices and revenues</h2>
      <nav className="navbar pull-right">
        <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); onSelect(0)}}>New</button>
      </nav>
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
            list.map(item => <InvoiceItem
                key={item.cod}
                item={item}
                onSelect={(id) => onSelect(id)}
              />)
          }
        </tbody>
      </table>
      {
        invoice &&
        <InvoiceModal
          invoice={invoice}
          className="modal"
          onModalDelete={(id) => onModalDelete(id)}
          onModalCancel={() => onModalCancel()}
          onModalSubmit={(data) => onModalSubmit(data)}
        />
      }
     </div>
   )

export default InvoiceList
