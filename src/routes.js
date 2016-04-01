import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import BlogPosts from './components/blog-posts';
import CreatePost from './components/create-post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlogPosts} />
    <Route path="/posts/new" component={CreatePost} />
  </Route>
);
