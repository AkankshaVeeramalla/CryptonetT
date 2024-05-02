import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Make sure to import the CSS

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="profile-card">
      {user && (
        <div className="profile-container">
          <div className="profile-image">
            <img src={user.picture.large} alt="User" />
          </div>
          <div className="profile-details">
            <p><strong>FirstName:</strong> {user.name.first}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>LastName:</strong> {user.name.last}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Phone Number:</strong> {user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
