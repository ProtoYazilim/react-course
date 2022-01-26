import { store } from "../store"

export const setApplicationName = (name) => {
  store.dispatch({
    type: "SET_APPLICATION_NAME",
    payload: { application_name: name }
  })
}
