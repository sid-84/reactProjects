import React, { useState } from 'react';
import axios from 'axios';

const PersonAdd = () => {
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { name };

    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(res => {
        setSuccessMessage(`New person added: ${res.data.name}`);
        setTimeout(() => setSuccessMessage(''), 3000);
        setName('');
      })
      .catch(err => {
        console.error('Error adding person:', err);
        setSuccessMessage('Failed to add person. Please try again.');
        setTimeout(() => setSuccessMessage(''), 3000);
      });
  };

  return (
    <div className="person-add">
      <h2>Add New Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter person name"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-2">Add Person</button>
      </form>
      {successMessage && (
        <div className="alert alert-success mt-2">{successMessage}</div>
      )}
    </div>
  );
};

export default PersonAdd;
