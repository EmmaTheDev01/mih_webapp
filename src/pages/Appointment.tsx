import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  purpose: string;
  message: string;
};

const appointmentTypes = [
  { id: 'coworking', label: 'Coworking Space Tour' },
  { id: 'training', label: 'Tech Training Inquiry' },
  { id: 'mentorship', label: 'Mentorship Session' },
  { id: 'incubation', label: 'Startup Incubation' },
  { id: 'event', label: 'Event Participation' },
  { id: 'other', label: 'Other' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export default function Appointment() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError('');
      
      // If not logged in, prompt to login
      if (!currentUser) {
        navigate('/signin', { state: { from: '/appointment' } });
        return;
      }
      
      // This is a placeholder for the actual submission logic
      // In a real application, you would save this to Firestore
      console.log('Appointment data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      reset();
    } catch (err) {
      console.error('Error booking appointment:', err);
      setError('Failed to book appointment. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-xl text-gray-600">
              Schedule a visit to Musanze Innovation Hub or book a service
            </p>
          </div>
          
          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for scheduling an appointment. We'll contact you to confirm your booking shortly.
              </p>
              <Button onClick={() => setSuccess(false)}>Book Another Appointment</Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        }
                      })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                      Purpose of Visit*
                    </label>
                    <select
                      id="purpose"
                      {...register('purpose', { required: 'Please select a purpose' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select purpose</option>
                      {appointmentTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.purpose && (
                      <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date*
                    </label>
                    <input
                      id="date"
                      type="date"
                      {...register('date', { required: 'Date is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time*
                    </label>
                    <select
                      id="time"
                      {...register('time', { required: 'Time is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Please provide any additional details about your visit"
                  ></textarea>
                </div>
                
                <div>
                  <Button
                    type="submit"
                    disabled={loading}
                    fullWidth
                  >
                    {loading ? 'Booking Appointment...' : 'Book Appointment'}
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          <div className="mt-12 bg-primary-light/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">More Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 3:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>Phone: +250 780 123 456</li>
                  <li>Email: info@musanzehub.com</li>
                  <li>Address: 123 Innovation Street, Musanze, Rwanda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
} 