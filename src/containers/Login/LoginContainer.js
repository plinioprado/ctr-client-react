import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Login from '../../components/Login'
import { login, logout } from '../../redux/modules/session'

class LoginContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email: 'john@example.com',
      pass: '123456',
    }
  }

  componentDidMount() {
    this.props.logout()
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state.email, this.state.pass)
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }

  handlePassChange = (e) => {
    this.setState({pass: e.target.value})
  }

  render() {
    return (
      (this.props.session === null || this.props.session.error !== null)  ?
      <Login
        handleSubmit={e => this.handleSubmit(e)}
        email={this.state.email}
        pass={this.state.pass}
        error={this.props.session ? this.props.session.error : null}
        handleEmailChange={e => this.handleEmailChange(e)}
        handlePassChange={e => this.handlePassChange(e)}
      />
      :
      <Redirect to="/home" />
    )
  }
}

LoginContainer.PropTypes = {
  session: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, pass) => dispatch(login(email, pass)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)