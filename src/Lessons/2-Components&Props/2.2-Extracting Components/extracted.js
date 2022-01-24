import React, { Component } from "react"
import { COMMENT_LIST } from "../../../mock"
import Avatar from "./avatar"
import "./styles.css"

function User({ user }) {
  return (
    <div className="user">
      <Avatar user={user} />
      <div className="user-info">
        <p>{`${user.last_name}, ${user.first_name}`}</p>
        <span>{user.email}</span>
      </div>
    </div>
  )
}

function Comment({ comment }) {
  return (
    <div className="comment">
      <span>{comment.date}</span>
      <p>{comment.body}</p>
    </div>
  )
}

function CommentPanel({ item }) {
  return (
    <div className="comment-wrapper" key={item.id}>
      <User user={item.user} />
      <Comment comment={item.comment} />
    </div>
  )
}

export default class ExtractingComponents extends Component {
  renderComments = (item) => <CommentPanel item={item} />

  render() {
    return (
      <div className="container">
        <h2>Comments (Extracted)</h2>
        {COMMENT_LIST.map(this.renderComments)}
      </div>
    )
  }
}
