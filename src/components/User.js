import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as thunks from '../thunks'

class User extends Component {

  componentDidMount () {
    // if user info is valid we show posts, otherwise a login error message
    // change 'pass' to something else to test
    this.props.fetchUser({
      email: 'dummy@gmail.com',
      password: 'pass'
    })
  }

  renderUserItem (item) {
    return (
      <div key={ item.id }>
        <h4>{item.name} - ${item.price}</h4>
        <p>{item.description}</p>
      </div>
    )
  }
  render () {
    const { user: { error } } = this.props

    if (error) {
      return <h2>Error: {error}</h2>
    }

    return (
      <section>
        {this.props.children}
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

export default connect(mapsStateToProps, thunks)(User)
