import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent1 to-accent3 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">ST</span>
          </div>
          <span className="text-xl font-bold">
            SwipeToTip <span className="text-accent1">Templates</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('templates')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Templates
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-to-use')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            How to Use
          </button>
          <a
            href="https://www.swipetotip.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Main Site
          </a>
          <button
            onClick={() => scrollToSection('templates')}
            className="bg-accent1 hover:bg-accent1/90 text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105"
          >
            Download
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-2xl p-6 space-y-4">
          <button
            onClick={() => scrollToSection('templates')}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
          >
            Templates
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('how-to-use')}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
          >
            How to Use
          </button>
          <a
            href="https://www.swipetotip.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
          >
            Main Site
          </a>
          <button
            onClick={() => scrollToSection('templates')}
            className="w-full bg-accent1 hover:bg-accent1/90 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Download Templates
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;