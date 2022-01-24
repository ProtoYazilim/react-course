import React, { Component } from "react"
import { COMMENT_LIST } from "../../../mock"
import "./styles.css"

export default class ExtractingComponents extends Component {
  render() {
    return (
      <div className="container">
        <h2>Comments</h2>
        {COMMENT_LIST.map((item, index) => {
          return (
            <div className="comment-wrapper" key={item.id}>
              <div className="user">
                <div className="user-avatar">
                  <img src={item.user.avatar} alt={item.user.first_name} />
                </div>
                <div className="user-info">
                  <p>{`${item.user.last_name}, ${item.user.first_name}`}</p>
                  <span>{item.user.email}</span>
                </div>
              </div>
              <div className="comment">
                <span>{item.comment.date}</span>
                <p>{item.comment.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
