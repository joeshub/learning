// handle async actions
export default store => next => action => {
  // if the action does not have a paylod
  // or the the payload doesnt have a .then property
  // we skip it and send it to the 'next' middleware or root reducer
  if (!action.payload || !action.payload.then) {
    return next(action)
  }

  // otherwise we have a promise
  // .then is called after the promise is resolved
  // along with the response data
  action.payload.then(response => {
    // create a new Action with the old Type
    // but replace the payload with the response
    // from our promise
    const newAction = { ...action, payload: response }
    // now we need to send the action through all
    // our middleware again, so we use 'dispatch', not 'next'
    store.dispatch(newAction)
  })
}
