import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as thunks from '../thunks'

class Posts extends Component {
  componentWillMount () {
    // if user info is valid we show posts, otherwise a login error message
    // change 'pass' to something else to test
    this.props.fetchPosts()
  }

  renderPostItem (post) {
    return (
      <div key={ post.title }>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  }

  render () {
    debugger
    return (
      <section>
        {this.props.posts.map(this.renderPostItem)}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, thunks)(Posts)
