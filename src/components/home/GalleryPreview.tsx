import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../common/Section';

// Placeholder images - replace with actual images in production
const galleryImages = [
  {
    id: 1,
    src: 'https://source.unsplash.com/random/600x400?tech',
    alt: 'Innovation Hub Workspace',
    title: 'Modern Workspace',
  },
  {
    id: 2,
    src: 'https://source.unsplash.com/random/600x400?coding',
    alt: 'Coding Workshop',
    title: 'Coding Workshop',
  },
  {
    id: 3,
    src: 'https://source.unsplash.com/random/600x400?startup',
    alt: 'Startup Meetup',
    title: 'Startup Meetup',
  },
  {
    id: 4,
    src: 'https://source.unsplash.com/random/600x400?design',
    alt: 'Design Thinking Session',
    title: 'Design Thinking',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
    }
  },
};

export default function GalleryPreview() {
  return (
    <Section id="gallery-preview">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          See what's happening at Musanze Innovation Hub
        </motion.p>
      </div>

      <div className="relative h-1 bg-gradient-to-r from-[#d30f12] to-[#d30f13] rounded-full max-w-md mx-auto mb-16"></div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {galleryImages.map((image) => (
          <motion.div 
            key={image.id} 
            className="overflow-hidden rounded-lg shadow-lg"
            variants={item}
          >
            <Link to="/gallery" className="block group">
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <h3 className="text-white font-medium p-4">{image.title}</h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-12 text-center">
        <Link to="/gallery">
          <motion.button
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Gallery
          </motion.button>
        </Link>
      </div>
    </Section>
  );
} 