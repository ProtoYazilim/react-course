import React, { Component } from "react"
import "./styles.css"

// function Count({ count }) {
//   return <h2 className="center">{count}</h2>
// }

export default class State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.count = 0
  }

  increaseCounterFromThis = () => {
    this.count = this.count + 1
    console.log("increase counter this.count ", this.count)
  }

  increaseCounterFromState = () => {
    this.setState({
      count: this.state.count + 1
    })

    // this.setState((state, props) => {
    //   console.log("state ", state)
    //   console.log("props ", props)
    //   return {
    //     count: state.count + 1
    //   }
    // })
  }

  render() {
    console.log("render blogu ")
    console.log("this.count ", this.count)
    return (
      <div className="container">
        <div className="center">
          State from this
          <p>{this.count}</p>
          <button onClick={this.increaseCounterFromThis}>Increase this</button>
        </div>
        <div className="center">
          State from state
          <p>{this.state.count}</p>
          <button onClick={this.increaseCounterFromState}>
            Increase state
          </button>
        </div>
        {/* <Count count={this.state.count} /> */}
      </div>
    )
  }
}
