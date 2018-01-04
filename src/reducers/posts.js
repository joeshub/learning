import { FETCH_POSTS, FETCH_POSTS_ERROR } from '../constants/types'

const initialState = {
  list: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCH_POSTS:
    return {
      ...state,
      list: [ ...action.payload.data ]
    }

  case FETCH_POSTS_ERROR:
    return {
      ...state,
      error: action.payload.message
    }

  default:
    return state

  }
}
