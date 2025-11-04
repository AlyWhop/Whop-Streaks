import React from 'react';
import { SparklesIcon, HeartIcon } from '../components/icons/Icons';

const DesignPreviewCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-lg text-center flex flex-col items-center justify-center space-y-2 opacity-60 cursor-not-allowed">
      <div className="w-10 h-10 text-purple-400">{icon}</div>
      <h4 className="font-semibold text-white/80">{title}</h4>
      <span className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full">Coming Soon</span>
    </div>
);

export const DesignsView: React.FC = () => {
  return (
    <div className="px-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white/90 tracking-wide">App Customization</h2>
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