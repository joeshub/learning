import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as thunks from '../thunks'

class Cart extends Component {

  componentDidMount () {
    // if user info is valid we show posts, otherwise a login error message
    // change 'pass' to something else to test
    this.props.fetchCart({
      email: 'dummy@gmail.com',
      password: 'pass'
    })
  }

  renderCartItem (item) {
    return (
      <div key={ item.id }>
        <h4>{item.name} - ${item.price}</h4>
        <p>{item.description}</p>
      </div>
    )
  }
  render () {
    const { cart, user: { error } } = this.props

    if (error) {
      return <h2>Error: {error}</h2>
    }

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
    user: state.user,
    cart: state.cart
  }
}

export default connect(mapsStateToProps, thunks)(Cart)
