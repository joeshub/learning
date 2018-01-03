import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as thunks from '../thunks'

class Checkout extends Component {
  render () {
    let total
    if (this.props.cart.length > 0) {
      total = this.props.cart.reduce((initialValue, item) => initialValue + Number.parseFloat(item.price), 0)
    }
    return (
      <div>
        <h1>Checkout</h1>
        <p>Total Price: ${total}</p>
      </div>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapsStateToProps, thunks)(Checkout)
