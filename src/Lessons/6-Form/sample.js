import React, { Component } from "react"

export default class Sample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ""
    }
  }

  handleChange(event) {
    //console.log(event)
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    console.log("Name ", this.state.name)
    event.preventDefault()
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.handleSubmit(event)
        }}
      >
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handleChange(event)
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
