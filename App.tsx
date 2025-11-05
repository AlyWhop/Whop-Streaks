
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './views/HomeView';
import { LeaderboardView } from './views/LeaderboardView';
import { RewardsView } from './views/RewardsView';
import { ProfileView } from './views/ProfileView';
import { DesignsView } from './views/DesignsView';
import { AvatarCustomizationModal } from './components/AvatarCustomizationModal';
import { ImageEditorModal } from './components/ImageEditorModal';
import { OnboardingView } from './components/OnboardingView';
import { SparklesIcon } from './components/icons/Icons';
import { generateBadgeImage } from './services/geminiService';
import { triggerHaptic } from './services/hapticService';
import { playSound } from './services/audioService';
import { Image } from './components/Image';
import { getUserProfile, updateUserProfile, UserProfileData } from './services/supabaseService';

const STREAK_MILESTONE = 14;

export type View = 'home' | 'leaderboard' | 'rewards' | 'profile' | 'designs';

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(3);
  const [dailyProgress, setDailyProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [badgeUrl, setBadgeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showImageEditorModal, setShowImageEditorModal] = useState(false);

  // FIX: Initialize userProfile with all properties from UserProfileData to prevent type errors.
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    name: 'User',
    avatarUrl: null,
    totalActivities: 0,
    streak: 0,
    maxStreak: 0,
    dailyProgress: 0,
  });

  useEffect(() => {
    const onboardingCompleted = localStorage.getItem('onboardingComplete') === 'true';
    setShowOnboarding(!onboardingCompleted);

    const loadInitialData = async () => {
        const profile = await getUserProfile();
        if (profile) {
            // FIX: Pass the full profile object to setUserProfile to match the UserProfileData type.
            setUserProfile(profile);
            setStreak(profile.streak);
            setMaxStreak(profile.maxStreak);
            setDailyProgress(profile.dailyProgress);
        }
        setIsAppLoading(false);
    };

    loadInitialData();
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setShowOnboarding(false);
    triggerHaptic('success');
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    triggerHaptic('selection');
    playSound('uiClick');
  };

  const handleGenerateBadge = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      const imageUrl = await generateBadgeImage(streak);
      setBadgeUrl(imageUrl);
      triggerHaptic('success');
    } catch (err) {
      setError('Failed to generate badge. Please try again.');
      triggerHaptic('error');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [streak, isLoading]);
  
  useEffect(() => {
    if (streak === STREAK_MILESTONE) {
      handleGenerateBadge();
    }
  }, [streak, handleGenerateBadge]);

  const logDailyActivity = async () => {
    if (dailyProgress >= dailyGoal) return;

    const newProgress = dailyProgress + 1;
    const isCompletingGoal = newProgress === dailyGoal;
    
    let newStreak = streak;
    let newMaxStreak = maxStreak;

    const newProfileData: Partial<UserProfileData> = {
        totalActivities: userProfile.totalActivities + 1,
        dailyProgress: newProgress
    };
    
    setUserProfile(prev => ({...prev, totalActivities: prev.totalActivities + 1}));

    if (isCompletingGoal) {
      playSound('success');
      triggerHaptic('success');
      newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        newMaxStreak = newStreak;
        setMaxStreak(newMaxStreak);
      }
      newProfileData.streak = newStreak;
      newProfileData.maxStreak = newMaxStreak;
    } else {
      playSound('logActivity');
      triggerHaptic('impactLight');
    }
    
    setDailyProgress(newProgress);
    await updateUserProfile(newProfileData);
  };

  const handleUpdateAvatar = async (newAvatarUrl: string) => {
    setUserProfile(prev => ({ ...prev, avatarUrl: newAvatarUrl }));
    await updateUserProfile({ avatarUrl: newAvatarUrl });
    triggerHaptic('success');
    playSound('success');
  };
  
  const progress = (streak / 30) * 100; // Recalculated max for circle display

  if (isAppLoading) {
    return (
        <main className="bg-[#0C0114] flex justify-center items-center min-h-screen font-sans">
            <div className="relative w-full max-w-[420px] h-[880px] bg-black overflow-hidden rounded-[40px] shadow-2xl shadow-purple-900/50 border-4 border-gray-800 flex flex-col justify-center items-center text-white">
                <SparklesIcon className="w-16 h-16 text-purple-400 animate-pulse mb-6" />
                <h2 className="text-xl font-bold">Loading Your Cosmic Journey...</h2>
            </div>
        </main>
    )
  }

  return (
    <main className="bg-[#0C0114] flex justify-center items-center min-h-screen font-sans">
      <div className="relative w-full max-w-[420px] h-[880px] bg-black overflow-hidden rounded-[40px] shadow-2xl shadow-purple-900/50 border-4 border-gray-800">
        <div 
          className="absolute inset-0 bg-[#0C0114] z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 100% 60% at 50% 120%, rgba(128, 0, 128, 0.4), transparent),
              radial-gradient(ellipse 80% 50% at 20% -10%, rgba(0, 128, 255, 0.3), transparent),
              radial-gradient(ellipse 80% 50% at 80% -10%, rgba(255, 0, 128, 0.3), transparent)
            `
          }}
        />

        <div className="relative z-10 h-full flex flex-col text-white">
          <Header />
          <div className="flex-grow pt-40 pb-24 overflow-y-auto">
            {currentView === 'home' && (
              <HomeView
                streak={streak}
                progress={progress}
                dailyGoal={dailyGoal}
                dailyProgress={dailyProgress}
                logDailyActivity={logDailyActivity}
                onNavigateToLeaderboard={() => navigateTo('leaderboard')}
              />
            )}
            {currentView === 'leaderboard' && <LeaderboardView />}
            {currentView === 'rewards' && <RewardsView currentStreak={streak} unlockedBadgeUrl={badgeUrl} />}
            {currentView === 'profile' && (
              <ProfileView
                user={userProfile}
                streak={streak}
                maxStreak={maxStreak}
                totalActivities={userProfile.totalActivities}
                unlockedBadges={badgeUrl ? [badgeUrl] : []}
                onCustomizeAvatar={() => setShowAvatarModal(true)}
                onEditAvatar={() => setShowImageEditorModal(true)}
              />
            )}
            {currentView === 'designs' && <DesignsView />}
          </div>
          <BottomNav currentView={currentView} navigateTo={navigateTo} />
        </div>

        { (isLoading || badgeUrl || error) && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-20 flex justify-center items-center p-6">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center flex flex-col items-center">
              {isLoading && (
                <>
                  <SparklesIcon className="w-12 h-12 text-purple-400 animate-pulse mb-4" />
                  <h3 className="text-xl font-bold mb-2">Generating Your Badge!</h3>
                  <p className="text-white/70">The cosmos is aligning to create your reward...</p>
                </>
              )}
              {error && (
                <>
                  <p className="text-red-400">{error}</p>
                  <button onClick={() => setError(null)} className="mt-4 px-4 py-2 bg-red-500 rounded-full">Close</button>
                </>
              )}
              {badgeUrl && !isLoading && (
                 <>
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Streak Milestone Unlocked!</h3>
                  <p className="text-white/80 mb-6">You've earned a special badge for your {streak}-day streak!</p>
                  <Image src={badgeUrl} alt="Generated Badge" className="rounded-lg w-64 h-64 border-2 border-purple-500 shadow-lg shadow-purple-500/50" />
                  <button onClick={() => setBadgeUrl(null)} className="mt-8 px-6 py-2 bg-purple-600 rounded-full font-semibold hover:bg-purple-500 transition-colors">Awesome!</button>
                 </>
              )}
            </div>
          </div>
        )}

        {showOnboarding && <OnboardingView onComplete={handleOnboardingComplete} />}
        {showAvatarModal && (
          <AvatarCustomizationModal
            onClose={() => setShowAvatarModal(false)}
            onSave={handleUpdateAvatar}
          />
        )}
        {showImageEditorModal && (
          <ImageEditorModal
            currentAvatarUrl={userProfile.avatarUrl ?? ''}
            onClose={() => setShowImageEditorModal(false)}
            onSave={handleUpdateAvatar}
          />
        )}
      </div>
    </main>
  );
}
