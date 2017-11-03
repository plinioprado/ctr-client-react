import React from 'react'

const InvoiceItem = ({ item, onSelect }) => {
  const dateString = new Date(item.dt).toLocaleDateString()
  const valString = parseFloat(item.val).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
  console.log('valString', valString)
  return (
    <tr>
      <td key="doc"><a href="" onClick={(e) => {e.preventDefault(); onSelect(item.cod)}}>{item.cod}</a></td>
      <td key="cliCod">{item.cp.cod}</td>
      <td key="cliName">{item.cp.name}</td>
      <td key="dt">{dateString}</td>
      <td key="val">{valString.toString()}</td>
    </tr>  
  )
}

export default InvoiceItem