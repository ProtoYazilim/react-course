import { store } from "../store"

export const login = (username, password) => {
  let isLogin = password === "123456"
  store.dispatch({
    type: "SET_IS_LOGIN",
    payload: { isLogin: isLogin }
  })

  store.dispatch({
    type: "SET_USERNAME",
    payload: { username: username }
  })
}

export const logout = () => {
  store.dispatch({
    type: "SET_IS_LOGIN",
    payload: { isLogin: false }
  })

  store.dispatch({
    type: "SET_USERNAME",
    payload: { username: "" }
  })
}
