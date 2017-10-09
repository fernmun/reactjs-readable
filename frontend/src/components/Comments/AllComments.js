import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vote from '../Vote/Vote'
import { getAllComments, voteComment } from '../../actions'
import { sortList } from '../../utils'
import { BY_SCORE } from '../../const/orderTypes'

class AllComments extends Component {
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
        {comments.map((comment) => this.renderComment(comment))}
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
    getAllComments: (id) => dispatch(getAllComments(id)),
    voteComment: (id, vote) => dispatch(voteComment(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComments)
