import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { liveActivityData } from '../mockData24x7';

// FOMO - Fear Of Missing Out
const FOMONotification = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show notifications every 15 seconds
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % liveActivityData.length);
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const activity = liveActivityData[currentActivity];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed bottom-8 left-8 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/30 rounded-xl shadow-2xl shadow-green-500/20 p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">{activity.user}</p>
                <p className="text-gray-400 text-sm">{activity.action}</p>
                <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FOMONotification;