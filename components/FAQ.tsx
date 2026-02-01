
import React from 'react';

interface Props {
  onCtaClick?: () => void;
}

export const FAQ: React.FC<Props> = ({ onCtaClick }) => {
  const faqs = [
    {
      q: "What areas do you cover?",
      a: "I'm based in Toledo and serve all surrounding suburbs (Sylvania, Maumee, Perrysburg, Oregon, Monclova, etc.). I also frequently travel to clients in Southeast Michigan and other parts of Northwest Ohio. If you're in the region, I'll come to you!"
    },
    {
      q: "Is private training better than group classes?",
      a: "Absolutely for specific issues. You get 100% focus and we move at your pup's pace, not the pace of 10 other dogs. Plus, we train where the problems actually happen—in your home."
    },
    {
      q: "Is this just a sales call?",
      a: "Nope. It's a quick chat to see if I'm the right fit to help your dog. If I'm not, I'll tell you honestly and try to recommend someone who is."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#4b2c20]">Common Questions</h2>
        <div className="space-y-6 mb-20">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#fffaf5] p-8 dog-ear-card border-2 border-stone-50 shadow-sm">
              <h3 className="text-xl font-bold text-[#e91e63] mb-3 flex items-start gap-3">
                <span className="text-2xl">🦴</span> {faq.q}
              </h3>
              <p className="text-stone-600 font-bold leading-relaxed ml-10">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center p-12 bg-pink-50 rounded-[3rem] border-4 border-dashed border-[#e91e63]">
          <h3 className="text-2xl font-black text-[#4b2c20] mb-6">Still have a question? Ask me!</h3>
          <button 
            onClick={onCtaClick}
            className="px-10 py-5 bg-[#e91e63] text-white rounded-2xl text-xl font-black hover:bg-[#c2185b] transition-all shadow-xl active:scale-95 uppercase"
          >
            Start Your Free Consult
          </button>
        </div>
      </div>
    </section>
  );
};
