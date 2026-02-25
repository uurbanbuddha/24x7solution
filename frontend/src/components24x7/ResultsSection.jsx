import React from 'react';
import { caseStudiesData } from '../mockData24x7';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

// Results-focused section like RefineLabs
const ResultsSection = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Numbers That Matter
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real clients. Real results. Real growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-3">{study.industry}</div>
                <h3 className="text-xl font-bold text-white mb-6">{study.title}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-gray-800 pb-3">
                    <div>
                      <div className="text-3xl font-bold text-white">{study.results.metric1}</div>
                      <div className="text-xs text-gray-500 uppercase mt-1">{study.results.label1}</div>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-gray-800 pb-3">
                    <div>
                      <div className="text-3xl font-bold text-white">{study.results.metric2}</div>
                      <div className="text-xs text-gray-500 uppercase mt-1">{study.results.label2}</div>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-bold text-white">{study.results.metric3}</div>
                      <div className="text-xs text-gray-500 uppercase mt-1">{study.results.label3}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="ghost"
            className="text-blue-400 hover:text-white hover:bg-white/5 font-semibold"
          >
            View All Success Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;