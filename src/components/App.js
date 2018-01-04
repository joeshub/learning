import React, { Component } from 'react'

import Nav from './Nav'
import Posts from './Posts'

export default class App extends Component {
  render () {
    const { nav, main } = this.props

    return (
      <div className="App">
        {nav}
        <hr />
        {main}
      </div>
    )
  }
}
