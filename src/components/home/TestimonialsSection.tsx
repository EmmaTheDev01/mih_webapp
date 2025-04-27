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
  {
    id: 4,
    content: "As a local entrepreneur, the business development workshops helped me transform my idea into a viable business. The mentors were amazing!",
    author: "Marie Umutoni",
    role: "Entrepreneur",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 5,
    content: "The networking events hosted by Musanze Hub connected me with investors who believed in my vision. Now we're scaling across East Africa.",
    author: "Claude Ndayisenga",
    role: "CEO, EduTech Rwanda",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" bgColor="bg-white">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-secondary"
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
          Hear from our community members who have achieved great things
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-gray-50 p-6 rounded-lg shadow-lg border-t-4 border-primary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author} 
                className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-secondary"
              />
              <div>
                <h4 className="font-semibold text-secondary">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            
            <p className="text-gray-700 italic">"{testimonial.content}"</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="#" className="inline-block text-primary font-medium hover:text-primary-dark">View All Success Stories →</a>
      </div>
    </Section>
  );
} 