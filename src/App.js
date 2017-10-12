import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Header from './components/Header'
import Login from './containers/Login'
import Users from './containers/Users'
import Footer from './components/Footer'
import './App.css';

import store, { history } from './redux/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
          <div>
            <Header />
            <main>
              <Route exact path="/" component={Login} />
              <Route exact path="/user" component={Users} />
            </main>
            <Footer />
          </div>
          </ConnectedRouter>

          </div>
        </Provider>
      </div>
    )
  }
}

export default App;
