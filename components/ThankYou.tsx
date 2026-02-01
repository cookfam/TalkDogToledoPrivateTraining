
import React from 'react';

export const ThankYou: React.FC = () => {
  const shopBaseUrl = "https://talkdogtoledo.com/shop/ols/products?page=1&sortOption=ascend_by_price";

  const categories = [
    { 
      name: "Enrichment Toys", 
      desc: "To keep dogs mentally engaged and happy.", 
      link: shopBaseUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" />
          <path d="M18.36 5.64l-1.42 1.42M7.06 16.94l-1.42 1.42M18.36 18.36l-1.42-1.42M7.06 7.06L5.64 5.64" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
        </svg>
      )
    },
    { 
      name: "Training Collars & Leashes", 
      desc: "Professional tools for clear communication, safety, and control.", 
      link: shopBaseUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M11 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0z" />
          <path d="M11 12c3 0 4-1 6-4s5-1 6 2" />
          <path d="M6 12h.01" strokeWidth="4" />
          <rect x="3" y="10" width="6" height="4" rx="1" fill="currentColor" fillOpacity="0.3" stroke="none" />
        </svg>
      )
    },
    { 
      name: "Dog Treats & Chews", 
      desc: "High-value rewards for great progress.", 
      link: shopBaseUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M7 10c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.232 0 2.288.742 2.747 1.8l4.506 0C14.712 4.742 15.768 4 17 4c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.232 0-2.288-.742-2.747-1.8l-4.506 0C9.288 9.258 8.232 10 7 10z" />
          <path d="M7 20c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.232 0 2.288.742 2.747 1.8l4.506 0C14.712 14.742 15.768 14 17 14c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.232 0-2.288-.742-2.747-1.8l-4.506 0C9.288 19.258 8.232 20 7 20z" />
          <path d="M9.75 7L14.25 7" strokeWidth="3" opacity="0.2" />
        </svg>
      )
    },
    { 
      name: "Treat Bags", 
      desc: "Easy access to rewards during your sessions.", 
      link: shopBaseUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M6 8h12l-1 12H7L6 8z" />
          <path d="M6 8c0-2 2-4 6-4s6 2 6 4" />
          <path d="M10 12h4" />
          <path d="M12 12v4" />
          <circle cx="12" cy="14" r="3" strokeDasharray="2 2" />
        </svg>
      )
    },
  ];

  const popularPicks = [
    { 
      name: "Martingale Collar", 
      benefit: "Prevents slipping while remaining gentle.", 
      link: "https://talkdogtoledo.com/shop/ols/products/chain-martingale-collar-with-buckle" 
    },
    { 
      name: "Freedom Harness & Leash", 
      benefit: "Excellent control for dogs that pull.", 
      link: "https://talkdogtoledo.com/shop/ols/products/freedom-harness-and-leash-package" 
    },
    { 
      name: "Leather Latigo Training Leash", 
      benefit: "Soft on hands, built for professional use.", 
      link: "https://talkdogtoledo.com/shop/ols/products/leather-latigo-training-leash" 
    },
    { 
      name: "Water Buffalo Horn", 
      benefit: "A long-lasting, natural chew for focus.", 
      link: "https://talkdogtoledo.com/shop/ols/products/water-buffalo-horns" 
    },
    { 
      name: "Kong Puzzle Toy", 
      benefit: "Mental stimulation that curbs boredom.", 
      link: "https://talkdogtoledo.com/shop/ols/products/kong-lock-it-puzzle-toy" 
    },
  ];

  return (
    <div className="bg-[#fffaf5] min-h-screen">
      {/* 1. HEADER */}
      <section className="bg-white py-16 border-b-4 border-[#f3e9dc] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-6xl mb-6 block animate-bounce">🐾</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4b2c20]">Thanks! We Got Your Request.</h1>
        </div>
      </section>

      {/* 2. CONFIRMATION & NEXT STEPS */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-2xl text-stone-700 font-medium leading-relaxed mb-6">
            I'm looking forward to meeting you and your dog! 
          </p>
          <p className="text-lg text-stone-600 mb-8">
            Keep an eye on your phone—I'll send you a call or text soon (usually the same day) to find a time for our chat. This consultation is completely no-pressure and just a way for us to see if I'm the right fit for your needs.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-pink-50 text-[#e91e63] rounded-full font-bold">
            <span className="w-2 h-2 bg-[#e91e63] rounded-full animate-ping"></span>
            Talk Dog Toledo responds within 24 hours
          </div>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT ON THE CONSULT */}
      <section className="py-20 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4b2c20]">What to expect on our call</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#d4b595] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-[#4b2c20]">An honest conversation</h3>
                <p className="text-stone-600 leading-relaxed">We'll spend about 10 minutes talking through the specific issues you're seeing at home or on walks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#d4b595] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-[#4b2c20]">Professional Feedback</h3>
                <p className="text-stone-600 leading-relaxed">I'll give you my honest thoughts on your dog's behavior and let you know if private training is truly the best fit.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#d4b595] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-[#4b2c20]">Clear Next Steps</h3>
                <p className="text-stone-600 leading-relaxed">If we decide to move forward, we'll pick a date to start working together in the setting that makes the most sense for your pup.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-[#d4b595] text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-[#4b2c20]">No obligation</h3>
                <p className="text-stone-600 leading-relaxed">The goal is education. Whether we train together or not, you'll walk away with more clarity on how to help your dog.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRIVATE TRAINING REINFORCEMENT */}
      <section className="py-20 bg-[#4b2c20] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#d4b595]">Why we start with a private approach</h2>
          <p className="text-lg text-stone-200 leading-relaxed mb-8">
            Unlike busy group classes, private training allows us to focus 100% on your dog's unique personality and your family's routine. We train in real-life settings—your home, your neighborhood, or public spaces—where the behaviors actually happen.
          </p>
          <div className="flex justify-center gap-8 opacity-60">
            <span className="text-sm font-bold uppercase tracking-widest">In-Home</span>
            <span className="text-sm font-bold uppercase tracking-widest">Custom Plan</span>
            <span className="text-sm font-bold uppercase tracking-widest">Focused Results</span>
          </div>
        </div>
      </section>

      {/* 5. OPTIONAL RESOURCES / SHOP SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4b2c20] mb-4 text-center">Helpful Training Tools (Optional)</h2>
            <p className="text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed text-center">
              These are some of the tools I commonly recommend during my sessions. They aren't required for our consult, but they can be great additions to your training toolkit.
            </p>
          </div>

          {/* Subsection A: Shop by Category */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#4b2c20] mb-8 border-b-2 border-stone-50 pb-4">Shop by Category</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <a 
                  key={idx} 
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-stone-50 p-8 rounded-3xl border-2 border-transparent hover:border-[#e91e63] hover:bg-white hover:shadow-xl transition-all flex flex-col items-center text-center"
                >
                  <div className="mb-6 p-4 bg-white rounded-2xl text-[#e91e63] shadow-sm group-hover:bg-[#e91e63] group-hover:text-white transition-all duration-300 transform group-hover:rotate-3 group-hover:scale-110">
                    {cat.icon}
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h4 className="font-bold text-xl text-[#4b2c20] mb-3 group-hover:text-[#e91e63] transition-colors">{cat.name}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6">{cat.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <div className="text-[#e91e63] text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform">
                      Browse my full shop <span>→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Subsection B: Popular Picks */}
          <div className="bg-stone-50 p-8 md:p-12 rounded-[3rem]">
            <h3 className="text-2xl font-bold text-[#4b2c20] mb-8">Popular Picks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPicks.map((pick, idx) => (
                <a 
                  key={idx} 
                  href={pick.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group bg-white p-4 rounded-2xl shadow-sm border border-transparent hover:border-[#e91e63] transition-all"
                >
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#e91e63] group-hover:text-white transition-colors">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4b2c20] group-hover:text-[#e91e63] transition-colors leading-tight">{pick.name}</h4>
                    <p className="text-stone-500 text-xs mt-0.5">{pick.benefit}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL REASSURANCE */}
      <section className="pb-32 pt-10 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl text-stone-500 font-bold italic mb-12">
            "The most important next step is the conversation we're about to have. I'll be in touch very soon!"
          </p>
          <div className="space-y-6">
            <button 
              onClick={() => window.location.href='/'}
              className="px-8 py-4 bg-stone-100 text-stone-600 rounded-full font-bold hover:bg-stone-200 transition-colors"
            >
              Return to Home Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
