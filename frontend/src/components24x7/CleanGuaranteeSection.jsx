import React from 'react';
import { Shield, CheckCircle, TrendingUp, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

// Clean guarantee section inspired by professional B2B sites
const CleanGuaranteeSection = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">100% Risk-Free Guarantee</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We're So Confident,<br />We Guarantee Your Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              If we fail to deliver the agreed KPIs within 60 days, you get 100% of your money back.
            </p>
          </motion.div>

          {/* KPI Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700"
            >
              <TrendingUp className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Lead Volume</h3>
              <p className="text-gray-400 leading-relaxed">
                Minimum qualified leads per month agreed during onboarding. Fall short? Full refund.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700"
            >
              <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Lead Quality</h3>
              <p className="text-gray-400 leading-relaxed">
                Leads must match your ICP and show genuine buying intent. Low quality = money back.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700"
            >
              <Lock className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">No Contracts</h3>
              <p className="text-gray-400 leading-relaxed">
                Month-to-month engagement. Cancel anytime. We earn your business every single month.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanGuaranteeSection;