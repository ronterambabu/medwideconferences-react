import { memo } from 'react';

const Header = memo(() => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-800 will-change-transform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold font-heading mb-2">
              International Summit On{' '}
              <span className="text-yellow-300">Nanomedicine & Nanotechnology</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              <strong>Theme:</strong> Exploring the Progress of Nanomedicine with Trending Nanotechnologies
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/images/download-brochure.gif" 
              alt="Download Brochure" 
              className="h-16 w-auto transform-gpu"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://via.placeholder.com/120x60/fbbf24/1e40af?text=BROCHURE";
                target.tabIndex = -1;
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
