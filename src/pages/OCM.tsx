const OCM = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            Organizing Committee Members (OCM)
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Meet the dedicated professionals organizing this international summit.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <h2 className="text-xl font-bold text-gray-900">Conference Chair</h2>
              <p className="text-gray-600">Dr. Alexandra Thompson - Harvard Medical School</p>
            </div>
            
            <div className="border-l-4 border-primary-600 pl-6">
              <h2 className="text-xl font-bold text-gray-900">Scientific Committee</h2>
              <p className="text-gray-600">Leading researchers from top universities worldwide</p>
            </div>
            
            <div className="border-l-4 border-primary-600 pl-6">
              <h2 className="text-xl font-bold text-gray-900">Program Committee</h2>
              <p className="text-gray-600">Expert panel organizing the conference program</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCM;
