import React, { Component } from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import Login from "./routes/Login"
import Home from "./routes/Home"
import AddProduct from "./routes/AddProduct"
import ViewProduct from "./routes/ViewProduct"

export default class Demo extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/viewProduct" component={ViewProduct} />
        </Switch>
      </BrowserRouter>
    )
  }
}
