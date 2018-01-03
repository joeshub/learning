import { FETCH_POSTS } from '../constants/types'
import update from 'immutability-helper'

export default (state = [], action) => {
  switch (action.type) {

  case FETCH_POSTS:
    console.log('state', state)
    console.log('action.payload.data', action.payload.data)
    return [
      ...state,
      ...action.payload.data
    ]
    // return Object.assign({}, state, action.payload.data)
    // return [ ...merge({}, state, action.payload.data) ]
    // return [
    //   ...state,
    //   ...action.payload.data.reduce((obj, post) => {
    //     obj[post.id] = post
    //     return obj
    //   }, [])
    // ]
    // return update(state, action.payload.data)
  default:
    return state

  }
}
