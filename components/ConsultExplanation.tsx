
import React from 'react';

interface Props {
  onCtaClick?: () => void;
}

export const ConsultExplanation: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-950">How it works</h2>
        <p className="text-stone-600 mb-12">I keep things simple and low-stress for both you and your dog.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="flex flex-col items-center bg-amber-50/50 p-8 rounded-[2rem] border-2 border-amber-100/30">
            <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">1</div>
            <p className="font-bold text-lg mb-2 text-amber-950">Simple Chat</p>
            <p className="text-sm text-stone-600 leading-relaxed">I'll reach out for a 10-minute call or text to hear about your goals.</p>
          </div>
          <div className="flex flex-col items-center bg-amber-50/50 p-8 rounded-[2rem] border-2 border-amber-100/30">
            <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">2</div>
            <p className="font-bold text-lg mb-2 text-amber-950">No-Stress Plan</p>
            <p className="text-sm text-stone-600 leading-relaxed">We'll decide together if private sessions are the right move for you.</p>
          </div>
          <div className="flex flex-col items-center bg-amber-50/50 p-8 rounded-[2rem] border-2 border-amber-100/30">
            <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">3</div>
            <p className="font-bold text-lg mb-2 text-amber-950">Better Walks!</p>
            <p className="text-sm text-stone-600 leading-relaxed">We get to work building a better relationship with your furry friend.</p>
          </div>
        </div>
        
        <div className="mt-12 space-y-4">
          <p className="text-stone-500 text-sm">
            Everything is transparent, honest, and zero-pressure.
          </p>
          <button 
            onClick={onCtaClick}
            className="px-10 py-5 bg-stone-800 text-white rounded-2xl text-lg font-bold hover:bg-stone-700 transition-all active:scale-[0.98] shadow-lg"
          >
            Ready for a better relationship? Start here.
          </button>
        </div>
      </div>
    </section>
  );
};
