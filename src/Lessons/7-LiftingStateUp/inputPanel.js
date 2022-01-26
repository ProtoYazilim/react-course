import React, { Component } from "react"

export default class InputPanel extends Component {
  render() {
    return (
      <div className="input-panel">
        <h3>InputPanel</h3>
        <label>
          Category:
          <input
            onChange={this.props.handleCategory}
            value={this.props.category}
          />
        </label>
      </div>
    )
  }
}
