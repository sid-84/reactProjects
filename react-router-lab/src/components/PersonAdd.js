import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const PersonAdd = ({ onPersonAdded = () => {} }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !age) return;

    try {
      const response = await axios.post(API_URL, { name, age });
      const newPersonId = response.data.id; // Assuming the API returns the ID of the newly added person
      onPersonAdded(response.data);

      // Clear form fields
      setName('');
      setAge('');

      // Show success message
      alert(`Person "${response.data.name}" added successfully!`);

      // Navigate to the new person's detail page
      navigate(`/person/${newPersonId}`);
    } catch (error) {
      console.error('Error adding person:', error);
      alert('Failed to add person. Please try again.');
    }
  };

  return (
    <div className="box-container">
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="input-field"
        />
        <div className="button-group">
          <button type="submit" className="btn btn-add">Add Person</button>
          <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PersonAdd;
