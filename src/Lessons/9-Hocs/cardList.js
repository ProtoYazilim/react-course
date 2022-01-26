import React, { Component } from "react"
import Card from "./components/Card"
import { getProducts } from "./products"

export default class CardList extends Component {
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
      return <Card key={item.id} product={item} />
    })

  render() {
    return <div>{this.renderProducts()}</div>
  }
}
