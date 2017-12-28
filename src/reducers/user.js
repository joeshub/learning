import { USER_AUTHORIZED, USER_NOT_AUTHORIZED } from '../constants/types'

export default (state = {}, action) => {
  switch (action.type) {

  case USER_AUTHORIZED:
    return {
      ...state,
      ...action.payload.data
    }

  case USER_NOT_AUTHORIZED:
    return {
      ...state,
      ...action.payload.response.data
    }

  default:
    return state

  }
}
