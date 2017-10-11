import './App.css'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPost from './Posts/AddPost'
import EditPost from './Posts/EditPost'
import AllPosts from './Posts/AllPosts'
import Post from './Posts/Post'
import {
  Grid,
  Nav,
  Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppIcon from 'react-icons/lib/io/chatbox-working'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Readable <AppIcon /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <Navbar.Brand>
                <Link to="/create/post">+ Add New Post</Link>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Switch>
            <Route exact path='/' component={AllPosts} />
            <Route exact path='/create/post' component={AddPost} />
            <Route exact key='category' path='/:category' component={AllPosts} />
            <Route exact key='postId' path='/:category/:postId/edit' component={EditPost} />
            <Route exact key='postId' path='/:category/:postId' component={Post} />
          </Switch>
        </Grid>
      </div>
    )
  }
}

export default App;
