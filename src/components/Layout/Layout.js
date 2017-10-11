import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import Login from '../../containers/Login'
import Users from '../../containers/Users'

const Layout = () => (
  <div>
    <Header />
    <main>
      <Login />
      {/* <Users /> */}
    </main>
    <Footer />
  </div>
)

export default Layout