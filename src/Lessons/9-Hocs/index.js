import React, { Component } from "react"
import CardList from "./cardList"
import TableList from "./tableList"
import "./style.css"
// import { CardWithProduct } from "./hoc"
// import { ListWithProduct } from "./hoc"

export default class Hocs extends Component {
  render() {
    return (
      <div className="hoc">
        <CardList />
        <TableList />
        {/* <CardWithProduct />
        <ListWithProduct /> */}
      </div>
    )
  }
}
