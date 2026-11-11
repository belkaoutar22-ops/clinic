import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/clinicData';
import { Heart, UserCheck, Sparkles, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles className="w-5 h-5 text-[#3986A8]" />;
      case 1:
        return <Shield className="w-5 h-5 text-[#3986A8]" />;
      case 2:
        return <UserCheck className="w-5 h-5 text-[#3986A8]" />;
      case 3:
      default:
        return <Heart className="w-5 h-5 text-[#3986A8]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FC] border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
            <span>The MyClinic12 Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight mb-4">
            Why Choose Our Clinic?
          </h2>
          <p className="text-base text-[#123D59]/75 leading-relaxed">
            We hold ourselves to high ethical and clinical standards, combining scientific rigor
            with genuine patient empathy and a tranquil care experience.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, idx) => (
            <div
              key={point.number}
              className="bg-[#F4F7F9] hover:bg-white rounded-3xl p-7 border border-[#B9E4F2]/50 hover:border-[#70B9D5] transition-all duration-300 shadow-xs hover:shadow-[0_12px_36px_rgba(112,185,213,0.18)] flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#B9E4F2] flex items-center justify-center transition-all group-hover:bg-gradient-to-br group-hover:from-[#70B9D5] group-hover:to-[#3986A8] shadow-xs">
                    <span className="transition-colors group-hover:text-white">
                      {getIcon(idx)}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#70B9D5] tracking-wider">
                    {point.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#123D59] mb-3 leading-snug group-hover:text-[#3986A8] transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#123D59]/75 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#B9E4F2]/40 flex items-center text-[11px] font-mono uppercase tracking-wider text-[#3986A8]">
                <span>Evidence-Based Care</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
