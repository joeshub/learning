import { createStore, applyMiddleware } from 'redux'

// redux-thunk lets you return a function from your action creator
// the first argument is the dispatch method, second is getState
// example thunk:.
// export function myAction({foo, bar}) => {
//     let baz = foo + bar
//     return (dispatch, getState) => {
//         let state = getSate()
//         let {myString} = state;
//         dispatch(anotherAction(foo, bar, myString))
//     }
// }
import reduxThunk from 'redux-thunk'

import async from './middlewares/async'
import reducers from './reducers'

export default createStore(reducers, applyMiddleware(reduxThunk, async))
