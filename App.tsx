
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { WhyPrivate } from './components/WhyPrivate';
import { Differentiation } from './components/Differentiation';
import { Testimonials } from './components/Testimonials';
import { ConsultExplanation } from './components/ConsultExplanation';
import { LeadForm } from './components/LeadForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ThankYou } from './components/ThankYou';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Automatically scroll to top whenever the submission state changes.
  // This ensures the Thank You page or the Home page (if navigating back) starts at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isSubmitted]);

  const scrollToForm = () => {
    const formElement = document.getElementById('consult-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmissionSuccess = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b-2 border-stone-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsSubmitted(false)}>
              <div className="bg-[#4b2c20] p-1.5 rounded-lg rotate-[-2deg]">
                <span className="text-lg font-black text-white italic px-2">TALK DOG</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <ThankYou />
        </main>
        {/* DEV ONLY BUTTON - REMOVE BEFORE DEPLOY */}
        <button 
          onClick={() => setIsSubmitted(false)}
          className="fixed bottom-4 right-4 z-[9999] bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-xs shadow-xl opacity-50 hover:opacity-100 transition-opacity"
        >
          DEV: Back to Home
        </button>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b-2 border-stone-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-[#4b2c20] p-1.5 rounded-lg rotate-[-2deg]">
              <span className="text-lg font-black text-white italic px-2">TALK DOG</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:4198493605" className="hidden md:block text-[#4b2c20] font-black text-sm hover:text-[#e91e63] transition-colors">
              (419) 849-3605
            </a>
            <button 
              onClick={scrollToForm}
              className="px-6 py-2.5 bg-[#e91e63] text-white rounded-full font-black text-xs hover:bg-[#c2185b] transition-all shadow-md active:scale-95 uppercase tracking-widest"
            >
              Free Consult
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="animate-in fade-in duration-700">
          <Hero onCtaClick={scrollToForm} />
          <WhyPrivate onCtaClick={scrollToForm} />
          <differentiation onCtaClick={scrollToForm} />
          <Testimonials />
          <ConsultExplanation onCtaClick={scrollToForm} />
          <section id="consult-form" className="py-24 bg-pink-50/20">
            <div className="max-w-3xl mx-auto px-6">
              <LeadForm onSuccess={handleSubmissionSuccess} />
            </div>
          </section>
          <FAQ onCtaClick={scrollToForm} />
        </div>
      </main>

      {/* DEV ONLY BUTTON - REMOVE BEFORE DEPLOY */}
      <button 
        onClick={() => setIsSubmitted(true)}
        className="fixed bottom-4 right-4 z-[9999] bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-xs shadow-xl opacity-50 hover:opacity-100 transition-opacity"
      >
        DEV: View Thank You Page
      </button>

      <Footer />
    </div>
  );
}

export default App;
