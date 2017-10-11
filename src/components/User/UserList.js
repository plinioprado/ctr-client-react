import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'
import './styles.css'

class UserList extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const list = this.props.list

    return (
      list.length === 0 ?
      <p>Loading</p>
      :
      <table>
        <thead>
          <th>Email</th>
          <th>Name</th>
        </thead>
        <tbody>
        {
          list.map(item => <UserItem item={item} />)
        }
        </tbody>
      </table>      
    )
  }
}

UserList.PropTypes = {
  getUsers: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}

export default UserList