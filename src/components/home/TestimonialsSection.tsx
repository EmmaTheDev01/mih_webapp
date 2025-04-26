import React from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';

const testimonials = [
  {
    id: 1,
    content: "The Musanze Innovation Hub has been instrumental in helping me launch my tech startup. The mentorship and resources provided were invaluable.",
    author: "Jean Paul Habimana",
    role: "Founder, TechRwanda",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    content: "I joined the coding bootcamp at Musanze Innovation Hub with zero experience. Now I'm a full-stack developer working remotely for an international company.",
    author: "Diane Uwase",
    role: "Software Developer",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    content: "The coworking space is modern, comfortable, and has everything I need to be productive. The community is supportive and collaborative.",
    author: "Eric Mugabo",
    role: "Digital Nomad",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" bgColor="bg-gray-50">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hear from our community members
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            
            <p className="text-gray-700 italic">"{testimonial.content}"</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
} 