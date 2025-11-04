import React from 'react';

interface DemoLogButtonProps {
  isHighlighted: boolean;
}

export const DemoLogButton: React.FC<DemoLogButtonProps> = ({ isHighlighted }) => {
  const buttonClassName = `relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-500 bg-indigo-500/50 text-white/70 animate-pop-in`;

  return (
    <div className="relative">
      <button className={buttonClassName}>
        Log Today's Activity
      </button>
      {isHighlighted && (
        <div className="absolute -inset-1 rounded-full bg-indigo-400/80 animate-pulse-scale pointer-events-none" style={{ animationDuration: '1.5s' }}></div>
      )}
    </div>
  );
};
