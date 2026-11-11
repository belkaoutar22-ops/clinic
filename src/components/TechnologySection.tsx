import React, { useState } from 'react';
import { CLINIC_TECHNOLOGIES } from '../data/clinicData';
import { Monitor, Scan, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTech = CLINIC_TECHNOLOGIES[activeTab];

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#EAF8FC]/60 border-y border-[#B9E4F2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
            <span>Advanced Clinical Diagnostics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight mb-4">
            Modern Technology. Personalized Dental Care.
          </h2>
          <p className="text-base text-[#123D59]/75 leading-relaxed">
            We incorporate modern 3D optical scanning, virtual aesthetic smile mapping, and
            contemporary ergonomic treatment equipment to ensure high diagnostic precision and
            patient comfort.
          </p>
        </div>

        {/* Technology Interactive Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Technology Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {CLINIC_TECHNOLOGIES.map((tech, idx) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                  activeTab === idx
                    ? 'bg-white border-[#70B9D5] shadow-[0_8px_24px_rgba(112,185,213,0.2)] ring-1 ring-[#70B9D5]'
                    : 'bg-white/70 border-[#B9E4F2]/60 hover:bg-white hover:border-[#70B9D5]'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === idx
                      ? 'bg-gradient-to-br from-[#70B9D5] to-[#3986A8] text-white shadow-sm'
                      : 'bg-[#EAF8FC] text-[#3986A8]'
                  }`}
                >
                  {idx === 0 ? <Scan className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-[#3986A8] uppercase tracking-wider mb-0.5">
                    {tech.category}
                  </div>
                  <h4 className="text-sm font-semibold text-[#123D59]">{tech.title}</h4>
                </div>
              </button>
            ))}

            {/* Illustrative Notice */}
            <div className="p-4 rounded-2xl bg-white border border-[#B9E4F2] text-xs text-[#123D59]/70 leading-relaxed flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-[#70B9D5] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#123D59]">Illustrative Technology Visuals:</strong> Images
                depict modern aesthetic dentistry workflows and digital scanning equipment.
                Confirmed clinical hardware is reviewed with patients during consultation.
              </span>
            </div>
          </div>

          {/* Right Column: Deep-Dive Viewport with Image (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#B9E4F2]/60 p-6 sm:p-9 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAF8FC] mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#3986A8]">
                  {currentTech.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D59] mt-1">
                  {currentTech.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF8FC] border border-[#B9E4F2] text-xs font-medium text-[#123D59]">
                <Sparkles className="w-3.5 h-3.5 text-[#70B9D5]" />
                <span>{currentTech.badge}</span>
              </div>
            </div>

            {/* Large Original AI Generated Tech Visual */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-[#B9E4F2]/50 bg-[#EAF8FC]">
              <img
                src={currentTech.image}
                alt={currentTech.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 bg-[#123D59]/80 backdrop-blur-md px-3 py-1 rounded-lg text-white font-mono text-[10px] uppercase">
                Original AI Visual · MyClinic12
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#123D59]/80 leading-relaxed mb-6">
              {currentTech.description}
            </p>

            {/* Key Benefits */}
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-3">
                Key Diagnostic & Patient Benefits
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentTech.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#F4F7F9] border border-[#B9E4F2]/40 flex items-start gap-2.5 text-xs text-[#123D59]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#70B9D5] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
