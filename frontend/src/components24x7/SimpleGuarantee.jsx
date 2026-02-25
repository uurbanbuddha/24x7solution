import React from 'react';
import { Shield, TrendingUp, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

// Simple, honest guarantee
const SimpleGuarantee = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">60-Day Money-Back Guarantee</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Guarantee Your Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              If we fail to deliver the agreed KPIs within 60 days,<br />you get 100% of your money back. No questions asked.
            </p>
          </motion.div>

          {/* 3 Card Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/30 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <TrendingUp className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Lead Volume</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We agree on minimum qualified leads per month. Fall short? Full refund.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/30 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <CheckCircle className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Lead Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leads must match your ICP with genuine buying intent. Low quality = money back.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/30 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <Lock className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">No Contracts</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Month-to-month. Cancel anytime. We earn your business every month.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleGuarantee;