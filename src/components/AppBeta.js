import React, { Component } from 'react'

export default class AppBeta extends Component {
  render () {
    const { nav, main } = this.props

    return (
      <div className="app__beta">
        <h4>You are seeing v2 of our website</h4>
        {nav}
        <hr />
        {main}
      </div>
    )
  }
}
