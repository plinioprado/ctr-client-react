import React, { Component } from 'react'
import { connect } from 'react-redux'
class Footer extends Component {
  render () {
    let userName
    if (this.props.session && this.props.session.user ) userName = this.props.session.user.name
    else userName = ' '

    return (<footer>{userName}</footer>)
  }
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Footer)
