export default (state='', action) => {
  switch (action.type) {
    case expression:
      return action.payload
    default:
      return state

  }
}
