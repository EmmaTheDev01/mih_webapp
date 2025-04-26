import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../common/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Musanze<span className="text-accent">Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-primary ${isActive('/') ? 'text-primary font-medium' : ''}`}>
              Home
            </Link>
            <Link to="/services" className={`hover:text-primary ${isActive('/services') ? 'text-primary font-medium' : ''}`}>
              Services
            </Link>
            <Link to="/gallery" className={`hover:text-primary ${isActive('/gallery') ? 'text-primary font-medium' : ''}`}>
              Gallery
            </Link>
            <Link to="/appointment" className={`hover:text-primary ${isActive('/appointment') ? 'text-primary font-medium' : ''}`}>
              Book Appointment
            </Link>
            <Link to="/hire-talent" className={`hover:text-primary ${isActive('/hire-talent') ? 'text-primary font-medium' : ''}`}>
              Hire Talent
            </Link>
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="secondary" size="sm">Dashboard</Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => logout()}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`p-2 rounded-md ${isActive('/') ? 'bg-primary-light/10 text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`p-2 rounded-md ${isActive('/services') ? 'bg-primary-light/10 text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className={`p-2 rounded-md ${isActive('/gallery') ? 'bg-primary-light/10 text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/appointment"
                className={`p-2 rounded-md ${isActive('/appointment') ? 'bg-primary-light/10 text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <Link
                to="/hire-talent"
                className={`p-2 rounded-md ${isActive('/hire-talent') ? 'bg-primary-light/10 text-primary font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Talent
              </Link>
              
              {currentUser ? (
                <>
                  <Link
                    to="/dashboard"
                    className="p-2 bg-secondary text-white rounded-md text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="p-2 border border-gray-300 rounded-md text-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  className="p-2 bg-primary text-white rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 