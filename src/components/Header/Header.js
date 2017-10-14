import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = (state) => (
  <header>
    <Link to="/user" className="menuItem">Users</Link>
    <Link to="/" className="menuItem">{ (state === null) ? 'Login' : 'Logout' }</Link>
  </header>
)

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Header)