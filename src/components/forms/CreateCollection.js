import React from 'react';
import './Forms.css';

const CreateCollection = () => {
  return (
    <div className="forms">
      <h1>New Collection</h1>
      <p className="lead">
        <i className="fas fa-film" /> Create a new collection for your films
      </p>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Title" name="title" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Description" name="description" />
        </div>
        <input type="submit" className="btn" value="Create Collection" />
      </form>
    </div>
  );
};

export default CreateCollection;
