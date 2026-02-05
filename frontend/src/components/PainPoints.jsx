import React from 'react';
import { AlertCircle } from 'lucide-react';
import { painPoints } from '../mockData';
import { Button } from './ui/button';

const PainPoints = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">DID YOU MISS YOUR Q2 TARGETS?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Are you Struggling with</h2>
        </div>

        {/* Scrolling pain points */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex space-x-8 animate-scroll">
            {[...painPoints, ...painPoints].map((point, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 text-4xl md:text-6xl font-bold text-white/20 hover:text-white/40 transition-colors duration-300 whitespace-nowrap tracking-wider"
                style={{ letterSpacing: '0.5rem' }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PainPoints;