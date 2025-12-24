import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-[#4A443F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Start to Finish</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Quality home remodeling since 2006. From concept to completion, we treat your home like our own.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Kitchen Remodeling</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Bathroom Remodeling</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Room Additions</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Roof & Siding</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Decks & Gutters</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 flex-shrink-0" />
                <span>Serving Your Local Metro Area & Suburbs</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Free Estimate</h3>
            <p className="text-sm text-gray-300 mb-6">Ready to start your project? Get a free, no-obligation quote today.</p>
            <Link to="/contact" className="inline-block w-full text-center accent-orange py-3 rounded text-sm font-bold hover:accent-orange-hover transition-colors shadow-lg">
              Get Started Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 Start to Finish Home Remodeling. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

