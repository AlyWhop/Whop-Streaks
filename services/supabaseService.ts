// --- MOCK SUPABASE SERVICE ---
// This service simulates a backend connection to Supabase using browser localStorage.

const USER_PROFILE_KEY = 'whop_streaks_user_profile';
const SIMULATED_DELAY = 500; // ms

// --- TYPES ---
export interface UserProfileData {
  name: string;
  avatarUrl: string | null;
  streak: number;
  maxStreak: number;
  dailyProgress: number;
  totalActivities: number;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  streak: number;
  avatar: string | null;
}

// --- MOCK DATA ---

const defaultUserProfile: UserProfileData = {
  name: 'Alex',
  avatarUrl: 'https://picsum.photos/seed/alex/150',
  streak: 12,
  maxStreak: 60,
  dailyProgress: 1,
  totalActivities: 152,
};

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'Alex', streak: 21, avatar: 'https://picsum.photos/seed/alex/150' },
  { rank: 2, name: 'Mia', streak: 19, avatar: 'https://picsum.photos/seed/mia/150' },
  { rank: 3, name: 'Charlie', streak: 18, avatar: 'https://picsum.photos/seed/charlie/150' },
  { rank: 4, name: 'Jordan', streak: 15, avatar: 'https://picsum.photos/seed/jordan/150' },
  { rank: 5, name: 'Taylor', streak: 12, avatar: 'https://picsum.photos/seed/taylor/150' },
  { rank: 6, name: 'Casey', streak: 10, avatar: 'https://picsum.photos/seed/casey/150' },
  { rank: 7, name: 'Riley', streak: 9, avatar: 'https://picsum.photos/seed/riley/150' },
  { rank: 8, name: 'Jessie', streak: 7, avatar: 'https://picsum.photos/seed/jessie/150' },
];

// --- API FUNCTIONS ---

/**
 * Fetches the user profile from localStorage. If it doesn't exist,
 * it creates and saves a default profile.
 */
export const getUserProfile = (): Promise<UserProfileData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const storedProfile = localStorage.getItem(USER_PROFILE_KEY);
        if (storedProfile) {
          resolve(JSON.parse(storedProfile));
        } else {
          localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(defaultUserProfile));
          resolve(defaultUserProfile);
        }
      } catch (error) {
        console.error("Failed to get user profile from localStorage:", error);
        resolve(defaultUserProfile); // Fallback to default
      }
    }, SIMULATED_DELAY);
  });
};

/**
 * Updates the user profile in localStorage by merging new data.
 */
export const updateUserProfile = (
  updates: Partial<UserProfileData>
): Promise<{ success: true }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const storedProfile = localStorage.getItem(USER_PROFILE_KEY);
        const currentProfile = storedProfile ? JSON.parse(storedProfile) : defaultUserProfile;
        
        const updatedProfile = { ...currentProfile, ...updates };
        
        localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(updatedProfile));
        resolve({ success: true });
      } catch (error) {
        console.error("Failed to update user profile in localStorage:", error);
        reject(error);
      }
    }, 100); // Shorter delay for updates
  });
};

/**
 * Fetches the leaderboard data.
 */
export const getLeaderboard = (): Promise<LeaderboardEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, you might fetch this from your Supabase table
      resolve(leaderboardData);
    }, SIMULATED_DELAY);
  });
};
