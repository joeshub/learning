import {FETCH_POSTS} from './types'

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
        payload: [
            {title: 'first post'},
            {title: 'second post'},
            {title: 'third post'},
        ]
    }
}
