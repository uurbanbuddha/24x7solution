import React from 'react';
import { Target, Code, TrendingUp, Search, BarChart, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      id: 'lead-gen',
      title: 'High-Intent Lead Generation',
      description: 'AI-powered lead qualification and nurturing system',
      icon: Target,
      features: [
        'Multi-channel lead capture',
        'AI-based lead scoring',
        'Automated follow-up sequences',
        'CRM integration'
      ],
      price: '₹25,000/month',
      recommended: true
    },
    {
      id: 'web-dev',
      title: 'Custom Website & App Development',
      description: 'High-converting websites and applications',
      icon: Code,
      features: [
        'Custom design & development',
        'SEO-optimized architecture',
        'Mobile-first approach',
        'Performance optimization'
      ],
      price: '₹1,50,000 - ₹5,00,000'
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      description: 'Data-driven Meta & Google Ads campaigns',
      icon: TrendingUp,
      features: [
        'Campaign strategy & setup',
        'A/B testing & optimization',
        'Real-time analytics',
        'ROI-focused approach'
      ],
      price: '₹30,000/month + Ad Spend'
    }
  ];

  return (\n    <section id=\"services\" className=\"py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">\n      <div className=\"container mx-auto px-6\">\n        <motion.div\n          initial={{ opacity: 0, y: 20 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          viewport={{ once: true }}\n          transition={{ duration: 0.6 }}\n          className=\"text-center mb-16\"\n        >\n          <h2 className=\"text-4xl md:text-5xl font-bold text-white mb-4\">\n            Services Designed for\n            <span className=\"bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent\"> Revenue Growth</span>\n          </h2>\n          <p className=\"text-xl text-gray-400 max-w-3xl mx-auto\">\n            We don't just generate leads. We build entire growth systems that scale.\n          </p>\n        </motion.div>\n\n        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto\">\n          {services.map((service) => {\n            const IconComponent = service.icon;\n            return (\n              <motion.div\n                key={service.id}\n                initial={{ opacity: 0, y: 30 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.5 }}\n                whileHover={{ y: -10, transition: { duration: 0.3 } }}\n                className=\"relative group\"\n              >\n                {service.recommended && (\n                  <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2 z-10\">\n                    <div className=\"bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50\">\n                      ⭐ Most Popular\n                    </div>\n                  </div>\n                )}\n\n                <div className={`h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border transition-all duration-300 ${\n                  service.recommended\n                    ? 'border-orange-500/50 shadow-xl shadow-orange-500/20'\n                    : 'border-blue-500/20 group-hover:border-blue-500/50'\n                }`}>\n                  <div className=\"mb-6\">\n                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${\n                      service.recommended\n                        ? 'bg-gradient-to-br from-orange-500 to-orange-600'\n                        : 'bg-gradient-to-br from-blue-500 to-purple-500'\n                    } group-hover:scale-110 transition-transform duration-300`}>\n                      <IconComponent className=\"h-8 w-8 text-white\" />\n                    </div>\n                  </div>\n\n                  <h3 className=\"text-2xl font-bold text-white mb-3\">{service.title}</h3>\n                  <p className=\"text-gray-400 mb-6\">{service.description}</p>\n\n                  <div className=\"space-y-3 mb-6\">\n                    {service.features.map((feature, idx) => (\n                      <div key={`${service.id}-feature-${idx}`} className=\"flex items-start space-x-2\">\n                        <Check className=\"h-5 w-5 text-green-400 flex-shrink-0 mt-0.5\" />\n                        <span className=\"text-sm text-gray-300\">{feature}</span>\n                      </div>\n                    ))}\n                  </div>\n\n                  <div className=\"mb-6\">\n                    <p className=\"text-2xl font-bold text-white\">{service.price}</p>\n                  </div>\n\n                  <Button\n                    className={`w-full font-semibold transition-all duration-300 group-hover:translate-x-1 ${\n                      service.recommended\n                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30'\n                        : 'bg-white/10 hover:bg-white/20 text-white'\n                    }`}\n                  >\n                    Learn More\n                    <ArrowRight className=\"ml-2 h-4 w-4\" />\n                  </Button>\n                </div>\n              </motion.div>\n            );\n          })}\n        </div>\n\n        <motion.div\n          initial={{ opacity: 0, y: 20 }}\n          whileInView={{ opacity: 1, y: 0 }}\n          viewport={{ once: true }}\n          transition={{ duration: 0.6, delay: 0.3 }}\n          className=\"text-center mt-16\"\n        >\n          <p className=\"text-gray-400 mb-6\">Not sure which service is right for you?</p>\n          <Button\n            size=\"lg\"\n            className=\"bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/30\"\n            onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}\n          >\n            Get Free Consultation\n            <ArrowRight className=\"ml-2 h-5 w-5\" />\n          </Button>\n        </motion.div>\n      </div>\n    </section>\n  );\n};\n\nexport default ServicesSection;
