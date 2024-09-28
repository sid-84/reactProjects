// src/components/PersonDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';

import '../styles/PersonDetail.css'; // Component-specific styles

const API_URL = process.env.REACT_APP_API_URL;

const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setPerson(response.data);
      } catch (error) {
        console.error('Error fetching person:', error);
      }
    };
    fetchPerson();
  }, [id]);

  const deletePerson = async () => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotification({ type: 'success', text: 'Person deleted successfully!' });
      setTimeout(() => {
        setNotification('');
        navigate('/'); // Navigate back to home after deletion
      }, 3000);
    } catch (error) {
      console.error('Error deleting person:', error);
      setNotification({ type: 'error', text: 'Error deleting person.' });
      setTimeout(() => setNotification(''), 3000);
    }
  };

  if (!person) return <div className="box-container">Loading...</div>;

  return (
    <div className="box-container">
      <h1>{person.name}</h1>
      <div className="person-info">
        <p>Age: {person.age}</p>
      </div>
      <div className="person-actions">
        <Link to={`/person/${person.id}/edit`} className="btn btn-update">Edit</Link>
        <button onClick={deletePerson} className="btn btn-delete">Delete</button>
        <Link to="/" className="btn btn-back">Back to Home</Link>
      </div>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}
    </div>
  );
};

export default PersonDetail;
