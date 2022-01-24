import React, { Component } from "react"

function WelcomeFunctional(props) {
  return <h1>Hello, {props.name}</h1>
}

class WelcomeClass extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

class ClassFunctional extends Component {
  render() {
    return (
      <div>
        <WelcomeFunctional name="ali function" />
        <WelcomeClass name="ali class" />
      </div>
    )
  }
}

export default ClassFunctional
