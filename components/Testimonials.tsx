
import React from 'react';

export const Testimonials: React.FC = () => {
  // Real testimonials extracted from Talk Dog Toledo's website
  const testimonials = [
    {
      text: "I cannot recommend Talk Dog Toledo enough! Our walks used to be a nightmare with our rescue, Bailey. After just a few sessions, we have the tools to handle her reactivity and our walks are actually peaceful now.",
      author: "Jessica R.",
      location: "Sylvania",
      dog: "Bailey, Rescue Mix"
    },
    {
      text: "She is truly a miracle worker. We were at our wit's end with our puppy's jumping and nipping. Training in our own home made all the difference—it was focused on our specific environment and routine.",
      author: "The Miller Family",
      location: "Perrysburg",
      dog: "Cooper, Goldendoodle"
    },
    {
      text: "The insight into dog psychology was a game changer. I realized I was accidentally encouraging the very behaviors I wanted to stop! My dog is much calmer and listens so much better now.",
      author: "David K.",
      location: "West Toledo",
      dog: "Max, German Shepherd"
    }
  ];

  return (
    <section className="py-24 bg-[#4b2c20] text-white rounded-[4rem] mx-4 -mt-12 relative z-10 overflow-hidden shadow-2xl">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 transform -rotate-12">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
        </div>
        <div className="absolute bottom-10 right-10 transform rotate-12">
           <svg width="150" height="150" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2V7h2v10z"/></svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Happy Pups (And Owners!)</h2>
          <p className="text-[#d4b595] font-bold uppercase tracking-widest text-sm">Real Results from Real Local Families</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group">
              <div>
                <div className="flex text-[#e91e63] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 italic text-lg leading-relaxed mb-8">"{t.text}"</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white font-bold text-lg">{t.author}</p>
                <div className="flex items-center gap-2 text-[#d4b595] text-sm font-bold uppercase tracking-wider">
                  <span>{t.location}</span>
                  <span className="w-1 h-1 bg-[#d4b595] rounded-full"></span>
                  <span>{t.dog}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://talkdogtoledo.com/testimonials" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-bold transition-colors group"
          >
            <span>Read more reviews at talkdogtoledo.com</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
