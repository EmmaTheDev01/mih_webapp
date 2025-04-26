import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

type FormData = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  jobTitle: string;
  jobType: string;
  skills: string[];
  description: string;
};

const talentProfiles = [
  {
    id: 1,
    name: 'Jean Mugabo',
    role: 'Full Stack Developer',
    image: 'https://i.pravatar.cc/300?img=11',
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    experience: '3+ years',
    education: 'BSc Computer Science, University of Rwanda',
    bio: 'Experienced full stack developer with a passion for creating scalable web applications.',
  },
  {
    id: 2,
    name: 'Alice Uwase',
    role: 'UI/UX Designer',
    image: 'https://i.pravatar.cc/300?img=5',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    experience: '4+ years',
    education: 'BA Design, Rwanda Creative Institute',
    bio: 'Creative designer focused on crafting beautiful and intuitive digital experiences.',
  },
  {
    id: 3,
    name: 'Robert Karemera',
    role: 'Data Scientist',
    image: 'https://i.pravatar.cc/300?img=3',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow'],
    experience: '2+ years',
    education: 'MSc Data Science, African Institute of Technology',
    bio: 'Data enthusiast with expertise in machine learning and predictive analytics.',
  },
  {
    id: 4,
    name: 'Marie Ingabire',
    role: 'Mobile Developer',
    image: 'https://i.pravatar.cc/300?img=9',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    experience: '3+ years',
    education: 'BSc Software Engineering, Kigali Institute',
    bio: 'Mobile app developer specialized in creating cross-platform applications.',
  },
];

const skillOptions = [
  'React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', 'PHP',
  'JavaScript', 'TypeScript', 'C#', '.NET', 'Ruby', 'Ruby on Rails',
  'HTML', 'CSS', 'SASS', 'UI/UX Design', 'Figma', 'Adobe XD',
  'iOS Development', 'Android Development', 'React Native', 'Flutter',
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'DevOps',
  'Data Science', 'Machine Learning', 'Data Analysis', 'SQL', 'NoSQL',
  'MongoDB', 'PostgreSQL', 'MySQL', 'GraphQL', 'REST API'
];

export default function HireTalent() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<typeof talentProfiles[0] | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError('');
      
      // Add selected skills to form data
      data.skills = selectedSkills;
      
      // This is a placeholder for the actual submission logic
      console.log('Talent request data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      reset();
      setSelectedSkills([]);
    } catch (err) {
      console.error('Error submitting talent request:', err);
      setError('Failed to submit request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const openProfile = (profile: typeof talentProfiles[0]) => {
    setSelectedProfile(profile);
  };

  const closeProfile = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hire Top Talent</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with skilled professionals from our community for your projects and job opportunities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Featured Talent</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {talentProfiles.map((profile) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => openProfile(profile)}
                >
                  <div className="flex items-center p-4">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{profile.name}</h3>
                      <p className="text-primary">{profile.role}</p>
                      <p className="text-gray-600 text-sm">{profile.experience} experience</p>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {profile.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{profile.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Why Hire Our Talent?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Pre-vetted professionals with verified skills</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Diverse talent pool with various specializations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Flexible hiring options: project-based, part-time, or full-time</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ongoing support and guidance throughout the hiring process</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Local talent with global standards and experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto" id="hire-form">
          <h2 className="text-2xl font-bold mb-6 text-center">Submit a Talent Request</h2>
          
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your talent request. Our team will review your requirements and get back to you shortly.
              </p>
              <Button onClick={() => setSuccess(false)}>Submit Another Request</Button>
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
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name*
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      {...register('companyName', { required: 'Company name is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person*
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      {...register('contactName', { required: 'Contact name is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    {errors.contactName && (
                      <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>
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
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title*
                    </label>
                    <input
                      id="jobTitle"
                      type="text"
                      {...register('jobTitle', { required: 'Job title is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                    {errors.jobTitle && (
                      <p className="mt-1 text-sm text-red-600">{errors.jobTitle.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Type*
                    </label>
                    <select
                      id="jobType"
                      {...register('jobType', { required: 'Job type is required' })}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Select job type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="freelance">Freelance</option>
                      <option value="internship">Internship</option>
                    </select>
                    {errors.jobType && (
                      <p className="mt-1 text-sm text-red-600">{errors.jobType.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Required Skills*
                  </label>
                  <div className="border border-gray-300 rounded-md p-2 min-h-[100px]">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {selectedSkills.map(skill => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                          <button
                            type="button"
                            className="ml-1 text-primary hover:text-primary-dark"
                            onClick={() => toggleSkill(skill)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                      {selectedSkills.length === 0 && (
                        <span className="text-gray-500">Select skills below</span>
                      )}
                    </div>
                    <div className="mt-2 pt-2 border-t">
                      <div className="text-sm text-gray-600 mb-1">Popular skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {skillOptions.slice(0, 15).map(skill => (
                          <button
                            key={skill}
                            type="button"
                            className={`px-2 py-1 text-xs rounded-full ${
                              selectedSkills.includes(skill)
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                            onClick={() => toggleSkill(skill)}
                          >
                            {skill}
                          </button>
                        ))}
                        <button
                          type="button"
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                        >
                          + More skills
                        </button>
                      </div>
                    </div>
                  </div>
                  {selectedSkills.length === 0 && (
                    <p className="mt-1 text-sm text-red-600">Please select at least one skill</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description*
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    {...register('description', { required: 'Job description is required' })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Please provide details about the role, responsibilities, and requirements"
                  ></textarea>
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>
                
                <div>
                  <Button
                    type="submit"
                    disabled={loading || selectedSkills.length === 0}
                    fullWidth
                  >
                    {loading ? 'Submitting Request...' : 'Submit Talent Request'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Section>
      
      {/* Talent Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeProfile}>
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                <img 
                  src={selectedProfile.image} 
                  alt={selectedProfile.name} 
                  className="w-32 h-32 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-2xl font-bold">{selectedProfile.name}</h3>
                  <p className="text-xl text-primary mb-2">{selectedProfile.role}</p>
                  <p className="text-gray-600 mb-2">{selectedProfile.experience} experience</p>
                  <p className="text-gray-600">{selectedProfile.education}</p>
                </div>
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={closeProfile}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2">About</h4>
                <p className="text-gray-700">{selectedProfile.bio}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 border-t pt-4">
                <Button
                  variant="outline"
                  onClick={closeProfile}
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    closeProfile();
                    document.getElementById('hire-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request This Talent
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 