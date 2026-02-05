import React from 'react';
import { Check, Star } from 'lucide-react';
import { pricingPlansData } from '../mockData24x7';
import { Button } from '../components/ui/button';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees. No surprises. Just results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlansData.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 transform md:scale-110 shadow-2xl shadow-blue-500/50 border-2 border-blue-400'
                  : 'bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-5xl font-bold ${
                    plan.popular ? 'text-white' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${
                  plan.popular ? 'text-blue-100' : 'text-gray-400'
                }`}>
                  {plan.period}
                </p>
                <p className={`text-sm mt-2 ${
                  plan.popular ? 'text-blue-100' : 'text-gray-400'
                }`}>
                  {plan.description}
                </p>
                {plan.savings && (
                  <div className="mt-2 inline-block bg-green-500/20 border border-green-500/40 rounded-full px-3 py-1">
                    <p className="text-xs font-semibold text-green-400">{plan.savings}</p>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.popular ? 'bg-white/20' : 'bg-blue-500/20'
                    }`}>
                      <Check className={`h-3 w-3 ${
                        plan.popular ? 'text-white' : 'text-blue-400'
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      plan.popular ? 'text-white' : 'text-gray-300'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">✓ 60-Day Money Back Guarantee • ✓ No Long-Term Contracts</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;