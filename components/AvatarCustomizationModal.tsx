import React, { useState } from 'react';
import { SparklesIcon, LoaderIcon, ShuffleIcon } from './icons/Icons';
import { generateAvatarImage } from '../services/geminiService';
import { triggerHaptic } from '../services/hapticService';
import { Image } from './Image';

interface AvatarCustomizationModalProps {
  onClose: () => void;
  onSave: (newAvatarUrl: string) => void;
}

const suggestedPrompts = [
    "A majestic cosmic lion with a nebula mane",
    "An astronaut meditating in a field of stars",
    "A cyberpunk fox with neon circuit patterns",
    "A crystal wolf howling at a galaxy",
];

const randomAdjectives = ["Cosmic", "Galactic", "Starlight", "Nebula", "Cyberpunk", "Ethereal", "Glowing", "Crystalline", "Astral"];
const randomSubjects = ["Wolf", "Fox", "Explorer", "Knight", "Dragon", "Phoenix", "Jellyfish", "Guardian", "Voyager"];
const randomDetails = ["with a nebula mane", "made of constellations", "in a field of stars", "with neon circuit patterns", "guarding a black hole", "meditating on a moon"];

export const AvatarCustomizationModal: React.FC<AvatarCustomizationModalProps> = ({ onClose, onSave }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (generationPrompt: string) => {
    if (!generationPrompt || isLoading) return;
    setIsLoading(true);
    setGeneratedImage(null);
    setError(null);
    triggerHaptic('selection');

    try {
      const imageUrl = await generateAvatarImage(generationPrompt);
      setGeneratedImage(imageUrl);
      triggerHaptic('success');
    } catch (err) {
      setError('Failed to generate avatar. Please try again.');
      triggerHaptic('error');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateRandom = () => {
    const adj = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
    const sub = randomSubjects[Math.floor(Math.random() * randomSubjects.length)];
    const det = randomDetails[Math.floor(Math.random() * randomDetails.length)];
    const randomPrompt = `A ${adj} ${sub} ${det}`;
    setPrompt(randomPrompt);
    handleGenerate(randomPrompt);
  };

  const handleSave = () => {
    if (generatedImage) {
      onSave(generatedImage);
      onClose();
    }
  };

  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-30 flex justify-center items-center p-4 animate-fade-in">
      <div className="bg-slate-900/60 border border-slate-700/80 backdrop-blur-xl rounded-2xl p-6 text-center flex flex-col items-center w-full max-w-md animate-slide-up-fade shadow-2xl shadow-black/40">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Create Your Avatar</h3>
        
        <div className="w-64 h-64 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center my-4 p-4 shadow-inner shadow-black/30">
            {isLoading ? (
                <div className="flex flex-col items-center justify-center text-center">
                    <SparklesIcon className="w-12 h-12 text-purple-400 animate-pulse-scale mb-4" />
                    <p className="text-white/70">Conjuring your cosmic self...</p>
                </div>
            ) : generatedImage ? (
                <Image src={generatedImage} alt="Generated Avatar" className="rounded-lg w-full h-full border-2 border-purple-500 shadow-lg shadow-purple-500/50" />
            ) : (
                <p className="text-white/50">Your generated avatar will appear here.</p>
            )}
        </div>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        
        <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., An astronaut riding a Shiba Inu through the cosmos"
            className="w-full h-20 p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            disabled={isLoading}
        />

        <div className="flex flex-wrap justify-center gap-2 my-4 text-xs">
            {suggestedPrompts.map(p => (
                 <button key={p} onClick={() => setPrompt(p)} className="px-3 py-1 bg-slate-700/70 rounded-full hover:bg-slate-700 transition-colors disabled:opacity-50" disabled={isLoading}>
                    {p}
                </button>
            ))}
        </div>
        
        <div className="flex w-full items-center space-x-2">
            <button 
                onClick={() => handleGenerate(prompt)} 
                disabled={isLoading || !prompt}
                className="flex-grow py-3 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-bold shadow-lg shadow-sky-500/20 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/40 hover:brightness-110 active:scale-95 disabled:bg-gradient-to-r disabled:from-pink-500/50 disabled:to-sky-500/50 disabled:shadow-none disabled:transform-none flex items-center justify-center"
            >
                {isLoading ? <LoaderIcon className="w-6 h-6 animate-spin" /> : <><SparklesIcon className="w-5 h-5 mr-2"/>Generate</>}
            </button>
            <button 
                onClick={handleGenerateRandom}
                disabled={isLoading}
                className="flex-shrink-0 p-3 rounded-full bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all duration-300 disabled:bg-indigo-600/50 disabled:shadow-none disabled:transform-none"
                aria-label="Generate Random Avatar"
            >
              <ShuffleIcon className="w-6 h-6" />
            </button>
        </div>

        <div className="flex w-full space-x-4 mt-4">
            <button onClick={onClose} className="w-1/2 py-2 rounded-full bg-slate-700/70 text-white/80 font-semibold hover:bg-slate-700 transition-colors">Cancel</button>
            <button 
                onClick={handleSave} 
                disabled={!generatedImage} 
                className="w-1/2 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400 transition-colors disabled:bg-green-500/30 disabled:cursor-not-allowed"
            >
                Save
            </button>
        </div>
      </div>
    </div>
  );
};