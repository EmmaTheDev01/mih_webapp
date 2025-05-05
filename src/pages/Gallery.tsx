import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
// Temporarily removing ThreeJS imports while fixing compatibility
// import ThreeCanvas from '../components/common/ThreeCanvas';
// import FloatingSpiral from '../components/three/FloatingSpiral';

// Placeholder gallery items - replace with actual content in production
const galleryItems = [
  {
    id: 1,
    title: 'Tech Workshop',
    category: 'events',
    image: 'https://source.unsplash.com/random/600x400?workshop',
    description: 'React.js workshop for beginners',
  },
  {
    id: 2,
    title: 'Coworking Space',
    category: 'facilities',
    image: 'https://source.unsplash.com/random/600x400?coworking',
    description: 'Our modern coworking environment',
  },
  {
    id: 3,
    title: 'Hackathon 2023',
    category: 'events',
    image: 'https://source.unsplash.com/random/600x400?hackathon',
    description: 'Annual innovation competition',
  },
  {
    id: 4,
    title: 'Startup Pitch Day',
    category: 'events',
    image: 'https://source.unsplash.com/random/600x400?pitch',
    description: 'Entrepreneurs presenting their ideas',
  },
  {
    id: 5,
    title: 'Meeting Room',
    category: 'facilities',
    image: 'https://source.unsplash.com/random/600x400?meeting',
    description: 'Professional meeting space',
  },
  {
    id: 6,
    title: 'Networking Event',
    category: 'events',
    image: 'https://source.unsplash.com/random/600x400?networking',
    description: 'Community gathering and networking',
  },
  {
    id: 7,
    title: 'Design Thinking Workshop',
    category: 'events',
    image: 'https://source.unsplash.com/random/600x400?design',
    description: 'Learning user-centered design methods',
  },
  {
    id: 8,
    title: 'Relaxation Area',
    category: 'facilities',
    image: 'https://source.unsplash.com/random/600x400?relaxation',
    description: 'Comfortable space to recharge',
  },
  {
    id: 9,
    title: 'Graduation Ceremony',
    category: 'success',
    image: 'https://source.unsplash.com/random/600x400?graduation',
    description: 'Celebrating our program graduates',
  },
  {
    id: 10,
    title: 'Product Launch',
    category: 'success',
    image: 'https://source.unsplash.com/random/600x400?launch',
    description: 'Startup launching their first product',
  },
  {
    id: 11,
    title: 'Mentorship Session',
    category: 'events',
    image: 'https://source.unsplash.com/random/600x400?mentorship',
    description: 'One-on-one guidance from experts',
  },
  {
    id: 12,
    title: 'Incubation Space',
    category: 'facilities',
    image: 'https://source.unsplash.com/random/600x400?incubation',
    description: 'Dedicated space for startups',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'events', label: 'Events' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'success', label: 'Success Stories' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Static Header (temporarily replacing Three.js Animation) */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-r from-blue-900 to-orange-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Gallery</h1>
        </div>
      </div>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour through our facilities, events, and community success stories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div 
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-[50vh] object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/75"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                <div className="flex items-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === selectedItem.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
} 