import React, { Component } from "react"
// import Count from "./count"

export default class Lifecycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log("constructor ", this.state.count)
  }

  componentDidMount() {
    console.log("componentDidMount ", this.state.count)
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("componentDidUpdate count", this.state.count)
  //     console.log("componentDidUpdate prevProps", prevProps)
  //     console.log("componentDidUpdate prevState", prevState)
  //   }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log("render ", this.state.count)
    return (
      <React.Fragment>
        <p>{this.state.count}</p>
        {/* <Count count={this.state.count} />
        {this.state.count % 2 === 0 && <Count count={this.state.count} />} */}
        <button
          onClick={() => {
            this.increaseCount()
          }}
        >
          Increase
        </button>
      </React.Fragment>
    )
  }
}
