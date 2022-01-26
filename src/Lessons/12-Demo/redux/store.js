import { createStore, combineReducers } from "redux"
import { auth } from "./reducers/auth"
import { product } from "./reducers/product"

var r = combineReducers({ auth, product })
export const store = createStore(r)
