import React from 'react'

const Config = ({ entity, user }) => (
  <div>
    <h2>Config</h2>
    <h4>Entity</h4>
    <ul>
      <li>cod: {entity.cod}</li>
      <li>Name: {entity.name}</li>
      <li>Short name: {entity.shortname}</li>
    </ul>
    <h4>Logged user</h4>
    <ul>
      <li>Name: {user.name}</li>
      <li>Std: {user.std}</li>
    </ul>
  </div>
)

export default Config