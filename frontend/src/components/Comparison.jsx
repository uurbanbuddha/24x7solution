import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

const Comparison = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tried In-House. tried agencies. how Are we different?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* In-House */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">In-House</h3>
            </div>
            <div className="space-y-4">
              {[
                'Need exact instructions',
                'Have to commit long-term',
                'Hurry only to fill KPIs'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upthrust - Highlighted */}
          <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 border-2 border-black transform md:scale-110 relative z-10 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Recommended</span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Upthrust</h3>
            </div>
            <div className="space-y-4 mb-6">
              {[
                'Proven SaaS Marketing Process',
                'Building Your Brand Identity',
                'Seasoned B2B SaaS Experts',
                '60-day money back guarantee'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-6 rounded-lg transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Agency */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Agency</h3>
            </div>
            <div className="space-y-4">
              {[
                'Long locked contracts (12 months)',
                'Huge Ad spent. Low ROI.',
                'No result guarantee'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;