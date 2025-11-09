
import React from 'react';
import { ChevronRightIcon } from './icons/Icons';

interface StreakButtonProps {
  text: string;
  icon: React.ReactNode;
}

export const StreakButton: React.FC<StreakButtonProps> = ({ text, icon }) => {
  return (
    <button className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-800/50 backdrop-blur-lg border border-slate-700/80 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 shadow-lg shadow-black/20">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/80 to-sky-500/80 flex items-center justify-center shadow-md shadow-sky-500/20">
          {icon}
        </div>
        <span className="font-semibold text-white/90">{text}</span>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-white/50" />
    </button>
  );
};