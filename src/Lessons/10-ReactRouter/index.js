import React, { Component } from "react"
import ReactRouterBasic from "./ReactRouterBasic"
// import ReactRouterNavigation from "./ReactRouterNavigation"

export default class ReactRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactRouterBasic />
        {/* <ReactRouterNavigation /> */}
      </React.Fragment>
    )
  }
}
