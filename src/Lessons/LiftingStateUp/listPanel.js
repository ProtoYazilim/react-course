import React from "react"

export default function ListPanel(props) {
  return (
    <div className="list-panel ">
      <h3>ListPanel</h3>
      {props.categories &&
        props.categories.map((item, index) => {
          return (
            <div key={index}>
              <p>{`${index + 1}- ${item}`}</p>
            </div>
          )
        })}
    </div>
  )
}
