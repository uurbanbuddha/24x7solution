import React from 'react';
import { Target, Zap, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

// What we do - simple and clear
const WhatWeDoSection = () => {
  const services = [
    {
      icon: Target,
      title: 'AI-Powered Lead Generation',
      description: 'We identify and qualify decision-makers who match your ideal customer profile using advanced AI systems.'
    },
    {
      icon: Zap,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns across Meta, Google, and LinkedIn that focus on ROI, not vanity metrics.'
    },
    {
      icon: BarChart,
      title: 'Full-Funnel Optimization',
      description: 'From first touch to closed deal, we optimize every step of your customer acquisition journey.'
    }
  ];

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
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We help B2B and service businesses acquire customers profitably
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/30 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <Icon className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-700 text-gray-300 hover:border-white hover:text-white hover:bg-white/5 font-semibold px-8 py-6 rounded-lg transition-all duration-300"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn How We Can Help You
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;