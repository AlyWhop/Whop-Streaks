import React, { useState, useEffect, useRef } from 'react';

interface StreakCircleProps {
  progress: number;
  streakCount: number;
}

export const StreakCircle: React.FC<StreakCircleProps> = ({ progress, streakCount }) => {
  const radius = 90;
  const strokeWidth = 14;
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  const offset = circumference - (progress / 100) * circumference;

  const [number, setNumber] = useState(streakCount);
  const [animationClass, setAnimationClass] = useState('animate-pop-in');
  const prevStreakCountRef = useRef(streakCount);

  useEffect(() => {
    if (streakCount > prevStreakCountRef.current) {
      // Number change animation
      setAnimationClass('animate-scale-up-fade-out');
      const numberTimer = setTimeout(() => {
        setNumber(streakCount);
        setAnimationClass('animate-scale-up-fade-in');
      }, 400); // exit animation duration
      
      prevStreakCountRef.current = streakCount;

      return () => {
        clearTimeout(numberTimer);
      };
    } else if (streakCount < prevStreakCountRef.current) {
      // Handle streak reset
      setNumber(streakCount);
      setAnimationClass('animate-pop-in');
      prevStreakCountRef.current = streakCount;
    }
  }, [streakCount]);
  
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-sky-500/30 rounded-full blur-2xl animate-pulse-scale" />

      {/* Glass Container */}
      <div className="absolute w-[240px] h-[240px] rounded-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/80 shadow-2xl shadow-black/40" />
      
      {/* Inner Neon Rim */}
      <div className="absolute w-[210px] h-[210px] rounded-full border border-sky-400/30"
          style={{ boxShadow: 'inset 0 0 12px 0px var(--glow-sky)' }}
      />
      
      {/* Shooting Stars */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="absolute top-1/4 left-0 h-px w-16 bg-gradient-to-r from-white/70 to-transparent"
          style={{ animation: `shooting-star 4s linear infinite 1s` }}
        />
        <div
          className="absolute top-2/3 left-0 h-px w-10 bg-gradient-to-r from-white/50 to-transparent"
          style={{ animation: `shooting-star 6s linear infinite 3s` }}
        />
      </div>

      <svg 
        className="relative w-full h-full transform -rotate-90"
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={innerRadius}
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r={innerRadius}
          stroke="url(#streakGradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ 
            transition: 'stroke-dashoffset 1s cubic-bezier(0.65, 0, 0.35, 1)',
            filter: 'url(#glow)',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)'}}>
        <span 
          className={`text-7xl font-black text-white ${animationClass}`}
        >
          {number}
        </span>
        <span className="text-lg font-medium text-white/70 tracking-wider -mt-1">Day Streak</span>
      </div>
    </div>
  );
};