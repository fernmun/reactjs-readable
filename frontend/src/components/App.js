import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPost from './Posts/AddPost'
import EditPost from './Posts/EditPost'
import AllPosts from './Posts/AllPosts'
import Post from './Posts/Post'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={AllPosts} />
        <Route exact path='/create/post' component={AddPost} />
        <Route exact key='postId' path='/:category/:postId/edit' component={Post} />
        <Route exact key='category' path='/:category' component={AllPosts} />
        <Route exact key='postId' path='/:category/:postId' component={Post} />
        <Route exact key='postId' path='/:category/:postId' component={Post} />
      </Switch>
    )
  }
}

export default App;
