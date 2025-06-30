const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-gray-600">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>
            
            <section>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Register for our conference</li>
                <li>Submit an abstract</li>
                <li>Contact us with questions</li>
                <li>Subscribe to our newsletter</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process your conference registration</li>
                <li>Communicate with you about the conference</li>
                <li>Provide customer support</li>
                <li>Send you updates and promotional materials</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                3. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information 
                to third parties without your consent, except as described in this 
                privacy policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                4. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or 
                destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                5. Your Rights
              </h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>Email: privacy@medwideconferences.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Conference Boulevard, Science District, Metro City</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
