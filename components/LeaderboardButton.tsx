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
      className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300"
    >
      Leaderboard
    </button>
  );
};
