import React, { Component } from "react"
import "./style.css"

export default class Generic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      color: "blue",
      confirm: false
    }
  }

  handleForm = (event) => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleForm}
          />
        </label>
        <label>
          Favourite Color:
          <select
            name="color"
            value={this.state.color}
            onChange={this.handleForm}
          >
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"yellow"}>Yellow</option>
          </select>
        </label>
        <label>
          Confirm:
          <input
            type={"checkbox"}
            name="confirm"
            checked={this.state.confirm}
            onChange={this.handleForm}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
