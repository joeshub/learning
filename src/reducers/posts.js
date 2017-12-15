import { FETCH_POSTS } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_POSTS:
    return [ ...state, ...action.payload.data ]
  default:
    return state
  }
}
