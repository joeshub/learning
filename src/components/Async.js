import React, { Component } from 'react'
import { connect } from 'react-redux'

class Async extends Component {

  componentDidMount () {
    if (this.props.onLoad) {
      this.props.onLoad()
    }
  }

  render () {
    let { Render } = this.props
    return (
      <Render />
    )
  }
}


const anyncRoute = (mapTo, onLoad = () => { }) => connect(
  (state) => (
    {
      Render: mapTo(state)
    }
  ),
  (dispatch) => (
    {
      onLoad: () => onLoad(dispatch)
    }
  )
)(Async)

export default anyncRoute
