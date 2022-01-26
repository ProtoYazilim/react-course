import React, { Component } from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"

import Home from "./screens/Home"
import Feeds from "./screens/Feeds"
import Contact from "./screens/Contact"

export default class ReactRouterNavigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feeds" component={Feeds} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    )
  }
}
