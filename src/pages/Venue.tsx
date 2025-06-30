import { MapPin, Clock, Car, Utensils } from 'lucide-react';

const Venue = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Conference Venue
          </h1>
          <p className="text-lg text-gray-600">
            Join us at our premium conference location
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
              Grand Conference Center
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Conference Boulevard, Science District, Metro City</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Conference Dates</h3>
                  <p className="text-gray-600">March 15-17, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Car className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Transportation</h3>
                  <p className="text-gray-600">Free shuttle service from major hotels and airport</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Utensils className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Catering</h3>
                  <p className="text-gray-600">Breakfast, lunch, and coffee breaks included</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/600x400?text=Conference+Venue" 
              alt="Conference Venue"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">
                World-Class Facilities
              </h3>
              <p className="text-gray-600">
                Our venue features state-of-the-art presentation technology, 
                comfortable seating for 500+ attendees, and excellent networking spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
