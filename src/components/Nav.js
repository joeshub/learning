import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  loginLink () {
    return <li><button>Log In</button></li>
  }

  render () {
    return (
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/user">User Cart</Link></li>
        <li><Link to="/user/checkout">Checkout</Link></li>
        {this.loginLink()}
      </nav >
    )
  }

}
