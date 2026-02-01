
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  // Direct link to the brand logo provided by the user
  const logoUrl = "https://img1.wsimg.com/isteam/ip/7db214fa-eeb1-4c6b-9379-7a1a8c2fd93a/e299b61b-e8ca-4956-abb0-17d510a3bf90.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1968,h:1444";

  return (
    <section className="relative pt-6 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-white border-b-8 border-[#4b2c20]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* BRAND LOGO */}
        <div className="flex justify-center mb-10">
           <div className="relative inline-block group">
              <img 
                src={logoUrl} 
                alt="Talk Dog Toledo Logo" 
                className="w-auto h-64 md:h-96 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out transform group-hover:-translate-y-1"
              />
           </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-7xl font-bold text-[#4b2c20] leading-tight mb-6">
            Real Training for <br/>
            <span className="text-[#e91e63]">Real Life Dogs</span>
          </h1>
          
          <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Personalized, one-on-one training that happens in your home, your neighborhood, and wherever your dog needs help most.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={onCtaClick}
              className="px-12 py-6 bg-[#e91e63] text-white rounded-full text-2xl font-black hover:bg-[#c2185b] transition-all shadow-[0_8px_0_0_#ad1457] active:shadow-none active:translate-y-2 uppercase tracking-tight"
            >
              Get a Free Training Consult
            </button>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-stone-500 font-bold">
               <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-100">
                  <span className="text-xl">📍</span>
                  <span>Serving Toledo, NW Ohio & SE Michigan</span>
               </div>
               <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-100">
                  <span className="text-xl">📞</span>
                  <a href="tel:4198493605" className="hover:text-[#e91e63] transition-colors">(419) 849-3605</a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
