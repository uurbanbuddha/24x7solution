import React from 'react';
import { trustedBrandsData } from '../mockData24x7';
import { motion } from 'framer-motion';

// Minimalist trust section
const TrustedBySection = () => {
  return (
    <section className="py-16 bg-slate-900 border-b border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
            {trustedBrandsData.map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;