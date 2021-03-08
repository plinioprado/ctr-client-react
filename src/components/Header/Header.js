import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './styles.css'

class Header extends Component {

  render() {
    const alwaysLogged = this.props.session.alwaysLogged !== true
    const logged = Object.keys(this.props.session).length > 1
      return(
      <header>
        <img src={logo} alt="logo" className="logo" />
        { !alwaysLogged &&
        <div className="header-menu">
          <Link to="/" className="menuItem">{ !logged ? 'Login' : 'Logout' }</Link>
        </div>
        }
        {
          (logged) &&
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