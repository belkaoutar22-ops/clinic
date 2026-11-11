import React, { useState } from 'react';
import { CLINIC_TECHNOLOGIES } from '../data/clinicData';
import { Monitor, Scan, Activity, Palette, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTech = CLINIC_TECHNOLOGIES[activeTab];

  const getTechIcon = (id: string) => {
    switch (id) {
      case 'tech-dsd':
        return <Monitor className="w-5 h-5 text-[#8C7A5C]" />;
      case 'tech-scanner':
        return <Scan className="w-5 h-5 text-[#8C7A5C]" />;
      case 'tech-imaging':
        return <Activity className="w-5 h-5 text-[#8C7A5C]" />;
      case 'tech-color':
      default:
        return <Palette className="w-5 h-5 text-[#8C7A5C]" />;
    }
  };

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#F5F2EB]/60 border-y border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-3">
            <span className="w-6 h-px bg-[#C5A880]" />
            <span>Clinical Precision</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#141D17] leading-tight mb-4">
            Modern Technology for Personalized Smile Planning
          </h2>
          <p className="text-base text-[#55635A] leading-relaxed">
            We integrate modern digital imaging, 3D visualization, and diagnostic analysis to guide
            accurate treatment simulations and collaborative smile design.
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
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                  activeTab === idx
                    ? 'bg-[#FFFFFF] border-[#C5A880] shadow-[0_4px_20px_rgba(24,36,29,0.06)]'
                    : 'bg-[#FAF8F5]/80 border-[#E8E2D5] hover:bg-white hover:border-[#DDD5C5]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === idx ? 'bg-[#18241D] text-[#DFC7A6]' : 'bg-[#EFECE4] text-[#6B756E]'
                  }`}
                >
                  {getTechIcon(tech.id)}
                </div>
                <div>
                  <div className="text-xs font-mono font-medium text-[#8C7A5C] uppercase tracking-wider mb-0.5">
                    {tech.category}
                  </div>
                  <h4 className="text-sm font-semibold text-[#18241D]">{tech.title}</h4>
                </div>
              </button>
            ))}

            <div className="p-4 rounded-xl bg-[#EFEBE2] border border-[#DDD5C5] text-[11px] text-[#6B756E] leading-relaxed">
              <span className="font-semibold text-[#18241D]">Note for Clinic Demonstration:</span>{' '}
              Technologies shown are illustrative examples of digital cosmetic dentistry workflows.
              Specific hardware and clinical devices are confirmed during individual clinic setup.
            </div>
          </div>

          {/* Right Column: Interactive Deep-Dive Viewport (8 cols) */}
          <div className="lg:col-span-8 bg-[#FFFFFF] rounded-2xl border border-[#E8E2D5] p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F0EBE0] mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7A5C]">
                  {currentTech.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18241D] mt-1">
                  {currentTech.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F4EC] border border-[#DDD5C5] text-xs font-medium text-[#18241D] self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-[#8C7A5C]" />
                <span>{currentTech.badge}</span>
              </div>
            </div>

            <p className="text-base text-[#4A554E] leading-relaxed mb-8">
              {currentTech.description}
            </p>

            {/* Illustrative Simulation Graphic Container */}
            <div className="bg-[#18241D] rounded-xl p-6 sm:p-8 text-white relative overflow-hidden mb-8 border border-[#2D3F33]">
              {/* Background technical grid pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <div className="text-[11px] uppercase tracking-wider text-[#DFC7A6] font-mono mb-1">
                    Simulation Metric
                  </div>
                  <div className="text-xl font-serif text-white">0.05 mm</div>
                  <div className="text-xs text-white/60 mt-1">Virtual margin accuracy</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <div className="text-[11px] uppercase tracking-wider text-[#DFC7A6] font-mono mb-1">
                    Proportion Rule
                  </div>
                  <div className="text-xl font-serif text-white">1 : 1.618</div>
                  <div className="text-xs text-white/60 mt-1">Golden aesthetic facial ratio</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <div className="text-[11px] uppercase tracking-wider text-[#DFC7A6] font-mono mb-1">
                    Patient Preview
                  </div>
                  <div className="text-xl font-serif text-white">Interactive 3D</div>
                  <div className="text-xs text-white/60 mt-1">Visual model alignment</div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span>Clinical Role: {currentTech.clinicalRole}</span>
                <span className="font-mono text-[10px] text-[#DFC7A6]">ILLUSTRATIVE DEMO</span>
              </div>
            </div>

            {/* Key Benefits List */}
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-3">
                Key Patient & Clinical Benefits
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentTech.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D5] flex items-start gap-2.5 text-xs text-[#2E3B33]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8C7A5C] shrink-0 mt-0.5" />
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
