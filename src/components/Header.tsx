import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

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
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(20,23,22,0.06)] border-b border-[#E8E2D5]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#EFECE4]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <div className="w-9 h-9 rounded-full bg-[#18241D] flex items-center justify-center text-[#C5A880] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#18241D]">
                Smile Design Clinic
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C7A5C] font-medium -mt-1">
                Cosmetic & Aesthetic Dentistry
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A554E]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="whitespace-nowrap shrink-0 relative py-1 transition-colors hover:text-[#18241D] group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Staff Access */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenStaffPortal}
              title="Clinic Staff Portal (Demo Management)"
              className="px-2.5 py-2 text-xs text-[#6B756E] hover:text-[#18241D] transition-colors rounded-lg hover:bg-[#EFECE4] flex items-center gap-1.5 whitespace-nowrap"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C7A5C]" />
              <span className="hidden xl:inline">Clinic Portal</span>
            </button>

            <a
              href="#appointment-form"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#appointment-form');
              }}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#18241D] hover:bg-[#25372C] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 border border-[#2D3F33]"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#18241D] hover:bg-[#EFECE4] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-[#2E3B33] hover:text-[#18241D] hover:bg-[#F3EFE6] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2.5">
              <a
                href="#appointment-form"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#appointment-form');
                }}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#18241D] hover:bg-[#25372C] rounded-lg transition-colors shadow-sm"
              >
                Book a Consultation
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStaffPortal();
                }}
                className="w-full text-center py-2 text-xs font-medium text-[#4A554E] hover:text-[#18241D] bg-[#EFECE4] rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#8C7A5C]" />
                Clinic Staff Requests Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
