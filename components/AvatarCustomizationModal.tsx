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
    "Ethereal space whale swimming through a starfield",
    "A wise owl with galaxies for eyes",
    "Glowing jellyfish floating in the void of space",
    "Celestial knight with constellation armor",
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

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-30 flex justify-center items-center p-4 animate-fade-in">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center flex flex-col items-center w-full max-w-md animate-slide-up-fade">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Create Your Avatar</h3>
        
        {isLoading ? (
            <div className="w-64 h-64 bg-white/5 rounded-lg flex flex-col items-center justify-center my-4">
                <SparklesIcon className="w-12 h-12 text-purple-400 animate-pulse mb-4" />
                <p className="text-white/70">Conjuring your cosmic self...</p>
            </div>
        ) : generatedImage ? (
            <Image src={generatedImage} alt="Generated Avatar" className="rounded-lg w-64 h-64 border-2 border-purple-500 shadow-lg shadow-purple-500/50 my-4" />
        ) : (
            <div className="w-64 h-64 bg-white/5 rounded-lg flex items-center justify-center my-4 p-4">
                <p className="text-white/50">Your generated avatar will appear here.</p>
            </div>
        )}

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        
        <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., An astronaut riding a Shiba Inu through the cosmos"
            className="w-full h-20 p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            disabled={isLoading}
        />

        <div className="flex flex-wrap justify-center gap-2 my-3 text-xs">
            {suggestedPrompts.map(p => (
                 <button key={p} onClick={() => handleSuggestionClick(p)} className="px-2 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-colors disabled:opacity-50" disabled={isLoading}>
                    {p}
                </button>
            ))}
        </div>
        
        <div className="flex w-full items-center space-x-2 mt-2">
            <button 
                onClick={() => handleGenerate(prompt)} 
                disabled={isLoading || !prompt}
                className="flex-grow py-3 rounded-full bg-purple-600 font-bold text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 disabled:bg-purple-600/50 disabled:shadow-none disabled:transform-none flex items-center justify-center"
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
            <button onClick={onClose} className="w-1/2 py-2 rounded-full bg-white/10 text-white/80 font-semibold hover:bg-white/20 transition-colors">Cancel</button>
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
