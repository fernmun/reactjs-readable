import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { getAllCategories, getPost, editPost } from '../../actions'

class EditPost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
    this.props.getCategories()
  }

  render() {
    return(
      <PostForm
        edit={true}
        initialValues={this.props.post}
        action={this.props.editPost}
        categories={this.props.categories} />
    )
  }
}

function mapStateToProps ({ categories, post }) {
  return {
    categories: categories,
    post: post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(getAllCategories()),
    editPost: (id, post) => {dispatch(editPost(id, post))},
    getPost: (id) => {dispatch(getPost(id))},
  }
}

EditPost.propTypes = {
  categories: PropTypes.array,
  post: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
