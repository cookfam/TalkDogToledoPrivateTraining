
import React from 'react';

interface Props {
  onCtaClick?: () => void;
}

export const Differentiation: React.FC<Props> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#4b2c20] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              A Trainer Who <br/>
              <span className="text-[#d4b595]">Knows Dogs.</span>
            </h2>
            <div className="space-y-6 text-lg text-[#f3e9dc] font-medium leading-relaxed">
              <p>I don't just teach tricks. I teach you how to understand your dog's language. </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#e91e63] text-2xl font-bold">✓</span>
                  <span>Any Age, Any Breed, Any Issue.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e91e63] text-2xl font-bold">✓</span>
                  <span>Training in Real-Life settings (home, parks).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e91e63] text-2xl font-bold">✓</span>
                  <span>Clear, simple communication dogs love.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#5d3b2e] p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-[#6d4c41]">
              <h3 className="text-2xl font-bold mb-6 text-center italic">Ready to see the difference?</h3>
              <div className="space-y-6">
                <button 
                  onClick={onCtaClick}
                  className="w-full py-6 bg-[#e91e63] text-white rounded-3xl text-2xl font-black hover:bg-white hover:text-[#e91e63] transition-all shadow-xl uppercase tracking-tight"
                >
                  Book My Free Consult
                </button>
                <div className="text-center text-sm font-bold opacity-80 uppercase tracking-widest flex flex-wrap justify-center gap-x-4 gap-y-2">
                  <span>Greater Toledo Area</span>
                  <span>•</span>
                  <span>NW Ohio</span>
                  <span>•</span>
                  <span>SE Michigan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
