import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';

class CreatePost extends Component {
  checkValidation(field) {
    return `form-group ${(field.touched && field.invalid) ? 'has-error' : ''}`;
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <div className={this.checkValidation(title)}>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" {...title} />
          <div className="help-block">{ (title.touched && title.error) ? title.error : '' }</div>
        </div>
        <div className={this.checkValidation(categories)}>
          <label htmlFor="categories">Categories</label>
          <input type="text" className="form-control" id="categories" {...categories} />
          <div className="help-block">
            { (categories.touched && categories.error) ? categories.error : '' }
          </div>
        </div>
        <div className={this.checkValidation(content)}>
          <label htmlFor="content">Content</label>
          <textarea className="form-control" rows="11" id="content" {...content} ></textarea>
          <div className="help-block">
            { (content.touched && content.error) ? content.error : '' }
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="fa fa-paper-plane"></i> Submit
        </button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

CreatePost.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  createPost: PropTypes.func,
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Please enter categories';
  }
  if (!values.content) {
    errors.content = 'Please enter content bitchassnigga';
  }

  return errors;
}
export default reduxForm({
  form: 'CreatePost',
  fields: ['title', 'categories', 'content'],
  validate }, null, { createPost })(CreatePost);
