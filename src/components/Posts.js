import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts()
    }

    renderPost(post) {
        return (
            <div key={post.title}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    }

    render() {
        return (
            <ul>
                {this.props.posts.map(this.renderPost)}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, actions)(Posts)
