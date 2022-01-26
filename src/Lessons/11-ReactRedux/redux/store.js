import { createStore, combineReducers } from "redux"
import { app } from "./reducers/app"

var r = combineReducers({ app })
export const store = createStore(r)
