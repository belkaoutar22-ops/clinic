import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Star, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#EAF8FC] via-[#F4F7F9]/80 to-white">
      {/* Subtle modern sky blue decorative radial shapes */}
      <div className="absolute top-12 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#B9E4F2]/50 to-[#70B9D5]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#EAF8FC] rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Elegant sky blue kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-5 self-start shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
              <span>Modern Cosmetic Dentistry & Smile Architecture</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-[#123D59] leading-[1.12] mb-6 text-balance">
              Your Smile Deserves <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#3986A8]">Exceptional Care</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#123D59]/75 max-w-xl leading-relaxed mb-8">
              Discover modern cosmetic dentistry and personalized smile design solutions in a
              welcoming and professional environment.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('#appointment-form')}
                className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#70B9D5] to-[#3986A8] hover:from-[#3986A8] hover:to-[#123D59] rounded-xl transition-all duration-200 shadow-md shadow-[#70B9D5]/35 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('#services')}
                className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#123D59] bg-white hover:bg-[#EAF8FC] border border-[#B9E4F2] rounded-xl transition-colors flex items-center justify-center shadow-xs"
              >
                Explore Our Services
              </button>
            </div>

            {/* 3 Visual Trust Indicators */}
            <div className="pt-8 border-t border-[#B9E4F2]/60 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EAF8FC] border border-[#B9E4F2] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3986A8]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#123D59]">Personalized Dental Care</h4>
                  <p className="text-xs text-[#123D59]/65 mt-0.5">Tailored to your facial balance</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EAF8FC] border border-[#B9E4F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#3986A8]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#123D59]">Modern Technology</h4>
                  <p className="text-xs text-[#123D59]/65 mt-0.5">3D scans & digital previews</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EAF8FC] border border-[#B9E4F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-[#3986A8]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#123D59]">Professional Dental Team</h4>
                  <p className="text-xs text-[#123D59]/65 mt-0.5">Dedicated aesthetic specialists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Floating Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer sky blue aura glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#70B9D5]/30 via-[#B9E4F2]/20 to-transparent -z-10 blur-xl" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-[0_20px_50px_rgba(18,61,89,0.12)] bg-white">
                <img
                  src="/src/assets/images/hero_hijab_smile_1794427918848.jpg"
                  alt="Modest woman wearing an elegant ivory hijab with a radiant, confident natural smile"
                  className="w-full h-auto max-h-[580px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Bottom glassmorphic overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#123D59]/90 via-[#123D59]/50 to-transparent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#B9E4F2]">
                        MyClinic12 Aesthetics
                      </p>
                      <p className="text-sm text-white font-serif italic mt-0.5">
                        Harmonious smile design tailored to each patient
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-[#B9E4F2]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#B9E4F2] rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3.5 max-w-xs animate-in fade-in slide-in-from-bottom duration-300">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#70B9D5] to-[#3986A8] flex items-center justify-center text-white shadow-md shadow-[#70B9D5]/30 shrink-0">
                  <Star className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-0.5">
                    {'★★★★★'}
                    <span className="text-[11px] font-semibold text-[#123D59] ml-1">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs font-medium text-[#123D59]">Personalized Consultation</p>
                  <p className="text-[11px] text-[#3986A8]">Patient comfort & gentle care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
