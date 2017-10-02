import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPost from './Posts/AddPost'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/create/post' component={AddPost} />
      </Switch>
    )
  }
}

export default App;
