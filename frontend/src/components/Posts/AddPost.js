import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddPostForm from './AddPostForm'
import { getAllCategories, addPost } from '../../actions'

class AddPost extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    return(
      <AddPostForm
        action={this.props.addPost}
        categories={this.props.categories} />
    )
  }
}

function mapStateToProps (state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(getAllCategories()),
    addPost: (data) => {dispatch(addPost({...data, category: 'redux'}))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost)
