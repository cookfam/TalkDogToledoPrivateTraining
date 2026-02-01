
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl font-bold text-stone-800 italic">Talk Dog Toledo</span>
        </div>
        <p className="text-stone-500 text-sm mb-6 max-w-md mx-auto">
          Providing compassionate, effective private dog training for the Toledo community, Northwest Ohio, and Southeast Michigan.
        </p>
        <div className="text-stone-400 text-xs uppercase tracking-widest flex flex-wrap justify-center gap-x-4 gap-y-2">
          <span>Toledo, Ohio</span>
          <span>•</span>
          <span>NW Ohio Suburbs</span>
          <span>•</span>
          <span>SE Michigan</span>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-200">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} Talk Dog Toledo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
