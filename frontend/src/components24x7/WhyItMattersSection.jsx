import React from 'react';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Why it matters - honest value prop
const WhyItMattersSection = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most businesses struggle with the same growth problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
                <DollarSign className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rising CAC</h3>
              <p className="text-gray-400 leading-relaxed">
                Customer acquisition costs keep climbing while quality drops
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
                <Users className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unqualified Leads</h3>
              <p className="text-gray-400 leading-relaxed">
                Sales teams waste time on prospects who will never buy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-6">
                <TrendingUp className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Slow Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                Revenue targets keep getting pushed further into the future
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;