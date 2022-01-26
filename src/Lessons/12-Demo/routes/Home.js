import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { logout } from "../redux/actions/auth.action"
class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          height: "300px",
          justifyContent: "space-evenly"
        }}
      >
        <h3>Welcome {this.props.username}</h3>
        <button
          onClick={() => {
            this.props.history.push("/addProduct")
          }}
        >
          Add Product
        </button>
        <button
          onClick={() => {
            this.props.history.push("/viewProduct")
          }}
        >
          View Product
        </button>
        <button
          onClick={() => {
            logout()
            this.props.history.push("/")
          }}
        >
          Logout
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username
  }
}

export default withRouter(connect(mapStateToProps)(Home))
