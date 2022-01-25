import React, { Component } from "react"
import "./App.css"
// import Jsx from "./Lessons/1-Jsx"
// import Components from "./Lessons/2-Components&Props"
// import States from "./Lessons/3-State"
// import Lifecycle from "./Lessons/4-Lifecycle"
import Events from "./Lessons/5-Events"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Jsx /> */}
        {/* <Components /> */}
        {/* <States /> */}
        {/* {<Lifecycle />} */}
        <Events />
      </React.Fragment>
    )
  }
}

export default App
