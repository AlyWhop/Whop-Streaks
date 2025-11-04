
import React from 'react';
import { ChevronRightIcon } from './icons/Icons';

interface StreakButtonProps {
  text: string;
  icon: React.ReactNode;
}

export const StreakButton: React.FC<StreakButtonProps> = ({ text, icon }) => {
  return (
    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
          {icon}
        </div>
        <span className="font-semibold text-white/90">{text}</span>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-white/50" />
    </button>
  );
};
