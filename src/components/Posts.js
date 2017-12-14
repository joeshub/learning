import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts()
    }

    renderPost(post) {
        return (
            <li key={post.title}>
                {post.title}
            </li>
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
