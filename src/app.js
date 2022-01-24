import React, { Component } from "react"
import "./App.css"
// import Jsx from "./Lessons/1-Jsx"
import Components from "./Lessons/2-Components&Props"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Jsx /> */}
        <Components />
      </React.Fragment>
    )
  }
}

export default App
