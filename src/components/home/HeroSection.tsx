import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

export default function HeroSection() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null); // holds the Vanta instance

  useEffect(() => {
    if (!effectRef.current && vantaRef.current) {
      effectRef.current = GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff0000,
        color2: 0xff1919,
        backgroundColor: 0xffffff,
      });
    }

    return () => {
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (err) {
          console.warn("Vanta effect destroy error:", err);
        }
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <section ref={vantaRef} className="relative h-screen flex items-center">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to <span className="text-primary">Musanze</span>{' '}
            <span className="text-secondary">Innovation Hub</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering young innovators, creators and entrepreneurs in Musanze. Join
            our vibrant community to learn, create, and grow your tech skills
            and business.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/services">
              <Button size="md">Explore Services</Button>
            </Link>
            <Link to="/appointment">
              <Button variant="secondary" size="md">
                Book Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        {/* Optional scroll icon */}
      </motion.div>
    </section>
  );
}
