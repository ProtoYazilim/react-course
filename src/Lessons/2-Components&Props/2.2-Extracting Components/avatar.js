import React, { Component } from "react"
import "./styles.css"

export default class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReadyForRender: false
    }
  }

  componentDidMount() {
    //Not best practice, is simulated API
    setTimeout(() => {
      this.setState({
        isReadyForRender: true
      })
    }, 2000)
  }

  render() {
    const { avatar, first_name } = this.props.user
    const { isReadyForRender } = this.state
    return (
      <div className="user-avatar">
        {isReadyForRender ? (
          <img src={avatar} alt={first_name} />
        ) : (
          "Loading..."
        )}
      </div>
    )
  }
}
