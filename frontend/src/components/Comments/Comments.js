import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vote from '../Vote/Vote'
import CommentForm from './CommentForm'
import {
  addComment,
  editComment,
  deleteComment,
  getAllComments,
  setEditableComment,
  voteComment
} from '../../actions'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap'
import { sortList } from '../../utils'
import { BY_SCORE } from '../../const/orderTypes'

class Comments extends Component {
  componentDidMount() {
    this.props.getAllComments(this.props.postId)
  }

  renderComment(comment) {
    return (
      <div key={comment.id}>
        <Row>
          <Col xs={2}>
            <Vote id={comment.id} score={comment.voteScore} handleVote={this.props.voteComment} />
          </Col>
          <Col xs={10}>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <a href="javascript:void(0)" onClick={() => this.props.setEditableComment(comment.id)}> Edit </a>
            <a href="javascript:void(0)" onClick={() => this.props.deleteComment(comment.id)}> Delete </a>
          </Col>
        </Row>
        <hr />
      </div>
    )
  }

  render() {
    const comments = sortList(BY_SCORE, this.props.comments)
    const editableComment = this.props.editableComment

    return(
      <div>
        <Row>
          <h4>Add Comment</h4>
          <Col xs={6}>
            <CommentForm action={this.props.addComment} postId={this.props.postId} />
          </Col>
        </Row>
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
                  <hr />
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
    deleteComment: (id) => dispatch(deleteComment(id)),
    getAllComments: (id) => dispatch(getAllComments(id)),
    setEditableComment: (id) => dispatch(setEditableComment(id)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
