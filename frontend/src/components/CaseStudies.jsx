import React from 'react';
import { caseStudies } from '../mockData';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            It's proven: The best results come from Focused Experimentation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 transform hover:-translate-y-2"
            >
              {study.image && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.category}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              {study.logo && (
                <div className="mb-6 flex items-center justify-center h-16">
                  <img 
                    src={study.logo} 
                    alt={study.category}
                    className="h-full w-auto object-contain"
                  />
                </div>
              )}
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
                  {study.category}
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-4xl font-bold text-black mb-1">{study.metric1}</div>
                    <div className="text-sm text-gray-600 uppercase">{study.metric1Label}</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-4xl font-bold text-black mb-1">{study.metric2}</div>
                    <div className="text-sm text-gray-600 uppercase">{study.metric2Label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;