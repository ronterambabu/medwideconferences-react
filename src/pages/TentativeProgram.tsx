const TentativeProgram = () => {
  const programDays = [
    {
      day: 'Day 1 - March 15, 2025',
      sessions: [
        { time: '8:00 - 9:00 AM', title: 'Registration & Welcome Coffee' },
        { time: '9:00 - 9:30 AM', title: 'Opening Ceremony' },
        { time: '9:30 - 10:30 AM', title: 'Keynote: Future of Nanomedicine' },
        { time: '10:30 - 11:00 AM', title: 'Coffee Break' },
        { time: '11:00 - 12:30 PM', title: 'Session 1: Drug Delivery Systems' },
        { time: '12:30 - 1:30 PM', title: 'Lunch Break' },
        { time: '1:30 - 3:00 PM', title: 'Session 2: Cancer Nanotechnology' },
        { time: '3:00 - 3:30 PM', title: 'Coffee Break' },
        { time: '3:30 - 5:00 PM', title: 'Poster Session 1' },
      ]
    },
    {
      day: 'Day 2 - March 16, 2025',
      sessions: [
        { time: '9:00 - 10:00 AM', title: 'Keynote: Regulatory Aspects' },
        { time: '10:00 - 10:30 AM', title: 'Coffee Break' },
        { time: '10:30 - 12:00 PM', title: 'Session 3: Biosensors & Diagnostics' },
        { time: '12:00 - 1:00 PM', title: 'Lunch Break' },
        { time: '1:00 - 2:30 PM', title: 'Session 4: Tissue Engineering' },
        { time: '2:30 - 3:00 PM', title: 'Coffee Break' },
        { time: '3:00 - 4:30 PM', title: 'Workshop: Clinical Translation' },
        { time: '7:00 - 10:00 PM', title: 'Conference Dinner' },
      ]
    },
    {
      day: 'Day 3 - March 17, 2025',
      sessions: [
        { time: '9:00 - 10:00 AM', title: 'Keynote: Industry Perspectives' },
        { time: '10:00 - 10:30 AM', title: 'Coffee Break' },
        { time: '10:30 - 12:00 PM', title: 'Session 5: Future Directions' },
        { time: '12:00 - 1:00 PM', title: 'Lunch Break' },
        { time: '1:00 - 2:30 PM', title: 'Panel Discussion' },
        { time: '2:30 - 3:00 PM', title: 'Awards Ceremony' },
        { time: '3:00 - 3:30 PM', title: 'Closing Remarks' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Tentative Program
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive three-day program covering all aspects of nanomedicine
          </p>
        </div>

        <div className="space-y-8">
          {programDays.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <h2 className="text-2xl font-bold font-heading">{day.day}</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="flex flex-col md:flex-row md:items-center border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="md:w-1/4 font-medium text-primary-600 mb-1 md:mb-0">
                        {session.time}
                      </div>
                      <div className="md:w-3/4 text-gray-900">
                        {session.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TentativeProgram;
