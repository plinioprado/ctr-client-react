import React from 'react'

const InvoiceModal = ({ selected, modalSubmit }) => {
  const dateString = new Date(selected.dt).toLocaleDateString()
  const recList =  selected.recList.map(it => {
    const dateString2 = new Date(it.dtDue).toLocaleDateString()
    const valString = new Number(selected.val).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
    return (<li key={it._id}>{dateString2} : {valString}</li>)
  })
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Invoice</h2>
        <div> doc: {selected.cod}</div>
        <div> val: {selected.val}</div>
        <div> std: {selected.std}</div>
        <div> dt: {dateString}</div>
        <p>Client</p>
        <div>Name: {selected.cp.name}</div>
        <div>Cod: {selected.cp.cod}</div>
        <div>Address: {selected.cp.address.addr}</div>
        <div>City: {selected.cp.address.city}</div>
        <div>Neighborhood: {selected.cp.address.neigh}</div>
        <div>State: {selected.cp.address.state}</div>
        <div>Zip: {selected.cp.address.zip}</div>
        <ul>{recList}</ul>
        <nav>
          <button type="submit" value="Ok" className="btn btn-primary" onClick={(e) => {e.preventDefault(); modalSubmit(selected)}}>Ok</button>
        </nav>
      </div>
    </div>
  )
}

export default InvoiceModal