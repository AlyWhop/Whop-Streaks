import React from 'react';
import { SparklesIcon, HeartIcon } from '../components/icons/Icons';

const DesignPreviewCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/80 rounded-2xl p-4 text-center flex flex-col items-center justify-center space-y-2 opacity-60 cursor-not-allowed shadow-lg shadow-black/20">
      <div className="w-10 h-10 text-purple-400">{icon}</div>
      <h4 className="font-semibold text-white/80">{title}</h4>
      <span className="text-xs text-white/50 bg-slate-700/50 px-2 py-0.5 rounded-full">Coming Soon</span>
    </div>
);

export const DesignsView: React.FC = () => {
  return (
    <div className="px-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white/90 tracking-wide">App Customization</h2>
        <p className="text-white/60 mt-2">Personalize your experience. More themes and designs are on the way!</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <DesignPreviewCard icon={<SparklesIcon />} title="Cosmic Theme" />
        <DesignPreviewCard icon={<HeartIcon />} title="Nebula Icons" />
        <DesignPreviewCard icon={<SparklesIcon />} title="Solar Flare Accent" />
        <DesignPreviewCard icon={<HeartIcon />} title="Galaxy Gradients" />
      </div>
    </div>
  );
};