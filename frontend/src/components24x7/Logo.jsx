import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const Logo = ({ variant = 'default', className = '' }) => {
  if (variant === 'icon') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 blur-lg opacity-50 rounded-full"></div>
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-2">
          <Bot className="h-6 w-6 text-white" />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300 rounded-xl"></div>
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-2.5 transform group-hover:scale-105 transition-transform duration-300">
          <Bot className="h-7 w-7 text-white" />
          <Sparkles className="h-3 w-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          24x7solution
        </span>
        <span className="text-xs text-gray-400 -mt-1">AI-Powered Growth</span>
      </div>
    </div>
  );
};

export default Logo;