import React, { useState } from 'react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';
import {
  Sparkles,
  ArrowRight,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
  Stethoscope,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookFromModal = (serviceTitle: string) => {
    setSelectedService(null);
    onSelectServiceForBooking(serviceTitle);
    const formElement = document.querySelector('#appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FC] border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
            <span>Comprehensive Dental Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight mb-4">
            Our Dental Services
          </h2>
          <p className="text-base text-[#123D59]/75 leading-relaxed">
            From precision digital smile simulations to conservative porcelain veneers and restorative
            care, our team crafts tailored solutions for long-term oral health and confidence.
          </p>
        </div>

        {/* 6 Image-Rich Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#B9E4F2]/50 hover:border-[#70B9D5] transition-all duration-300 shadow-[0_4px_24px_rgba(18,61,89,0.05)] hover:shadow-[0_12px_36px_rgba(112,185,213,0.18)] flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Service Dedicated AI Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF8FC]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123D59]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Card Index Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-[#123D59] border border-[#B9E4F2]/60 shadow-xs">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-semibold text-[#123D59] mb-3 tracking-tight group-hover:text-[#3986A8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#123D59]/75 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#F4F7F9] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3986A8] hover:text-[#123D59] transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => handleBookFromModal(service.title)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-[#EAF8FC] hover:bg-[#B9E4F2] text-[#123D59] font-medium transition-colors"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Note Banner */}
        <div className="mt-14 bg-[#EAF8FC] border border-[#B9E4F2] rounded-2xl p-5 flex items-start sm:items-center gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#3986A8] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-[#123D59]/80 leading-relaxed">
            <strong className="text-[#123D59] font-semibold">Professional Dental Assessment:</strong>{' '}
            Cosmetic dental treatments require comprehensive in-person biological evaluation by a
            licensed dentist. Treatment plans and durations vary by individual anatomical condition.
            We do not promise guaranteed uniform outcomes.
          </p>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#123D59]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#B9E4F2] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#3986A8] hover:text-[#123D59] hover:bg-[#EAF8FC] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/8] rounded-2xl overflow-hidden mb-6 bg-[#EAF8FC] border border-[#B9E4F2]/50">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3986A8] mb-1">
              <Stethoscope className="w-4 h-4 text-[#70B9D5]" />
              <span>Clinical Treatment Guide</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#123D59] mb-4">
              {selectedService.title}
            </h3>

            <p className="text-sm text-[#123D59]/80 leading-relaxed mb-6">
              {selectedService.fullOverview}
            </p>

            {/* Indication & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#F4F7F9] p-4 rounded-xl border border-[#B9E4F2]/40">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-1">
                  Primary Indications
                </h5>
                <p className="text-xs text-[#123D59]">{selectedService.indication}</p>
              </div>

              <div className="bg-[#F4F7F9] p-4 rounded-xl border border-[#B9E4F2]/40">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#70B9D5]" />
                  <span>Estimated Schedule</span>
                </div>
                <p className="text-xs text-[#123D59]">{selectedService.durationEstimate}</p>
              </div>
            </div>

            {/* Sequential Steps */}
            <div className="mb-6">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-3">
                Sequential Clinical Steps
              </h5>
              <div className="space-y-2.5">
                {selectedService.clinicalStages.map((stage, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#123D59]">
                    <CheckCircle className="w-4 h-4 text-[#70B9D5] shrink-0 mt-0.5" />
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitability Note */}
            <div className="bg-[#EAF8FC] border border-[#B9E4F2] rounded-xl p-4 mb-8">
              <h5 className="text-xs font-semibold text-[#123D59] mb-1">
                Candidate Assessment & Suitability
              </h5>
              <p className="text-xs text-[#123D59]/80 leading-relaxed">
                {selectedService.suitabilityNote}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#F4F7F9]">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#123D59] hover:bg-[#F4F7F9] rounded-xl transition-colors"
              >
                Close Details
              </button>
              <button
                onClick={() => handleBookFromModal(selectedService.title)}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#70B9D5] to-[#3986A8] hover:from-[#3986A8] hover:to-[#123D59] rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Appointment For This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
