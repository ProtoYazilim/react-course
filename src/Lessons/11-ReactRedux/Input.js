import React, { Component } from "react"
import { setApplicationName } from "./redux/actions"

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSave = () => {
    setApplicationName(this.state.name)
  }

  render() {
    return (
      <div>
        Input
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button onClick={this.handleSave}>Save</button>
        </div>
      </div>
    )
  }
}
