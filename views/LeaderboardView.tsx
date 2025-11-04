import React, { useState, useEffect } from 'react';
import { FlameIcon, LoaderIcon } from '../components/icons/Icons';
import { Image } from '../components/Image';
import { getLeaderboard, LeaderboardEntry } from '../services/supabaseService';

const rankStyles = {
  1: {
    badge: 'from-amber-400 to-yellow-500 text-white',
    border: 'border-amber-400',
    glow: 'shadow-amber-500/50',
  },
  2: {
    badge: 'from-slate-300 to-slate-400 text-slate-800',
    border: 'border-slate-300',
    glow: 'shadow-slate-400/50',
  },
  3: {
    badge: 'from-amber-600 to-yellow-700 text-white',
    border: 'border-amber-600',
    glow: 'shadow-yellow-700/50',
  },
};

const UserCard: React.FC<{ user: LeaderboardEntry; index: number }> = ({ user, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const styles = rankStyles[user.rank as keyof typeof rankStyles] || {
    badge: 'from-gray-600 to-gray-700 text-white',
    border: 'border-gray-600',
    glow: '',
  };
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  // Higher streak = faster pulse. Clamp between 0.8s and 2s.
  const animationDuration = Math.max(0.8, 2.5 - user.streak * 0.08);

  return (
    <div
      className={`flex items-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${styles.glow} shadow-lg`}
    >
      <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br ${styles.badge} font-bold text-lg`}>
        {user.rank}
      </div>
      <Image src={user.avatar} alt={user.name} className={`w-12 h-12 rounded-full ml-4 border-2 ${styles.border}`} />
      <div className="ml-4 flex-grow">
        <p className="font-bold text-lg">{user.name}</p>
      </div>
      <div className="flex items-center space-x-2">
        <FlameIcon
          className="w-6 h-6 text-orange-400 animate-pulse-scale"
          style={{ animationDuration: `${animationDuration}s` }}
        />
        <span className="font-bold text-xl">{user.streak}</span>
      </div>
    </div>
  );
};


export const LeaderboardView: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      const data = await getLeaderboard();
      setLeaderboardData(data);
      setIsLoading(false);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="px-6">
      <h2 className="text-2xl font-bold text-white/90 tracking-wide text-center mb-6">Top Streakers</h2>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center pt-10 text-white/70">
            <LoaderIcon className="w-8 h-8 animate-spin mb-4" />
            <p>Fetching rankings...</p>
        </div>
      ) : (
        <div className="space-y-3">
          {leaderboardData.map((user, index) => (
            <UserCard key={user.rank} user={user} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};