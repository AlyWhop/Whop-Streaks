

import React, { useState } from 'react';
import { triggerHaptic } from '../services/hapticService';
import { __internal_execAsync } from '../services/whopService';
import { CheckCircleIcon, LoaderIcon, MegaphoneIcon, ShieldCheckIcon, UsersIcon, TagIcon, LockClosedIcon } from '../components/icons/Icons';
import { Confetti } from '../components/Confetti';
import { Image } from '../components/Image';

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
    mt-4 w-full py-2.5 px-4 rounded-full font-semibold text-base transition-all duration-300 flex items-center justify-center
    ${isRedeemed ? 'bg-green-500/30 text-green-300 cursor-default' : ''}
    ${!isRedeemed && isUnlocked ? 'bg-gradient-to-r from-pink-500 to-sky-500 text-white shadow-lg shadow-sky-500/20 hover:brightness-110 hover:shadow-sky-500/40 transform hover:-translate-y-0.5' : ''}
    ${!isRedeemed && !isUnlocked ? 'bg-slate-700/50 text-slate-400 cursor-not-allowed' : ''}
  `;
  
  const cardClasses = `
    bg-slate-800/50 backdrop-blur-lg border border-slate-700/80 rounded-2xl p-4 shadow-lg shadow-black/20 transition-all duration-300
    ${isUnlocked && !isRedeemed ? 'border-purple-500/50 shadow-purple-500/10' : ''}
  `;

  return (
    <div className={cardClasses}>
      <div className="flex items-start">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-colors duration-300 ${isUnlocked ? 'bg-gradient-to-br from-purple-500 to-sky-600 shadow-lg shadow-sky-500/20' : 'bg-slate-700/50'}`}>
          <RewardIcon className={`w-6 h-6 transition-colors duration-300 ${isUnlocked ? 'text-white' : 'text-slate-400'}`} />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-white/90">{reward.title}</h3>
          <p className="text-sm text-white/60">Reach a {reward.requirement}-day streak</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-slate-700/50 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-pink-500 to-sky-500 h-full rounded-full transition-all duration-500" 
            style={{ width: `${progress}%`, boxShadow: '0 0 10px var(--glow-sky)' }}
          ></div>
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

const badgeMilestones = [
  { requirement: 7, title: '7-Day Streak' },
  { requirement: 14, title: '14-Day Milestone' },
  { requirement: 30, title: '30-Day Legend' },
  { requirement: 60, title: '60-Day Master' },
  { requirement: 90, title: '90-Day Guru' },
  { requirement: 180, title: 'Half-Year Hero' },
  { requirement: 365, title: 'Yearly Titan' },
  { requirement: 500, title: 'Cosmic Voyager' },
];

const STREAK_MILESTONE_FOR_GEMINI_BADGE = 14;

const MilestoneBadge: React.FC<{ title: string; imageUrl: string | null; unlocked: boolean }> = ({ title, imageUrl, unlocked }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className={`relative w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-300 ${unlocked ? 'bg-gradient-to-br from-purple-500 to-indigo-600 p-0.5' : 'bg-slate-800/50 border border-slate-700'}`}>
      {unlocked && <div className="absolute -inset-1 blur-lg bg-purple-500/30 animate-subtle-pulse rounded-xl" />}
      {unlocked && imageUrl ? (
        <Image src={imageUrl} alt={title} className="w-full h-full rounded-[10px]" />
      ) : (
        <LockClosedIcon className="w-8 h-8 text-slate-500" />
      )}
    </div>
    <span className={`text-xs text-center ${unlocked ? 'text-white/80' : 'text-white/40'}`}>{title}</span>
  </div>
);

interface RewardsViewProps {
  currentStreak: number;
  unlockedBadgeUrl: string | null;
}

export const RewardsView: React.FC<RewardsViewProps> = ({ currentStreak, unlockedBadgeUrl }) => {
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
      }
    } catch (error) {
      triggerHaptic('error');
      console.error("Redemption failed:", error);
    } finally {
      setRedeemingId(null);
    }
  };

  return (
    <div className="relative px-6 pb-8">
      {showConfetti && <Confetti onComplete={() => setShowConfetti(false)} />}
      <h2 className="text-3xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Streak Rewards</h2>
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
      
      <div className="my-12">
        <h2 className="text-3xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">Milestone Badges</h2>
        <div className="grid grid-cols-4 gap-4">
          {badgeMilestones.map((badge) => {
            const isUnlocked = currentStreak >= badge.requirement;
            let imageUrl: string | null = null;
            if (isUnlocked) {
              if (badge.requirement === STREAK_MILESTONE_FOR_GEMINI_BADGE && unlockedBadgeUrl) {
                imageUrl = unlockedBadgeUrl;
              } else {
                imageUrl = `https://picsum.photos/seed/badge-${badge.requirement}/200`;
              }
            }
            return (
              <MilestoneBadge
                key={badge.requirement}
                title={badge.title}
                unlocked={isUnlocked}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};