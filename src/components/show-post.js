import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class ShowPost extends Component {
  static contextTypes = {
    router: () => { return PropTypes.func.isRequired }
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  handleDeleteClick() {
    this.props.deletePost(this.props.params.id)
    .then(() => {
      this.context.router.push('/');      
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <h2>Loading...</h2>;
    }


    return (
      <div>
      <Link to="/">Back to index</Link>
      <button
      className="btn btn-danger pull-right"
      onClick={this.handleDeleteClick.bind(this)}
      >
      Delete Post
      </button>
      <h2>{ this.props.post.title }</h2>
      <h5>Categories: { this.props.post.categories }</h5>
      <p>{ this.props.post.content }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.currentPost };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);
