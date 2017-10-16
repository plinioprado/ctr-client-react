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
        {
          this.props.session !== null &&
          <div className="header-menu">
            <Link to="/user" className="menuItem">Users</Link>
            <Link to="/invoice" className="menuItem">Invoices</Link>
            <Link to="/config" className="menuItem">Config</Link>
          </div>
        }
        <div className="header-menu">
          <Link to="/" className="menuItem">{ this.props.session !== null ? 'Logout' : 'Login' }</Link>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Header)