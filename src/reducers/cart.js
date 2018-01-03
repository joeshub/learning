import { FETCH_CART } from '../constants/types'

export default (state = [], action) => {
  switch (action.type) {

  case FETCH_CART:
    return [
      ...action.payload.data
    ]

  default:
    return state

  }
}
