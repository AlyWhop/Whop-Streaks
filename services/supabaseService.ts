// --- REAL SUPABASE SERVICE ---
// This service connects to a real Supabase backend.
//
// IMPORTANT SETUP:
// 1. Add your Supabase URL and Anon Key as environment variables for this app.
//    (e.g., SUPABASE_URL and SUPABASE_ANON_KEY)
// 2. In your Supabase project, create a table named 'profiles'.
// 3. The 'profiles' table should have these columns:
//    - id: uuid (Primary Key, preferably with default uuid_generate_v4())
//    - name: text
//    - avatar_url: text (nullable)
//    - streak: integer (default: 0)
//    - max_streak: integer (default: 0)
//    - daily_progress: integer (default: 0)
//    - total_activities: integer (default: 0)
// 4. Ensure your Row Level Security (RLS) policies on the 'profiles' table
//    allow clients using the anon key to read, insert, and update rows.
//    For testing, you can start with a permissive policy like `USING (true)`.

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// --- CONFIG ---
// Safely access environment variables to prevent crashes in browser environments
const SUPABASE_URL = (typeof process !== 'undefined' && process.env.SUPABASE_URL) ? process.env.SUPABASE_URL : undefined;
const SUPABASE_ANON_KEY = (typeof process !== 'undefined' && process.env.SUPABASE_ANON_KEY) ? process.env.SUPABASE_ANON_KEY : undefined;

const USER_ID_KEY = 'whop_streaks_user_id';
const PROFILES_TABLE = 'profiles';

// --- TYPES (must match the existing app types) ---
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

// Mock data for fallback when Supabase is not configured
const MOCK_LEADERBOARD: LeaderboardEntry[] = [
    { rank: 1, name: 'Orion', streak: 365, avatar: 'https://picsum.photos/seed/Orion/150' },
    { rank: 2, name: 'Celeste', streak: 350, avatar: 'https://picsum.photos/seed/Celeste/150' },
    { rank: 3, name: 'Nova', streak: 333, avatar: 'https://picsum.photos/seed/Nova/150' },
    { rank: 4, name: 'Sirius', streak: 298, avatar: 'https://picsum.photos/seed/Sirius/150' },
    { rank: 5, name: 'Luna', streak: 251, avatar: 'https://picsum.photos/seed/Luna/150' },
    { rank: 6, name: 'Cosmo', streak: 220, avatar: 'https://picsum.photos/seed/Cosmo/150' },
    { rank: 7, name: 'Astra', streak: 199, avatar: 'https://picsum.photos/seed/Astra/150' },
    { rank: 8, name: 'Sol', streak: 180, avatar: 'https://picsum.photos/seed/Sol/150' },
];

// --- CLIENT INITIALIZATION ---
let supabase: SupabaseClient | null = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.warn("Supabase environment variables (SUPABASE_URL, SUPABASE_ANON_KEY) are not set. Supabase features will be disabled.");
}

// --- HELPER FUNCTIONS ---

// Gets the current user's ID from localStorage.
const getLocalUserId = (): string | null => {
    return localStorage.getItem(USER_ID_KEY);
};

// Sets the user's ID in localStorage.
const setLocalUserId = (id: string) => {
    localStorage.setItem(USER_ID_KEY, id);
};

// Maps database snake_case to application camelCase
const mapProfileToCamelCase = (dbProfile: any): UserProfileData => {
    return {
        name: dbProfile.name,
        avatarUrl: dbProfile.avatar_url,
        streak: dbProfile.streak,
        maxStreak: dbProfile.max_streak,
        dailyProgress: dbProfile.daily_progress,
        totalActivities: dbProfile.total_activities,
    };
};

/**
 * Creates a new user profile with default values in the database.
 */
const createNewUserProfile = async (): Promise<{id: string, profile: UserProfileData}> => {
    if (!supabase) throw new Error("Supabase client is not initialized.");

    const randomSeed = Math.floor(Math.random() * 1000);
    const defaultProfile = {
        name: `User #${randomSeed}`,
        avatar_url: `https://picsum.photos/seed/${randomSeed}/150`, // Start with a random avatar
        streak: 0,
        max_streak: 0,
        daily_progress: 0,
        total_activities: 0,
    };

    const { data, error } = await supabase
        .from(PROFILES_TABLE)
        .insert(defaultProfile)
        .select()
        .single();
    
    if (error) {
        console.error("Error creating new user profile:", error);
        throw error;
    }

    return {
        id: data.id,
        profile: mapProfileToCamelCase(data),
    };
};

/**
 * Fetches the user profile. If it's the user's first time,
 * it creates a new profile for them.
 */
export const getUserProfile = async (): Promise<UserProfileData> => {
    if (!supabase) {
        // Fallback to a default object if supabase is not configured
        return { name: 'Guest', avatarUrl: 'https://picsum.photos/seed/guest/150', streak: 23, maxStreak: 42, dailyProgress: 1, totalActivities: 101 };
    }
    
    let userId = getLocalUserId();

    if (!userId) {
        console.log("No local user ID found. Creating a new profile.");
        const { id: newId, profile: newProfile } = await createNewUserProfile();
        setLocalUserId(newId);
        return newProfile;
    }

    const { data, error } = await supabase
        .from(PROFILES_TABLE)
        .select('*')
        .eq('id', userId)
        .single();

    if (error) {
        if (error.code === 'PGRST116') { // "JSON object requested, multiple (or no) rows returned"
            console.warn("Local user ID was invalid. Creating a new profile.");
            localStorage.removeItem(USER_ID_KEY);
            return await getUserProfile();
        }
        console.error("Error fetching user profile:", error);
        throw error;
    }

    return mapProfileToCamelCase(data);
};

/**
 * Updates the user profile in Supabase.
 */
export const updateUserProfile = async (updates: Partial<UserProfileData>): Promise<{ success: true }> => {
    if (!supabase) {
      console.warn("Supabase not configured, update is only local.");
      return { success: true };
    }

    const userId = getLocalUserId();
    if (!userId) {
        throw new Error("Cannot update profile: User ID not found.");
    }
    
    // Map camelCase updates to snake_case for the database
    const dbUpdates: { [key: string]: any } = {};
    if (updates.avatarUrl !== undefined) dbUpdates.avatar_url = updates.avatarUrl;
    if (updates.dailyProgress !== undefined) dbUpdates.daily_progress = updates.dailyProgress;
    if (updates.maxStreak !== undefined) dbUpdates.max_streak = updates.maxStreak;
    if (updates.name !== undefined) dbUpdates.name = updates.name;
    if (updates.streak !== undefined) dbUpdates.streak = updates.streak;
    if (updates.totalActivities !== undefined) dbUpdates.total_activities = updates.totalActivities;

    const { error } = await supabase
        .from(PROFILES_TABLE)
        .update(dbUpdates)
        .eq('id', userId);

    if (error) {
        console.error("Error updating user profile:", error);
        throw error;
    }

    return { success: true };
};

/**
 * Fetches the leaderboard data from Supabase.
 * Returns mock data if Supabase is not configured.
 */
export const getLeaderboard = async (): Promise<LeaderboardEntry[]> => {
    if (!supabase) {
        // Return mock data after a short delay to simulate network
        await new Promise(resolve => setTimeout(resolve, 500));
        return MOCK_LEADERBOARD;
    }

    const { data, error } = await supabase
        .from(PROFILES_TABLE)
        .select('name, streak, avatar_url')
        .order('streak', { ascending: false })
        .limit(8);

    if (error) {
        console.error("Error fetching leaderboard:", error);
        throw error;
    }
    
    return data.map((profile, index) => ({
        rank: index + 1,
        name: profile.name,
        streak: profile.streak,
        avatar: profile.avatar_url,
    }));
};


/**
 * Gets the current user's rank. In a real app, this would involve a more
 * complex query. Here we mock it for demonstration.
 * Returns a mock rank if Supabase is not configured.
 */
export const getCurrentUserRank = async (user: UserProfileData): Promise<LeaderboardEntry> => {
    if (!supabase) {
      // Return a mock object for the current user's rank
      return {
        rank: 42,
        name: user.name,
        streak: user.streak,
        avatar: user.avatarUrl,
      };
    }

    // This is a simplified implementation for a real backend.
    // A more performant way would be a dedicated RPC function in Supabase.
    const { count, error } = await supabase
        .from(PROFILES_TABLE)
        .select('*', { count: 'exact', head: true })
        .gt('streak', user.streak);
    
    if (error) {
        console.error("Error fetching user rank:", error);
        throw error;
    }

    return {
        rank: (count ?? 0) + 1,
        name: user.name,
        streak: user.streak,
        avatar: user.avatarUrl,
    };
};