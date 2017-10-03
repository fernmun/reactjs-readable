import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts } from '../../actions'
import ListPosts from './ListPosts'

class AllPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts(this.props.match.params.category)
  }

  render() {
    return(
      <ListPosts posts={this.props.posts} />
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllPosts: (category) => dispatch(getAllPosts(category)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts)
