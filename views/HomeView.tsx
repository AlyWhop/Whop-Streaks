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

const particleColors = ['bg-pink-400', 'bg-cyan-400', 'bg-purple-400', 'bg-yellow-300'];

export const HomeView: React.FC<HomeViewProps> = ({ streak, progress, dailyGoal, dailyProgress, logDailyActivity, onNavigateToLeaderboard }) => {
  const [showPlusOne, setShowPlusOne] = useState(false);
  const prevStreakRef = useRef(streak);
  const [isLoggingActivity, setIsLoggingActivity] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [showLogConfirmation, setShowLogConfirmation] = useState(false);
  const [playSheen, setPlaySheen] = useState(false);
  const prevDailyProgress = useRef(dailyProgress);

  const isGoalComplete = dailyProgress >= dailyGoal;
  const dailyProgressPercent = Math.min((dailyProgress / dailyGoal) * 100, 100);

  useEffect(() => {
    if (streak > prevStreakRef.current) {
      setShowPlusOne(true);
      const timer = setTimeout(() => {
        setShowPlusOne(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    prevStreakRef.current = streak;
  }, [streak]);

  useEffect(() => {
    if (dailyProgress > prevDailyProgress.current) {
      setPlaySheen(true);
      const timer = setTimeout(() => {
        setPlaySheen(false);
      }, 800); // Duration of the animation
      prevDailyProgress.current = dailyProgress;
      return () => clearTimeout(timer);
    } else if (dailyProgress < prevDailyProgress.current) {
      // Handle reset case if any, for now just update ref
      prevDailyProgress.current = dailyProgress;
    }
  }, [dailyProgress]);

  const handleLogActivity = () => {
    if (isLoggingActivity || isGoalComplete || showLogConfirmation) return;

    logDailyActivity();
    setIsLoggingActivity(true);

    setTimeout(() => {
      setIsLoggingActivity(false);
      setShowLogConfirmation(true);
      setTimeout(() => {
        setShowLogConfirmation(false);
      }, 1500); // Confirmation message visible for 1.5s
    }, 600); // Duration of particle animation
  };

  const handleShare = async () => {
    if (isSharing) return;

    setIsSharing(true);
    const shareText = `🔥 I'm on a ${streak}-day streak in my community! Keeping the fire alive on Whop. #WhopStreaks #Consistency`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Whop Streak!',
          text: shareText,
        });
        playSound('uiClick');
        triggerHaptic('success');
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('Share text copied to clipboard!');
        playSound('uiClick');
        triggerHaptic('impactLight');
      }
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') {
        console.error('Share or copy failed:', error);
        if (!navigator.share) {
            alert('Failed to copy share text.');
            triggerHaptic('error');
        }
      }
    } finally {
      setIsSharing(false);
    }
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

  const buttonDisabled = isLoggingActivity || isGoalComplete || showLogConfirmation;
  
  const buttonClassName = `relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${
    isGoalComplete || showLogConfirmation ? 'bg-green-500' : 'bg-indigo-500 hover:bg-indigo-400'
  }`;

  return (
    <div className="relative flex-grow flex flex-col items-center justify-start pt-2 space-y-6 px-6 -mt-6">
      <div className="group absolute top-4 right-6">
        <button
          onClick={handleShare}
          aria-label="Share your streak"
          disabled={isSharing}
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShareIcon className="w-5 h-5 text-white/80" />
        </button>
        <div className="absolute top-full mt-2 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
          Share Streak
        </div>
      </div>
      
      <h1 
        className="text-4xl font-black text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 animate-fade-in" 
        style={{ textShadow: '0 2px 10px rgba(192, 132, 252, 0.5)', animationDelay: '100ms' }}
      >
        Whop Streaks
      </h1>

      <div className="relative">
        <StreakCircle progress={progress} streakCount={streak} />
        {showPlusOne && (
          <span 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-yellow-400 pointer-events-none"
            style={{ animation: 'plus-one-float 1s ease-out forwards' }}
          >
            +1
          </span>
        )}
      </div>

      <div className="w-full max-w-xs text-center">
        <div className="flex items-center justify-center space-x-2">
          <h3 className="text-base font-medium text-white/80">
            Today's Goal: {dailyProgress} / {dailyGoal}
          </h3>
          {isGoalComplete && <CheckCircleIcon key={dailyProgress} className="w-5 h-5 text-green-400 animate-pop-in" />}
        </div>
        <div className="mt-2 w-full bg-white/10 rounded-full h-2 progress-sheen-container">
            <div 
                className={`h-full rounded-full transition-all duration-500 ${isGoalComplete ? 'bg-green-400' : 'bg-gradient-to-r from-pink-500 to-blue-500'}`}
                style={{ width: `${dailyProgressPercent}%`}}
            />
            {playSheen && <div className="progress-sheen-once-effect" />}
        </div>
      </div>
      
      <div className="w-full space-y-4 pt-4">
        <StreakButton text="App Leader Streak" icon={<UserIcon />} />
        <StreakButton text="Flame Layer Tweak" icon={<AdjustmentsHorizontalIcon />} />
      </div>

      <div className='pt-2 w-full'>
        <LeaderboardButton onClick={onNavigateToLeaderboard} />
      </div>

      <div className='pt-2'>
        <div className="relative inline-block">
          <button 
            onClick={handleLogActivity} 
            disabled={buttonDisabled} 
            className={buttonClassName}
          >
            {buttonContent}
          </button>
          {isLoggingActivity && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 ${particleColors[i % 4]} rounded-full`}
                  style={{
                    animation: `particle-fly-out 600ms ease-out forwards`,
                    '--angle': `${(i / 20) * 360}deg`,
                    '--radius': `${40 + Math.random() * 30}px`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};