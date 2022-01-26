import React from "react"
import PropTypes from "prop-types"

function Card({ product, price }) {
  return (
    <div>
      <h3>{product}</h3>
      <span>Price: {price}</span>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number
}

Card.defaultProps = {
  product: "Table"
}

export default Card
