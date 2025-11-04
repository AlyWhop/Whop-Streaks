import React, { useState, useEffect } from 'react';
import { SparklesIcon, FlameIcon, StarIcon, TrophyIcon } from './icons/Icons';
import { triggerHaptic } from '../services/hapticService';
import { DemoLogButton } from './DemoLogButton';
import { RewardPreviewCard } from './RewardPreviewCard';

interface OnboardingViewProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    icon: <SparklesIcon className="w-16 h-16 text-purple-400" />,
    title: "Welcome to Whop Streaks!",
    description: "Get ready to build powerful daily habits and earn rewards along the way. Let's take a quick tour.",
  },
  {
    icon: <FlameIcon className="w-16 h-16 text-orange-400" />,
    title: "Track Your Streak",
    description: "Log your activity every day to increase your streak. Look for this button on the home screen!",
    interactiveElement: 'demoButton',
  },
  {
    icon: <StarIcon className="w-16 h-16 text-yellow-400" />,
    title: "Earn Awesome Rewards",
    description: "Reaching milestones unlocks unique rewards. Here's a peek at your first one!",
    interactiveElement: 'rewardPreview',
  },
  {
    icon: <TrophyIcon className="w-16 h-16 text-blue-400" />,
    title: "Climb the Leaderboard",
    description: "Compete with others and see how you rank. Aim for the top spot and claim your bragging rights!",
  },
];

export const OnboardingView: React.FC<OnboardingViewProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation for the demo button when the user gets to that step
    if (currentStep === 1) {
      const timer = setTimeout(() => setIsAnimating(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      triggerHaptic('selection');
    } else {
      onComplete();
    }
  };

  const stepData = onboardingSteps[currentStep];

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-30 flex justify-center items-center p-6 animate-fade-in">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center flex flex-col items-center w-full max-w-sm animate-slide-up-fade">
        <div className="mb-6 h-16 w-16 flex items-center justify-center">
            {React.cloneElement(stepData.icon, { key: currentStep, className: `${stepData.icon.props.className} animate-pop-in` })}
        </div>
        
        <h2 
            key={`${currentStep}-title`}
            className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 animate-fade-in"
        >
            {stepData.title}
        </h2>
        
        <p 
            key={`${currentStep}-desc`}
            className="text-white/80 mb-6 h-12 animate-fade-in" style={{ animationDelay: '150ms' }}
        >
            {stepData.description}
        </p>

        <div className="h-28 w-full flex items-center justify-center mb-4">
          {stepData.interactiveElement === 'demoButton' && <DemoLogButton isHighlighted={isAnimating} />}
          {stepData.interactiveElement === 'rewardPreview' && <RewardPreviewCard />}
        </div>


        <div className="flex space-x-2 mb-8">
            {onboardingSteps.map((_, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStep ? 'bg-white' : 'bg-white/30'
                    }`}
                />
            ))}
        </div>

        <button 
          onClick={handleNext} 
          className="w-full py-3 rounded-full bg-purple-600 font-bold text-lg text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300"
        >
          {currentStep === onboardingSteps.length - 1 ? "Let's Go!" : 'Next'}
        </button>
      </div>
    </div>
  );
};