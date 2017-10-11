import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsers } from '../../redux/modules/user'
import Users from './Users'

class UserContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
    return (
      <Users list={this.props.list} />
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.user.list
  }
}

export default connect(mapStateToProps)(UserContainer)
