import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vote from '../Vote/Vote'
import { sortList } from '../../utils'

class AllComments extends Component {
  renderComment(comment) {
    return (
      <div key={comment.id}>
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
      </div>
    )
  }

  render() {
    const { comments } = this.props

    return(
      <div>
        {comments.map((comment) => this.renderComment(comment))}
      </div>
    )
  }
}

export default AllComments
