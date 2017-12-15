import async from './middlewares/async'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

export default createStore(reducers, applyMiddleware(async))
