import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPost from './Posts/AddPost'
import AllPosts from './Posts/AllPosts'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={AllPosts} />
        <Route key='category' path='/:category' component={AllPosts} />
        <Route path='/create/post' component={AddPost} />
      </Switch>
    )
  }
}

export default App;
