import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  
  // Memoize navigation items
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lastScrollY.current = window.scrollY;
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const isActive = useCallback((path: string) => 
    location.pathname === path
  , [location.pathname]);

  return (
    <nav 
      ref={menuRef} 
      className="h-16 bg-white will-change-transform"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full">
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
              onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile Menu with improved transitions */}
      <div 
        className={`lg:hidden fixed left-0 right-0 top-16 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          maxHeight: 'calc(100vh - 4rem)',
          overflowY: 'auto',
          willChange: 'transform',
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
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
});

Navigation.displayName = 'Navigation';

export default Navigation;
