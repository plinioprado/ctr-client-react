import React, { Component } from 'react'
import Login from '../../components/Login'


class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'john@example.com',
      pass: '123456',
      logged: false
    }
  }

  handleSubmit(e) {
    console.log('data', this.state)
    this.setState({logged: true})
    e.preventDefault()
  }

  handleEmailChange = (e) => {
    console.log('handleEmailChange')
    this.setState({email: e.target.value})
  }

  handlePassChange = (e) => {
    console.log('handlePassChange')
    this.setState({pass: e.target.value})
  }

  render() {
    return <Login
      handleSubmit={e => this.handleSubmit(e)}
      email={this.state.email}
      pass={this.state.pass}
      logged={this.state.logged}
      handleEmailChange={e => this.handleEmailChange(e)}
      handlePassChange={e => this.handlePassChange(e)}
    />
  }
}

export default LoginContainer