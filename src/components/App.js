import React, { Component } from 'react'

import AppBeta from './AppBeta'
import * as thunks from '../thunks'

import './css/app.css'

export const getComponent = (state, ownProps) => {
  if (state.posts.list.length === 0) {
    return null
  }
  return state.features.beta ? AppBeta : App
}

export const onLoad = (dispatch, ownProps) => {
  dispatch(thunks.fetchPosts())
}

export default class App extends Component {
  render () {
    const { nav, main } = this.props

    return (
      <div className="app">
        {nav}
        <hr />
        {main}
      </div>
    )
  }
}
