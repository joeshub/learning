import { USER_AUTHORIZED, USER_NOT_AUTHORIZED } from '../constants/types'

export default (state = {}, action) => {
  switch (action.type) {

  case USER_AUTHORIZED:
    return {
      ...state,
      email: action.payload.data.email
    }

  case USER_NOT_AUTHORIZED:
    const errorMessage = action.payload.response ? action.payload.response.data.error : action.payload.message
    return {
      ...state,
      error: errorMessage
    }

  default:
    return state

  }
}
