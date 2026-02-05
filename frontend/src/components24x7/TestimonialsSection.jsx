import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { clientTestimonials } from '../mockData24x7';
import { Button } from '../components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = clientTestimonials[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Growth Leaders</span>
          </h2>
          <p className="text-xl text-gray-400">Hear from the teams we've helped scale</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 border border-blue-500/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-500/50"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="mb-4">
                  <p className="text-lg font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-sm text-blue-400">{testimonial.company}</p>
                </div>

                <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                  <p className="text-sm font-semibold text-green-400">{testimonial.metric}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-700">
              <Button
                onClick={goToPrev}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <div className="flex space-x-2">
                {clientTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={goToNext}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;