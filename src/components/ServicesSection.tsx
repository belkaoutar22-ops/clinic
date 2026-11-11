import React, { useState } from 'react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';
import {
  Sparkles,
  Layers,
  Sun,
  Smile,
  Shield,
  Stethoscope,
  ArrowRight,
  X,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'hollywood-smile':
        return <Sparkles className="w-5 h-5 text-[#8C7A5C]" />;
      case 'digital-smile-design':
        return <Layers className="w-5 h-5 text-[#8C7A5C]" />;
      case 'teeth-whitening':
        return <Sun className="w-5 h-5 text-[#8C7A5C]" />;
      case 'dental-veneers':
        return <Smile className="w-5 h-5 text-[#8C7A5C]" />;
      case 'cosmetic-dentistry':
        return <Shield className="w-5 h-5 text-[#8C7A5C]" />;
      case 'general-consultation':
      default:
        return <Stethoscope className="w-5 h-5 text-[#8C7A5C]" />;
    }
  };

  const handleBookFromModal = (serviceTitle: string) => {
    setSelectedService(null);
    onSelectServiceForBooking(serviceTitle);
    const formElement = document.querySelector('#appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-3">
            <span className="w-6 h-px bg-[#C5A880]" />
            <span>Our Clinical Offerings</span>
            <span className="w-6 h-px bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#141D17] leading-tight mb-4">
            Aesthetic & Cosmetic Dentistry
          </h2>
          <p className="text-base text-[#55635A] leading-relaxed">
            Personalized treatment solutions designed around individual oral biology, functional
            occlusion, and aesthetic facial harmony.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLINIC_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8E2D5] hover:border-[#C5A880] transition-all duration-300 shadow-[0_2px_12px_rgba(24,36,29,0.03)] hover:shadow-[0_8px_30px_rgba(24,36,29,0.08)] flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header row with index and icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] border border-[#E8E2D5] flex items-center justify-center transition-colors group-hover:bg-[#18241D] group-hover:border-[#18241D] group-hover:text-[#DFC7A6]">
                    <span className="transition-colors group-hover:text-[#DFC7A6]">
                      {getServiceIcon(service.id)}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#A39987] tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#18241D] mb-3 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-sm text-[#55635A] leading-relaxed mb-6 font-sans">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#18241D] hover:text-[#8C7A5C] transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => handleBookFromModal(service.title)}
                  className="text-xs text-[#8C7A5C] hover:text-[#18241D] font-medium transition-colors"
                >
                  Select & Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical disclaimer banner */}
        <div className="mt-12 bg-[#F5F1E8] border border-[#DDD5C5] rounded-xl p-5 flex items-start sm:items-center gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#8C7A5C] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-[#6B756E] leading-relaxed">
            <strong className="text-[#18241D] font-medium">Important Clinical Notice:</strong> All
            cosmetic and restorative dental procedures require prior examination by a licensed
            dentist. Treatment options, timelines, and outcomes vary based on individual oral health,
            periodontal condition, and tooth structure. We do not promise guaranteed results.
          </p>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#18241D]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#DDD5C5] shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#6B756E] hover:text-[#18241D] hover:bg-[#EFECE4] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-[#18241D] text-[#C5A880] flex items-center justify-center">
                {getServiceIcon(selectedService.id)}
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7A5C]">
                Clinical Service Guide
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18241D] mb-4">
              {selectedService.title}
            </h3>

            <p className="text-sm text-[#4A554E] leading-relaxed mb-6">
              {selectedService.fullOverview}
            </p>

            {/* Indication & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8E2D5]">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-1">
                  Primary Indications
                </h5>
                <p className="text-xs text-[#2E3B33]">{selectedService.indication}</p>
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8E2D5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimated Protocol</span>
                </div>
                <p className="text-xs text-[#2E3B33]">{selectedService.durationEstimate}</p>
              </div>
            </div>

            {/* Clinical Stages */}
            <div className="mb-6">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-3">
                Sequential Clinical Steps
              </h5>
              <div className="space-y-2.5">
                {selectedService.clinicalStages.map((stage, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3C4A42]">
                    <CheckCircle className="w-4 h-4 text-[#8C7A5C] shrink-0 mt-0.5" />
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitability Note */}
            <div className="bg-[#F5EFE6] border border-[#DDD5C5] rounded-xl p-4 mb-8">
              <h5 className="text-xs font-semibold text-[#18241D] mb-1">
                Candidate Assessment & Suitability
              </h5>
              <p className="text-xs text-[#5D6B62] leading-relaxed">
                {selectedService.suitabilityNote}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E8E2D5]">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-[#4A554E] hover:text-[#18241D] transition-colors"
              >
                Close Details
              </button>
              <button
                onClick={() => handleBookFromModal(selectedService.title)}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#18241D] hover:bg-[#25372C] rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
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
