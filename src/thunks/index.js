import axios from 'axios'

import { API_ROOT } from '../constants'
import {
  FETCH_POSTS,
  FETCH_CART,
  USER_AUTHORIZED,
  USER_NOT_AUTHORIZED
} from '../constants/types'

// redux-thunk lets you return a function from your action creator
// the first argument is the dispatch method, second is getState
// example thunk:.
// export function myAction({foo, bar}) => {
//     let baz = foo + bar
//     return (dispatch, getState) => {
//         let state = getSate()
//         let {myString} = state;
//         dispatch(anotherAction({foo, bar, myString}))
//     }
// }
export const fetchPosts = () => {
  return (dispatch) => {
    axios.get(`${API_ROOT}/posts`)
      .then((response) => {
        return dispatch({
          type: FETCH_POSTS,
          payload: response
        })
      })
  }
}

export const fetchUser = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${API_ROOT}/signin`, { email, password })
      .then(response => {
        dispatch({
          type: USER_AUTHORIZED,
          payload: response
        })
        axios.get(`${API_ROOT}/cart`)
          .then((response) => {
            return dispatch({
              type: FETCH_CART,
              payload: response
            })
          })
      })
      .catch(response => {
        return dispatch({
          type: USER_NOT_AUTHORIZED,
          payload: response
        })
      })
  }
}
