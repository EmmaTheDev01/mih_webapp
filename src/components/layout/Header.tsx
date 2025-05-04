import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import logo from "./logo (1).png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "top-0 bg-white shadow-md" : "top-16 bg-transparent"
      } h-[90px]`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center h-full">
          <img
            src={logo}
            alt="Hanga Hubs logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-primary font-medium">
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-primary font-medium"
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className="text-gray-800 hover:text-primary font-medium"
          >
            Gallery
          </Link>
          <Link
            to="/events"
            className="text-gray-800 hover:text-primary font-medium"
          >
            Events
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-primary font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-primary font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/appointment">
            <Button variant="primary" size="sm">
              Book Appointment
            </Button>
          </Link>

          <button className="md:hidden text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
