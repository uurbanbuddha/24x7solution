import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="bg-black rounded-lg p-2 group-hover:bg-gray-800 transition-colors duration-300">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Upthrust</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Services</a>
            <a href="#case-studies" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Case Studies</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Testimonials</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleBookCall}
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Free Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <a href="#services" className="block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Services</a>
            <a href="#case-studies" className="block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Case Studies</a>
            <a href="#pricing" className="block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Pricing</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">Testimonials</a>
            <Button 
              onClick={handleBookCall}
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
            >
              Book Free Strategy Call
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;