import React from 'react';

interface StreakCircleProps {
  progress: number;
  streakCount: number;
}

const shootingStars = [
  { top: '20%', duration: '5s', delay: '0s' },
  { top: '50%', duration: '4s', delay: '1.5s' },
  { top: '80%', duration: '6s', delay: '3s' },
];

export const StreakCircle: React.FC<StreakCircleProps> = ({ progress, streakCount }) => {
  const radius = 90;
  const strokeWidth = 20;
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  const offset = circumference - (progress / 100) * circumference;

  // Pulse gets faster as progress increases (from 8s down to 3s duration)
  const pulseDuration = Math.max(3, 8 - (progress / 100) * 5);
  const isSpecialStreak = streakCount === 12;

  return (
    <div className="relative w-56 h-56">
      {/* Background Cosmic Effects */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {/* Pulsing Nebula */}
        <div
          className="absolute inset-[-20px] bg-gradient-to-br from-purple-900/80 via-pink-500/50 to-blue-800/80 rounded-full blur-2xl"
          style={{
            animation: `nebula-pulse ${pulseDuration}s infinite ease-in-out`,
          }}
        />
        {/* Shooting Stars */}
        {shootingStars.map((star, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-8 bg-gradient-to-r from-white/80 to-transparent rounded-full"
            style={{
              top: star.top,
              animation: `shooting-star ${star.duration} linear infinite`,
              animationDelay: star.delay,
              transform: 'rotate(-30deg)',
            }}
          />
        ))}
      </div>

      <svg 
        className={`relative w-full h-full transform -rotate-90 ${isSpecialStreak ? 'animate-special-streak' : ''}`} 
        viewBox="0 0 200 200"
        style={{ willChange: 'filter, transform' }}
      >
        <defs>
          <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={innerRadius}
          stroke="rgba(255, 255, 255, 0.1)"
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
          style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.65, 0, 0.35, 1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          key={streakCount}
          className="text-7xl font-black text-white animate-pop-in"
        >
          {streakCount}
        </span>
        <span className="text-lg font-medium text-white/80 tracking-wider">Day Streak</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] h-[190px] rounded-full bg-black/20 blur-xl"></div>
    </div>
  );
};