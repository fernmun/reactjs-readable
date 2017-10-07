import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vote from '../Vote/Vote'
import { getAllPosts, votePost, sortPosts , orderType} from '../../actions'
import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import { BY_DATE, BY_SCORE } from '../../const/orderTypes'
import { sortList } from '../../utils'

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
    const posts = sortList(this.props.orderType, this.props.posts)

    if (posts.length === 0)
      return (
        `There are no posts to be shown! :(`
      )

    return(
      <div>
        <FormGroup>
          <ControlLabel>Sort By</ControlLabel>
          <FormControl componentClass="select" onChange={(e) => {
              this.props.sortPosts(e.target.value, this.props.posts)
            }}>
            <option value={BY_DATE}>
              Newest
            </option>
            <option value={BY_SCORE}>
              Best
            </option>
          </FormControl>
        </FormGroup>
        {posts.map(post => this.renderPost(post))}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    orderType: state.orderType
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllPosts: (category) => dispatch(getAllPosts(category)),
    votePost: (id, vote) => dispatch(votePost(id, vote)),
    sortPosts: (type, posts) => dispatch(sortPosts(type, posts))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts)
