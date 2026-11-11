import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle architectural background gradients */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F5EFE6]/60 via-[#FAF8F5]/30 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-32 right-12 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Elegant editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-4">
              <span className="w-6 h-px bg-[#C5A880]" />
              <span>Bespoke Cosmetic Dentistry</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141D17] leading-[1.12] mb-6 text-balance">
              Your Smile, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#1E3025]">Your Confidence</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#55635A] max-w-xl leading-relaxed mb-8">
              Discover personalized cosmetic dentistry and modern smile design solutions tailored to
              your needs. We harmonize dental aesthetics with biological health in a calm, welcoming
              setting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('#appointment-form')}
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#18241D] hover:bg-[#25372C] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group border border-[#2D3F33]"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('#services')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#18241D] bg-[#F1ECE1] hover:bg-[#EAE4D7] border border-[#DDD5C5] rounded-lg transition-colors flex items-center justify-center"
              >
                Explore Our Services
              </button>
            </div>

            {/* 3 Trust Indicators */}
            <div className="pt-8 border-t border-[#E8E2D5] grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#8C7A5C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18241D]">Personalized Smile Design</h4>
                  <p className="text-xs text-[#6B756E] mt-0.5">Customized to your facial balance</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#8C7A5C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18241D]">Modern Dental Technology</h4>
                  <p className="text-xs text-[#6B756E] mt-0.5">3D imaging & digital simulation</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#8C7A5C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18241D]">Patient-Focused Care</h4>
                  <p className="text-xs text-[#6B756E] mt-0.5">Serene & gentle treatment experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer champagne aura frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#D5C2A5]/40 via-transparent to-[#C5A880]/30 -z-10 blur-sm" />

              <div className="relative rounded-2xl overflow-hidden border border-[#DDD5C5] bg-[#F7F4EC] shadow-[0_12px_40px_rgba(24,36,29,0.08)]">
                <img
                  src="/src/assets/images/hero_hijab_smile_1794427918848.jpg"
                  alt="Modest woman wearing an elegant ivory hijab with a natural, healthy, confident smile"
                  className="w-full h-auto max-h-[580px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle luxury scrim banner at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#18241D]/90 via-[#18241D]/50 to-transparent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#D5C2A5]">
                        Natural Dental Aesthetics
                      </p>
                      <p className="text-sm text-white/90 font-serif italic mt-0.5">
                        Harmonious smile transformations tailored to each individual
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#DFC7A6]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Accompanying proof badge card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xl p-4 shadow-lg hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#18241D] flex items-center justify-center text-[#C5A880] shrink-0">
                  <span className="font-serif font-bold text-sm">SDC</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#18241D]">Individualized Assessment</p>
                  <p className="text-[11px] text-[#6B756E]">Every treatment plan begins with careful clinical diagnostics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
