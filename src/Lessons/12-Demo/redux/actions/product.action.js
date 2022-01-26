import { store } from "../store"

export const addProduct = (product) => {
  store.dispatch({
    type: "SET_PRODUCTS",
    payload: { product: product }
  })
}
