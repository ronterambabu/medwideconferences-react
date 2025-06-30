import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', data);
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
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch with our team for any questions or assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@medwideconferences.com</p>
                  <p className="text-gray-600">support@medwideconferences.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Conference Boulevard<br />
                    Science District<br />
                    Metro City, MC 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="form-label">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    {...register('name')}
                    type="text"
                    className={`form-input pl-10 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="form-label">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    {...register('email')}
                    type="email"
                    className={`form-input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="form-label">Phone Number *</label>
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
                <label className="form-label">Subject *</label>
                <input
                  {...register('subject')}
                  type="text"
                  className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="Enter message subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="form-label">Message *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    {...register('message')}
                    rows={5}
                    className={`form-input pl-10 ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Enter your message"
                  />
                </div>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
