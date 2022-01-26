import React, { Component } from "react"
import InputPanel from "./inputPanel"
import ListPanel from "./listPanel"
import "./style.css"

export default class LiftingStateUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "",
      categories: []
    }
  }

  handleCategory = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      category: "",
      categories: [...this.state.categories, this.state.category]
    })
  }

  render() {
    return (
      <div className="lifting">
        <div className="panel">
          <InputPanel
            category={this.state.category}
            handleCategory={this.handleCategory}
          />
          <ListPanel categories={this.state.categories} />
        </div>
        <div>
          <button onClick={this.handleClick}>Add</button>
        </div>
      </div>
    )
  }
}
