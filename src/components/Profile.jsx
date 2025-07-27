import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // ⬅️ stored after login

      try {
        const res = await axios.get('http://localhost:5000/auth/profile', {
          headers: {
            Authorization: token, // 🔐 include token
          },
        });

        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading profile...</div>;
  }

  if (!user) {
    return <div className="text-center text-red-600">Failed to load profile</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-xl p-6 rounded-xl max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">👤 User Profile</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
