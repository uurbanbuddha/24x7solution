import React, { useState } from 'react';
import { Zap, TrendingUp, Target, Users, Bot, Check } from 'lucide-react';
import { services } from '../mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const iconMap = {
  Zap: Zap,
  TrendingUp: TrendingUp,
  Target: Target,
  Users: Users,
  Bot: Bot
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('performance');

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">how to generate Revenue?</h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Service Icons Row */}
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-transparent h-auto mb-12">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border-2 data-[state=active]:border-black data-[state=active]:bg-gray-50 hover:border-gray-400 transition-all duration-300 h-auto space-y-3"
                >
                  <div className={`p-3 rounded-lg ${
                    activeTab === service.id ? 'bg-black' : 'bg-gray-100'
                  } transition-colors duration-300`}>
                    <IconComponent className={`h-6 w-6 ${
                      activeTab === service.id ? 'text-white' : 'text-gray-700'
                    }`} />
                  </div>
                  <span className="text-sm font-semibold text-center leading-tight">{service.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Service Content */}
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;