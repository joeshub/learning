import React, { Component } from 'react'
import { connect } from 'react-redux'
class Async extends Component {

  componentDidMount () {
    this.props.onLoad()
  }

  render () {
    let { RenderComponent, ...otherProps } = this.props

    if (!RenderComponent) {
      return <div>...loading</div>
    }

    return (
      <RenderComponent { ...otherProps } />
    )
  }
}

const anyncRoute = (getComponent, onLoad = () => { }) => connect(
  (state, ownProps) => {
    return (
      {
        RenderComponent: getComponent(state, ownProps)
      }
    )
  },
  (dispatch, ownProps) => {
    return {
      onLoad: () => onLoad(dispatch, ownProps)
    }
  }
)(Async)

export default anyncRoute
