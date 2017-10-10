import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vote from '../Vote/Vote'
import CommentForm from './CommentForm'
import {
  addComment,
  editComment,
  getAllComments,
  setEditableComment,
  voteComment
} from '../../actions'
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
        <a href="javascript:void(0)" onClick={() => this.props.setEditableComment(comment.id)}>Edit</a>
      </div>
    )
  }

  render() {
    const comments = sortList(BY_SCORE, this.props.comments)
    const editableComment = this.props.editableComment

    return(
      <div>
        <div>
          <h4>Add Comment</h4>
          <CommentForm action={this.props.addComment} postId={this.props.postId} />
        </div>
        <div>
        <h3>Comments</h3>
          {comments.map((comment) => {
              if (editableComment === comment.id) {
                return (
                  <div>
                    <h4>{comment.author}</h4>
                    <CommentForm
                    edit={true}
                    action={this.props.editComment}
                    key={comment.id}
                    form={comment.id}
                    initialValues={comment}
                    />
                  </div>
                )
              }
              return this.renderComment(comment)
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    comments: state.comments.comments,
    editableComment: state.comments.editableComment
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (id, comment) => dispatch(editComment(id, comment)),
    getAllComments: (id) => dispatch(getAllComments(id)),
    setEditableComment: (id) => dispatch(setEditableComment(id)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
