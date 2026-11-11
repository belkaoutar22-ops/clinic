import React, { useState } from 'react';
import { ShieldCheck, X, FileText, ArrowUp, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
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
    <footer className="bg-[#123D59] text-white pt-16 pb-12 border-t border-[#1D4F73]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1D4F73]">
          {/* Col 1: Brand Wordmark, Mission & Social Placeholders (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#70B9D5] to-[#3986A8] flex items-center justify-center text-white shadow-md shadow-[#70B9D5]/30">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 6.5 3 10.5.8 2.2 2 3.5 3 3.5s2.2-1.3 3-3.5c1.5-4 3-7.5 3-10.5 0-3.5-2.5-6-6-6z" />
                  <path d="M12 6v4" />
                  <path d="M10 8h4" />
                </svg>
              </div>
              <span className="font-sans text-2xl font-bold tracking-tight text-white">
                MyClinic<span className="text-[#70B9D5]">12</span>
              </span>
            </div>

            <p className="text-xs text-white/75 leading-relaxed font-sans max-w-sm">
              A premium cosmetic dentistry practice dedicated to modern Hollywood Smile design,
              minimally invasive ceramic veneers, and personalized aesthetic dental care.
            </p>

            {/* Social Media Placeholders */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="text-[11px] uppercase tracking-wider text-[#B9E4F2] font-semibold mr-1">
                Follow Us:
              </span>
              <a
                href="#contact"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#70B9D5] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#70B9D5] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn placeholder"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#70B9D5] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube placeholder"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#70B9D5] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#B9E4F2] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#70B9D5]" />
              <span>Certified International Aesthetic Dentistry Standards</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B9E4F2]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
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
                  About Us
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
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B9E4F2]">
              Dental Services
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
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
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B9E4F2]">
              Contact Details
            </h4>
            <div className="text-xs text-white/75 space-y-2 leading-relaxed">
              <p>Suite 1204, Healthcare City Medical Complex, Blue Horizon Avenue</p>
              <p className="text-white font-medium">+971 4 800 MYCLINIC</p>
              <p className="text-[#B9E4F2]">contact@myclinic12-demo.com</p>
              <p className="text-[11px] text-white/60 pt-1">
                Mon – Sat: 09:00 AM – 08:00 PM (Sun: Closed)
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenStaffPortal}
                className="inline-flex items-center gap-1.5 text-xs text-[#B9E4F2] hover:text-white bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#70B9D5]" />
                <span>Clinic Management Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 MyClinic12. All rights reserved.</p>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-white transition-colors"
            >
              Terms of Consultation
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white text-[#B9E4F2] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#70B9D5]" />
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123D59]/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white text-[#123D59] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#B9E4F2] shadow-2xl relative">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#3986A8] hover:text-[#123D59] hover:bg-[#EAF8FC]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-[#3986A8]">
              <FileText className="w-5 h-5 text-[#70B9D5]" />
              <h3 className="font-serif text-2xl font-semibold text-[#123D59]">
                Privacy & Medical Confidentiality
              </h3>
            </div>
            <div className="text-xs text-[#123D59]/80 space-y-3 leading-relaxed">
              <p>
                <strong>1. Patient Data Protection:</strong> MyClinic12 respects and safeguards
                all patient medical, diagnostic, and contact details. Information provided through
                this appointment request form is encrypted and securely stored for clinical
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
            <div className="mt-6 pt-4 border-t border-[#F4F7F9] text-right">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2 text-xs font-semibold bg-[#123D59] text-white rounded-xl"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Consultation Modal */}
      {termsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123D59]/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white text-[#123D59] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#B9E4F2] shadow-2xl relative">
            <button
              onClick={() => setTermsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#3986A8] hover:text-[#123D59] hover:bg-[#EAF8FC]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-[#3986A8]">
              <FileText className="w-5 h-5 text-[#70B9D5]" />
              <h3 className="font-serif text-2xl font-semibold text-[#123D59]">
                Terms of Clinical Consultation
              </h3>
            </div>
            <div className="text-xs text-[#123D59]/80 space-y-3 leading-relaxed">
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
            <div className="mt-6 pt-4 border-t border-[#F4F7F9] text-right">
              <button
                onClick={() => setTermsOpen(false)}
                className="px-5 py-2 text-xs font-semibold bg-[#123D59] text-white rounded-xl"
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
