import React from 'react';
import { NewCompanyLogoIcon } from './icons/Icons';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-20 flex justify-center items-center px-6 pt-4 pointer-events-none">
      <NewCompanyLogoIcon className="w-48 h-auto" />
    </header>
  );
};