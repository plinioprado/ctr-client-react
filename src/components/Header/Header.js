import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => (
  <header>
    <Link to="/" className="menuItem">Login</Link>
    <Link to="/user" className="menuItem">Users</Link>
  </header>
)

export default Header