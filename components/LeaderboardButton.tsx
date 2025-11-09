import React from 'react';
import { triggerHaptic } from '../services/hapticService';

interface LeaderboardButtonProps {
  onClick: () => void;
}

export const LeaderboardButton: React.FC<LeaderboardButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    triggerHaptic('impactLight');
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-bold text-lg shadow-lg shadow-sky-500/20 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/40 hover:brightness-110 active:scale-95"
    >
      Leaderboard
    </button>
  );
};