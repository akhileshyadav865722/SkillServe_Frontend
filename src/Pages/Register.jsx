import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 👈 Hook to navigate

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.msg || 'Registration failed');
        return;
      }

      // Save JWT token to localStorage
      localStorage.setItem('token', data.token);
      alert('Registration successful!');

      // ✅ Clear form fields
      setName('');
      setEmail('');
      setPassword('');

      // ✅ Navigate to login
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Register for SkillServe</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <a href="/login" className="text-green-600 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
