import { FETCH_POSTS } from './types'
import axios from 'axios'

export const fetchPosts = () => {
  const postsRequest = axios.get('//localhost:3030/posts')

  return {
    type: FETCH_POSTS,
    payload: postsRequest
  }
}
