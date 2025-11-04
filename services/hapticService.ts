type FeedbackType = 'impactLight' | 'success' | 'selection' | 'error';

const patterns: Record<FeedbackType, number | number[]> = {
  impactLight: 10,
  success: [50, 100, 50],
  selection: 5,
  error: [50, 50, 50],
};

/**
 * Triggers haptic feedback using the navigator.vibrate API.
 * Gracefully fails if the API is not supported on the device/browser.
 * On web, this simulates haptics with brief vibrations.
 * @param type The type of feedback to trigger (e.g., 'impactLight', 'success').
 */
export const triggerHaptic = (type: FeedbackType) => {
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    try {
      // The vibration API is supported
      navigator.vibrate(patterns[type]);
    } catch (e) {
      console.warn("Haptic feedback failed to trigger.", e);
    }
  } 
  // If not supported, it fails silently, which is acceptable for a non-critical feature.
};
