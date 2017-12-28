import { combineReducers } from 'redux'
import postsReducers from './posts'
import userReducers from './user'

export default combineReducers({
  user: userReducers,
  posts: postsReducers
})
