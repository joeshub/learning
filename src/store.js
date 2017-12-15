import { createStore, applyMiddleware } from 'redux'

import async from './middlewares/async'
import reducers from './reducers'

export default createStore(reducers, applyMiddleware(async))
