import React from "react"
import "../style.css"
export default function Card({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <span>Quantity: {product.quantity}</span>
      <span>Price: {product.price}</span>
    </div>
  )
}
