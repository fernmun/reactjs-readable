import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vote from '../Vote/Vote'
import { getAllPosts, votePost } from '../../actions'

class AllPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts(this.props.match.params.category)
  }

  renderPost(post) {
    return (
      <div key={post.id} className="post">
        <Vote handleVote={this.props.votePost} id={post.id} score={post.voteScore} />
        <h1><Link className="title" to={`/${post.category}/${post.id}`}>{post.title}</Link></h1>
        <h6><Link to={`/${post.category}/${post.id}/edit`}>Edit</Link></h6>
        <h6><Link to={`/${post.category}`}>{post.category}</Link></h6>
        <p>{post.body}</p>
        <span>{post.id}</span>
      </div>
    )
  }

  render() {
    if (this.props.posts.length === 0)
      return (
        `There are no posts to be shown! :(`
      )

    return(
      <div>
        {this.props.posts.map(post => this.renderPost(post))}
      </div>
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
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts)
