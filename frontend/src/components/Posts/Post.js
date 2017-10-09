import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AllComments from '../Comments/AllComments'
import { getPost, votePost } from '../../actions'
import Vote from '../Vote/Vote'

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId)
  }

  render() {
    const { post } = this.props

    return (
      <div key={post.id} className="post">
        <Vote handleVote={this.props.votePost} id={post.id} score={post.voteScore} />
        <h1>{post.title}</h1>
        <h6><Link to={`/${post.category}`}>{post.category}</Link></h6>
        <h6><Link to={`/${post.category}/${post.id}/edit`}>Edit</Link></h6>
        <p>{post.body}</p>
        <span>{post.id}</span>
        <div>
          <h3>Comments</h3>
          <AllComments postId={post.id} />
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
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
