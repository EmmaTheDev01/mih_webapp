import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
// Temporarily removing ThreeJS imports while fixing compatibility
// import ThreeCanvas from '../common/ThreeCanvas';
// import ParticlesAnimation from '../three/ParticlesAnimation';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
      {/* Static background (temporarily replacing Three.js animation) */}
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to <span className="text-primary">Musanze</span> <span className="text-accent">Innovation Hub</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering innovators, creators and entrepreneurs in Rwanda. Join our vibrant community to learn, create, and grow your tech skills and business.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/services">
              <Button size="lg">Explore Services</Button>
            </Link>
            <Link to="/appointment">
              <Button variant="secondary" size="lg">Book Appointment</Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        <svg 
          className="w-8 h-8 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
} 