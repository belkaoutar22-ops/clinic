import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenStaffPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenStaffPortal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#technology' },
    { label: 'Our Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(18,61,89,0.06)] border-b border-[#B9E4F2]/50'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#EAF8FC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: MyClinic12 Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-[#123D59] group whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#70B9D5] to-[#3986A8] flex items-center justify-center text-white shadow-md shadow-[#70B9D5]/30">
              {/* Modern Tooth / Aesthetic Smile Glyph */}
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
            <div className="flex flex-col">
              <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#123D59]">
                MyClinic<span className="text-[#70B9D5]">12</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#3986A8] font-semibold -mt-1">
                Modern Dental & Smile Design
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#123D59]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 relative py-1 transition-colors hover:text-[#3986A8] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#70B9D5] transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Staff Access */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenStaffPortal}
              title="Clinic Staff Portal (Demo Management)"
              className="px-2.5 py-2 text-xs text-[#3986A8] hover:text-[#123D59] transition-colors rounded-lg hover:bg-[#EAF8FC] flex items-center gap-1.5 whitespace-nowrap"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#70B9D5]" />
              <span className="hidden xl:inline">Clinic Portal</span>
            </button>

            <a
              href="#appointment-form"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#appointment-form');
              }}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#70B9D5] to-[#3986A8] hover:from-[#3986A8] hover:to-[#123D59] rounded-xl transition-all duration-200 shadow-md shadow-[#70B9D5]/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              Book Your Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#123D59] hover:bg-[#EAF8FC] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#B9E4F2] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-[#123D59] hover:text-[#3986A8] hover:bg-[#EAF8FC] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#EAF8FC] flex flex-col gap-2.5">
              <a
                href="#appointment-form"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#appointment-form');
                }}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#70B9D5] to-[#3986A8] hover:from-[#3986A8] hover:to-[#123D59] rounded-xl transition-colors shadow-md"
              >
                Book Your Consultation
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStaffPortal();
                }}
                className="w-full text-center py-2 text-xs font-medium text-[#3986A8] hover:text-[#123D59] bg-[#EAF8FC] rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#70B9D5]" />
                Clinic Staff Requests Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
