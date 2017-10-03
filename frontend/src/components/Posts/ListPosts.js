import React from 'react'

const ListPosts = ({ posts }) => {
  const keys = Object.keys(posts)

  const renderPost = (post) => {
    console.log(post)
    return (
      <div key={post.id} className="post">
        <h1>{post.title}</h1>
        <h6>Category: {post.category}</h6>
        <p>{post.body}</p>
      </div>
    )
  }

  return (
    <div>
      {keys.map(key => (renderPost(posts[key])))}
    </div>
  )
}

export default ListPosts
