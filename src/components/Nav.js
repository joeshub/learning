import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Nav extends Component {

  tryBeta = () => {
    const { inBeta } = this.props
    this.props.useBeta(!inBeta)
  }

  renderBetaButton () {
    const { inBeta } = this.props
    const betaButtonText = inBeta ? 'Use Classic' : 'Use Beta'

    return <button onClick={ this.tryBeta }>{betaButtonText}</button>
  }

  render () {
    return (
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/user">User Cart</Link></li>
        <li><Link to="/user/checkout">Checkout</Link></li>
        {this.renderBetaButton()}
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inBeta: state.features.beta
  }
}

export default connect(mapStateToProps, actions)(Nav)
