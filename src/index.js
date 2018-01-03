import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from './store'
import App from './components/App'
import Posts from './components/Posts'
import User from './components/User'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="posts" component={ Posts } />
        <Route path="user" component={ User }>
          <IndexRoute component={ Cart } />
          <Route path="checkout" component={ Checkout } />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
