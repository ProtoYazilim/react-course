import React from "react"
import "../style.css"
export default function ListItem({ product }) {
  return (
    <table className="list-item">
      <tbody>
        <tr>
          <td>
            <h4>{product.name}</h4>
          </td>
          <td>
            <span>Quantity: {product.quantity}</span>
          </td>
          <td>
            <span>Price: {product.price}</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
