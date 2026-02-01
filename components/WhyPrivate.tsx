
import React from 'react';

interface Props {
  onCtaClick?: () => void;
}

export const WhyPrivate: React.FC<Props> = ({ onCtaClick }) => {
  const issues = [
    { emoji: "🦮", title: "Leash Pulling", desc: "No more being dragged around the block. Enjoy your walks again." },
    { emoji: "🐕", title: "Reactivity", desc: "Helping your dog stay calm when guests arrive or during walks." },
    { emoji: "🛋️", title: "Anxiety", desc: "Confidence building for dogs that are fearful or stressed." },
    { emoji: "🦴", title: "Manners", desc: "Custom cues that work for your house and your family." }
  ];

  return (
    <section className="py-24 bg-[#fffaf5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4b2c20] mb-4">Why Private Sessions?</h2>
          <p className="text-lg text-stone-600 font-medium">Group classes are loud and distracting. Private training is focused on YOU.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {issues.map((item, idx) => (
            <div key={idx} className="bg-white p-8 dog-ear-card shadow-lg border-2 border-[#f3e9dc] flex items-start gap-6 group hover:border-[#e91e63] transition-colors">
              <div className="text-5xl bg-[#f3e9dc] w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-pink-50 transition-colors">
                {item.emoji}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#4b2c20] mb-2">{item.title}</h3>
                <p className="text-stone-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <button 
            onClick={onCtaClick}
            className="px-10 py-5 bg-[#e91e63] text-white rounded-2xl text-xl font-bold hover:bg-[#c2185b] transition-all shadow-lg active:scale-95 flex items-center gap-3 uppercase"
          >
            <span>My Dog needs this!</span>
            <span className="text-2xl">🐾</span>
          </button>
        </div>
      </div>
    </section>
  );
};
