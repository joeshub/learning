import { FETCH_POSTS } from './types'
import axios from 'axios'

export const fetchPosts = () => {
  const postsRequest = axios.get('https://jsonplaceholder.typicode.com/posts')

  return {
    type: FETCH_POSTS,
    payload: postsRequest
  }
}
