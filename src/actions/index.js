import { FETCH_POSTS } from './types'
import axios from 'axios'

const API_ROOT = '//localhost:3030'

export const fetchPosts = () => {
  const postsRequest = axios.get(`${API_ROOT}/posts`)

  return {
    type: FETCH_POSTS,
    payload: postsRequest
  }
}

export const signinUser = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${API_ROOT}/signin`, { email, password })
    // 1) submit email/password
    // [Good Request]
    // 2.1) update state if authenticated
    // 2.2) Save JWT token
    // 2.3) Redirect to route /feature
    // [Bad Request]
    // 3) Show an error
  }
}
