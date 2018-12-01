import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom' 
import {GlobalStyle} from './style'
import Header from './common/Header'
import Home from './pages/Home'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <GlobalStyle/>
            <Header />
            <Route path='/' exact component={Home}></Route>
          </Fragment>       
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
