let initialState = {
  products: []
}

export function product(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log("state, ", state)
      return Object.assign({}, state, {
        products: [...state.products, action.payload.product]
      })
    default:
      return state
  }
}
