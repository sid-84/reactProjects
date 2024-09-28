import React, { useState } from 'react';
import axios from 'axios';

const PersonRemove = () => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        alert(`Person with ID ${id} has been removed.`);
        setId('');
      })
      .catch(err => {
        console.error('Error removing person:', err);
        alert('Failed to remove person. Please try again.');
      });
  };

  return (
    <div>
      <h2>Remove Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={id}
          onChange={handleChange}
          placeholder="Enter person ID"
        />
        <button type="submit">Remove Person</button>
      </form>
    </div>
  );
};

export default PersonRemove;
