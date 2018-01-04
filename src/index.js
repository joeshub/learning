import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from './store'
import Nav from './components/Nav'
import App from './components/App'
import Posts from './components/Posts'
import User from './components/User'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Async from './components/Async'

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute components={ { nav: Nav, main: () => <div>Homepage</div> } } />
        <Route path="posts" components={ { nav: Nav, main: Posts } } />
        <Route path="user" components={ { nav: Nav, main: User } }>
          <IndexRoute component={ Cart } />
          <Route path="checkout" component={ Checkout } />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
