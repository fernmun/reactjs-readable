import React from 'react'
import { Link } from 'react-router-dom'

const ListPosts = ({ posts }) => {
  const keys = Object.keys(posts)

  const renderPost = (post) => {
    return (
      <div key={post.id} className="post">
        <h1><Link className="title" to={`/${post.category}/${post.id}`}>{post.title}</Link></h1>
        <h6><Link to={`/${post.category}/${post.id}/edit`}>Edit</Link></h6>
        <h6><Link to={`/${post.category}`}>{post.category}</Link></h6>
        <p>{post.body}</p>
        <span>{post.id}</span>
      </div>
    )
  }

  if (keys.length === 0)
    return (
      `There are no posts to be shown! :(`
    )

  return (
    <div>
      {keys.map(key => (renderPost(posts[key])))}
    </div>
  )
}

export default ListPosts
