import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {

  renderPostItem (post) {
    return (
      <div key={ post.title }>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  }

  render () {
    const { posts, posts: { error } } = this.props

    if (error) {
      return <h2>Error: {error}</h2>
    }

    return (
      <section>
        {posts.list.map(this.renderPostItem)}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, null)(Posts)
