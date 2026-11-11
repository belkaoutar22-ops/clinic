import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F2EB]/60 border-y border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Clinic Interior Image (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#DDD5C5] shadow-[0_8px_30px_rgba(24,36,29,0.06)] bg-[#FAF8F5]">
                <img
                  src="/src/assets/images/clinic_interior_luxury_1794427920389.jpg"
                  alt="Modern luxury dental clinic suite with warm travertine walls, ergonomic chair and sunlit panoramic windows"
                  className="w-full h-auto object-cover max-h-[520px] hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Quality commitment callout */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#18241D] text-white p-5 rounded-xl border border-[#2D3F33] shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#DFC7A6]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#DFC7A6] font-semibold">
                    Clinical Standard
                  </span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-sans">
                  Sterilization, biological safety, and patient comfort conform to strict
                  international healthcare protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-3">
              <span className="w-6 h-px bg-[#C5A880]" />
              <span>About Smile Design Clinic</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#141D17] leading-tight mb-6 text-balance">
              Where Dental Care Meets <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#1E3025]">Aesthetic Excellence</span>
            </h2>

            <p className="text-base sm:text-lg text-[#55635A] leading-relaxed mb-8">
              We combine professional dental care, modern techniques and personalized treatment
              planning to help every patient make informed decisions about their smile.
            </p>

            {/* Core Values / Clinical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E0D9CB]">
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center gap-2 text-[#18241D]">
                  <ShieldCheck className="w-4 h-4 text-[#8C7A5C]" />
                  <h4 className="text-sm font-semibold">Conservative Approach</h4>
                </div>
                <p className="text-xs text-[#6B756E] leading-relaxed">
                  We prioritize natural enamel conservation using micro-preparation and biocompatible
                  ceramics.
                </p>
              </div>

              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center gap-2 text-[#18241D]">
                  <Eye className="w-4 h-4 text-[#8C7A5C]" />
                  <h4 className="text-sm font-semibold">Facial Harmony</h4>
                </div>
                <p className="text-xs text-[#6B756E] leading-relaxed">
                  Smile design tailored to lips, skin tone, facial proportions, and speech phonetics.
                </p>
              </div>

              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center gap-2 text-[#18241D]">
                  <HeartHandshake className="w-4 h-4 text-[#8C7A5C]" />
                  <h4 className="text-sm font-semibold">Transparent Dialogue</h4>
                </div>
                <p className="text-xs text-[#6B756E] leading-relaxed">
                  Clear explanations of options, expected durations, and realistic clinical outcomes
                  without pressure.
                </p>
              </div>

              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center gap-2 text-[#18241D]">
                  <Award className="w-4 h-4 text-[#8C7A5C]" />
                  <h4 className="text-sm font-semibold">Tranquil Experience</h4>
                </div>
                <p className="text-xs text-[#6B756E] leading-relaxed">
                  Serene clinic atmosphere dedicated to patient relaxation and attentive personal
                  care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
