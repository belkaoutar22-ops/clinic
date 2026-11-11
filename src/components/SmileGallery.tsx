import React, { useState } from 'react';
import { GALLERY_CASES } from '../data/clinicData';
import { GalleryCase } from '../types';
import { Sliders, Sparkles, AlertCircle, Eye } from 'lucide-react';

export const SmileGallery: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<GalleryCase>(GALLERY_CASES[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');

  const galleryShowcaseItems = [
    {
      title: 'Digital Smile Simulation',
      category: 'Aesthetic Planning',
      image: '/src/assets/images/service_digital_smile_1794434243743.jpg',
      label: 'Virtual 3D Facial Symmetry',
    },
    {
      title: 'Artisan Porcelain Veneers',
      category: 'Cosmetic Ceramics',
      image: '/src/assets/images/service_dental_veneers_1794434245184.jpg',
      label: 'Ultra-Thin Micro Laminates',
    },
    {
      title: 'Natural Smile Confidence',
      category: 'Patient Aesthetics',
      image: '/src/assets/images/hero_hijab_smile_1794427918848.jpg',
      label: 'Individual Facial Harmony',
    },
    {
      title: 'Ergonomic Treatment Suite',
      category: 'Clinic Environment',
      image: '/src/assets/images/clinic_interior_luxury_1794427920389.jpg',
      label: 'Tranquil Patient Experience',
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F4F7F9] border-y border-[#B9E4F2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FC] border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
              <span>Aesthetic Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight">
              Smile Gallery & Case Studies
            </h2>
            <p className="text-base text-[#123D59]/75 mt-3 leading-relaxed">
              Explore illustrative clinical smile transformations demonstrating conservative
              porcelain veneers, digital smile simulations, and modern clinic environments.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-2xl self-start md:self-auto border border-[#B9E4F2] shadow-xs">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 ${
                viewMode === 'slider'
                  ? 'bg-gradient-to-r from-[#70B9D5] to-[#3986A8] text-white shadow-sm'
                  : 'text-[#123D59]/70 hover:text-[#123D59]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Slider</span>
            </button>
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors ${
                viewMode === 'side-by-side'
                  ? 'bg-gradient-to-r from-[#70B9D5] to-[#3986A8] text-white shadow-sm'
                  : 'text-[#123D59]/70 hover:text-[#123D59]'
              }`}
            >
              Side by Side
            </button>
          </div>
        </div>

        {/* 4 Image Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryShowcaseItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#B9E4F2]/50 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF8FC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D59]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-[#B9E4F2] uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-semibold text-white leading-snug">{item.title}</h4>
                </div>
              </div>
              <div className="p-3.5 text-center bg-white text-xs font-medium text-[#3986A8]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {GALLERY_CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                selectedCase.id === item.id
                  ? 'bg-[#123D59] text-white border-[#123D59] shadow-sm'
                  : 'bg-white text-[#123D59] border-[#B9E4F2] hover:border-[#70B9D5]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#B9E4F2]/60 overflow-hidden shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Viewport (7 cols) */}
            <div className="lg:col-span-7">
              {viewMode === 'slider' ? (
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden select-none bg-[#123D59] border border-[#B9E4F2]/30">
                  {/* "After" Layer (Base full width) */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-[#123D59] via-[#1D4F73] to-[#123D59] text-white">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-[#70B9D5]/30 text-[#B9E4F2] border border-[#70B9D5]/40 text-xs font-mono font-semibold">
                        {selectedCase.afterLabel}
                      </span>
                      <span className="text-xs text-white/70 font-mono">Simulated Aesthetic Outcome</span>
                    </div>

                    {/* Aesthetic Dental Arc Diagram for "After" */}
                    <div className="flex flex-col items-center justify-center my-auto">
                      <div className="relative w-72 h-36 border-b-4 border-dashed border-[#70B9D5] rounded-b-full flex items-center justify-center">
                        <div className="text-center px-4">
                          <Sparkles className="w-6 h-6 text-[#70B9D5] mx-auto mb-2 animate-pulse" />
                          <div className="text-lg font-serif text-white tracking-wide">
                            Luminous Natural Alignment
                          </div>
                          <div className="text-xs text-[#B9E4F2] mt-1 font-mono">
                            Shade: Natural B1 / Translucent Incisal Layer
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-white/85 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                      <strong>Simulation Highlights:</strong> {selectedCase.afterDetails}
                    </div>
                  </div>

                  {/* "Before" Layer (Clipped by slider position) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-[#202930] to-[#121A20] text-white border-r-2 border-[#70B9D5]"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div className="w-full h-full flex flex-col justify-between p-6" style={{ minWidth: '320px' }}>
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-black/50 text-[#B9E4F2] border border-white/20 text-xs font-mono font-semibold">
                          {selectedCase.beforeLabel}
                        </span>
                        <span className="text-xs text-white/60 font-mono">Initial Condition</span>
                      </div>

                      {/* Dental Diagram for "Before" */}
                      <div className="flex flex-col items-center justify-center my-auto">
                        <div className="relative w-72 h-36 border-b-2 border-white/30 rounded-b-none flex items-center justify-center">
                          <div className="text-center px-4">
                            <div className="text-lg font-serif text-[#B9E4F2]/80 tracking-wide">
                              Pre-Treatment State
                            </div>
                            <div className="text-xs text-white/60 mt-1 font-mono">
                              Baseline Tone / Incisal Irregularity
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-white/80 bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                        <strong>Initial Presentation:</strong> {selectedCase.beforeDetails}
                      </div>
                    </div>
                  </div>

                  {/* Draggable Divider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-8 -ml-4 flex items-center justify-center cursor-ew-resize pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-9 h-9 rounded-full bg-white text-[#123D59] border-2 border-[#70B9D5] shadow-xl flex items-center justify-center pointer-events-auto">
                      <Sliders className="w-4 h-4 text-[#3986A8]" />
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
                  <div className="p-5 rounded-2xl bg-[#1A252C] text-white border border-white/10">
                    <span className="text-xs font-mono text-[#B9E4F2] uppercase tracking-wider block mb-2">
                      {selectedCase.beforeLabel}
                    </span>
                    <p className="text-sm font-serif mb-2 text-white">Initial Presentation</p>
                    <p className="text-xs text-white/75 leading-relaxed">
                      {selectedCase.beforeDetails}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#123D59] text-white border border-[#70B9D5]/40">
                    <span className="text-xs font-mono text-[#70B9D5] uppercase tracking-wider block mb-2">
                      {selectedCase.afterLabel}
                    </span>
                    <p className="text-sm font-serif mb-2 text-white">Simulated Aesthetic Design</p>
                    <p className="text-xs text-white/85 leading-relaxed">
                      {selectedCase.afterDetails}
                    </p>
                  </div>
                </div>
              )}

              {/* Slider instruction */}
              {viewMode === 'slider' && (
                <div className="mt-3 text-center text-xs text-[#3986A8] flex items-center justify-center gap-1.5 font-medium">
                  <Sliders className="w-3.5 h-3.5 text-[#70B9D5]" />
                  <span>Drag slider left or right to inspect illustrative transition</span>
                </div>
              )}
            </div>

            {/* Case Details & Notes (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono text-[#3986A8] font-semibold uppercase tracking-wider">
                  {selectedCase.category} · Protocol Simulation
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#123D59] mt-1">
                  {selectedCase.title}
                </h3>
                <p className="text-sm text-[#123D59]/75 mt-2 leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              <div className="bg-[#EAF8FC] p-4 rounded-2xl border border-[#B9E4F2] space-y-1.5">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8]">
                  Clinical Methodology
                </h5>
                <p className="text-xs text-[#123D59]/80 leading-relaxed">
                  {selectedCase.clinicalNote}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#123D59]/75 pt-3 border-t border-[#F4F7F9]">
                <span>Estimated Duration:</span>
                <span className="font-semibold text-[#123D59]">{selectedCase.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Medical Disclaimer */}
        <div className="mt-8 bg-white border border-[#B9E4F2] rounded-2xl p-5 flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-[#3986A8] shrink-0 mt-0.5" />
          <div className="text-xs text-[#123D59]/75 leading-relaxed">
            <strong className="text-[#123D59] font-semibold">Illustrative Case Disclaimer:</strong>{' '}
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
