import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-500">MediEase</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center flex-1 space-x-10">
          <Link to="/" className="text-white hover:text-purple-400 font-medium transition">Home</Link>
          <Link to="/about" className="text-white hover:text-purple-400 font-medium transition">About</Link>
          <Link to="/services" className="text-white hover:text-purple-400 font-medium transition">Services</Link>
          <Link to="/contact" className="text-white hover:text-purple-400 font-medium transition">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 bg-purple-500 text-black rounded-md hover:bg-purple-300 transition">Login</button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-purple-500 text-black rounded-md hover:bg-purple-300 transition">Sign Up</button>
          </Link>
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-lg px-4 pt-4 pb-6 space-y-4">
          <Link to="/" onClick={toggleMenu} className="block text-white hover:text-purple-400 font-medium">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-white hover:text-purple-400 font-medium">About</Link>
          <Link to="/services" onClick={toggleMenu} className="block text-white hover:text-purple-400 font-medium">Services</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-white hover:text-purple-400 font-medium">Contact</Link>
          <div className="pt-2 border-t border-gray-200">
            <Link to="/login">
              <button className="w-full mb-2 px-4 py-2 border border-purple-500 text-white rounded-md hover:bg-purple-400 transition">Login</button>
            </Link>
            <Link to="/signup">
              <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-300 transition">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
