import React from 'react';

// 1. Welcome to Whop Streaks!
export const WelcomeIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="welcome_streak_grad" x1="80" y1="35" x2="80" y2="125" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#60A5FA" />
      </linearGradient>
      <filter id="welcome_glow_filter" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
      </filter>
    </defs>
    
    {/* Glow Layer */}
    <g filter="url(#welcome_glow_filter)" opacity="0.7">
      <path d="M65 60 L 85 40 L 85 125 M 65 125 H 105"
        stroke="url(#welcome_streak_grad)"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round" />
    </g>
    
    {/* Main Icon Shape "1" */}
    <path d="M65 60 L 85 40 L 85 125 M 65 125 H 105"
      stroke="url(#welcome_streak_grad)"
      strokeWidth="20"
      strokeLinecap="round"
      strokeLinejoin="round" />
    
    {/* Sparks */}
    <g>
      <path d="M110 35 l 4 4 l -4 4 l -4 -4 z" fill="white" opacity="0.9" />
      <circle cx="55" cy="30" r="5" fill="#EC4899" />
      <circle cx="120" cy="65" r="3" fill="white" opacity="0.8" />
    </g>
  </svg>
);


// 2. Track Your Daily Streaks
export const StreakIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="si_ring_grad" x1="12" y1="80" x2="148" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
      <radialGradient id="si_button_shine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(90) scale(45)">
        <stop stopColor="white" stopOpacity="0.2"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </radialGradient>
      <filter id="si_ring_glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Base Ring */}
    <circle cx="80" cy="80" r="68" stroke="#374151" strokeWidth="12"/>
    
    {/* Glowing Segments */}
    <g filter="url(#si_ring_glow)">
      <path d="M 148 80 A 68 68 0 0 1 80 12" stroke="url(#si_ring_grad)" strokeWidth="12" strokeLinecap="round"/>
      <path d="M 80 12 A 68 68 0 0 1 12 80" stroke="url(#si_ring_grad)" strokeWidth="12" strokeLinecap="round"/>
      <path d="M 12 80 A 68 68 0 0 1 80 148" stroke="url(#si_ring_grad)" strokeWidth="12" strokeLinecap="round"/>
    </g>

    {/* Central Button */}
    <circle cx="80" cy="80" r="50" fill="#1F2937"/>
    <circle cx="80" cy="80" r="50" fill="url(#si_button_shine)"/>
    <path d="M65 80l10 10l20-20" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Sparks */}
    <path d="M80 20l3 3-3 3-3-3 3-3z" fill="#A855F7"/>
    <circle cx="115" cy="30" r="4" fill="#3B82F6"/>
    <circle cx="55" cy="40" r="2" fill="white"/>
  </svg>
);


// 3. Leaderboard & Competition
export const LeaderboardIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      {/* Gradients for podium columns */}
      <linearGradient id="li_gold_grad" x1="80" y1="60" x2="80" y2="140" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="li_silver_grad" x1="45" y1="80" x2="45" y2="140" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E0E7FF" />
        <stop offset="1" stopColor="#60A5FA" />
      </linearGradient>
      <linearGradient id="li_bronze_grad" x1="115" y1="90" x2="115" y2="140" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9A8D4" />
        <stop offset="1" stopColor="#A855F7" />
      </linearGradient>

      {/* Background glow for the entire icon */}
      <radialGradient id="li_bkg_glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 100) rotate(90) scale(80)">
        <stop stopColor="#A855F7" stopOpacity="0.4" />
        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
      </radialGradient>
      
      {/* Glow filter specifically for the winning #1 podium */}
      <filter id="li_gold_glow_filter" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="10" result="coloredBlur" />
      </filter>
    </defs>
    
    {/* Background Glow */}
    <circle cx="80" cy="80" r="80" fill="url(#li_bkg_glow)" />

    {/* Upward Arrow (subtle in background) */}
    <path d="M80 30 L110 70 L90 70 L90 120 L70 120 L70 70 L50 70 Z" fill="#FFFFFF" opacity="0.1" />

    {/* Podium Base Shadow */}
    <ellipse cx="80" cy="142" rx="50" ry="5" fill="black" opacity="0.2" />

    {/* Podium Columns */}
    <rect x="25" y="80" width="40" height="60" rx="8" fill="url(#li_silver_grad)" />
    <rect x="95" y="90" width="40" height="50" rx="8" fill="url(#li_bronze_grad)" />
    
    {/* #1 Podium with Glow */}
    <g filter="url(#li_gold_glow_filter)" opacity="0.8">
        <rect x="60" y="60" width="40" height="80" rx="8" fill="url(#li_gold_grad)" />
    </g>
    <rect x="60" y="60" width="40" height="80" rx="8" fill="url(#li_gold_grad)" />


    {/* Crown */}
    <g>
      <path d="M68 45 L72 55 L80 50 L88 55 L92 45 L80 40 Z" fill="#FBBF24" />
      <circle cx="80" cy="42" r="2" fill="white" />
    </g>
  </svg>
);

// 4. Rewards & Achievements
export const RewardsIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="ri_trophy_gold" x1="80" y1="35" x2="80" y2="125" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24"/>
        <stop offset="1" stopColor="#D97706"/>
      </linearGradient>
      <linearGradient id="ri_badge_blue_purple" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#818CF8"/>
        <stop offset="1" stopColor="#A855F7"/>
      </linearGradient>
      <filter id="ri_trophy_glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
      </filter>
      <radialGradient id="ri_background_glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(90) scale(80)">
        <stop stopColor="#A855F7" stopOpacity="0.3"/>
        <stop offset="1" stopColor="#60A5FA" stopOpacity="0"/>
      </radialGradient>
    </defs>
    
    {/* Background Glow */}
    <circle cx="80" cy="80" r="80" fill="url(#ri_background_glow)"/>
    
    {/* Floating Badges & Stars */}
    <g opacity="0.9">
      {/* Star 1 */}
      <g>
        <path d="M35 50 L 38 56 L 44 57 L 39.5 61 L 41 67 L 35 64 L 29 67 L 30.5 61 L 26 57 L 32 56 Z" fill="url(#ri_badge_blue_purple)" filter="url(#ri_trophy_glow)" opacity="0.5"/>
        <path d="M35 50 L 38 56 L 44 57 L 39.5 61 L 41 67 L 35 64 L 29 67 L 30.5 61 L 26 57 L 32 56 Z" fill="url(#ri_badge_blue_purple)"/>
      </g>
      
      {/* Circle Badge */}
      <g>
        <circle cx="125" cy="70" r="10" fill="url(#ri_badge_blue_purple)" filter="url(#ri_trophy_glow)" opacity="0.5"/>
        <circle cx="125" cy="70" r="10" fill="url(#ri_badge_blue_purple)"/>
      </g>
    </g>
    
    {/* Trophy Glow */}
    <g filter="url(#ri_trophy_glow)" opacity="0.6">
      <path d="M55 40 C 55 25, 105 25, 105 40 V 90 C 105 105, 55 105, 55 90 V 40 Z" fill="url(#ri_trophy_gold)"/>
    </g>

    {/* Trophy */}
    <path d="M100 125 H 60 C 55 125, 50 120, 50 115 V 110 H 110 V 115 C 110 120, 105 125, 100 125 Z" fill="url(#ri_trophy_gold)"/>
    <rect x="72.5" y="90" width="15" height="20" fill="url(#ri_trophy_gold)"/>
    <path d="M55 40 C 55 25, 105 25, 105 40 V 90 C 105 105, 55 105, 55 90 V 40 Z" fill="url(#ri_trophy_gold)"/>
    <path d="M105 50 C 120 55, 120 75, 105 80" stroke="url(#ri_trophy_gold)" strokeWidth="10" strokeLinecap="round"/>
    <path d="M55 50 C 40 55, 40 75, 55 80" stroke="url(#ri_trophy_gold)" strokeWidth="10" strokeLinecap="round"/>
    
    {/* Shine on trophy */}
    <path d="M65 40 C 75 45, 85 45, 95 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4"/>

    {/* Sparkles */}
    <g fill="white">
      <path d="M80 20 l 2 2 -2 2 -2 -2 z" opacity="0.9"/>
      <circle cx="120" cy="115" r="3" opacity="0.8"/>
      <circle cx="45" cy="100" r="2" />
    </g>
  </svg>
);
