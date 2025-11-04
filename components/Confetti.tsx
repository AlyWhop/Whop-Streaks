import React, { useEffect, useState, memo } from 'react';

const CONFETTI_COUNT = 150;

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = memo(({ style }) => (
  <div className="absolute w-2 h-4 rounded-sm" style={style}></div>
));

export const Confetti: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [pieces, setPieces] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: CONFETTI_COUNT }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${-20 + Math.random() * -80}px`, // Start off-screen
      backgroundColor: `hsl(${Math.random() * 360}, 90%, 60%)`,
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `fall ${2 + Math.random() * 3}s linear ${Math.random() * 2}s forwards`,
      willChange: 'transform, opacity',
    }));
    setPieces(newPieces);

    const timer = setTimeout(onComplete, 5000); // Clean up after the longest animation
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
      {pieces.map((style, i) => <ConfettiPiece key={i} style={style} />)}
    </div>
  );
};