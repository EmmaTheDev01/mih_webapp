import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 py-3 fixed left-0 right-0 z-30 ${
        isScrolled ? 'top-0 bg-white shadow-md py-2' : 'top-16 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">Musanze<span className="text-primary">Hub</span></span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-primary font-medium">
            Services
          </Link>
          <Link to="/gallery" className="text-gray-800 hover:text-primary font-medium">
            Gallery
          </Link>
          <Link to="/events" className="text-gray-800 hover:text-primary font-medium">
            Events
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-primary font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-primary font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/appointment">
            <Button 
              variant="primary"
              size="sm"
            >
              Book Appointment
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}