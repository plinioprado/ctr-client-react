import React from 'react'

const UserItem = ({ item }) => (
  <tr key={item.id}>
    <td key="email">{item.email}</td>
    <td key="name">{item.name}</td>
    <td key="std">{item.std}</td>
    <td key="active">{item.active ? 'Yes' : 'No'}</td>
  </tr>  
)

export default UserItem
