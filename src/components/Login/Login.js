import React, { Component } from 'react'
import './styles.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: 'john@example.com',
      pass: '123456',
      logged: false
    }
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handlePassChange = (event) => {
    this.setState({pass: event.target.value})
  }

  handleSubmit = (event) => {
    this.setState({logged: true})
    event.preventDefault()
  }
  
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="loginForm">
        <div>
        <label>
          Email:
        <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        </div>
        <div>
        <label>
          Pass:
        <input type="password" value={this.state.pass} onChange={this.handlePassChange} />
        </label>
        </div>
        <div>
        <input type="submit" value="Ok" />
        </div>
        <div>l:{this.state.logged.toString()}</div>
      </div>
      </form>
    )
  }

}


export default Login