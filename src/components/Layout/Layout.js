import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Users from '../../containers/Users'

const Layout = () => (
  <div>
    <Header />
    <main>
      <Users />
    </main>
    <Footer />
  </div>
)

export default Layout