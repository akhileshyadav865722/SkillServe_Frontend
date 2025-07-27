import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Slider = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Error parsing user", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Round Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-5 z-100 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col gap-4 text-base font-medium">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">SkillServe</h2>
          <Link to="/" onClick={toggleSidebar} className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/services" onClick={toggleSidebar} className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/about" onClick={toggleSidebar} className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" onClick={toggleSidebar} className="text-gray-700 hover:text-blue-600">Contact</Link>

          <hr className="my-2" />

          {user ? (
            <>
              <span className="text-gray-800 font-semibold"> {user.name}</span>
              <button
                onClick={() => {
                  handleLogout();
                  toggleSidebar();
                }}
                className="px-4 py-1.5 text-red-600 border border-red-600 rounded-xl hover:bg-red-600 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleSidebar} className="px-4 py-1.5 text-blue-600 border border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white">
                Login
              </Link>
              <Link to="/register" onClick={toggleSidebar} className="px-4 py-1.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30 z-30"
        />
      )}
    </>
  );
};

export default Slider;
