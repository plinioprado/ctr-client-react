import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './styles.css'

class Header extends Component {

  render() {
    return(
      <header>
        <img src={logo} alt="logo" className="logo" />
        <div className="header-menu">
          <Link to="/" className="menuItem">{ this.props.session === {} ? 'Login' : 'Logout' }</Link>
        </div>
        {
          this.props.session !== {} &&
          <div className="header-menu">
            <Link to="/config" className="menuItem">Config</Link>
            <Link to="/user" className="menuItem">Users</Link>
            <Link to="/invoice" className="menuItem">Invoices</Link>
          </div>
        }
      </header>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Header)