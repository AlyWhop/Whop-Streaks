import React, { useState } from 'react';
import { triggerHaptic } from '../services/hapticService';
import { __internal_execAsync } from '../services/whopService';
import { CheckCircleIcon, LoaderIcon, MegaphoneIcon, ShieldCheckIcon, UsersIcon, TagIcon } from '../components/icons/Icons';
import { Confetti } from '../components/Confetti';

interface Reward {
  id: string;
  title: string;
  requirement: number;
  planId: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const rewardsData: Reward[] = [
  { id: 'shoutout', title: 'Community Shoutout', requirement: 7, planId: 'plan_shoutout_7d', icon: MegaphoneIcon },
  { id: 'badge', title: 'Exclusive Badge', requirement: 14, planId: 'plan_badge_14d', icon: ShieldCheckIcon },
  { id: 'mentorship', title: '1-on-1 Mentorship', requirement: 30, planId: 'plan_mentor_30d', icon: UsersIcon },
  { id: 'merch', title: 'Merch Discount', requirement: 60, planId: 'plan_merch_60d', icon: TagIcon },
];

interface RewardCardProps {
  reward: Reward;
  currentStreak: number;
  isRedeemed: boolean;
  isRedeeming: boolean;
  onRedeem: (reward: Reward) => void;
}

const RewardCard: React.FC<RewardCardProps> = ({ reward, currentStreak, isRedeemed, isRedeeming, onRedeem }) => {
  const isUnlocked = currentStreak >= reward.requirement;
  const progress = Math.min((currentStreak / reward.requirement) * 100, 100);
  const RewardIcon = reward.icon;

  const getButtonContent = () => {
    if (isRedeemed) {
      return (
        <>
          <CheckCircleIcon className="w-5 h-5 mr-2" />
          Redeemed
        </>
      );
    }
    if (isRedeeming) {
      return (
        <>
          <LoaderIcon className="w-5 h-5 mr-2 animate-spin" />
          Redeeming...
        </>
      );
    }
    return 'Redeem';
  };

  const buttonClasses = `
    mt-4 w-full py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center
    ${isRedeemed ? 'bg-green-500/30 text-green-300 cursor-default' : ''}
    ${!isRedeemed && isUnlocked ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/30' : ''}
    ${!isRedeemed && !isUnlocked ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed' : ''}
  `;
  
  const cardClasses = `
    bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-lg transition-all duration-300
    ${isUnlocked && !isRedeemed ? 'border-purple-500/50 shadow-purple-500/20' : ''}
  `;

  return (
    <div className={cardClasses}>
      <div className="flex items-start">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 ${isUnlocked ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 'bg-white/10'}`}>
          <RewardIcon className={`w-6 h-6 transition-colors duration-300 ${isUnlocked ? 'text-white' : 'text-white/50'}`} />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-white/90">{reward.title}</h3>
          <p className="text-sm text-white/60">Reach a {reward.requirement}-day streak</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-white/10 rounded-full h-2.5 progress-sheen-container">
          <div 
            className="bg-gradient-to-r from-pink-500 to-blue-500 h-full rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
           {isUnlocked && <div className="progress-sheen-effect"></div>}
        </div>
      </div>
      <button 
        onClick={() => onRedeem(reward)} 
        disabled={!isUnlocked || isRedeemed || isRedeeming}
        className={buttonClasses}
      >
        {getButtonContent()}
      </button>
    </div>
  );
};


export const RewardsView: React.FC<{ currentStreak: number }> = ({ currentStreak }) => {
  const [redeemedIds, setRedeemedIds] = useState<Set<string>>(new Set());
  const [redeemingId, setRedeemingId] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleRedeem = async (reward: Reward) => {
    if (redeemingId) return;
    setRedeemingId(reward.id);
    triggerHaptic('selection');
    
    try {
      const result = await __internal_execAsync('inAppPurchase', { planId: reward.planId });
      if (result.success) {
        triggerHaptic('success');
        setShowConfetti(true);
        setRedeemedIds(prev => new Set(prev).add(reward.id));
      } else {
        triggerHaptic('error');
        // Optionally, show an error message to the user
      }
    } catch (error) {
      triggerHaptic('error');
      console.error("Redemption failed:", error);
      // Optionally, show an error message to the user
    } finally {
      setRedeemingId(null);
    }
  };

  return (
    <div className="relative px-6">
      {showConfetti && <Confetti onComplete={() => setShowConfetti(false)} />}
      <h2 className="text-2xl font-bold text-white/90 tracking-wide text-center mb-6">Streak Rewards</h2>
      <div className="space-y-4">
        {rewardsData.map(reward => (
          <RewardCard
            key={reward.id}
            reward={reward}
            currentStreak={currentStreak}
            isRedeemed={redeemedIds.has(reward.id)}
            isRedeeming={redeemingId === reward.id}
            onRedeem={handleRedeem}
          />
        ))}
      </div>
    </div>
  );
};