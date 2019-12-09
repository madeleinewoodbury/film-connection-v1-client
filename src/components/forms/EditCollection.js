import React from 'react';
import './Forms.css';

const EditCollection = () => {
  return (
    <div className="forms">
      <h1>Edit Collection</h1>
      <p className="lead">
        <i className="fas fa-pen-square" /> Edit your collection details
      </p>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Title" name="title" required value="Cool Movies" />
        </div>
        <div className="form-group">
          <textarea placeholder="Description" name="description" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestiae quod eligendi recusandae libero temporibus!" />
        </div>
        <input type="submit" className="btn" value="Save Collection" />
      </form>
    </div>
  );
};

export default EditCollection; 
