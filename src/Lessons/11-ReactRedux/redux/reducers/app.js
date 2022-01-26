let initialState = {
  application_name: "None"
}

export function app(state = initialState, action) {
  switch (action.type) {
    case "SET_APPLICATION_NAME":
      return Object.assign({}, state, {
        application_name: action.payload.application_name
      })
    default:
      return state
  }
}
