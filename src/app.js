import React, { Component } from "react"
import "./App.css"
import LiftingStateUp from "./Lessons/LiftingStateUp"
// import Jsx from "./Lessons/1-Jsx"
// import Components from "./Lessons/2-Components&Props"
// import States from "./Lessons/3-State"
// import Lifecycle from "./Lessons/4-Lifecycle"
// import Events from "./Lessons/5-Events"
// import Forms from "./Lessons/6-Form"

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Jsx /> */}
        {/* <Components /> */}
        {/* <States /> */}
        {/* {<Lifecycle />} */}
        {/* <Events /> */}
        {/* <Forms /> */}
        <LiftingStateUp />
      </div>
    )
  }
}

export default App
