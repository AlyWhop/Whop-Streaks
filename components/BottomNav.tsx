import React from 'react';
import { WhopBrandLogoIcon, TrophyIcon, StarIcon, UserIcon, CustomBrushIcon } from './icons/Icons';
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
      <button onClick={onClick} className={`flex flex-col items-center space-y-1 w-16 transition-all duration-300 ${active ? 'text-white scale-110' : 'text-gray-400 hover:text-white'}`}>
        {icon}
        <span className="text-xs font-medium transition-all duration-300 [text-shadow:0_0_10px_rgba(134,239,172,0)] group-hover:text-green-300 group-hover:[text-shadow:0_0_10px_rgba(134,239,172,0.8)]">{label}</span>
      </button>
      {/* Tooltip */}
      <div 
        role="tooltip"
        className="absolute bottom-full mb-2 px-3 py-1.5 bg-gray-800 text-white text-xs font-semibold rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10"
      >
        {label}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>
    </div>
  );
};

interface BottomNavProps {
  currentView: View;
  navigateTo: (view: View) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, navigateTo }) => {
  return (
    <nav className="absolute bottom-0 left-0 right-0 h-24 bg-black/30 backdrop-blur-lg border-t border-white/10 rounded-t-[30px]">
      <div className="flex justify-around items-center h-full px-2">
        <NavItem 
          icon={<WhopBrandLogoIcon className="w-10 h-5" />} 
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
          icon={<CustomBrushIcon className="w-7 h-7" />}
          label="Designs"
          active={currentView === 'designs'}
          onClick={() => navigateTo('designs')}
        />
      </div>
    </nav>
  );
};