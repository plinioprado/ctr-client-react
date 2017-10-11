import React from 'react'

const UserItem = ({ item }) => (
  <tr>
    <td>{item.email}</td>
    <td>{item.name}</td>
  </tr>  
)

export default UserItem
