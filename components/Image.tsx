import React, { useState, useEffect } from 'react';
import { UserIcon } from './icons/Icons';

interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string | null | undefined;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsLoaded(false);
      setHasError(false);
      return;
    }

    setHasError(false);
    setIsLoaded(false);
    
    const image = new window.Image();
    image.src = src;
    
    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    image.addEventListener('load', handleLoad);
    image.addEventListener('error', handleError);

    // Cleanup
    return () => {
      image.removeEventListener('load', handleLoad);
      image.removeEventListener('error', handleError);
    };
  }, [src]);

  const showFallback = hasError || !src;
  const showLoader = !isLoaded && !hasError && src;

  return (
    <div {...props} className={`relative bg-white/5 overflow-hidden ${className}`}>
      {showLoader && (
        <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
      )}

      {showFallback && (
        <div className="w-full h-full flex items-center justify-center">
          <UserIcon className="w-1/2 h-1/2 text-white/30" />
        </div>
      )}

      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};
