import React from 'react';
import { MegaphoneIcon } from './icons/Icons';

export const RewardPreviewCard: React.FC = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full max-w-xs backdrop-blur-sm shadow-lg animate-pop-in">
      <div className="flex items-start">
        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-white/10">
          <MegaphoneIcon className="w-6 h-6 text-white/50" />
        </div>
        <div className="flex-grow text-left">
          <h3 className="font-bold text-white/90">Community Shoutout</h3>
          <p className="text-sm text-white/60">Reach a 7-day streak</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-white/10 rounded-full h-2.5">
            <div className="w-0 h-full rounded-full"></div>
        </div>
      </div>
      <button 
        disabled
        className="mt-4 w-full py-2 px-4 rounded-full font-semibold text-sm bg-gray-500/20 text-gray-400 cursor-not-allowed"
      >
        Redeem
      </button>
    </div>
  );
};
