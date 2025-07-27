import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Error parsing user from localStorage", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setShowLogout(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowLogout(false);
    }, 3000); // Show for 3 seconds
    setTimeoutId(id);
  };

  const handleUsernameClick = () => {
    navigate('/profile');
  };

  return (
    <div>
      {/* Logout Dropdown - now FIXED */}
      {user && (
        <div
          className="fixed right-20 top-[61px] z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`transition-all duration-500 ease-in-out ${
              showLogout ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold border border-white backdrop-blur-md"
            >
              🔓 Logout
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white shadow-md py-3 px-6 fixed top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Brand */}
          <Link to="/" className="text-3xl font-bold text-blue-600 tracking-tight">
            SkillServe
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-base font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Username */}
          {user && (
            <div
              className="cursor-pointer relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleUsernameClick}
            >
              <span className="text-gray-800 font-semibold hover:text-blue-600 transition">
                {user.name}
              </span>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
