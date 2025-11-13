import React, { useState } from 'react';
import { SparklesIcon, LoaderIcon, WandSparklesIcon, ChevronRightIcon } from './icons/Icons';
import { editImage } from '../services/geminiService';
import { triggerHaptic } from '../services/hapticService';
import { Image } from './Image';

interface ImageEditorModalProps {
  currentAvatarUrl: string;
  onClose: () => void;
  onSave: (newAvatarUrl: string) => void;
}

const suggestedPrompts = [
    "Add a retro, grainy filter",
    "Change the background to a purple nebula",
    "Add cool cyberpunk sunglasses",
    "Make it pop art style",
    "Turn it into a charcoal sketch",
    "Add a golden crown",
];

export const ImageEditorModal: React.FC<ImageEditorModalProps> = ({ currentAvatarUrl, onClose, onSave }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt || isLoading || !currentAvatarUrl) return;
    setIsLoading(true);
    setEditedImage(null); // Clear previous edit
    setError(null);
    triggerHaptic('selection');

    try {
      const imageUrl = await editImage(currentAvatarUrl, prompt);
      setEditedImage(imageUrl);
      triggerHaptic('success');
    } catch (err) {
      setError('Failed to edit avatar. Please try again.');
      triggerHaptic('error');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSave = () => {
    if (editedImage) {
      onSave(editedImage);
      onClose();
    }
  };

  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-30 flex justify-center items-center p-4 animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="image-editor-title">
      <div className="bg-slate-900/60 border border-slate-700/80 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center w-full max-w-2xl animate-slide-up-fade shadow-2xl shadow-black/40">
        <h3 id="image-editor-title" className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400 flex items-center gap-2">
            <WandSparklesIcon className="w-6 h-6" />
            Edit with AI Magic
        </h3>
        
        <div className="flex flex-col md:flex-row items-center gap-4 w-full my-4">
            {/* Before Image */}
            <div className='flex-1 w-full'>
                <p className='text-sm font-semibold text-white/70 mb-2 text-center'>Before</p>
                <Image src={currentAvatarUrl} alt="Original Avatar" className="rounded-lg w-full aspect-square border-2 border-slate-700" />
            </div>
            
            {/* Transformation Indicator */}
            <div className="text-purple-400 md:-mt-6">
                <ChevronRightIcon className="w-8 h-8 md:rotate-0 rotate-90" />
            </div>

            {/* After Image */}
            <div className='flex-1 w-full'>
                <p className='text-sm font-semibold text-white/70 mb-2 text-center'>After</p>
                <div className="w-full aspect-square bg-slate-800/50 border-dashed border-2 border-slate-700 rounded-lg flex items-center justify-center p-1 shadow-inner shadow-black/30">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center text-center text-white/70">
                            <WandSparklesIcon className="w-12 h-12 text-purple-400 animate-pulse-scale mb-4" />
                            <p>Applying magic...</p>
                        </div>
                    ) : editedImage ? (
                        <Image src={editedImage} alt="Edited Avatar" className="rounded-md w-full h-full" />
                    ) : (
                        <div className="text-center text-white/50 p-4">
                            <SparklesIcon className="w-8 h-8 mx-auto mb-2" />
                            <p className="text-sm">Your edited image will appear here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        
        <div className="w-full">
            <div className="relative w-full">
              <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your edit..."
                  className="w-full h-24 p-3 pl-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  disabled={isLoading || !currentAvatarUrl}
                  aria-label="Image editing prompt"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 my-4 text-xs">
                {suggestedPrompts.map(p => (
                     <button key={p} onClick={() => setPrompt(p)} className="px-3 py-1.5 bg-slate-700/70 rounded-full hover:bg-slate-700 transition-colors disabled:opacity-50" disabled={isLoading || !currentAvatarUrl}>
                        {p}
                    </button>
                ))}
            </div>
            
            <button 
                onClick={handleGenerate} 
                disabled={isLoading || !prompt || !currentAvatarUrl}
                className="w-full mt-2 py-3 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-bold shadow-lg shadow-sky-500/20 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/40 hover:brightness-110 active:scale-95 disabled:bg-gradient-to-r disabled:from-pink-500/50 disabled:to-sky-500/50 disabled:shadow-none disabled:transform-none flex items-center justify-center"
            >
                {isLoading ? <LoaderIcon className="w-6 h-6 animate-spin" /> : <><SparklesIcon className="w-5 h-5 mr-2"/>Apply Edit</>}
            </button>
        </div>

        <div className="flex w-full space-x-4 mt-6">
            <button onClick={onClose} className="w-1/2 py-2.5 rounded-full bg-slate-700/70 text-white/80 font-semibold hover:bg-slate-700 transition-colors">Cancel</button>
            <button 
                onClick={handleSave} 
                disabled={!editedImage || isLoading} 
                className="w-1/2 py-2.5 rounded-full bg-green-600 text-white font-semibold hover:bg-green-500 transition-colors disabled:bg-green-600/30 disabled:cursor-not-allowed"
            >
                Save
            </button>
        </div>
      </div>
    </div>
  );
};
