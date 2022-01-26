import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

class ViewProduct extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr
              style={{
                border: "1px solid black"
              }}
            >
              <td>Name</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.props.products &&
              this.props.products.length &&
              this.props.products.map((item, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      border: "1px solid black"
                    }}
                  >
                    <td>{item.productName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <button
          onClick={() => {
            this.props.history.push("/home")
          }}
        >
          Back
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  }
}

export default withRouter(connect(mapStateToProps)(ViewProduct))
