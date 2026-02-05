import React from 'react';
import { Check, Star } from 'lucide-react';
import { pricingPlans } from '../mockData';
import { Button } from './ui/button';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for B2B SaaS Teams Who Want More Demos, Not Fake Promises
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-black to-gray-800 border-2 border-black transform md:scale-105 shadow-2xl relative'
                  : 'bg-white border-2 border-gray-200 hover:shadow-lg hover:border-gray-300'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlight ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span className={`text-4xl font-bold ${
                    plan.highlight ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${
                  plan.highlight ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {plan.adSpend}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.highlight ? 'bg-green-500' : 'bg-black'
                    }`}>
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className={`text-sm ${
                      plan.highlight ? 'text-white' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <p className={`text-xs mb-6 ${
                plan.highlight ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {plan.note}
              </p>

              <Button 
                className={`w-full py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.highlight
                    ? 'bg-white hover:bg-gray-100 text-black'
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">All plans include 60-day money back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;