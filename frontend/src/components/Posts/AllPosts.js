import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentIcon from 'react-icons/lib/io/chatbox-working'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import Vote from '../Vote/Vote'
import {
  getAllPosts,
  deletePost,
  votePost,
  sortPosts,
  getAllCategories
} from '../../actions'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap'
import { BY_DATE, BY_SCORE } from '../../const/orderTypes'
import { sortList } from '../../utils'

class AllPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts(this.props.match.params.category)
    this.props.getCategories()
  }

  renderPost(post) {
    return (
      <div key={post.id} className="post">
        <Jumbotron>
          <Row>
            <Col xs={2}>
              <Vote handleVote={this.props.votePost} id={post.id} score={post.voteScore} />
            </Col>
            <Col xs={10}>
              <h2>
                <Link className="title" to={`/${post.category}/${post.id}`}>{post.title}</Link>
              </h2>
              <small>
                Created by <b>{post.author}</b> <TimeAgo date={post.timestamp} /> -
                <Link to={`/${post.category}`}> {post.category} </Link>
              </small>
              <p>{post.body}</p>
              <small>
                <Link className="title" to={`/${post.category}/${post.id}#comments`}>
                  <CommentIcon /> {post.comments} Comments
                </Link>
              </small>
              <div className="pull-right">
                <Link className="btn btn-info" to={`/${post.category}/${post.id}/edit`}> Edit </Link>
                <a className="btn btn-danger" onClick={() => this.props.deletePost(post.id)}> Delete </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
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
      <Row>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} md={2}>
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
            </Col>
          </Row>
          {posts.map(post => this.renderPost(post))}
        </Col>
        <Col xs={12} md={4}>
          <h2 className="text-center">Categories</h2>
          <table className="table table-striped">
            <tbody>
            {this.props.categories.map(category => {
              return (
                <tr key={category.path}><td>
                  <Link
                    className="text-center text-uppercase"
                    to={`/${category.path}`}>{category.name}
                  </Link>
                </td></tr>
              )
            })}
            </tbody>
          </table>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    orderType: state.orderType,
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllPosts: (category) => dispatch(getAllPosts(category)),
    deletePost: (id) => dispatch(deletePost(id)),
    getCategories: () => dispatch(getAllCategories()),
    votePost: (id, vote) => dispatch(votePost(id, vote)),
    sortPosts: (type, posts) => dispatch(sortPosts(type, posts))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts)
