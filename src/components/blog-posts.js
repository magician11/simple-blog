import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Link className="btn btn-primary pull-right" to="/posts/new">Add Post</Link>
        <h4>list of posts</h4>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
