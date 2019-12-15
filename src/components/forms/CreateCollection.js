import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCollection } from '../../actions/collections';
import PropTypes from 'prop-types';
import './Forms.css';

const CreateCollection = ({ createCollection, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const { title, description } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createCollection(formData, history);
  };

  return (
    <div className="forms" onSubmit={e => handleSubmit(e)}>
      <h1>New Collection</h1>
      <p className="lead">
        <i className="fas fa-film" /> Create a new collection for your films
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn" value="Create Collection" />
      </form>
    </div>
  );
};

CreateCollection.propTypes = {
  createCollection: PropTypes.func.isRequired,
  collections: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  collections: state.collections
});

export default connect(mapStateToProps, { createCollection })(
  withRouter(CreateCollection)
);
