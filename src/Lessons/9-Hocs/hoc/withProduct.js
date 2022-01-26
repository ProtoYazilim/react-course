import React from "react"

export function withProduct(WrappedComponent, getProducts) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        products: []
      }
    }

    componentDidMount() {
      const products = getProducts()
      this.setState({
        products: products
      })
    }

    renderProducts = () =>
      this.state.products.map((item) => {
        return <WrappedComponent key={item.id} product={item} {...this.props} />
      })

    render() {
      return <div>{this.renderProducts()}</div>
    }
  }
}
