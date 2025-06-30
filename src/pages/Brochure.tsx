import { Download, FileText, Calendar, Users } from 'lucide-react';

const Brochure = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Conference Brochure
            </h1>
            <p className="text-lg text-gray-600">
              Download our comprehensive conference brochure for detailed information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <FileText className="h-24 w-24 text-primary-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold font-heading text-gray-900 mb-2">
                Full Conference Brochure
              </h2>
              <p className="text-gray-600 mb-4">
                Complete information about sessions, speakers, venue, and registration
              </p>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center mx-auto">
                <Download className="h-5 w-5 mr-2" />
                Download PDF (2.5 MB)
              </button>
            </div>

            <div className="text-center">
              <Calendar className="h-24 w-24 text-primary-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold font-heading text-gray-900 mb-2">
                Program Schedule
              </h2>
              <p className="text-gray-600 mb-4">
                Detailed day-by-day schedule of all conference activities
              </p>
              <button className="bg-secondary-600 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 transition-colors flex items-center mx-auto">
                <Download className="h-5 w-5 mr-2" />
                Download Schedule
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold font-heading text-gray-900 mb-4">
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Users className="h-4 w-4 text-primary-600 mr-2" />
                  <span>Speaker profiles and biographies</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="h-4 w-4 text-primary-600 mr-2" />
                  <span>Complete session schedule</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FileText className="h-4 w-4 text-primary-600 mr-2" />
                  <span>Registration information</span>
                </li>
                <li className="flex items-center">
                  <Download className="h-4 w-4 text-primary-600 mr-2" />
                  <span>Sponsorship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
