import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCollectionById, updateCollection } from '../../actions/collections';
import PropTypes from 'prop-types';
import './Forms.css';

const EditCollection = ({
  getCollectionById,
  updateCollection,
  collections: { collection, loading },
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    getCollectionById(match.params.id);

    if (collection !== null) {
      setFormData({
        title: loading || !collection.title ? '' : collection.title,
        description:
          loading || !collection.description ? '' : collection.description
      });
    }
  }, [loading, getCollectionById, match.params.id, collection]);

  const { title, description } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateCollection(match.params.id, formData, history);
  };

  return (
    <div className="forms" onSubmit={e => handleSubmit(e)}>
      <h1>Edit Collection</h1>
      <p className="lead">
        <i className="fas fa-edit" /> Edit your collection details
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            required
            value={title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={e => handleChange(e)}
          />
        </div>
        <input type="submit" className="btn" value="Save Collection" />
      </form>
    </div>
  );
};

EditCollection.propTypes = {
  getCollectionById: PropTypes.func.isRequired,
  updateCollection: PropTypes.func.isRequired,
  collections: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  collections: state.collections
});

export default connect(mapStateToProps, {
  getCollectionById,
  updateCollection
})(withRouter(EditCollection));
