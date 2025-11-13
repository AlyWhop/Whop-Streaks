import React from 'react';
import { NewCompanyLogoIcon, TrophyIcon, StarIcon, UserIcon, BrushIcon } from './icons/Icons';
import type { View } from '../App';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <div className="relative flex justify-center group">
      <button 
        onClick={onClick} 
        className={`relative flex flex-col items-center space-y-1 w-16 transition-all duration-300 ${active ? 'text-white' : 'text-slate-400 hover:text-white'}`}
        style={{ transform: active ? 'translateY(-4px)' : 'translateY(0)' }}
      >
        <div className="relative flex items-center justify-center h-7">
          {active && <div className="absolute -inset-2 bg-sky-400/20 rounded-full blur-md" />}
          {icon}
        </div>
        <span className="text-xs font-medium">{label}</span>
      </button>
      {active && (
        <div 
          className="absolute -bottom-2.5 h-1 w-8 bg-sky-400 rounded-full transition-all duration-300"
          style={{ boxShadow: '0 0 8px 0 var(--glow-sky)' }}
        />
      )}
    </div>
  );
};

interface BottomNavProps {
  currentView: View;
  navigateTo: (view: View) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, navigateTo }) => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 h-24 bg-slate-900/40 backdrop-blur-xl border-t border-slate-700/80 rounded-t-[30px]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      <div className="flex justify-around items-center h-full px-2">
        <NavItem 
          icon={<NewCompanyLogoIcon className="w-12 h-7" />} 
          label="Whop" 
          active={currentView === 'home'}
          onClick={() => navigateTo('home')}
        />
        <NavItem 
          icon={<TrophyIcon className="w-7 h-7" />} 
          label="Leaderboard" 
          active={currentView === 'leaderboard'}
          onClick={() => navigateTo('leaderboard')}
        />
        <NavItem 
          icon={<StarIcon className="w-7 h-7" />} 
          label="Rewards" 
          active={currentView === 'rewards'}
          onClick={() => navigateTo('rewards')}
        />
        <NavItem 
          icon={<UserIcon className="w-7 h-7" />} 
          label="Profile" 
          active={currentView === 'profile'}
          onClick={() => navigateTo('profile')}
        />
        <NavItem
          icon={<BrushIcon className="w-7 h-7" />}
          label="Designs"
          active={currentView === 'designs'}
          onClick={() => navigateTo('designs')}
        />
      </div>
    </nav>
  );
};