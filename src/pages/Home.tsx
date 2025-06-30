import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Join the Future of <span className="text-yellow-300">Nanomedicine</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Connect with leading researchers, scientists, and innovators in nanomedicine and nanotechnology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/registration" 
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/abstract-submission" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Submit Abstract
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Conference Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover cutting-edge research and innovations in nanomedicine and nanotechnology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">3 Days</h3>
              <p className="text-gray-600">Intensive learning and networking</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">500+ Attendees</h3>
              <p className="text-gray-600">Global researchers and professionals</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">50+ Speakers</h3>
              <p className="text-gray-600">World-renowned experts</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading mb-2">Global Venue</h3>
              <p className="text-gray-600">Prime location for networking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Key Topics
            </h2>
            <p className="text-lg text-gray-600">
              Explore the latest advancements in these crucial areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Nanomedicine & Drug Delivery',
              'Nanotechnology in Cancer Treatment',
              'Biomedical Nanotechnology',
              'Nanoparticles & Therapeutics',
              'Molecular Nanotechnology',
              'Nano-biosensors & Diagnostics'
            ].map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-2">{topic}</h3>
                <p className="text-gray-600">
                  Latest research and developments in {topic.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Join the Future?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of the most significant nanomedicine conference of the year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/registration" 
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Register Today
            </Link>
            <Link 
              to="/brochure" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
