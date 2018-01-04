import { USE_BETA } from '../constants/types'

export default (state = { beta: false }, action) => {
  switch(action.type) {

  case USE_BETA:
    return {
      ...state,
      beta: action.payload
    }
  default:
    return state

  }
}
