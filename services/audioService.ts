let audioContext: AudioContext | null = null;

const initializeAudioContext = () => {
    // AudioContext must be created after a user gesture on the page
    if (typeof window !== 'undefined' && !audioContext) {
        try {
            audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        } catch (e) {
            console.warn("Web Audio API is not supported in this browser.");
        }
    }
};

type SoundType = 'logActivity' | 'uiClick' | 'success';

interface SoundConfig {
    type: OscillatorType;
    frequency: number;
    duration: number;
    volume: number;
    pitchBend?: {
        start: number;
        end: number;
    };
}

const sounds: Record<SoundType, SoundConfig> = {
    logActivity: {
        type: 'sine',
        frequency: 440,
        duration: 0.3,
        volume: 0.3,
        pitchBend: {
            start: 880,
            end: 440,
        }
    },
    uiClick: {
        type: 'triangle',
        frequency: 600,
        duration: 0.1,
        volume: 0.15,
    },
    success: {
        type: 'triangle',
        frequency: 523.25, // C5
        duration: 0.4,
        volume: 0.4,
        pitchBend: {
            start: 523.25, // C5
            end: 1046.50,  // C6
        }
    },
};

export const playSound = (type: SoundType) => {
    initializeAudioContext();
    if (!audioContext) return;

    // In some browsers, the AudioContext starts in a 'suspended' state
    // and must be resumed by a user gesture.
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    const config = sounds[type];
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const now = audioContext.currentTime;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = config.type;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(config.volume, now + 0.01);
    
    if (config.pitchBend) {
        oscillator.frequency.setValueAtTime(config.pitchBend.start, now);
        oscillator.frequency.exponentialRampToValueAtTime(config.pitchBend.end, now + config.duration * 0.8);
    } else {
        oscillator.frequency.setValueAtTime(config.frequency, now);
    }

    oscillator.start(now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + config.duration);
    oscillator.stop(now + config.duration);
};