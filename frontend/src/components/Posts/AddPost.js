import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { getAllCategories, addPost } from '../../actions'

class AddPost extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return(
      <PostForm
        action={this.props.addPost}
        categories={this.props.categories} />
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(getAllCategories()),
    addPost: (data) => {dispatch(addPost(data))}
  }
}

AddPost.propTypes = {
  categories: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost)
