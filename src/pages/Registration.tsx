import { useState } from 'react';
import { User, Mail, Phone, Building, CreditCard, Calendar } from 'lucide-react';

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  country: string;
  registrationType: string;
  dietaryRequirements?: string;
}

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    country: '',
    registrationType: '',
    dietaryRequirements: ''
  });

  const getPrice = (type: string) => {
    const prices: { [key: string]: number } = {
      'early-bird': 399,
      'regular': 499,
      'student': 199,
      'virtual': 99
    };
    return prices[type] || 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Registration submitted:', formData);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary-600 text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Conference Registration
            </h1>
            <p className="text-xl text-blue-100">
              Secure your spot at the premier nanomedicine conference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2">
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
                      <input
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        type="text"
                        className="form-input"
                        placeholder="Enter your country"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Registration Type */}
                <div>
                  <h2 className="text-xl font-bold font-heading text-gray-900 mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Registration Type
                  </h2>
                  <div className="space-y-3">
                    {[
                      { value: 'early-bird', label: 'Early Bird Registration', price: 399 },
                      { value: 'regular', label: 'Regular Registration', price: 499 },
                      { value: 'student', label: 'Student Registration', price: 199 },
                      { value: 'virtual', label: 'Virtual Attendance', price: 99 }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          name="registrationType"
                          value={option.value}
                          checked={formData.registrationType === option.value}
                          onChange={handleInputChange}
                          type="radio"
                          className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                          required
                        />
                        <div className="ml-3 flex-1">
                          <span className="font-medium">{option.label}</span>
                          <span className="ml-auto text-primary-600 font-bold">${option.price}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="form-label">Dietary Requirements (Optional)</label>
                  <textarea
                    name="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    className="form-input"
                    placeholder="Please specify any dietary requirements or allergies"
                  />
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
                        Processing...
                      </>
                    ) : (
                      <>
                        Proceed to Payment
                        <CreditCard className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">
                  Registration Summary
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Registration Type:</span>
                    <span className="font-medium">
                      {formData.registrationType ? formData.registrationType.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) : 'Not Selected'}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-primary-600">
                      ${formData.registrationType ? getPrice(formData.registrationType) : 0}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary-600">
                        ${formData.registrationType ? getPrice(formData.registrationType) : 0}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-blue-900">Conference Dates</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">March 15-17, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
