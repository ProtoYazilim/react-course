import React, { Component } from "react"
import { withRouter } from "react-router"
import { addProduct } from "../redux/actions/product.action"

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: "",
      quantity: 0,
      price: 0
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    addProduct(this.state)
    e.currentTarget.reset()
    e.preventDefault()
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "200px",
          justifyContent: "space-evenly"
        }}
      >
        <label>
          Product name:
          <input type="text" name="productName" onChange={this.handleChange} />
        </label>
        <label>
          Quantity:
          <input type="text" name="quantity" onChange={this.handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" onChange={this.handleChange} />
        </label>
        <button
          type="submit"
          style={{
            width: 100
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.history.push("/home")
          }}
          style={{
            width: 100
          }}
        >
          Back
        </button>
      </form>
    )
  }
}

export default withRouter(AddProduct)
