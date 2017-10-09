import React, { Component } from 'react'

import Users from './Users'

class UserContainer extends Component {

  list = [
    {
      id: 1,
      email: 'john@example.com',
      name: 'John Smith'
    },
    {
      id: 1,
      email: 'mary@example.com',
      name: 'Mary Smith'
    },
    {
      id: 1,
      email: 'paul@example.com',
      name: 'Paul Black'
    }
  ]

  render() {
    return (
      <Users list={this.list} />
    )
  }
}

export default UserContainer