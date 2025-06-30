import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Memoize navigation items to prevent re-creation on every render
  const navigationItems = useMemo(() => [
    { path: '/', label: 'Home' },
    { path: '/sessions', label: 'Sessions' },
    { path: '/abstract-submission', label: 'Submit Abstract' },
    { path: '/registration', label: 'Registration' },
    { path: '/speakers', label: 'Speakers' },
    { path: '/ocm', label: 'OCM' },
    { path: '/venue', label: 'Venue' },
    { path: '/brochure', label: 'Brochure' },
    { path: '/about-us', label: 'About Us' },
    { path: '/tentative-program', label: 'Tentative Program' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/sponsorship', label: 'Exhibition and Sponsorship' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
  ], []);

  // Memoize the isActive function to prevent re-creation
  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  // Close mobile menu when clicking outside - optimized to prevent memory leaks
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Use passive listeners for better performance
    document.addEventListener('mousedown', handleClickOutside, { passive: true });
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on route change - prevent unnecessary renders
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav ref={menuRef} className="bg-white shadow-lg fixed w-full z-50 top-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/images/logo.png" 
                alt="Medwide Group" 
                className="h-10 w-auto"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/120x40/2563eb/ffffff?text=MEDWIDE";
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        style={{ willChange: isOpen ? 'max-height, opacity' : 'auto' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navigation);
