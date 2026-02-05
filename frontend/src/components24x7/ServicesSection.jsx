import React from 'react';
import { Target, Code, TrendingUp, Search, BarChart, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { SERVICES } from '../config';

const iconMap = {
  Target: Target,
  Code: Code,
  TrendingUp: TrendingUp,
  Search: Search,
  BarChart: BarChart
};

// Hick's Law - Simplified choices with "Recommended" tag
const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services Designed for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Revenue Growth</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just generate leads. We build entire growth systems that scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* Recommended Tag - Hick's Law (reduces analysis paralysis) */}
                {service.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border transition-all duration-300 ${
                  service.recommended
                    ? 'border-orange-500/50 shadow-xl shadow-orange-500/20'
                    : 'border-blue-500/20 group-hover:border-blue-500/50'
                }`}>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      service.recommended
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                        : 'bg-gradient-to-br from-blue-500 to-purple-500'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white">{service.price}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full font-semibold transition-all duration-300 group-hover:translate-x-1 ${
                      service.recommended
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Not sure which service is right for you?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30"
            onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;