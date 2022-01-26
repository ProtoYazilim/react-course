import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./screens/Home"
import Feeds from "./screens/Feeds"
import Contact from "./screens/Contact"

export default class ReactRouterBasic extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>React Router</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feeds">Feeds</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/feeds">
              <Feeds />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
