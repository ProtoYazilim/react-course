let initialState = {
  username: "",
  isLogin: false
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case "SET_IS_LOGIN":
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin
      })
    case "SET_USERNAME":
      return Object.assign({}, state, {
        username: action.payload.username
      })
    default:
      return state
  }
}
