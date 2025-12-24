import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BRAND_NAME, CONTACT_PHONE } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-warm-gray leading-tight">START TO FINISH</span>
            <span className="text-xs tracking-[0.2em] accent-orange text-white px-2 py-0.5 self-start uppercase font-semibold rounded">Home Remodeling</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#D97706] ${
                  isActive(link.path) ? 'text-[#D97706]' : 'text-warm-gray'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="accent-orange text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:accent-orange-hover shadow-lg transition-all"
            >
              <Phone size={16} />
              {CONTACT_PHONE}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-gray hover:text-orange-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-warm animate-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium ${
                  isActive(link.path) ? 'text-orange-600 bg-orange-50' : 'text-warm-gray'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="block w-full text-center accent-orange text-white px-5 py-4 font-bold"
            >
              Call {CONTACT_PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

