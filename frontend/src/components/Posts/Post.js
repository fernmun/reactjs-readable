import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Comments from '../Comments/Comments'
import { getPost, deletePost, votePost } from '../../actions'
import Vote from '../Vote/Vote'

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
  }

  handleDeletePost(id) {
    this.props.deletePost(id)
    this.props.history.push('/')
  }

  render() {
    const { post } = this.props

    return (
      <div key={post.id} className="post">
        <Vote handleVote={this.props.votePost} id={post.id} score={post.voteScore} />
        <h1>{post.title}</h1>
        <h6><Link to={`/${post.category}/${post.id}/edit`}>Edit</Link></h6>
        <h6><a href="javascript:void(0)" onClick={() => this.handleDeletePost(post.id)}> Delete </a></h6>
        <h6><Link to={`/${post.category}`}>{post.category}</Link></h6>
        <p>{post.body}</p>
        <span>{post.id}</span>
        <div>
          <Comments postId={post.id} />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    post: state.post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: (id) => dispatch(getPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
