// src/components/Notification.js

import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className={`notification ${message.type}`}>
      {message.text}
      <button onClick={onClose} className="btn btn-cancel">Close</button>
    </div>
  );
};

export default Notification;
