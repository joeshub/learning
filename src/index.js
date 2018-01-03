import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import store from './store'
import App from './components/App'
import Posts from './components/Posts'
import Cart from './components/Cart'

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="/posts" component={ Posts } />
        <Route path="/cart" component={ Cart } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
