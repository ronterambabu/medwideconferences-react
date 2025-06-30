import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Conference Info</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/sessions" className="hover:text-primary-400 transition-colors">Sessions</Link></li>
              <li><Link to="/speakers" className="hover:text-primary-400 transition-colors">Speakers</Link></li>
              <li><Link to="/venue" className="hover:text-primary-400 transition-colors">Venue</Link></li>
              <li><Link to="/tentative-program" className="hover:text-primary-400 transition-colors">Program</Link></li>
            </ul>
          </div>

          {/* Participation */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Participation</h3>
            <ul className="space-y-2">
              <li><Link to="/registration" className="hover:text-primary-400 transition-colors">Registration</Link></li>
              <li><Link to="/abstract-submission" className="hover:text-primary-400 transition-colors">Submit Abstract</Link></li>
              <li><Link to="/sponsorship" className="hover:text-primary-400 transition-colors">Sponsorship</Link></li>
              <li><Link to="/brochure" className="hover:text-primary-400 transition-colors">Brochure</Link></li>
              <li><Link to="/ocm" className="hover:text-primary-400 transition-colors">OCM</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-sm">info@medwideconferences.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary-400" />
                <span className="text-sm">Conference Venue Address</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Stay updated with the latest conference news and announcements.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Medwide Conferences. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
