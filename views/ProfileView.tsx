import React from 'react';
import { FlameIcon, StarIcon, CheckCircleIcon, PencilSquareIcon, Cog6ToothIcon, LockClosedIcon, TrophyIcon, WandSparklesIcon } from '../components/icons/Icons';
import { Image } from '../components/Image';

interface ProfileViewProps {
  user: {
    name: string;
    avatarUrl: string | null;
  };
  streak: number;
  maxStreak: number;
  totalActivities: number;
  unlockedBadges: string[];
  onCustomizeAvatar: () => void;
  onEditAvatar: () => void;
}

const StatCard: React.FC<{ icon: React.ReactNode; value: number | string; label: string }> = ({ icon, value, label }) => (
  <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-1 shadow-lg shadow-black/20">
    <div className="w-8 h-8 text-purple-400">{icon}</div>
    <span className="text-2xl font-bold">{value}</span>
    <span className="text-xs text-white/60">{label}</span>
  </div>
);

const Achievement: React.FC<{ imageUrl: string | null; unlocked: boolean; title: string }> = ({ imageUrl, unlocked, title }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className={`relative w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-300 ${unlocked ? 'bg-gradient-to-br from-purple-500 to-indigo-600 p-0.5' : 'bg-slate-800/50 border border-slate-700'}`}>
       {unlocked && <div className="absolute -inset-1 blur-lg bg-purple-500/30 animate-subtle-pulse rounded-xl" />}
      {unlocked && imageUrl ? (
        <Image src={imageUrl} alt={title} className="w-full h-full rounded-[10px]" />
      ) : (
        <LockClosedIcon className="w-8 h-8 text-slate-500" />
      )}
    </div>
    <span className={`text-xs text-center ${unlocked ? 'text-white/80' : 'text-white/40'}`}>{title}</span>
  </div>
);

export const ProfileView: React.FC<ProfileViewProps> = ({ user, streak, maxStreak, totalActivities, unlockedBadges, onCustomizeAvatar, onEditAvatar }) => {
  const allAchievements = [
    { id: '14day', title: '14 Day Streak', imageUrl: unlockedBadges.find(url => url) || null, unlocked: streak >= 14 && unlockedBadges.length > 0 },
    { id: '30day', title: '30 Day Streak', imageUrl: streak >= 30 ? `https://picsum.photos/seed/badge-30/200` : null, unlocked: streak >= 30 },
    { id: '60day', title: '60 Day Streak', imageUrl: streak >= 60 ? `https://picsum.photos/seed/badge-60/200` : null, unlocked: streak >= 60 },
    { id: '100day', title: '100 Day Streak', imageUrl: streak >= 100 ? `https://picsum.photos/seed/badge-100/200` : null, unlocked: streak >= 100 },
  ];

  return (
    <div className="px-6 pb-8 animate-fade-in">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="absolute -inset-2 bg-purple-500/30 rounded-full blur-xl animate-pulse-scale" />
          <Image
            key={user.avatarUrl}
            src={user.avatarUrl}
            alt="User Avatar"
            className="relative w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30 animate-pop-in"
          />
          <button
            onClick={onCustomizeAvatar}
            className="absolute -bottom-1 -right-1 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-slate-900 hover:bg-indigo-500 transition-colors shadow-lg"
            aria-label="Generate New Avatar"
          >
            <PencilSquareIcon className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={onEditAvatar}
            className="absolute -bottom-1 -left-1 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-slate-900 hover:bg-purple-500 transition-colors shadow-lg"
            aria-label="Edit Avatar with AI"
          >
            <WandSparklesIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p className="text-white/60">Cosmic Voyager</p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold text-white/90 mb-4 text-center">My Stats</h3>
        <div className="grid grid-cols-3 gap-3">
          <StatCard icon={<FlameIcon />} value={streak} label="Current Streak" />
          <StatCard icon={<TrophyIcon />} value={maxStreak} label="Max Streak" />
          <StatCard icon={<CheckCircleIcon />} value={totalActivities} label="Logs" />
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold text-white/90 mb-4 text-center">Achievements</h3>
        <div className="grid grid-cols-4 gap-4">
          {allAchievements.map(ach => (
            <Achievement key={ach.id} title={ach.title} imageUrl={ach.imageUrl} unlocked={ach.unlocked} />
          ))}
        </div>
      </div>
       <div className="flex justify-center">
          <button className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
              <Cog6ToothIcon className="w-5 h-5"/>
              <span>Settings</span>
          </button>
       </div>
    </div>
  );
};