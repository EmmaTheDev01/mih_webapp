import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Section from '../../components/common/Section';
import Loading from '../../components/common/Loading';

type Appointment = {
  id: string;
  date: string;
  time: string;
  purpose: string;
  status: 'pending' | 'confirmed' | 'cancelled';
};

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!currentUser) return;

      try {
        // This is just a placeholder for the actual Firestore query
        // In a real application, you would implement this properly
        setAppointments([
          {
            id: '1',
            date: '2023-05-15',
            time: '10:00 AM',
            purpose: 'Workspace Tour',
            status: 'confirmed',
          },
          {
            id: '2',
            date: '2023-05-22',
            time: '2:00 PM',
            purpose: 'Mentorship Session',
            status: 'pending',
          },
        ]);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [currentUser]);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'services', label: 'Services' },
    { id: 'profile', label: 'Profile' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading size="lg" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {currentUser?.email}</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`inline-block p-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Hub Activity</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/10 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Upcoming Appointments</h3>
                  <p className="text-2xl font-bold">{appointments.length}</p>
                </div>
                <div className="bg-secondary/10 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Services Used</h3>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Hours at Hub</h3>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Recent Activity</h3>
                <div className="border rounded-lg divide-y">
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">Booked a workspace</p>
                      <p className="text-sm text-gray-500">May 10, 2023</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Confirmed
                    </span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">Registered for Web Dev Workshop</p>
                      <p className="text-sm text-gray-500">May 8, 2023</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      Upcoming
                    </span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">Mentorship Session</p>
                      <p className="text-sm text-gray-500">May 5, 2023</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Appointments</h2>
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">
                  Book New Appointment
                </button>
              </div>

              {appointments.length > 0 ? (
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Purpose
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {appointment.date}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{appointment.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {appointment.purpose}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                appointment.status === 'confirmed'
                                  ? 'bg-green-100 text-green-800'
                                  : appointment.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {appointment.status.charAt(0).toUpperCase() +
                                appointment.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-primary hover:text-primary-dark mr-3">
                              Reschedule
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>You don't have any appointments yet.</p>
                  <button className="mt-2 text-primary font-medium">
                    Book your first appointment
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'services' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Available Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg mb-2">Coworking Space</h3>
                  <p className="text-gray-600 mb-4">Access to modern workspaces, high-speed internet, and meeting rooms.</p>
                  <button className="text-primary font-medium">Learn More</button>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg mb-2">Tech Training</h3>
                  <p className="text-gray-600 mb-4">Courses and workshops on programming, design, and digital skills.</p>
                  <button className="text-primary font-medium">Learn More</button>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg mb-2">Mentorship</h3>
                  <p className="text-gray-600 mb-4">One-on-one guidance from industry experts in various tech fields.</p>
                  <button className="text-primary font-medium">Learn More</button>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg mb-2">Events & Workshops</h3>
                  <p className="text-gray-600 mb-4">Regular events, hackathons, and networking opportunities.</p>
                  <button className="text-primary font-medium">Learn More</button>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg mb-2">Startup Incubation</h3>
                  <p className="text-gray-600 mb-4">Resources and support to help your startup grow and succeed.</p>
                  <button className="text-primary font-medium">Learn More</button>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-lg mb-2">Equipment Rental</h3>
                  <p className="text-gray-600 mb-4">Access to computers, cameras, 3D printers, and other tech equipment.</p>
                  <button className="text-primary font-medium">Learn More</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Your Profile</h2>
              
              <div className="max-w-2xl">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center text-gray-600 font-bold text-xl mb-4 md:mb-0 md:mr-6">
                    {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{currentUser?.email}</h3>
                    <p className="text-gray-500">Member since May 2023</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Account Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p>{currentUser?.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Membership</p>
                          <p>Basic Plan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Preferences</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <input 
                          type="checkbox" 
                          id="emailNotifications" 
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="emailNotifications" className="ml-2 block text-gray-900">
                          Email notifications
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="marketingEmails" 
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="marketingEmails" className="ml-2 block text-gray-900">
                          Marketing emails
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium mr-2">
                      Edit Profile
                    </button>
                    <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-medium">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
} 