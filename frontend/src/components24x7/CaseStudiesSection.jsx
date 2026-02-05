import React from 'react';
import { ArrowRight } from 'lucide-react';
import { caseStudiesData } from '../mockData24x7';
import { Button } from '../components/ui/button';

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results.
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Real Growth.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve exponential growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-400 mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{study.results.metric1}</div>
                    <div className="text-xs text-gray-400">{study.results.label1}</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{study.results.metric2}</div>
                    <div className="text-xs text-gray-400">{study.results.label2}</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">{study.results.metric3}</div>
                    <div className="text-xs text-gray-400">{study.results.label3}</div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full text-blue-400 hover:text-white hover:bg-blue-500/10"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;