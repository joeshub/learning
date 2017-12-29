import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as thunks from '../thunks'

class Posts extends Component {
  componentWillMount () {
    // if user info is valid we show posts, otherwise a login error message
    // change 'pass' to something else to test
    this.props.fetchPosts({
      email: 'dummy@gmail.com',
      password: 'pass'
    })
  }

  renderPost (post) {
    return (
      <div key={ post.title }>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  }

  render () {
    const { user: { error } } = this.props
    if (error) {
      return <h2>Error: {error}</h2>
    }
    return <ul>{this.props.posts.map(this.renderPost)}</ul>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts
  }
}

export default connect(mapStateToProps, thunks)(Posts)
