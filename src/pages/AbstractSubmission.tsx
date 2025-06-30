import { useState } from 'react';
import { Send, User, Mail, Phone, Building, Globe, FileText } from 'lucide-react';

interface AbstractFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  country: string;
  interestedIn: string;
  session: string;
  abstractTitle: string;
  abstractContent: string;
  keywords: string;
}

const AbstractSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AbstractFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    country: '',
    interestedIn: '',
    session: '',
    abstractTitle: '',
    abstractContent: '',
    keywords: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Abstract submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form or show success message
    alert('Abstract submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary-600 text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Submit Your Abstract
            </h1>
            <p className="text-xl text-blue-100">
              Share your research and findings with the global nanomedicine community
            </p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-bold font-heading text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">First Name *</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type="text"
                      className="form-input"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Last Name *</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text"
                      className="form-input"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        className="form-input pl-10"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        type="tel"
                        className="form-input pl-10"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Organization *</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input pl-10"
                        placeholder="Enter your organization"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Country *</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input pl-10"
                        placeholder="Enter your country"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interest & Session */}
              <div>
                <h2 className="text-xl font-bold font-heading text-gray-900 mb-4">
                  Research Focus
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Interested In *</label>
                    <select
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select your interest area</option>
                      <option value="oral-presentation">Oral Presentation</option>
                      <option value="poster-presentation">Poster Presentation</option>
                      <option value="workshop">Workshop</option>
                      <option value="keynote">Keynote Speaker</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Preferred Session *</label>
                    <select
                      name="session"
                      value={formData.session}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select a session</option>
                      <option value="nanomedicine-drug-delivery">Nanomedicine & Drug Delivery</option>
                      <option value="nanotechnology-cancer">Nanotechnology in Cancer Treatment</option>
                      <option value="diagnostic-imaging">Diagnostic Imaging & Nanosensors</option>
                      <option value="regenerative-medicine">Regenerative Medicine</option>
                      <option value="biosafety-ethics">Biosafety & Ethics</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Abstract Details */}
              <div>
                <h2 className="text-xl font-bold font-heading text-gray-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Abstract Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="form-label">Abstract Title *</label>
                    <input
                      name="abstractTitle"
                      value={formData.abstractTitle}
                      onChange={handleInputChange}
                      type="text"
                      className="form-input"
                      placeholder="Enter your abstract title"
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label">Abstract Content * (minimum 100 characters)</label>
                    <textarea
                      name="abstractContent"
                      value={formData.abstractContent}
                      onChange={handleInputChange}
                      rows={8}
                      className="form-input"
                      placeholder="Enter your abstract content..."
                      minLength={100}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.abstractContent.length}/100 minimum characters
                    </p>
                  </div>

                  <div>
                    <label className="form-label">Keywords *</label>
                    <input
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleInputChange}
                      type="text"
                      className="form-input"
                      placeholder="Enter keywords separated by commas"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Please separate keywords with commas (e.g., nanomedicine, drug delivery, cancer therapy)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Abstract
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
            Abstract Submission Guidelines
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Abstract must be original and not published elsewhere</li>
            <li>• Maximum word limit: 300 words</li>
            <li>• Include background, methods, results, and conclusions</li>
            <li>• Use clear and concise language</li>
            <li>• All abstracts will be peer-reviewed</li>
            <li>• Notification of acceptance: 2 weeks before the conference</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AbstractSubmission;
