import React, { Component } from "react"
import ListItem from "./components/ListItem"
import { getProducts } from "./products"

export default class TableList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const products = getProducts()
    this.setState({
      products
    })
  }

  renderProducts = () =>
    this.state.products.map((item) => {
      return <ListItem key={item.id} product={item} />
    })

  render() {
    return <div>{this.renderProducts()}</div>
  }
}
