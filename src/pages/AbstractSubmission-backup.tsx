import { useState } from 'react';
import { Send, User, Mail, Phone, Building, Globe, FileText } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  organization: yup.string().required('Organization is required'),
  country: yup.string().required('Country is required'),
  interestedIn: yup.string().required('Please select an interest area'),
  session: yup.string().required('Please select a session'),
  abstractTitle: yup.string().required('Abstract title is required'),
  abstractContent: yup.string().min(100, 'Abstract must be at least 100 characters').required('Abstract content is required'),
  keywords: yup.string().required('Keywords are required'),
});

const AbstractSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AbstractFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<AbstractFormData> = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Abstract submitted:', data);
    setSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
              Abstract Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your submission. We will review your abstract and get back to you within 5-7 business days.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Submit Another Abstract
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary-600 text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Submit Your Abstract
            </h1>
            <p className="text-xl text-blue-100">
              Share your research with the global nanomedicine community
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
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
                    {...register('firstName')}
                    type="text"
                    className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>

                <div>
                  <label className="form-label">Last Name *</label>
                  <input
                    {...register('lastName')}
                    type="text"
                    className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>

                <div>
                  <label className="form-label">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('email')}
                      type="email"
                      className={`form-input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="form-label">Phone *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('phone')}
                      type="tel"
                      className={`form-input pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="form-label">Organization *</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('organization')}
                      type="text"
                      className={`form-input pl-10 ${errors.organization ? 'border-red-500' : ''}`}
                      placeholder="Enter your organization"
                    />
                  </div>
                  {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>}
                </div>

                <div>
                  <label className="form-label">Country *</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register('country')}
                      type="text"
                      className={`form-input pl-10 ${errors.country ? 'border-red-500' : ''}`}
                      placeholder="Enter your country"
                    />
                  </div>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>
              </div>
            </div>

            {/* Research Information */}
            <div>
              <h2 className="text-xl font-bold font-heading text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Research Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Interested In *</label>
                  <select
                    {...register('interestedIn')}
                    className={`form-input ${errors.interestedIn ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select Interest Area</option>
                    <option value="nanomedicine">Nanomedicine & Drug Delivery</option>
                    <option value="cancer-treatment">Nanotechnology in Cancer Treatment</option>
                    <option value="biomedical">Biomedical Nanotechnology</option>
                    <option value="nanoparticles">Nanoparticles & Therapeutics</option>
                    <option value="molecular">Molecular Nanotechnology</option>
                    <option value="biosensors">Nano-biosensors & Diagnostics</option>
                  </select>
                  {errors.interestedIn && <p className="text-red-500 text-sm mt-1">{errors.interestedIn.message}</p>}
                </div>

                <div>
                  <label className="form-label">Preferred Session *</label>
                  <select
                    {...register('session')}
                    className={`form-input ${errors.session ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select Session</option>
                    <option value="oral-presentation">Oral Presentation</option>
                    <option value="poster-session">Poster Session</option>
                    <option value="workshop">Workshop</option>
                    <option value="panel-discussion">Panel Discussion</option>
                  </select>
                  {errors.session && <p className="text-red-500 text-sm mt-1">{errors.session.message}</p>}
                </div>
              </div>

              <div className="mt-6">
                <label className="form-label">Abstract Title *</label>
                <input
                  {...register('abstractTitle')}
                  type="text"
                  className={`form-input ${errors.abstractTitle ? 'border-red-500' : ''}`}
                  placeholder="Enter your abstract title"
                />
                {errors.abstractTitle && <p className="text-red-500 text-sm mt-1">{errors.abstractTitle.message}</p>}
              </div>

              <div className="mt-6">
                <label className="form-label">Abstract Content * (minimum 100 characters)</label>
                <textarea
                  {...register('abstractContent')}
                  rows={8}
                  className={`form-input ${errors.abstractContent ? 'border-red-500' : ''}`}
                  placeholder="Enter your abstract content..."
                />
                {errors.abstractContent && <p className="text-red-500 text-sm mt-1">{errors.abstractContent.message}</p>}
              </div>

              <div className="mt-6">
                <label className="form-label">Keywords * (comma-separated)</label>
                <input
                  {...register('keywords')}
                  type="text"
                  className={`form-input ${errors.keywords ? 'border-red-500' : ''}`}
                  placeholder="e.g., nanomedicine, drug delivery, nanotechnology"
                />
                {errors.keywords && <p className="text-red-500 text-sm mt-1">{errors.keywords.message}</p>}
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
    </div>
  );
};

export default AbstractSubmission;
