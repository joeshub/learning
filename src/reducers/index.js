import { combineReducers } from 'redux'
import postsReducers from './posts'
import userReducers from './user'
import cartReducers from './cart'
import featuresReducers from './features'

export default combineReducers({
  user: userReducers,
  posts: postsReducers,
  cart: cartReducers,
  features: featuresReducers
})
