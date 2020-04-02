import React from 'react';
import Home from './Home'
import UsersList from './UsersList'
import PostsList from './PostsList'
import UserShow from './UserShow'
import PostShow from './PostShow'

import {BrowserRouter, Route, Link} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/">Home</Link> | &nbsp;
      <Link to="/users">Users</Link> | &nbsp;
      <Link to="/posts">Posts</Link>

      <Route path="/" component={Home} exact={true} />
      <Route path="/users" component={UsersList} exact ={true} />
      <Route path="/posts" component={PostsList} exact={true}/>
      <Route path="/users/:id" component={UserShow} />
      <Route path="/posts/:id" component={PostShow} />

    </div>
    </BrowserRouter>
  );
}

export default App;
