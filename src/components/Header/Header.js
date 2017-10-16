import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import './styles.css'

const Header = (session) => (
  <header>
    <img src={logo} alt="logo" className="logo" />
    {
      session &&
      <div>
        <Link to="/user" className="menuItem">Users</Link>
        <Link to="/invoice" className="menuItem">Invoices</Link>
        <Link to="/config" className="menuItem">Config</Link>
      </div>
    }
    <Link to="/" className="menuItem">{ session ? 'Logout' : 'Login' }</Link>
  </header>
)

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Header)