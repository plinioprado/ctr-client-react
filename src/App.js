import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import './App.css';
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Layout />
        </Provider>
      </div>
    )
  }
}

export default App;
