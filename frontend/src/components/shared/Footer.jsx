import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold text-white">JobPortal</h2>
          <p className="mt-2 text-sm">
            Connecting talent with opportunity. Your dream job is just a click away.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Job Seekers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/search-jobs" className="hover:text-white">Find Jobs</a></li>
            <li><a href="/upload-resume" className="hover:text-white">Upload Resume</a></li>
            <li><a href="/profile" className="hover:text-white">My Profile</a></li>
            <li><a href="/faq" className="hover:text-white">Help Center</a></li>
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Employers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/post-job" className="hover:text-white">Post a Job</a></li>
            <li><a href="/employer-login" className="hover:text-white">Employer Login</a></li>
            <li><a href="/plans" className="hover:text-white">Pricing Plans</a></li>
            <li><a href="/support" className="hover:text-white">Support</a></li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 JobPortal. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
