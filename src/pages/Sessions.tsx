import { Clock, Users } from 'lucide-react';

const Sessions = () => {
  const sessions = [
    {
      id: 1,
      title: 'Nanomedicine & Drug Delivery',
      time: '9:00 AM - 10:30 AM',
      date: 'Day 1',
      speaker: 'Dr. Sarah Johnson',
      description: 'Latest advancements in targeted drug delivery using nanotechnology.',
    },
    {
      id: 2,
      title: 'Nanotechnology in Cancer Treatment',
      time: '11:00 AM - 12:30 PM',
      date: 'Day 1',
      speaker: 'Dr. Michael Chen',
      description: 'Innovative approaches to cancer therapy using nanoparticles.',
    },
    {
      id: 3,
      title: 'Biomedical Nanotechnology',
      time: '2:00 PM - 3:30 PM',
      date: 'Day 1',
      speaker: 'Dr. Emily Rodriguez',
      description: 'Applications of nanotechnology in biomedical engineering.',
    },
    {
      id: 4,
      title: 'Nano-biosensors & Diagnostics',
      time: '9:00 AM - 10:30 AM',
      date: 'Day 2',
      speaker: 'Dr. James Wilson',
      description: 'Next-generation diagnostic tools using nanosensors.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Conference Sessions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive program featuring cutting-edge research and expert insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {session.date}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{session.time}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                  {session.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{session.speaker}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{session.description}</p>
                
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
