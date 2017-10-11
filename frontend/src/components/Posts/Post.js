import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Comments from '../Comments/Comments'
import TimeAgo from 'react-timeago'
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

    if (post.error)
      return (
        `There is no post to be shown! :(`
      )

    return (
      <div key={post.id} className="post">
        <Vote handleVote={this.props.votePost} id={post.id} score={post.voteScore} />
        <h1>{post.title}</h1>
        <small>
          Created by <b>{post.author}</b> <TimeAgo date={post.timestamp} /> -
          <Link to={`/${post.category}`}> {post.category} </Link>
        </small>
        <div className="pull-right">
          <Link to={`/${post.category}/${post.id}/edit`}>Edit</Link>
          <a onClick={() => this.handleDeletePost(post.id)}> Delete </a>
        </div>
        <hr />
        <p className="lead">{post.body}</p>
        <hr />
        <div id="comments">
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
