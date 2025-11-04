import React from 'react';

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

export const AdjustmentsHorizontalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 0 1 9 0Zm-4.5 2.25a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v2.25ZM16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.375m-13.5 0h-.375a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h.375" />
  </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.479.038.673.646.314.943l-4.286 4.18a.562.562 0 0 0-.162.531l1.285 5.355a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0l-4.725 2.885a.562.562 0 0 1-.84-.61l1.285-5.355a.562.562 0 0 0-.162-.531l-4.286-4.18a.562.562 0 0 1 .314-.943l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.456L12 17.25l1.177-.398a3.375 3.375 0 002.455-2.456L16.5 13.5l.398 1.177a3.375 3.375 0 002.456 2.456L20.25 18l-1.177.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

export const WhopBrandLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 1000 515" fill="none" {...props}>
    <g clipPath="url(#clip0_3041_707_whop)">
      <path d="M158.881 -0.00366211C93.2014 -0.00366211 47.9251 28.989 13.6619 61.7749C13.6619 61.7749 -0.173169 74.965 0.00164277 75.3669L143.897 220.129L287.766 75.3669C260.521 37.6314 209.152 -0.00366211 158.881 -0.00366211Z" fill="#FA4616"/>
      <path d="M514.191 -0.00360107C448.513 -0.00360107 403.236 28.989 368.971 61.775C368.971 61.775 356.337 74.6133 355.763 75.367L177.903 254.322L321.574 398.857L643.078 75.367C615.831 37.6315 564.488 -0.00360107 514.191 -0.00360107Z" fill="#FA4616"/>
      <path d="M870.479 -0.00360107C804.798 -0.00360107 759.524 28.989 725.259 61.775C725.259 61.775 712.098 74.7137 711.599 75.367L355.806 433.351L393.466 471.237C451.73 529.852 547.1 529.852 605.364 471.237L998.914 75.367H999.365C972.119 37.6315 920.773 -0.00360107 870.479 -0.00360107Z" fill="#FA4616"/>
    </g>
    <defs>
      <clipPath id="clip0_3041_707_whop">
        <rect width="1000" height="514.706" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);


// FIX: Added missing CustomHomeIcon
export const CustomHomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

// FIX: Added missing CustomTrophyIcon
export const CustomTrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 0 1 9 0Zm-4.5 2.25a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v2.25ZM16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.375m-13.5 0h-.375a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h.375" />
  </svg>
);

// FIX: Added missing CustomRewardIcon
export const CustomRewardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.479.038.673.646.314.943l-4.286 4.18a.562.562 0 0 0-.162.531l1.285 5.355a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0l-4.725 2.885a.562.562 0 0 1-.84-.61l1.285-5.355a.562.562 0 0 0-.162-.531l-4.286-4.18a.562.562 0 0 1 .314-.943l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

// FIX: Added missing CustomUserIcon
export const CustomUserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

// FIX: Added missing CustomBrushIcon
export const CustomBrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
);

// FIX: Added missing ShareIcon
export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z" />
  </svg>
);

// FIX: Added missing CheckCircleIcon
export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

// FIX: Added missing FlameIcon
export const FlameIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.287 8.287 0 0 0 3-7.284 8.252 8.252 0 0 1 3.362 2.897Z" />
  </svg>
);

// FIX: Added missing LoaderIcon
export const LoaderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a9 9 0 1 0 9 9" />
  </svg>
);

// FIX: Added missing MegaphoneIcon
export const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 0 0 0 9h.75c.704 0 1.402-.03 2.09-.09m0-9.15c.688.06 1.386.09 2.09.09h.75a4.5 4.5 0 0 1 0 9h-.75c-.704 0-1.402.03-2.09.09m0-9.15c-.329.03-.655.068-.976.113m0 0l-2.09 7.84c-.23.868.22 1.767 1.08 2.09l.52.173c.48.16.99.16 1.47 0l.52-.173c.86-.323 1.31-1.222 1.08-2.09l-2.09-7.84m-1.05-3.18c.329-.045.655-.083.976-.113m-1.952 0c-.329.03-.655.068-.976.113M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 0 0 0 9h.75c.704 0 1.402-.03 2.09-.09m3.37-9.15c.688.06 1.386.09 2.09.09h.75a4.5 4.5 0 0 1 0 9h-.75c-.704 0-1.402.03-2.09.09m-3.37-9.15c-.329.03-.655.068-.976.113m0 0l-2.09 7.84c-.23.868.22 1.767 1.08 2.09l.52.173c.48.16.99.16 1.47 0l.52-.173c.86-.323 1.31-1.222 1.08-2.09l-2.09-7.84m-1.05-3.18c.329-.045.655-.083.976-.113m-1.952 0c-.329.03-.655.068-.976.113" />
  </svg>
);

// FIX: Added missing ShieldCheckIcon
export const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
</svg>
);

// FIX: Added missing UsersIcon
export const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-1.063M15 19.128v-3.873m-3.375-3.375c-1.125 0-2.175.438-2.938 1.125m-5.062-1.125c.375-.687.938-1.25 1.563-1.687m12.375 0c.625.437 1.188.938 1.563 1.687m0 0c.375.687.563 1.438.563 2.188m0 0c0 .75-.188 1.5-.563 2.188m-1.563-1.687c-.375.687-.938 1.25-1.563 1.687m-4.5-4.5c.625-.437 1.313-.75 2.063-.937m-2.063.937a8.966 8.966 0 0 1-2.063-.937m0 0c-.75.187-1.5.25-2.25.25m0 0c.75 0 1.5-.063 2.25-.25m2.25.25c-.75.187-1.438.5-2.063.937m2.063-.937c.75-.187 1.5-.25 2.25-.25m0 0c.75 0 1.5.063 2.25-.25m-2.25-.25a8.966 8.966 0 0 1 2.063.937M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0z" />
  </svg>
);

// FIX: Added missing TagIcon
export const TagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
  </svg>
);

// FIX: Added missing PencilSquareIcon
export const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 19.07a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125M12 15v5.25a2.25 2.25 0 0 0 2.25 2.25H21a2.25 2.25 0 0 0 2.25-2.25V15M3 15V4.75A2.25 2.25 0 0 1 5.25 2.5h7.5A2.25 2.25 0 0 1 15 4.75V15" />
  </svg>
);

// FIX: Added missing Cog6ToothIcon
export const Cog6ToothIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.26.713.53 1.003l.824.824c.42.42.625.992.625 1.574v2.593c0 .582-.204 1.155-.625 1.574l-.824.824a1.875 1.875 0 0 1-1.003.53l-1.281.213c-.542.09-.94.56-.94 1.11v2.593c0 .55-.398 1.02-.94 1.11l-1.281.213a1.875 1.875 0 0 1-1.003.53l-.824.824c-.42.42-.992.625-1.574.625H8.326c-.582 0-1.155-.204-1.574-.625l-.824-.824a1.875 1.875 0 0 1-.53-1.003l-.213-1.281c-.09-.542-.56-.94-1.11-.94H2.086c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.875 1.875 0 0 1-.53-1.003l-.824-.824C.204 13.155 0 12.582 0 12v-2.593c0-.582.204-1.155.625-1.574l.824-.824a1.875 1.875 0 0 1 .53-1.003l.213-1.281c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.26.713.53 1.003l.824.824c.42.42.625.992.625 1.574V8.326c0 .582.204 1.155.625 1.574l.824.824c.27.29.468.629.53 1.003l.213 1.281zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  </svg>
);

// FIX: Added missing LockClosedIcon
export const LockClosedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

// FIX: Added missing WandSparklesIcon
export const WandSparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-2.064.962l-1.037 1.036a.5.5 0 00-.147.354V21H12.5a.5.5 0 00.354-.146l1.036-1.037a3 3 0 00.962-2.064l-2.22-2.22-2.064.962z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.22 3.78a2.5 2.5 0 00-3.535 0L6.95 6.515a.5.5 0 00.146.854l2.408 1.204 1.204 2.408a.5.5 0 00.854.146l2.735-2.735a2.5 2.5 0 000-3.535l-2.525-2.525z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75h.008v.008h-.008V6.75z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h.008v.008H3.75V12z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h.008v.008H7.5V3.75z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25h.008v.008H3V8.25z" />
</svg>
);

// FIX: Added missing ShuffleIcon
export const ShuffleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-11.667-11.667 3.181 3.183m0 0h-4.992m4.992 0 3.181-3.183M3.75 9.348h4.992v-.001M16.023 19.644v-4.992m0 0h-4.992m4.992 0-3.181-3.183" />
  </svg>
);