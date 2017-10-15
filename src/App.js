import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Config from './containers/Config'
import Header from './components/Header'
import Invoice from './containers/Invoice'
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
          <ConnectedRouter history={history}>
            <div>
              <Header />
              <main>
                <Route exact path="/" component={Login} />
                <Route exact path="/invoice" component={Invoice} />
                <Route exact path="/user" component={Users} />
                <Route exact path="/config" component={Config} />
              </main>
              <Footer />
            </div>
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
