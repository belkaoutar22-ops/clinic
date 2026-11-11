import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/clinicData';
import { Heart, UserCheck, Sparkles, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles className="w-5 h-5 text-[#8C7A5C]" />;
      case 1:
        return <UserCheck className="w-5 h-5 text-[#8C7A5C]" />;
      case 2:
        return <Shield className="w-5 h-5 text-[#8C7A5C]" />;
      case 3:
      default:
        return <Heart className="w-5 h-5 text-[#8C7A5C]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-3">
            <span className="w-6 h-px bg-[#C5A880]" />
            <span>Our Commitment</span>
            <span className="w-6 h-px bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#141D17] leading-tight mb-4">
            Why Choose Smile Design Clinic?
          </h2>
          <p className="text-base text-[#55635A] leading-relaxed">
            We hold ourselves to high ethical and clinical standards, combining scientific rigor
            with genuine patient empathy.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, idx) => (
            <div
              key={point.number}
              className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8E2D5] hover:border-[#C5A880] transition-all duration-300 shadow-[0_2px_12px_rgba(24,36,29,0.03)] hover:shadow-[0_8px_30px_rgba(24,36,29,0.08)] flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] border border-[#E8E2D5] flex items-center justify-center transition-colors group-hover:bg-[#18241D] group-hover:border-[#18241D]">
                    <span className="transition-colors group-hover:text-[#DFC7A6]">
                      {getIcon(idx)}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#A39987] tracking-wider">
                    {point.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#18241D] mb-3 leading-snug">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#55635A] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F5EFE6] flex items-center text-[11px] font-mono uppercase tracking-wider text-[#8C7A5C]">
                <span>Evidence-Based Care</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
