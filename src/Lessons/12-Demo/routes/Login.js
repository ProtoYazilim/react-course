import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { login } from "../redux/actions/auth.action"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLogin !== this.props.isLogin) {
      if (this.props.isLogin) {
        this.navigateHomePage()
      }
    }
  }

  navigateHomePage = () => {
    this.props.history.push("/home")
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "200px",
          justifyContent: "space-evenly"
        }}
      >
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => {
              this.setState({
                username: e.target.value
              })
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => {
              this.setState({
                password: e.target.value
              })
            }}
          />
        </label>
        <button
          onClick={() => {
            login(this.state.username, this.state.password)
          }}
          style={{
            width: 100
          }}
        >
          Login
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin
  }
}

export default withRouter(connect(mapStateToProps)(Login))
