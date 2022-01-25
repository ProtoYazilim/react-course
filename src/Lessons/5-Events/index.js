import React, { Component } from "react"

export default class Events extends Component {
  constructor(props) {
    super(props)

    this.handleClickButton3 = this.handleClickButton3.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("e ", e)
  }

  handleClickButton1() {
    console.log("Button 1 ", this)
  }

  handleClickButton2 = () => {
    console.log("Button 2 ", this)
  }

  handleClickButton3() {
    console.log("Button 3 ", this)
  }

  handleClickButton4 = (e) => {
    console.log("Button 4 ", e)
  }

  handleClickButton5(e) {
    console.log("Button 5 ", e)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Submit</button>
        </form>

        <button
          onClick={() => {
            this.handleClickButton1()
          }}
        >
          Button 1
        </button>

        <button onClick={this.handleClickButton2}>Button 2</button>

        <button onClick={this.handleClickButton3}>Button 3</button>

        <button
          onClick={(e) => {
            this.handleClickButton4(e)
          }}
        >
          Button 4
        </button>
        <button onClick={this.handleClickButton5.bind(this)}>Button 5</button>
      </div>
    )
  }
}
