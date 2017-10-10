const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const handleErrors = (res) => {
  if (res.error) {
    throw Error(res.error)
  }

  return res
}

const token = 'readable-api'

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Categories
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(handleErrors)
    .then(res => res.json())

// Posts
export const getAllPosts = (category=null) => {
  const url = category ? `${api}/${category}` : api

  return fetch(`${url}/posts`, { headers })
    .then(handleErrors)
    .then(res => res.json())
}

export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(handleErrors)
    .then(res => res.json())

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(handleErrors)
    .then(res => res.json())

export const editPost = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(handleErrors)
    .then(res => res.json())

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, { method: 'DELETE', headers })
    .then(handleErrors)
    .then(res => res.json())

// Comments
export const getAllComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(handleErrors)
    .then(res => res.json())

export const addComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
    .then(handleErrors)
    .then(res => res.json())

export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(handleErrors)
    .then(res => res.json())

export const editComment = (id, comment) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
    .then(handleErrors)
    .then(res => res.json())

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, { method: 'DELETE', headers })
    .then(handleErrors)
    .then(res => res.json())

// Voting
export const votePost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(handleErrors)
    .then(res => res.json())

export const voteComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(handleErrors)
    .then(res => res.json())
