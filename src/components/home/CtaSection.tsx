import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
import Button from '../common/Button';

export default function CtaSection() {
  return (
    <Section bgColor="bg-primary">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to Join Our Innovation Community?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you're looking to learn new skills, grow your startup, or connect with like-minded innovators, Musanze Innovation Hub is the place for you.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/appointment">
            <Button variant='primary'>Book a Visit</Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary">Sign Up Now</Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
} 