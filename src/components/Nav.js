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
        <li><Link to="/cart">Cart</Link></li>
        {this.loginLink()}
      </nav >
    )
  }

}
