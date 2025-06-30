const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
            About Us
          </h1>
          
          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              Welcome to the International Summit on Nanomedicine & Nanotechnology, 
              the premier global conference bringing together leading researchers, 
              scientists, and industry professionals in the field of nanomedicine.
            </p>
            
            <p className="leading-relaxed">
              Our mission is to foster collaboration, share groundbreaking research, 
              and accelerate the translation of nanotechnology innovations into 
              clinical applications that benefit patients worldwide.
            </p>
            
            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-4">
              Our Vision
            </h2>
            <p className="leading-relaxed">
              To be the world's leading platform for advancing nanomedicine through 
              scientific excellence, international collaboration, and knowledge sharing.
            </p>
            
            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-8 mb-4">
              Conference Highlights
            </h2>
            <ul className="space-y-2">
              <li>• Cutting-edge research presentations</li>
              <li>• Interactive workshops and seminars</li>
              <li>• Networking opportunities with global experts</li>
              <li>• Exhibition of latest technologies</li>
              <li>• Career development sessions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
