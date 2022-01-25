import React, { Component } from "react"

export default class Count extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.count !== prevProps.count) {
      console.log("prop change")
    }
  }

  //   componentWillUnmount() {
  //     console.log("componentWillUnmount")
  //   }

  render() {
    return (
      <div>
        <p>{this.props.count}</p>
      </div>
    )
  }
}
