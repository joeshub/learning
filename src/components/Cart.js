import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as thunks from '../thunks'

class Cart extends Component {

  renderCartItem (item) {
    return (
      <div key={ item.id }>
        <h4>{item.name} - ${item.price}</h4>
        <p>{item.description}</p>
      </div>
    )
  }

  render () {
    const { cart } = this.props
    const cartItems = cart ? cart.map(this.renderCartItem) : null

    return (
      <section>
        <h3>Your Cart</h3>
        {cartItems}
      </section>

    )
  }
}

const mapsStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapsStateToProps, thunks)(Cart)
