import React, { useState } from 'react';
import { Sparkles, ShieldCheck, X, FileText, ArrowUp } from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';

interface FooterProps {
  onOpenStaffPortal: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStaffPortal, onSelectService }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141C17] text-white pt-16 pb-12 border-t border-[#232F27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#232F27]">
          {/* Col 1: Brand Wordmark & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#233128] flex items-center justify-center text-[#DFC7A6] border border-[#34463A]">
                <Sparkles className="w-4 h-4 text-[#DFC7A6]" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                Smile Design Clinic
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-sans max-w-sm">
              A bespoke cosmetic dentistry practice dedicated to modern Hollywood Smile design,
              minimally invasive ceramic veneers, and personalized aesthetic dental care.
            </p>

            <div className="pt-2 text-[11px] text-[#DFC7A6] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified International Aesthetic Dentistry Standards</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC7A6]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  onClick={() => scrollTo('#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="hover:text-white transition-colors"
                >
                  About Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#technology')}
                  className="hover:text-white transition-colors"
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#team')}
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#gallery')}
                  className="hover:text-white transition-colors"
                >
                  Smile Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinical Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC7A6]">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {CLINIC_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onSelectService(s.title);
                      scrollTo('#appointment-form');
                    }}
                    className="hover:text-white text-left transition-colors truncate max-w-full block"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Appointments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#DFC7A6]">
              Consultations
            </h4>
            <div className="text-xs text-white/70 space-y-2 leading-relaxed">
              <p>Level 4, Al-Noor Medical Center, Avenue des Nations, Suite 402</p>
              <p className="text-white font-medium">+971 4 800 SMILE</p>
              <p className="text-[#DFC7A6]">consultation@smiledesignclinic-demo.com</p>
              <p className="text-[11px] text-white/50 pt-1">
                Mon – Sat: 09:00 AM – 08:00 PM (Sun: Closed)
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenStaffPortal}
                className="inline-flex items-center gap-1.5 text-xs text-[#DFC7A6] hover:text-white bg-[#1E2B22] px-3 py-1.5 rounded-lg border border-[#314537] transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Clinic Management Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 Smile Design Clinic. All rights reserved.</p>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy & Medical Data
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-white transition-colors"
            >
              Terms of Clinical Consultation
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white text-[#DFC7A6] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#FAF8F5] text-[#18241D] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#DDD5C5] shadow-2xl relative">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#6B756E] hover:text-[#18241D]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-[#8C7A5C]">
              <FileText className="w-5 h-5" />
              <h3 className="font-serif text-2xl font-semibold text-[#18241D]">
                Privacy & Medical Confidentiality
              </h3>
            </div>
            <div className="text-xs text-[#55635A] space-y-3 leading-relaxed">
              <p>
                <strong>1. Patient Data Protection:</strong> Smile Design Clinic respects and
                safeguards all patient medical, diagnostic, and contact details. Information provided
                through this appointment request form is encrypted and securely stored for clinical
                coordination purposes only.
              </p>
              <p>
                <strong>2. No Commercial Disclosure:</strong> We will never sell, lease, or
                distribute your personal or contact information to outside commercial entities or
                marketing agencies.
              </p>
              <p>
                <strong>3. Clinical Contact Consent:</strong> Submitting an appointment request
                authorizes our registered clinic coordinators to reach out by telephone or secure
                messaging to confirm your scheduled consultation and review preliminary dental
                records.
              </p>
              <p>
                <strong>4. Right of Erasure:</strong> Patients may at any time request the deletion
                or modification of their consultation records by contacting our clinic administration
                desk.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-right">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2 text-xs font-semibold bg-[#18241D] text-white rounded-lg"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Consultation Modal */}
      {termsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#FAF8F5] text-[#18241D] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#DDD5C5] shadow-2xl relative">
            <button
              onClick={() => setTermsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#6B756E] hover:text-[#18241D]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-[#8C7A5C]">
              <FileText className="w-5 h-5" />
              <h3 className="font-serif text-2xl font-semibold text-[#18241D]">
                Terms of Clinical Consultation
              </h3>
            </div>
            <div className="text-xs text-[#55635A] space-y-3 leading-relaxed">
              <p>
                <strong>1. Preliminary Request Only:</strong> Submitting a form on this website
                constitutes a preliminary scheduling request and does not form a binding clinical
                contract or guarantee a confirmed appointment time until verified by clinic staff.
              </p>
              <p>
                <strong>2. Diagnostic Requirement:</strong> No dental cosmetic procedure (including
                porcelain veneers, Hollywood Smile makeovers, or teeth whitening) is performed
                without an in-person biological examination by a licensed practitioner.
              </p>
              <p>
                <strong>3. Non-Guaranteed Aesthetic Outcomes:</strong> Dental and biological
                outcomes depend upon patient oral hygiene, enamel thickness, and anatomical
                variations. No medical guarantee of uniform aesthetic results is implied.
              </p>
              <p>
                <strong>4. Cancellation Notice:</strong> We kindly request at least 24 hours advance
                notice if you need to reschedule your clinical appointment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E8E2D5] text-right">
              <button
                onClick={() => setTermsOpen(false)}
                className="px-5 py-2 text-xs font-semibold bg-[#18241D] text-white rounded-lg"
              >
                Close Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
