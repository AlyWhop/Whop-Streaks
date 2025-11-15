import React, { useState, useEffect } from 'react';
import { triggerHaptic } from '../services/hapticService';
import { DemoLogButton } from '../components/DemoLogButton';
import { RewardPreviewCard } from '../components/RewardPreviewCard';
import { WelcomeIllustration, StreakIllustration, LeaderboardIllustration, RewardsIllustration } from '../components/icons/OnboardingIllustrations';

interface OnboardingViewProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    title: "Welcome to Whop Streaks!",
    description: "Get ready to build powerful daily habits and earn rewards along the way. Let's take a quick tour."
  },
  {
    title: "Track Your Daily Streaks",
    description: "Log your activity every day to increase your streak. Look for this button on the home screen!",
    interactiveElement: "demoButton",
  },
  {
    title: "Leaderboard & Competition",
    description: "Compete with others on the leaderboard and see how you stack up against the best!",
    interactiveElement: "rewardPreview",
  },
  {
    title: "Rewards & Achievements",
    description: "Unlock exclusive badges and prizes for your dedication and consistency.",
  },
];

const onboardingIllustrations = [
    <WelcomeIllustration key="welcome" className="w-40 h-40 animate-pop-in" />,
    <StreakIllustration key="streak" className="w-40 h-40 animate-pop-in" />,
    <LeaderboardIllustration key="leaderboard" className="w-40 h-40 animate-pop-in" />,
    <RewardsIllustration key="rewards" className="w-40 h-40 animate-pop-in" />,
];

export const OnboardingView: React.FC<OnboardingViewProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
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
  
  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < onboardingSteps.length) {
      setCurrentStep(stepIndex);
      triggerHaptic('selection');
    }
  };

  const stepData = onboardingSteps[currentStep];

  return (
    <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-30 flex justify-center items-center p-6 animate-fade-in">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center flex flex-col items-center w-full max-w-sm animate-slide-up-fade">
        
        <div className="mb-6 h-40 w-40 flex items-center justify-center">
            {onboardingIllustrations[currentStep]}
        </div>

        {/* TITLE */}
        <h2
          key={`${currentStep}-title`}
          className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 animate-fade-in"
        >
          {stepData.title}
        </h2>

        {/* DESCRIPTION */}
        <p
          key={`${currentStep}-desc`}
          className="text-white/80 mb-6 h-12 animate-fade-in"
          style={{ animationDelay: "150ms" }}
        >
          {stepData.description}
        </p>

        {/* INTERACTIVE ELEMENT */}
        <div className="h-28 w-full flex items-center justify-center mb-4">
          {stepData.interactiveElement === "demoButton" && (
            <DemoLogButton isHighlighted={isAnimating} />
          )}
          {stepData.interactiveElement === "rewardPreview" && <RewardPreviewCard />}
        </div>

        {/* DOT NAVIGATION */}
        <div className="flex space-x-3 mb-8">
          {onboardingSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              aria-label={`Go to step ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                index === currentStep ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-full bg-purple-600 font-bold text-lg text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300"
        >
          {currentStep === onboardingSteps.length - 1 ? "Let's Go!" : "Next"}
        </button>
      </div>
    </div>
  );
};