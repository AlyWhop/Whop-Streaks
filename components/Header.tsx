import React from 'react';
import { WhopBrandLogoIcon } from './icons/Icons';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent z-20 flex justify-center items-center px-6">
      <WhopBrandLogoIcon className="w-32 h-16" />
    </header>
  );
};
