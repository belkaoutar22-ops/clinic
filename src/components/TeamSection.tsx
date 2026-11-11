import React, { useState } from 'react';
import { CLINIC_TEAM } from '../data/clinicData';
import { TeamMember } from '../types';
import { Edit3, RotateCcw, AlertTriangle, GraduationCap, Globe, UserCheck } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(CLINIC_TEAM);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleFieldChange = (id: string, field: keyof TeamMember, value: string) => {
    setTeamMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const resetToDefault = () => {
    setTeamMembers(CLINIC_TEAM);
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FC] border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
              <span>Medical Practitioners & Care Team</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight">
              Meet Our Team
            </h2>
            <p className="text-base text-[#123D59]/75 mt-3 leading-relaxed">
              Our multidisciplinary clinicians combine aesthetic vision with rigorous biological
              dentistry, dedicated to ethical, patient-centered smile transformations.
            </p>
          </div>

          {/* Interactive Demo Customization Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border flex items-center gap-2 transition-all ${
                isEditMode
                  ? 'bg-[#123D59] text-white border-[#123D59] shadow-md'
                  : 'bg-[#EAF8FC] text-[#123D59] border-[#B9E4F2] hover:bg-[#B9E4F2]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Finish Editing Profiles' : 'Edit Demo Profiles'}</span>
            </button>

            {isEditMode && (
              <button
                onClick={resetToDefault}
                className="p-2 text-xs text-[#3986A8] hover:text-[#123D59] bg-white border border-[#B9E4F2] rounded-xl transition-colors"
                title="Reset to default demo data"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mb-10 p-4 bg-[#EAF8FC] border border-[#B9E4F2] rounded-2xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#3986A8] shrink-0 mt-0.5" />
          <div className="text-xs text-[#123D59]/80 leading-relaxed">
            <strong className="text-[#123D59] font-semibold">Sample Demo Profiles:</strong> The
            names, credentials, and biographies below are sample demonstration profiles for MyClinic12.
            All female doctors and clinical staff wear modest Islamic hijab in professional medical
            attire, and male doctors appear in clinical attire.
          </div>
        </div>

        {/* 4 Doctor & Assistant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-[#B9E4F2]/50 overflow-hidden shadow-[0_4px_20px_rgba(18,61,89,0.04)] hover:shadow-[0_12px_36px_rgba(112,185,213,0.18)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Doctor Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EAF8FC]">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D59]/80 via-transparent to-transparent opacity-50" />

                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] bg-[#123D59]/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 flex items-center justify-between">
                  <span className="font-medium truncate">{member.specialty}</span>
                  <span className="text-[#B9E4F2] font-mono text-[10px] shrink-0 ml-1">{member.experience}</span>
                </div>
              </div>

              {/* Profile Details (Editable fields) */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {isEditMode ? (
                    <div className="space-y-2.5 mb-3">
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-[#3986A8] block mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleFieldChange(member.id, 'name', e.target.value)}
                          className="w-full text-xs font-semibold p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC] text-[#123D59]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-[#3986A8] block mb-1">
                          Specialty
                        </label>
                        <input
                          type="text"
                          value={member.specialty}
                          onChange={(e) =>
                            handleFieldChange(member.id, 'specialty', e.target.value)
                          }
                          className="w-full text-xs p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC] text-[#123D59]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-[#3986A8] block mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={member.title}
                          onChange={(e) => handleFieldChange(member.id, 'title', e.target.value)}
                          className="w-full text-xs p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC] text-[#123D59]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-semibold text-[#3986A8] block mb-1">
                          Short Biography
                        </label>
                        <textarea
                          rows={2}
                          value={member.bio}
                          onChange={(e) => handleFieldChange(member.id, 'bio', e.target.value)}
                          className="w-full text-xs p-2 border border-[#70B9D5] rounded-lg bg-[#EAF8FC] text-[#123D59]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3">
                      <h3 className="font-serif text-xl font-semibold text-[#123D59]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#3986A8] mt-0.5">
                        {member.title}
                      </p>
                      <p className="text-xs text-[#123D59]/75 mt-2 leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  )}
                </div>

                {/* Credentials */}
                <div className="pt-3 border-t border-[#F4F7F9] space-y-1.5 text-xs text-[#123D59]/70">
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#70B9D5] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight truncate">{member.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#70B9D5] shrink-0" />
                    <span className="text-[11px] truncate">Languages: {member.languages.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
