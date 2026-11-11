import React, { useState } from 'react';
import { GALLERY_CASES } from '../data/clinicData';
import { GalleryCase } from '../types';
import { AlertCircle, Sliders, CheckCircle2, Sparkles } from 'lucide-react';

export const SmileGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<GalleryCase>(GALLERY_CASES[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F5F2EB]/60 border-y border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-3">
              <span className="w-6 h-px bg-[#C5A880]" />
              <span>Aesthetic Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#141D17] leading-tight">
              Smile Gallery & Case Studies
            </h2>
            <p className="text-base text-[#55635A] mt-3 leading-relaxed">
              Explore illustrative clinical smile transformations demonstrating conservative
              porcelain veneers, digital smile design, and professional enamel whitening.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-[#EFECE4] p-1 rounded-xl self-start md:self-auto border border-[#DDD5C5]">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                viewMode === 'slider'
                  ? 'bg-white text-[#18241D] shadow-sm'
                  : 'text-[#6B756E] hover:text-[#18241D]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Slider</span>
            </button>
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                viewMode === 'side-by-side'
                  ? 'bg-white text-[#18241D] shadow-sm'
                  : 'text-[#6B756E] hover:text-[#18241D]'
              }`}
            >
              Side by Side
            </button>
          </div>
        </div>

        {/* Case Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {GALLERY_CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${
                selectedCase.id === item.id
                  ? 'bg-[#18241D] text-white border-[#18241D] shadow-sm'
                  : 'bg-white text-[#4A554E] border-[#E8E2D5] hover:border-[#C5A880]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Showcase Card */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Viewport (7 cols) */}
            <div className="lg:col-span-7">
              {viewMode === 'slider' ? (
                <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden select-none bg-[#18241D] border border-[#2D3F33]">
                  {/* "After" Layer (Base full width) */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-[#1E2E24] to-[#121A15] text-white">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-1 rounded bg-[#C5A880]/20 text-[#DFC7A6] border border-[#C5A880]/30 text-xs font-mono font-medium">
                        {selectedCase.afterLabel}
                      </span>
                      <span className="text-xs text-white/50 font-mono">Simulated Aesthetic Outcome</span>
                    </div>

                    {/* Aesthetic Dental Arc Vector Diagram for "After" */}
                    <div className="flex flex-col items-center justify-center my-auto">
                      <div className="relative w-72 h-36 border-b-4 border-dashed border-[#DFC7A6]/60 rounded-b-full flex items-center justify-center">
                        <div className="text-center px-4">
                          <Sparkles className="w-6 h-6 text-[#DFC7A6] mx-auto mb-2 animate-pulse" />
                          <div className="text-lg font-serif text-white tracking-wide">
                            Natural Luminous Alignment
                          </div>
                          <div className="text-xs text-[#DFC7A6] mt-1 font-mono">
                            Shade: Natural B1 / Translucent Incisal Layer
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-white/70 bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                      <strong>Result Highlights:</strong> {selectedCase.afterDetails}
                    </div>
                  </div>

                  {/* "Before" Layer (Clipped by slider position) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-[#2D261E] to-[#1C1712] text-white border-r-2 border-[#DFC7A6]"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div className="w-full h-full flex flex-col justify-between p-6" style={{ minWidth: '320px' }}>
                      <div className="flex justify-between items-start">
                        <span className="px-2.5 py-1 rounded bg-black/50 text-[#C4B89B] border border-white/20 text-xs font-mono font-medium">
                          {selectedCase.beforeLabel}
                        </span>
                        <span className="text-xs text-white/50 font-mono">Initial Condition</span>
                      </div>

                      {/* Dental Diagram for "Before" */}
                      <div className="flex flex-col items-center justify-center my-auto">
                        <div className="relative w-72 h-36 border-b-2 border-white/30 rounded-b-none flex items-center justify-center">
                          <div className="text-center px-4">
                            <div className="text-lg font-serif text-[#C4B89B] tracking-wide">
                              Pre-Treatment Assessment
                            </div>
                            <div className="text-xs text-white/60 mt-1 font-mono">
                              Baseline Tone / Incisal Irregularity
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-white/70 bg-black/50 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                        <strong>Initial Presentation:</strong> {selectedCase.beforeDetails}
                      </div>
                    </div>
                  </div>

                  {/* Draggable Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#18241D] text-[#DFC7A6] border-2 border-[#DFC7A6] shadow-xl flex items-center justify-center pointer-events-auto">
                      <Sliders className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Slider Input Range */}
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label="Drag before and after comparison slider"
                  />
                </div>
              ) : (
                /* Side by Side Mode */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#26201A] text-white border border-white/10">
                    <span className="text-xs font-mono text-[#C4B89B] uppercase tracking-wider block mb-2">
                      {selectedCase.beforeLabel}
                    </span>
                    <p className="text-sm font-serif mb-2">Initial Dental Condition</p>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {selectedCase.beforeDetails}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#18241D] text-white border border-[#2D3F33]">
                    <span className="text-xs font-mono text-[#DFC7A6] uppercase tracking-wider block mb-2">
                      {selectedCase.afterLabel}
                    </span>
                    <p className="text-sm font-serif mb-2">Harmonious Aesthetic Result</p>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {selectedCase.afterDetails}
                    </p>
                  </div>
                </div>
              )}

              {/* Slider instruction */}
              {viewMode === 'slider' && (
                <div className="mt-3 text-center text-xs text-[#8C7A5C] flex items-center justify-center gap-1.5 font-medium">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Drag slider left or right to inspect before and after transition</span>
                </div>
              )}
            </div>

            {/* Case Details & Notes (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono text-[#8C7A5C] font-semibold uppercase tracking-wider">
                  {selectedCase.category} · Protocol Analysis
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#18241D] mt-1">
                  {selectedCase.title}
                </h3>
                <p className="text-sm text-[#55635A] mt-2 leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D5] space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C]">
                  Clinical Methodology
                </h5>
                <p className="text-xs text-[#2E3B33] leading-relaxed">
                  {selectedCase.clinicalNote}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#55635A] pt-3 border-t border-[#F0EBE0]">
                <span>Treatment Duration:</span>
                <span className="font-semibold text-[#18241D]">{selectedCase.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Medical Disclaimer */}
        <div className="mt-8 bg-[#F5EFE6] border border-[#DDD5C5] rounded-xl p-5 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#8C7A5C] shrink-0 mt-0.5" />
          <div className="text-xs text-[#6B756E] leading-relaxed">
            <strong className="text-[#18241D] font-medium">Illustrative Case Disclaimer:</strong>{' '}
            Visual case presentations and simulations are provided for educational and illustrative
            purposes to demonstrate aesthetic smile design possibilities. They do not represent
            guaranteed treatment outcomes for any individual patient. Oral anatomy, tooth structure,
            and biological health require personal in-clinic evaluation.
          </div>
        </div>
      </div>
    </section>
  );
};
