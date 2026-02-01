
import React, { useState } from 'react';

interface LeadFormProps {
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  // The specific n8n webhook URL provided for Talk Dog Toledo
  const WEBHOOK_URL = 'https://cookfamai.app.n8n.cloud/webhook-test/talk-dog/private-training/v1/lead';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dogInfo: '',
    challenge: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'Landing Page'
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error('Webhook Error:', err);
      setError('Oops! Something went wrong sending your request. Please try again or call us at (419) 849-3605.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border-b-[12px] border-[#4b2c20] border-x-4 border-t-4 border-[#f3e9dc]">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4b2c20]">Let's Get Started!</h2>
        <div className="inline-block px-6 py-2 bg-pink-50 text-[#e91e63] rounded-full font-black text-sm uppercase tracking-widest">
          Free Consultation Request
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#4b2c20] ml-2">My Name</label>
            <input 
              required
              disabled={isSubmitting}
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-stone-50 border-4 border-stone-200 rounded-2xl focus:border-[#e91e63] focus:bg-white outline-none transition-all text-xl font-bold text-[#4b2c20] placeholder:text-stone-400 disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg font-bold text-[#4b2c20] ml-2">My Phone</label>
            <input 
              required
              disabled={isSubmitting}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-stone-50 border-4 border-stone-200 rounded-2xl focus:border-[#e91e63] focus:bg-white outline-none transition-all text-xl font-bold text-[#4b2c20] placeholder:text-stone-400 disabled:opacity-50"
              placeholder="(419) 555-0123"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-lg font-bold text-[#4b2c20] ml-2">My Email</label>
          <input 
            required
            disabled={isSubmitting}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-stone-50 border-4 border-stone-200 rounded-2xl focus:border-[#e91e63] focus:bg-white outline-none transition-all text-xl font-bold text-[#4b2c20] placeholder:text-stone-400 disabled:opacity-50"
            placeholder="email@example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-bold text-[#4b2c20] ml-2">Dog's Age & Breed</label>
          <input 
            required
            disabled={isSubmitting}
            name="dogInfo"
            value={formData.dogInfo}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-stone-50 border-4 border-stone-200 rounded-2xl focus:border-[#e91e63] focus:bg-white outline-none transition-all text-xl font-bold text-[#4b2c20] placeholder:text-stone-400 disabled:opacity-50"
            placeholder="e.g. 1yr Labradoodle"
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-bold text-[#4b2c20] ml-2">Our Biggest Challenge</label>
          <textarea 
            required
            disabled={isSubmitting}
            name="challenge"
            rows={4}
            value={formData.challenge}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-stone-50 border-4 border-stone-200 rounded-2xl focus:border-[#e91e63] focus:bg-white outline-none transition-all text-xl font-bold text-[#4b2c20] placeholder:text-stone-400 resize-none disabled:opacity-50"
            placeholder="What's going on with your pup?"
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 border-2 border-red-100 text-red-600 rounded-2xl font-bold text-center animate-pulse">
            {error}
          </div>
        )}

        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-7 bg-[#e91e63] text-white rounded-[2rem] text-2xl font-black transition-all uppercase flex items-center justify-center gap-4 ${
            isSubmitting 
              ? 'opacity-70 cursor-not-allowed grayscale' 
              : 'hover:bg-[#c2185b] shadow-[0_10px_0_0_#ad1457] active:shadow-none active:translate-y-2'
          }`}
        >
          <span>{isSubmitting ? 'Sending Request...' : 'Request My Free Consult'}</span>
          <span className={`text-3xl ${isSubmitting ? 'animate-spin' : ''}`}>🐾</span>
        </button>
        <p className="text-center text-stone-400 font-bold italic">Talk Dog Toledo responds within 24 hours!</p>
      </form>
    </div>
  );
};
