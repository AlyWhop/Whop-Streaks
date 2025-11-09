import React, { useState, useEffect } from 'react';
import { FlameIcon, LoaderIcon, CrownIcon } from '../components/icons/Icons';
import { Image } from '../components/Image';
import { getLeaderboard, getCurrentUserRank, LeaderboardEntry, UserProfileData } from '../services/supabaseService';

interface LeaderboardViewProps {
  userProfile: UserProfileData;
}

const podiumStyles = {
  1: {
    avatarSize: 'w-24 h-24',
    glowClass: 'animate-podium-glow-gold',
    border: 'border-yellow-400',
    rankBadge: 'bg-yellow-400 text-black',
    textColor: 'text-yellow-300',
    translation: 'transform -translate-y-5',
  },
  2: {
    avatarSize: 'w-20 h-20',
    glowClass: 'animate-podium-glow-silver',
    border: 'border-slate-300',
    rankBadge: 'bg-slate-300 text-black',
    textColor: 'text-slate-200',
    translation: 'transform translate-y-2',
  },
  3: {
    avatarSize: 'w-20 h-20',
    glowClass: 'animate-podium-glow-bronze',
    border: 'border-amber-600',
    rankBadge: 'bg-amber-600 text-white',
    textColor: 'text-amber-500',
    translation: 'transform translate-y-2',
  },
};

const PodiumItem: React.FC<{ user: LeaderboardEntry; style: React.CSSProperties }> = ({ user, style }) => {
  const styles = podiumStyles[user.rank as keyof typeof podiumStyles];
  
  return (
    <div 
        className={`flex flex-col items-center p-2 opacity-0 animate-rise-up ${styles.translation}`}
        style={style}
    >
        {user.rank === 1 && <CrownIcon className="w-8 h-8 text-yellow-400 mb-2" style={{ filter: 'drop-shadow(0 0 10px #fbbF24)' }} />}
      <div className="relative">
        <Image 
          src={user.avatar} 
          alt={user.name} 
          className={`rounded-full border-4 ${styles.border} ${styles.avatarSize} ${styles.glowClass}`} 
        />
        <div className={`absolute -bottom-2 -right-2 w-8 h-8 flex items-center justify-center rounded-full ${styles.rankBadge} font-bold text-lg border-2 border-slate-900`}>
          {user.rank}
        </div>
      </div>
      <p className="mt-3 font-bold text-lg truncate max-w-[100px]">{user.name}</p>
      <div className="flex items-center space-x-1.5">
        <FlameIcon className={`w-5 h-5 ${styles.textColor}`} />
        <span className={`font-bold text-lg ${styles.textColor}`}>{user.streak}</span>
      </div>
    </div>
  );
};


const UserCard: React.FC<{ user: LeaderboardEntry; style: React.CSSProperties }> = ({ user, style }) => {
  return (
    <div
      className="flex items-center p-3 rounded-2xl bg-slate-800/50 backdrop-blur-lg border border-slate-700/80 shadow-lg shadow-black/20 opacity-0 animate-rise-up"
      style={style}
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-700 font-bold text-base text-white/90">
        {user.rank}
      </div>
      <Image src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full ml-4 border-2 border-slate-600" />
      <div className="ml-4 flex-grow">
        <p className="font-bold text-lg truncate max-w-[120px]">{user.name}</p>
      </div>
      <div className="flex items-center space-x-2">
        <FlameIcon className="w-6 h-6 text-orange-400" />
        <span className="font-bold text-xl">{user.streak}</span>
      </div>
    </div>
  );
};

const YourRankCard: React.FC<{ user: LeaderboardEntry; style: React.CSSProperties }> = ({ user, style }) => {
  return (
    <div 
        className="flex items-center p-3 mt-6 rounded-2xl bg-gradient-to-r from-purple-600/30 to-sky-600/30 backdrop-blur-lg border-2 border-purple-400 opacity-0 animate-rise-up shadow-2xl shadow-purple-500/20"
        style={style}
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 font-bold text-base text-white">
        {user.rank}
      </div>
      <Image src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full ml-4 border-2 border-purple-300" />
      <div className="ml-4 flex-grow">
        <p className="font-bold text-lg">{user.name} (You)</p>
      </div>
      <div className="flex items-center space-x-2">
        <FlameIcon className="w-6 h-6 text-orange-400" />
        <span className="font-bold text-xl">{user.streak}</span>
      </div>
    </div>
  );
};


export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ userProfile }) => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState<LeaderboardEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      setIsLoading(true);
      try {
        const [boardData, rankData] = await Promise.all([
          getLeaderboard(),
          getCurrentUserRank(userProfile),
        ]);
        setLeaderboardData(boardData);
        setCurrentUserRank(rankData);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLeaderboardData();
  }, [userProfile]);

  const topThree = leaderboardData.slice(0, 3);
  const restOfList = leaderboardData.slice(3);

  const podiumOrder = [
    topThree.find(u => u.rank === 2),
    topThree.find(u => u.rank === 1),
    topThree.find(u => u.rank === 3),
  ].filter(Boolean) as LeaderboardEntry[];

  return (
    <div className="px-4 pb-8">
      <h2 className="text-3xl font-black text-white/90 tracking-wider text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400" style={{ textShadow: '0 2px 10px var(--glow-purple)' }}>
        Top Streakers
      </h2>
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center pt-10 text-white/70">
          <LoaderIcon className="w-8 h-8 animate-spin mb-4" />
          <p>Summoning the Champions...</p>
        </div>
      ) : (
        <>
          {/* Podium */}
          {podiumOrder.length > 0 && (
            <div className="flex justify-around items-end mb-8 h-48">
              {podiumOrder.map((user, index) => (
                <PodiumItem 
                  key={user.rank} 
                  user={user} 
                  style={{ animationDelay: `${100 + index * 150}ms`}} 
                />
              ))}
            </div>
          )}

          {/* Rest of the list */}
          <div className="space-y-3">
            {restOfList.map((user, index) => (
              <UserCard 
                key={user.rank} 
                user={user} 
                style={{ animationDelay: `${400 + index * 100}ms` }} 
              />
            ))}
          </div>

          {/* Current User's Rank */}
          {currentUserRank && (
              <YourRankCard user={currentUserRank} style={{ animationDelay: '800ms' }} />
          )}
        </>
      )}
    </div>
  );
};