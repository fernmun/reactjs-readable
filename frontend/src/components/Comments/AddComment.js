import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import { addComment } from '../../actions'

class AddComment extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return(
      <PostForm action={this.props.addComment} />
    )
  }
}

function mapStateToProps (state) {
  const { comments } = state

  return {
    comments: comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (data) => {dispatch(addComment(data))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment)
