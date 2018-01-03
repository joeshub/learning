import { combineReducers } from 'redux'
import postsReducers from './posts'
import userReducers from './user'
import cartReducers from './cart'

export default combineReducers({
  user: userReducers,
  posts: postsReducers,
  cart: cartReducers,
})
