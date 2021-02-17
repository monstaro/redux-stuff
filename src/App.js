import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { PostsList } from './features/posts/PostList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePost } from './features/posts/SinglePost';
import { EditPost } from './features/posts/EditPost';
import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
              <AddPostForm />
              <PostsList />
              </>
            )}
          />
          <Route exact path="/editPost/:postId" component={EditPost} />
          <Route exact path="/posts/:postId" component={SinglePost} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
