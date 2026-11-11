import React, { useState } from 'react';
import { CLINIC_TEAM } from '../data/clinicData';
import { TeamMember } from '../types';
import { Edit3, Check, RotateCcw, AlertTriangle, GraduationCap, Globe } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(CLINIC_TEAM);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleFieldChange = (id: string, field: keyof TeamMember, value: string) => {
    setTeamMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const resetToDefault = () => {
    setTeamMembers(CLINIC_TEAM);
    setEditingId(null);
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8C7A5C] mb-3">
              <span className="w-6 h-px bg-[#C5A880]" />
              <span>Medical Practitioners</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#141D17] leading-tight">
              Meet Our Dental Team
            </h2>
            <p className="text-base text-[#55635A] mt-3 leading-relaxed">
              Our multidisciplinary clinicians combine aesthetic vision with rigorous biological
              dentistry, dedicated to ethical, patient-centered smile transformations.
            </p>
          </div>

          {/* Interactive Demo Customization Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-4 py-2 text-xs font-medium rounded-lg border flex items-center gap-2 transition-all ${
                isEditMode
                  ? 'bg-[#18241D] text-white border-[#18241D]'
                  : 'bg-white text-[#4A554E] border-[#DDD5C5] hover:bg-[#F3EFE6]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Finish Editing Profiles' : 'Edit Demo Profiles'}</span>
            </button>

            {isEditMode && (
              <button
                onClick={resetToDefault}
                className="p-2 text-xs text-[#6B756E] hover:text-[#18241D] bg-white border border-[#DDD5C5] rounded-lg transition-colors"
                title="Reset to default demo data"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mb-10 p-4 bg-[#F5EFE6] border border-[#DDD5C5] rounded-xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#8C7A5C] shrink-0 mt-0.5" />
          <div className="text-xs text-[#6B756E] leading-relaxed">
            <strong className="text-[#18241D] font-medium">Sample Content Disclaimer:</strong> The
            names, credentials, and biographies below are fictional demo profiles created to
            illustrate the website structure. They will be replaced with verified clinic staff
            information and licensing credentials prior to clinical launch.
          </div>
        </div>

        {/* 3 Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const isCurrentlyEditing = isEditMode && (editingId === member.id || editingId === null);

            return (
              <div
                key={member.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-[0_4px_20px_rgba(24,36,29,0.04)] hover:shadow-[0_8px_30px_rgba(24,36,29,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Doctor Portrait with modest styling */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EFECE4]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18241D]/80 via-transparent to-transparent opacity-60" />

                  {/* Attire & Modesty indicator */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between">
                    <span className="font-medium text-white/90">{member.specialty}</span>
                    <span className="text-[#DFC7A6] font-mono text-[10px]">{member.experience}</span>
                  </div>
                </div>

                {/* Profile Details (Editable fields) */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {isEditMode ? (
                      <div className="space-y-3 mb-4">
                        <div>
                          <label className="text-[10px] uppercase font-semibold text-[#8C7A5C] block mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleFieldChange(member.id, 'name', e.target.value)}
                            className="w-full text-sm font-semibold p-2 border border-[#C5A880] rounded bg-[#FAF8F5] text-[#18241D]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-semibold text-[#8C7A5C] block mb-1">
                            Title
                          </label>
                          <input
                            type="text"
                            value={member.title}
                            onChange={(e) => handleFieldChange(member.id, 'title', e.target.value)}
                            className="w-full text-xs p-2 border border-[#C5A880] rounded bg-[#FAF8F5] text-[#18241D]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-semibold text-[#8C7A5C] block mb-1">
                            Specialty
                          </label>
                          <input
                            type="text"
                            value={member.specialty}
                            onChange={(e) =>
                              handleFieldChange(member.id, 'specialty', e.target.value)
                            }
                            className="w-full text-xs p-2 border border-[#C5A880] rounded bg-[#FAF8F5] text-[#18241D]"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase font-semibold text-[#8C7A5C] block mb-1">
                            Experience
                          </label>
                          <input
                            type="text"
                            value={member.experience}
                            onChange={(e) =>
                              handleFieldChange(member.id, 'experience', e.target.value)
                            }
                            className="w-full text-xs p-2 border border-[#C5A880] rounded bg-[#FAF8F5] text-[#18241D]"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#18241D]">
                          {member.name}
                        </h3>
                        <p className="text-xs font-medium text-[#8C7A5C] uppercase tracking-wider mt-0.5">
                          {member.title}
                        </p>
                        <p className="text-xs text-[#55635A] mt-3 leading-relaxed">{member.bio}</p>
                      </div>
                    )}
                  </div>

                  {/* Credentials & Languages */}
                  <div className="pt-4 border-t border-[#F0EBE0] space-y-2 text-xs text-[#55635A]">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#8C7A5C] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{member.education}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#8C7A5C] shrink-0" />
                      <span className="text-[11px]">Languages: {member.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
