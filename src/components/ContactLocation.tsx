import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Edit3, RotateCcw } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const defaultContact = {
    address: 'Level 4, Al-Noor Medical Center, Avenue des Nations, Suite 402',
    phone: '+971 4 800 SMILE / +971 50 123 4567',
    email: 'consultation@smiledesignclinic-demo.com',
    hours: 'Monday – Saturday: 09:00 AM – 08:00 PM (Sunday: Closed for Sterilization)',
    city: 'Dubai Healthcare District, UAE',
  };

  const [contactData, setContactData] = useState(defaultContact);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5F2EB]/60 border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-3">
              <span className="w-6 h-px bg-[#C5A880]" />
              <span>Location & Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#141D17] leading-tight">
              Visit Smile Design Clinic
            </h2>
            <p className="text-base text-[#55635A] mt-3 leading-relaxed">
              Conveniently located in a tranquil healthcare district with dedicated patient parking
              and private consultation suites.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3.5 py-2 text-xs font-medium rounded-lg border border-[#DDD5C5] bg-white hover:bg-[#FAF8F5] text-[#18241D] transition-colors flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Finish Customizing Details' : 'Edit Contact Details (Demo)'}</span>
            </button>
            {isEditing && (
              <button
                onClick={() => setContactData(defaultContact)}
                className="p-2 text-xs text-[#6B756E] hover:text-[#18241D] bg-white border border-[#DDD5C5] rounded-lg"
                title="Reset contact details"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Contact Info & Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E2D5] shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F4EC] border border-[#E8E2D5] flex items-center justify-center text-[#8C7A5C] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-1">
                    Clinic Address
                  </h4>
                  {isEditing ? (
                    <textarea
                      rows={2}
                      value={contactData.address}
                      onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                      className="w-full text-xs p-2 border border-[#C5A880] rounded bg-[#FAF8F5]"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#18241D] leading-snug">
                      {contactData.address}
                    </p>
                  )}
                  <span className="text-xs text-[#6B756E] mt-1 block">{contactData.city}</span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E2D5] shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F4EC] border border-[#E8E2D5] flex items-center justify-center text-[#8C7A5C] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-1">
                    Direct Clinical Telephone
                  </h4>
                  {isEditing ? (
                    <input
                      type="text"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full text-xs p-2 border border-[#C5A880] rounded bg-[#FAF8F5]"
                    />
                  ) : (
                    <p className="text-sm font-semibold text-[#18241D]">{contactData.phone}</p>
                  )}
                  <span className="text-xs text-[#6B756E] mt-0.5 block">
                    Patient coordination desk
                  </span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E2D5] shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F4EC] border border-[#E8E2D5] flex items-center justify-center text-[#8C7A5C] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-1">
                    Email Inquiry
                  </h4>
                  {isEditing ? (
                    <input
                      type="text"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full text-xs p-2 border border-[#C5A880] rounded bg-[#FAF8F5]"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#18241D]">{contactData.email}</p>
                  )}
                  <span className="text-xs text-[#6B756E] mt-0.5 block">
                    Confidential medical inquiries
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E8E2D5] shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F7F4EC] border border-[#E8E2D5] flex items-center justify-center text-[#8C7A5C] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5C] mb-1">
                    Consultation Hours
                  </h4>
                  {isEditing ? (
                    <input
                      type="text"
                      value={contactData.hours}
                      onChange={(e) => setContactData({ ...contactData, hours: e.target.value })}
                      className="w-full text-xs p-2 border border-[#C5A880] rounded bg-[#FAF8F5]"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#18241D]">{contactData.hours}</p>
                  )}
                  <span className="text-xs text-[#6B756E] mt-0.5 block">
                    Advance reservation requested
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Architectural Clinic Map Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl border border-[#E8E2D5] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#8C7A5C]" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#18241D]">
                    Clinic Location & Arrival Map
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#8C7A5C] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E8E2D5]">
                  GPS: 25.2048° N, 55.2708° E
                </span>
              </div>

              {/* Stylized Architectural Map Graphic */}
              <div className="h-64 sm:h-72 w-full rounded-xl bg-[#F7F4EC] border border-[#E0D9CB] relative overflow-hidden flex items-center justify-center">
                {/* Street grid vector representation */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A880" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Diagonal boulevard */}
                  <line x1="0" y1="20" x2="600" y2="300" stroke="#8C7A5C" strokeWidth="4" />
                  <line x1="80" y1="0" x2="80" y2="400" stroke="#DDD5C5" strokeWidth="3" />
                  <line x1="260" y1="0" x2="260" y2="400" stroke="#DDD5C5" strokeWidth="3" />
                  <line x1="420" y1="0" x2="420" y2="400" stroke="#DDD5C5" strokeWidth="3" />
                </svg>

                {/* Central Clinic Pin Lockup */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#18241D] text-[#DFC7A6] border-2 border-[#DFC7A6] shadow-xl flex items-center justify-center animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-2 bg-[#18241D] text-white px-3.5 py-1.5 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap border border-[#2D3F33]">
                    Smile Design Clinic
                  </div>
                  <div className="text-[10px] text-[#8C7A5C] bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded mt-1 border border-[#DDD5C5]">
                    Suite 402 · Valet Parking Available
                  </div>
                </div>
              </div>
            </div>

            {/* Arrival & Parking Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#F0EBE0] text-xs text-[#55635A]">
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#8C7A5C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#18241D]">Complimentary Valet Parking:</strong>
                  <p className="text-[11px] mt-0.5">
                    Available at the main medical building entrance on Avenue des Nations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Navigation className="w-4 h-4 text-[#8C7A5C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#18241D]">Private Entrance & Concierge:</strong>
                  <p className="text-[11px] mt-0.5">
                    Direct high-speed elevator access to 4th floor aesthetic suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
