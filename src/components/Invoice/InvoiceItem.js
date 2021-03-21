import React from 'react'

const InvoiceItem = ({ item, onSelect }) => {
  const dateString = new Date(item.dt).toLocaleDateString('en-US',{year:"numeric", month:"2-digit", day:"2-digit"})
  const valString = parseFloat(item.val).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
  return (
    <tr>
      <td key="doc"><a href="" onClick={(e) => {e.preventDefault(); onSelect(item.cod)}}>{item.cod}</a></td>
      <td key="cliCod">{item.cp.cod}</td>
      <td key="cliName">{item.cp.name}</td>
      <td key="dt">{dateString}</td>
      <td key="val" align="right">{valString.toString()}</td>
    </tr>  
  )
}

export default InvoiceItem