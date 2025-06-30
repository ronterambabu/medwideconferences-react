const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Professor of Nanomedicine',
      affiliation: 'Stanford University',
      expertise: 'Drug Delivery Systems',
      image: 'https://via.placeholder.com/300x300?text=Dr.+Sarah+Johnson'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Director of Cancer Research',
      affiliation: 'MIT',
      expertise: 'Nanotechnology in Cancer Treatment',
      image: 'https://via.placeholder.com/300x300?text=Dr.+Michael+Chen'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Biomedical Engineer',
      affiliation: 'Johns Hopkins University',
      expertise: 'Biomedical Nanotechnology',
      image: 'https://via.placeholder.com/300x300?text=Dr.+Emily+Rodriguez'
    },
    {
      name: 'Dr. James Wilson',
      title: 'Research Scientist',
      affiliation: 'Harvard Medical School',
      expertise: 'Nano-biosensors',
      image: 'https://via.placeholder.com/300x300?text=Dr.+James+Wilson'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Featured Speakers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our distinguished speakers who are leading experts in nanomedicine and nanotechnology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-primary-600 font-medium mb-1">{speaker.title}</p>
                <p className="text-gray-600 mb-2">{speaker.affiliation}</p>
                <p className="text-sm text-gray-500">{speaker.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
