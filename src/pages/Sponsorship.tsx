const Sponsorship = () => {
  const sponsorshipTiers = [
    {
      name: 'Platinum Sponsor',
      price: '$25,000',
      benefits: [
        'Premium booth location',
        'Logo on all conference materials',
        '4 complimentary registrations',
        'Speaking opportunity',
        'Welcome reception sponsor'
      ]
    },
    {
      name: 'Gold Sponsor',
      price: '$15,000',
      benefits: [
        'Standard booth location',
        'Logo on conference website',
        '2 complimentary registrations',
        'Coffee break sponsor',
        'Conference bag insert'
      ]
    },
    {
      name: 'Silver Sponsor',
      price: '$10,000',
      benefits: [
        'Exhibition space',
        'Company listing',
        '1 complimentary registration',
        'Conference proceedings ad',
        'Networking event access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Exhibition and Sponsorship
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with us to showcase your innovations and connect with the global nanomedicine community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sponsorshipTiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary-600 text-white p-6 text-center">
                <h3 className="text-2xl font-bold font-heading mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold">{tier.price}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
            Why Sponsor Our Conference?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600 mb-4">
                Connect with 500+ attendees from 50+ countries, including leading researchers, 
                industry professionals, and decision-makers in nanomedicine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Visibility</h3>
              <p className="text-gray-600 mb-4">
                Showcase your products and services to a highly targeted audience 
                and establish your company as a leader in the field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Networking Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Build valuable partnerships and collaborations with key stakeholders 
                in the nanomedicine ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                Generate high-quality leads and expand your customer base 
                through direct interaction with potential clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
