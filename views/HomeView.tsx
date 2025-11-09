import React, { useState, useEffect, useRef } from 'react';
import { StreakCircle } from '../components/StreakCircle';
import { StreakButton } from '../components/StreakButton';
import { LeaderboardButton } from '../components/LeaderboardButton';
import { UserIcon, AdjustmentsHorizontalIcon, ShareIcon, CheckCircleIcon } from '../components/icons/Icons';
import { triggerHaptic } from '../services/hapticService';
import { playSound } from '../services/audioService';

interface HomeViewProps {
  streak: number;
  progress: number;
  dailyGoal: number;
  dailyProgress: number;
  logDailyActivity: () => void;
  onNavigateToLeaderboard: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ streak, progress, dailyGoal, dailyProgress, logDailyActivity, onNavigateToLeaderboard }) => {
  const [showPlusOne, setShowPlusOne] = useState(false);
  const prevStreakRef = useRef(streak);
  const [showLogConfirmation, setShowLogConfirmation] = useState(false);
  const [playSheen, setPlaySheen] = useState(false);
  const prevDailyProgress = useRef(dailyProgress);
  const [showShine, setShowShine] = useState(false);

  const isGoalComplete = dailyProgress >= dailyGoal;
  const dailyProgressPercent = Math.min((dailyProgress / dailyGoal) * 100, 100);

  useEffect(() => {
    if (streak > prevStreakRef.current) {
      setShowPlusOne(true);
      const timer = setTimeout(() => setShowPlusOne(false), 1000);
      return () => clearTimeout(timer);
    }
    prevStreakRef.current = streak;
  }, [streak]);

  useEffect(() => {
    if (dailyProgress > prevDailyProgress.current) {
      setPlaySheen(true);
      const timer = setTimeout(() => setPlaySheen(false), 800);
      prevDailyProgress.current = dailyProgress;
      return () => clearTimeout(timer);
    } else if (dailyProgress < prevDailyProgress.current) {
      prevDailyProgress.current = dailyProgress;
    }
  }, [dailyProgress]);

  const handleLogActivity = () => {
    if (isGoalComplete || showLogConfirmation) return;

    logDailyActivity();
    setShowShine(true);
    
    // Show confirmation message
    setShowLogConfirmation(true);
    setTimeout(() => {
        setShowLogConfirmation(false);
    }, 1500); // Confirmation message visible for 1.5s
    
    // Reset shine animation
    setTimeout(() => {
        setShowShine(false);
    }, 1000);
  };

  const buttonContent = isGoalComplete ? (
    "Goal Achieved!"
  ) : showLogConfirmation ? (
    <span className="flex items-center animate-fade-in">
      <CheckCircleIcon className="w-5 h-5 mr-2" />
      <span>Logged!</span>
    </span>
  ) : (
    "Log Today's Activity"
  );
  
  const buttonClassName = `relative z-10 w-full max-w-[200px] overflow-hidden px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg 
    ${ isGoalComplete || showLogConfirmation ? 'bg-green-500 shadow-green-500/20' : 'bg-gradient-to-r from-pink-500 to-sky-500 shadow-sky-500/30 hover:shadow-sky-500/50 hover:brightness-110 active:scale-95'
  }`;

  return (
    <div className="flex-grow flex flex-col items-center justify-start pt-2 space-y-6 px-6">
      <h1 
        className="text-4xl font-black text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 animate-fade-in" 
        style={{ textShadow: '0 3px 15px var(--glow-purple)', animationDelay: '100ms' }}
      >
        Whop Streaks
      </h1>

      <div className="relative my-4">
        <StreakCircle progress={progress} streakCount={streak} />
        {showPlusOne && (
          <span 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-yellow-400 pointer-events-none"
            style={{ animation: 'plus-one-float 1s ease-out forwards', filter: 'drop-shadow(0 0 10px #fbbF24)' }}
          >
            +1
          </span>
        )}
      </div>

      <div className="w-full max-w-xs text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <h3 className="text-base font-medium text-white/80">
            Today's Goal: {dailyProgress} / {dailyGoal}
          </h3>
          {isGoalComplete && <CheckCircleIcon key={dailyProgress} className="w-5 h-5 text-green-400 animate-pop-in" />}
        </div>
        <div className="w-full bg-slate-800/50 rounded-full h-2.5 border border-slate-700 overflow-hidden">
            <div 
                className={`h-full rounded-full transition-all duration-500 ${isGoalComplete ? 'bg-green-400' : 'bg-gradient-to-r from-pink-500 to-sky-500'}`}
                style={{ width: `${dailyProgressPercent}%`, boxShadow: '0 0 10px var(--glow-sky)'}}
            />
        </div>
      </div>
      
      <div className="w-full space-y-3 pt-4">
        <StreakButton text="App Leader Streak" icon={<UserIcon className="w-6 h-6"/>} />
        <StreakButton text="Flame Layer Tweak" icon={<AdjustmentsHorizontalIcon className="w-6 h-6"/>} />
      </div>

      <div className='pt-2 w-full'>
        <LeaderboardButton onClick={onNavigateToLeaderboard} />
      </div>

      <div className='pt-2'>
          <button 
            onClick={handleLogActivity} 
            disabled={isGoalComplete || showLogConfirmation}
            className={buttonClassName}
          >
            {buttonContent}
            {showShine && <div className="button-shine-effect" />}
          </button>
      </div>
    </div>
  );
};