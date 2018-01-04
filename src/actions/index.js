import { USE_BETA } from '../constants/types'

export const useBeta = (bool) => {
  return {
    type: USE_BETA,
    payload: bool
  }
}
