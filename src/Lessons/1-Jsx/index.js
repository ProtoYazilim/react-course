import React, { Component } from "react"
import "../../App.css"

const name = "Ali"
const isRender = true
const isLogin = true

class Jsx extends Component {
  greetingUser(username) {
    return "Hello " + username
  }

  renderTitle() {
    return <h1 className="title">Welcome to Page</h1>
  }

  renderTitleWithCreateElement() {
    return React.createElement("div", {
      className: "title",
      children: React.createElement("h1", {
        children: "Welcome to Page 3"
      })
    })
  }

  renderTitleWithControl(showName) {
    if (showName) {
      return <h1>Welcome to Page 2</h1>
    }
  }

  render() {
    let buttonText

    if (isLogin) {
      buttonText = <h3>Logout</h3>
    } else {
      buttonText = <h3>Login</h3>
    }

    return (
      <div className="container">
        <p>{name}</p>
        <p>{2 + 2}</p>
        <p>2 + 2</p>
        {this.greetingUser(name)}
        <p>{this.greetingUser(name)}</p>
        {this.renderTitle()}
        {this.renderTitleWithControl(isRender)}
        {isRender ? <h1>True</h1> : <h1>False</h1>}
        {isRender && <h1>True 2</h1>}
        <button>{buttonText}</button>
        <div tabIndex={2}>camel case</div>
        {this.renderTitleWithCreateElement()}
      </div>
    )
  }
}

export default Jsx
