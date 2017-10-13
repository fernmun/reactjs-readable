import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Vote from '../Vote/Vote'
import CommentForm from './CommentForm'
import * as actions from '../../actions'
import {
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
            <a onClick={() => this.props.setEditableComment(comment.id)}> Edit </a>
            <a onClick={() => this.props.deleteComment(comment.id)}> Delete </a>
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
            <CommentForm
              action={this.props.addComment}
              postId={this.props.postId}
              key={this.props.postId}
              form={this.props.postId}
            />
          </Col>
        </Row>
        <div>
        <h3>Comments</h3>
          {comments && comments.map((comment) => {
              if (editableComment === comment.id) {
                return (
                  <div key={comment.id}>
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

function mapStateToProps ({ comments }) {
  return {
    comments: comments.comments,
    editableComment: comments.editableComment
  }
}

Comments.propTypes = {
  postId: PropTypes.string,
  comments: PropTypes.array,
  editableComment: PropTypes.string
}

export default connect(
  mapStateToProps,
  actions
)(Comments)
