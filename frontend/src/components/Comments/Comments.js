import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vote from '../Vote/Vote'
import CommentForm from './CommentForm'
import { addComment, getAllComments, voteComment } from '../../actions'
import { sortList } from '../../utils'
import { BY_SCORE } from '../../const/orderTypes'

class Comments extends Component {
  componentDidMount() {
    this.props.getAllComments(this.props.postId)
  }

  renderComment(comment) {
    return (
      <div key={comment.id}>
        <Vote id={comment.id} score={comment.voteScore} handleVote={this.props.voteComment} />
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
      </div>
    )
  }

  render() {
    const comments = sortList(BY_SCORE, this.props.comments)

    return(
      <div>
        <div>
          <h4>Add Comment</h4>
          <CommentForm action={this.props.addComment} postId={this.props.postId} />
        </div>
        <div>
        <h3>Comments</h3>
          {comments.map((comment) => this.renderComment(comment))}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    comments: state.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    getAllComments: (id) => dispatch(getAllComments(id)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
