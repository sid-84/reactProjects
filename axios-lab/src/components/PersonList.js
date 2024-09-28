import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setPersons(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching persons:', err);
        alert('Failed to fetch persons. Please try again.');
      });
  };

  const removePerson = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        fetchPersons();
      })
      .catch(err => {
        console.error('Error removing person:', err);
        alert('Failed to remove person. Please try again.');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="person-list">
      <h2>Person List</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id} className="person-item">
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
