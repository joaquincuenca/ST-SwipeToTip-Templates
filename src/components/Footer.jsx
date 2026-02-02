import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">SwipeToTip</h4>
            <p className="text-sm text-gray-600">
              Professional tipping solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900">Support</a></li>
              <li><a href="#" className="hover:text-gray-900">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a 
                  href="https://www.swipetotip.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  Main Website
                </a>
              </li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2026 SwipeToTip. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;