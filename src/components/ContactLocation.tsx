import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Edit3, RotateCcw } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const defaultContact = {
    address: 'Suite 1204, Healthcare City Medical Complex, Blue Horizon Avenue',
    phone: '+971 4 800 MYCLINIC / +971 50 123 4567',
    email: 'contact@myclinic12-demo.com',
    hours: 'Monday – Saturday: 09:00 AM – 08:00 PM (Sunday: Closed for Sterilization)',
    city: 'Dubai Healthcare District, UAE',
  };

  const [contactData, setContactData] = useState(defaultContact);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#EAF8FC] border-t border-[#B9E4F2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
              <span>Location & Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight">
              Visit MyClinic12
            </h2>
            <p className="text-base text-[#123D59]/75 mt-3 leading-relaxed">
              Conveniently located in a tranquil healthcare district with dedicated patient parking
              and private consultation suites.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-xs font-semibold rounded-xl border border-[#B9E4F2] bg-white hover:bg-[#F4F7F9] text-[#123D59] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#3986A8]" />
              <span>{isEditing ? 'Finish Customizing Details' : 'Edit Contact Details (Demo)'}</span>
            </button>
            {isEditing && (
              <button
                onClick={() => setContactData(defaultContact)}
                className="p-2 text-xs text-[#3986A8] hover:text-[#123D59] bg-white border border-[#B9E4F2] rounded-xl shadow-xs"
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
            <div className="bg-white p-6 rounded-3xl border border-[#B9E4F2]/60 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF8FC] border border-[#B9E4F2] flex items-center justify-center text-[#3986A8] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-1">
                    Clinic Address
                  </h4>
                  {isEditing ? (
                    <textarea
                      rows={2}
                      value={contactData.address}
                      onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                      className="w-full text-xs p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC]"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#123D59] leading-snug">
                      {contactData.address}
                    </p>
                  )}
                  <span className="text-xs text-[#123D59]/65 mt-1 block">{contactData.city}</span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-3xl border border-[#B9E4F2]/60 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF8FC] border border-[#B9E4F2] flex items-center justify-center text-[#3986A8] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-1">
                    Direct Clinic Phone
                  </h4>
                  {isEditing ? (
                    <input
                      type="text"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full text-xs p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC]"
                    />
                  ) : (
                    <p className="text-sm font-semibold text-[#123D59]">{contactData.phone}</p>
                  )}
                  <span className="text-xs text-[#123D59]/65 mt-0.5 block">
                    Patient coordination desk
                  </span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-3xl border border-[#B9E4F2]/60 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF8FC] border border-[#B9E4F2] flex items-center justify-center text-[#3986A8] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-1">
                    Email Inquiry
                  </h4>
                  {isEditing ? (
                    <input
                      type="text"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full text-xs p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC]"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#123D59]">{contactData.email}</p>
                  )}
                  <span className="text-xs text-[#123D59]/65 mt-0.5 block">
                    Confidential dental inquiries
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-3xl border border-[#B9E4F2]/60 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF8FC] border border-[#B9E4F2] flex items-center justify-center text-[#3986A8] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-1">
                    Consultation Hours
                  </h4>
                  {isEditing ? (
                    <input
                      type="text"
                      value={contactData.hours}
                      onChange={(e) => setContactData({ ...contactData, hours: e.target.value })}
                      className="w-full text-xs p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC]"
                    />
                  ) : (
                    <p className="text-sm font-medium text-[#123D59]">{contactData.hours}</p>
                  )}
                  <span className="text-xs text-[#123D59]/65 mt-0.5 block">
                    Advance reservation requested
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Healthcare Map Container (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#B9E4F2]/60 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#70B9D5]" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#123D59]">
                    Clinic Location & Arrival Map
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#3986A8] bg-[#EAF8FC] px-2.5 py-1 rounded-lg border border-[#B9E4F2]">
                  GPS: 25.2048° N, 55.2708° E
                </span>
              </div>

              {/* Stylized Architectural Map Graphic */}
              <div className="h-64 sm:h-72 w-full rounded-2xl bg-[#EAF8FC] border border-[#B9E4F2] relative overflow-hidden flex items-center justify-center">
                {/* Street grid vector representation in sky blue */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid-blue" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#70B9D5" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-blue)" />
                  <line x1="0" y1="20" x2="600" y2="300" stroke="#3986A8" strokeWidth="4" />
                  <line x1="80" y1="0" x2="80" y2="400" stroke="#B9E4F2" strokeWidth="3" />
                  <line x1="260" y1="0" x2="260" y2="400" stroke="#B9E4F2" strokeWidth="3" />
                  <line x1="420" y1="0" x2="420" y2="400" stroke="#B9E4F2" strokeWidth="3" />
                </svg>

                {/* Central Clinic Pin Lockup */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#70B9D5] to-[#3986A8] text-white border-2 border-white shadow-xl flex items-center justify-center animate-bounce">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-2 bg-[#123D59] text-white px-4 py-1.5 rounded-xl shadow-lg text-xs font-semibold whitespace-nowrap border border-white/20">
                    MyClinic12
                  </div>
                  <div className="text-[10px] text-[#3986A8] bg-white px-2.5 py-0.5 rounded-md mt-1 border border-[#B9E4F2] shadow-xs">
                    Suite 1204 · Valet Parking Available
                  </div>
                </div>
              </div>
            </div>

            {/* Arrival & Parking Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#F4F7F9] text-xs text-[#123D59]/75">
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#70B9D5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#123D59]">Complimentary Valet Parking:</strong>
                  <p className="text-[11px] mt-0.5">
                    Available at the main medical building entrance on Blue Horizon Avenue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Navigation className="w-4 h-4 text-[#70B9D5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#123D59]">Private Concierge Entrance:</strong>
                  <p className="text-[11px] mt-0.5">
                    Direct elevator access to the 12th floor aesthetic dental suite.
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
