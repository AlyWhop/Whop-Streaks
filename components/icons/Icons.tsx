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
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.479.038.673.646.314.943l-4.286 4.18a.562.562 0 0 0-.162.531l1.285 5.355a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0l-4.725 2.885a.562.562 0 0 1-.84-.61l1.285-5.355a.562.562 0 0 0-.162.531l-4.286-4.18a.562.562 0 0 1 .314-.943l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.573L16.5 21.75l-.398-1.177a3.375 3.375 0 00-2.455-2.456L12.75 18l1.177-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.177a3.375 3.375 0 002.456 2.456L20.25 18l-1.177.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

export const WandSparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.898 20.573 16.5 21.75l-.398-1.177a3.375 3.375 0 0 0-2.455-2.456L12.75 18l1.177-.398a3.375 3.375 0 0 0 2.455-2.456L16.5 14.25l.398 1.177a3.375 3.375 0 0 0 2.456 2.456L20.25 18l-1.177.398a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const LoaderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2" />
        <path d="M21 12a9 9 0 00-9-9" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const CrownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M18 9a.75.75 0 01.75.75v1.5a3 3 0 01-6 0v-1.5A.75.75 0 0112.75 9h4.5zm-4.121 2.47a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l2.5-2.5a.75.75 0 000-1.06zM12 12.311a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06l2.5 2.5a.75.75 0 010 1.06zM12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" clipRule="evenodd" />
  </svg>
);

export const FlameIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797A8.23 8.23 0 0112 2.25c1.153 0 2.243.232 3.232.636a8.287 8.287 0 00-2.024 2.328z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.983 3.462A3.75 3.75 0 0012 18z" />
  </svg>
);

export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.19.026.38.052.57.08.19.028.38.055.57.081.317.044.64.08.968.108a1.688 1.688 0 0 0 1.688-1.688V9.332a2.25 2.25 0 0 0-2.25-2.25 2.25 2.25 0 0 0-2.25 2.25v1.582m13.5 0a2.25 2.25 0 1 0 0-2.186m0 2.186c-.19-.026-.38-.052-.57-.08-.19-.028-.38-.055-.57-.081a3.34 3.34 0 0 0-1.14-.173 2.25 2.25 0 0 0-2.25 2.25v1.582a2.25 2.25 0 1 0 4.5 0v-1.582m-4.5-1.182a3.375 3.375 0 0 0-3.375 3.375v1.582a3.375 3.375 0 0 0 6.75 0v-1.582a3.375 3.375 0 0 0-3.375-3.375Z" />
    </svg>
);

export const LockClosedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
);

export const Cog6ToothIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.26.716.53 1.003l.824.824c.42.42.657.98.657 1.57v1.528c0 .59.237 1.15.656 1.57l.824.824c.27.287.467.629.53 1.003l.213 1.282c.09.541-.23.999-.645 1.246l-1.06.606c-.358.204-.77.312-1.184.312H9.041c-.414 0-.826-.108-1.184-.312l-1.06-.606c-.415-.247-.735-.705-.645-1.246l.213-1.282c.063-.374.26-.716.53-1.003l.824-.824c.42-.42.657-.98.657-1.57V8.843c0-.59.237-1.15.656-1.57l.824-.824c.27-.287.467-.629.53-1.003l.213-1.282Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);

export const BrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 1 3 18.75v-7.5a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-2.25a2.25 2.25 0 0 0-1.732-1.055l-1.068-.267ZM12.75 9a3.375 3.375 0 0 0-3.375-3.375A3.375 3.375 0 0 0 6 9v1.5a3.375 3.375 0 0 0 3.375 3.375c1.106 0 2.059-.488 2.751-1.272a3.375 3.375 0 0 0 2.751 1.272A3.375 3.375 0 0 0 18 10.5V9a3.375 3.375 0 0 0-3.375-3.375A3.375 3.375 0 0 0 11.25 9v1.5" />
    </svg>
);

export const WhopBrandLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" viewBox="0 0 102 36" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M101.371 18.1569C101.371 27.6019 93.9469 35.1569 84.6619 35.1569C75.3769 35.1569 67.9519 27.6019 67.9519 18.1569C67.9519 8.71188 75.3769 1.15688 84.6619 1.15688C93.9469 1.15688 101.371 8.71188 101.371 18.1569ZM94.2619 18.1569C94.2619 12.6369 89.9669 8.27688 84.6619 8.27688C79.3569 8.27688 75.0619 12.6369 75.0619 18.1569C75.0619 23.6769 79.3569 28.0369 84.6619 28.0369C89.9669 28.0369 94.2619 23.6769 94.2619 18.1569Z" />
        <path d="M46.793 1.15688H32.063V35.1569H39.173V20.8469L46.073 35.1569H51.413L58.313 20.8469V35.1569H65.423V1.15688H50.693L46.793 11.8769L42.893 1.15688H39.173H32.063H46.793Z" />
        <path d="M29.5704 18.1569C29.5704 27.6019 22.1454 35.1569 12.8604 35.1569C3.57538 35.1569 -3.83962 27.6019 -3.83962 18.1569C-3.83962 8.71188 3.57538 1.15688 12.8604 1.15688C22.1454 1.15688 29.5704 8.71188 29.5704 18.1569ZM22.4604 18.1569C22.4604 12.6369 18.1654 8.27688 12.8604 8.27688C7.55538 8.27688 3.26038 12.6369 3.26038 18.1569C3.26038 23.6769 7.55538 28.0369 12.8604 28.0369C18.1654 28.0369 22.4604 23.6769 22.4604 18.1569Z" />
    </svg>
);

export const NewCompanyLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 556 350" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#FA4616" d="M201.721 117.811c-14.791 0-24.987 6.49-32.703 13.829 0 0-3.116 2.953-3.076 3.043l32.405 32.405 32.4-32.405c-6.136-8.447-17.704-16.872-29.026-16.872Zm80.009.004c-14.791 0-24.987 6.49-32.704 13.83 0 0-2.845 2.873-2.975 3.042l-40.054 40.06 32.355 32.354 72.403-72.414c-6.136-8.447-17.698-16.872-29.025-16.872Zm80.245-.004c-14.791 0-24.988 6.49-32.704 13.829 0 0-2.963 2.897-3.076 3.043l-80.125 80.136 8.481 8.481c13.121 13.121 34.599 13.121 47.72 0l88.628-88.617H391c-6.136-8.447-17.699-16.872-29.025-16.872Z"/>
    </svg>
);

export const ShuffleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.491v4.992a2.25 2.25 0 0 1-2.25 2.25h-4.992a2.25 2.25 0 0 1-2.25-2.25v-4.992m0 0-3.181-3.183A8.25 8.25 0 0 1 4.89 6.25l3.181-3.183m4.991 2.491h4.992a2.25 2.25 0 0 0 2.25-2.25v-4.992a2.25 2.25 0 0 0-2.25-2.25h-4.992a2.25 2.25 0 0 0-2.25 2.25v4.992a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

export const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
);

export const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.663M12 12.031c.828.828 1.529 1.86 1.95 2.998l-4.5 0c.42-1.138 1.122-2.17 1.95-2.998a4.505 4.505 0 0 1 0-6.364 4.505 4.505 0 0 1 6.364 0c.828.828 1.529 1.86 1.95 2.998l-4.5 0c-.42-1.138-1.122-2.17-1.95-2.998A4.505 4.505 0 0 1 12 5.667a4.505 4.505 0 0 1 0 6.364Z" />
    </svg>
);

export const TagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
);

export const StreakIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l2.5 6.5H21l-5 3.8L17.5 20 12 15.8 6.5 20 8 12.3 3 8.5h6.5z"/>
  </svg>
);

export const RewardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.4 14.5L12 21l-3.4-6.5"/>
    <path d="M4 14.5L8.6 16m10.8-1.5L15.4 16"/>
  </svg>
);

export const LeaderboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 12h-2v9h2zM13 6h-2v15h2zM19 10h-2v11h2z"/>
  </svg>
);