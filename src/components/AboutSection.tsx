import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F7F9] border-y border-[#B9E4F2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Clinic Interior Image (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-2 border-white shadow-[0_12px_40px_rgba(18,61,89,0.08)] bg-white">
                <img
                  src="/images/clinic_interior_luxury.jpg"
                  alt="Modern MyClinic12 dental clinic suite with ergonomic treatment chair and sunlit panoramic windows"
                  className="w-full h-auto object-cover max-h-[520px] hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Quality commitment callout with sky blue gradient */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-gradient-to-br from-[#123D59] to-[#1D4F73] text-white p-5 rounded-2xl border border-white/20 shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#70B9D5]/30 flex items-center justify-center text-[#B9E4F2]">
                    <Award className="w-5 h-5 text-[#B9E4F2]" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#B9E4F2] font-semibold">
                    Clinical Standard
                  </span>
                </div>
                <p className="text-xs text-white/85 leading-relaxed font-sans">
                  Rigorous medical hygiene, patient-first comfort protocols, and modern dental
                  technology in every suite.
                </p>
              </div>
            </div>
          </div>

          {/* Text Content (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FC] border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
              <span>About MyClinic12</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight mb-6 text-balance">
              Creating Healthier, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#3986A8]">More Confident Smiles</span>
            </h2>

            <p className="text-base sm:text-lg text-[#123D59]/75 leading-relaxed mb-8">
              At MyClinic12, we believe dental visits should be inspiring, restorative, and
              tranquil. We combine professional clinical dentistry, modern 3D diagnostic
              technology, and personalized aesthetic treatment planning to help every patient make
              informed, confident decisions about their oral health and smile aesthetics.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#B9E4F2]/50">
              <div className="bg-white p-4 rounded-xl border border-[#B9E4F2]/40 shadow-xs">
                <div className="flex items-center gap-2 text-[#123D59] mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#70B9D5]" />
                  <h4 className="text-sm font-semibold">Patient Comfort</h4>
                </div>
                <p className="text-xs text-[#123D59]/70 leading-relaxed">
                  Anxiety-free, gentle dental visits with generous consultation times.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#B9E4F2]/40 shadow-xs">
                <div className="flex items-center gap-2 text-[#123D59] mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#70B9D5]" />
                  <h4 className="text-sm font-semibold">Professional Care</h4>
                </div>
                <p className="text-xs text-[#123D59]/70 leading-relaxed">
                  Experienced clinicians dedicated to evidence-based aesthetic solutions.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#B9E4F2]/40 shadow-xs">
                <div className="flex items-center gap-2 text-[#123D59] mb-1.5">
                  <Eye className="w-4 h-4 text-[#70B9D5]" />
                  <h4 className="text-sm font-semibold">Facial Harmony</h4>
                </div>
                <p className="text-xs text-[#123D59]/70 leading-relaxed">
                  Smile designs aligned with lip dynamics, skin tone, and natural anatomy.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#B9E4F2]/40 shadow-xs">
                <div className="flex items-center gap-2 text-[#123D59] mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#70B9D5]" />
                  <h4 className="text-sm font-semibold">Modern Approaches</h4>
                </div>
                <p className="text-xs text-[#123D59]/70 leading-relaxed">
                  Minimally invasive micro-preparation preserving natural enamel structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
