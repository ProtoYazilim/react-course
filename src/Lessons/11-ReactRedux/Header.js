import React, { Component } from "react"
import { connect } from "react-redux"

class Header extends Component {
  render() {
    return (
      <div>
        <div>Header</div>
        <h3>{this.props.applicationName}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  applicationName: state.app.application_name
})

export default connect(mapStateToProps)(Header)
