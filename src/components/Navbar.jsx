import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-3xl font-bold text-blue-600 tracking-tight">
          SkillServe
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-base font-medium">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-1.5 text-blue-600 font-semibold border border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
