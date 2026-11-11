import React, { useState, useEffect } from 'react';
import { CLINIC_SERVICES } from '../data/clinicData';
import {
  Calendar,
  Clock,
  Phone,
  User,
  Mail,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileCheck,
  Server,
} from 'lucide-react';

interface AppointmentFormProps {
  prefilledService?: string;
  onAppointmentCreated?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  prefilledService,
  onAppointmentCreated,
}) => {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+971');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefilledService || CLINIC_SERVICES[0].title);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (09:00 - 12:00)');
  const [message, setMessage] = useState('');
  const [consentContact, setConsentContact] = useState(false);

  // States
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    fullName: string;
    phone: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
    createdAt: string;
  } | null>(null);

  const [backendStatus, setBackendStatus] = useState<{
    healthy: boolean;
    storage: string;
    totalRequests: number;
  }>({ healthy: true, storage: 'Persistent JSON Store (server.ts)', totalRequests: 0 });

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  // Check backend health
  useEffect(() => {
    fetch('/api/system/status')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === 'healthy') {
          setBackendStatus({
            healthy: true,
            storage: data.backend || 'Express Persistent File Storage',
            totalRequests: data.totalRequests || 0,
          });
        }
      })
      .catch((err) => {
        console.warn('Backend status check:', err);
      });
  }, [submittedData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Form validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full legal or preferred name.');
      return;
    }

    if (!phone.trim() || phone.trim().length < 5) {
      setErrorMessage('Please provide a valid contact telephone number.');
      return;
    }

    if (!preferredDate) {
      setErrorMessage('Please select a preferred date for your clinical consultation.');
      return;
    }

    if (!consentContact) {
      setErrorMessage(
        'Please confirm your consent for our clinical team to contact you to confirm the appointment.'
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          countryCode,
          phone,
          email: email.trim() || undefined,
          service,
          preferredDate,
          preferredTime,
          message: message.trim() || undefined,
          consentContact,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit appointment request.');
      }

      setSubmittedData(result.appointment);
      if (onAppointmentCreated) {
        onAppointmentCreated();
      }
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMessage(error.message || 'Unable to save appointment request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setConsentContact(false);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const countryCodes = [
    { code: '+971', label: 'UAE (+971)' },
    { code: '+966', label: 'Saudi Arabia (+966)' },
    { code: '+974', label: 'Qatar (+974)' },
    { code: '+965', label: 'Kuwait (+965)' },
    { code: '+968', label: 'Oman (+968)' },
    { code: '+973', label: 'Bahrain (+973)' },
    { code: '+212', label: 'Morocco (+212)' },
    { code: '+20', label: 'Egypt (+20)' },
    { code: '+44', label: 'United Kingdom (+44)' },
    { code: '+1', label: 'USA / Canada (+1)' },
    { code: '+33', label: 'France (+33)' },
    { code: '+49', label: 'Germany (+49)' },
  ];

  return (
    <section id="appointment-form" className="py-20 lg:py-28 bg-[#F4F7F9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FC] border border-[#B9E4F2] text-xs font-semibold uppercase tracking-wider text-[#3986A8] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#70B9D5]" />
            <span>Direct Clinical Booking</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#123D59] leading-tight mb-4">
            Request an Appointment
          </h2>
          <p className="text-base text-[#123D59]/75 leading-relaxed">
            Submit your consultation request directly to our clinical coordination team. We will
            contact you promptly to verify your requirements and confirm available clinician slots.
          </p>
        </div>

        {/* Backend Status Indicator */}
        <div className="mb-8 p-4 rounded-2xl bg-[#EAF8FC] border border-[#B9E4F2] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#123D59]/80 gap-2">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#3986A8]" />
            <span>
              <strong className="text-[#123D59]">Secure Backend Storage:</strong> Active (
              {backendStatus.storage})
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#3986A8]">
            Verified Local Persistence · No Third-Party Redirects
          </span>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-[#B9E4F2]/60 shadow-[0_12px_40px_rgba(18,61,89,0.06)] p-6 sm:p-10">
          {submittedData ? (
            /* Submission Success State */
            <div className="text-center py-8 max-w-xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#70B9D5] to-[#3986A8] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#70B9D5]/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono font-medium text-[#3986A8] uppercase tracking-wider block mb-1">
                  Request Reference Number
                </span>
                <div className="text-2xl font-mono font-bold text-[#123D59] bg-[#EAF8FC] py-2 px-5 rounded-xl inline-block border border-[#B9E4F2]">
                  {submittedData.referenceId}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-semibold text-[#123D59]">
                  Request Received by MyClinic12
                </h3>
                <p className="text-sm text-[#123D59]/75 leading-relaxed">
                  Thank you, <strong className="text-[#123D59]">{submittedData.fullName}</strong>. Your
                  consultation request for{' '}
                  <strong className="text-[#123D59]">{submittedData.service}</strong> has been
                  recorded in our clinical system.
                </p>
              </div>

              {/* Crucial Clinical Status Clarity */}
              <div className="bg-[#EAF8FC] border border-[#B9E4F2] rounded-2xl p-5 text-left text-xs text-[#123D59]/80 space-y-2">
                <div className="flex items-center gap-2 text-[#123D59] font-semibold">
                  <FileCheck className="w-4 h-4 text-[#70B9D5]" />
                  <span>Important Confirmation Protocol</span>
                </div>
                <p className="leading-relaxed">
                  Please note that this is a <strong>preliminary consultation request</strong>, not a
                  confirmed appointment slot. Our patient coordination desk will call you at{' '}
                  <strong className="text-[#123D59]">{submittedData.phone}</strong> to confirm the exact
                  time, discuss preliminary dental records, and answer any pre-visit questions.
                </p>
                <div className="pt-2 border-t border-[#B9E4F2]/50 text-[11px] text-[#3986A8]">
                  Requested window: {submittedData.preferredDate} ({submittedData.preferredTime})
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#123D59] bg-[#EAF8FC] hover:bg-[#B9E4F2] border border-[#B9E4F2] rounded-xl transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Active Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1: Full Name & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D59] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#70B9D5] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Fatima Al-Mansour"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#B9E4F2] bg-[#F4F7F9] text-sm text-[#123D59] placeholder:text-[#123D59]/40 focus:outline-none focus:border-[#70B9D5] focus:bg-white focus:ring-2 focus:ring-[#70B9D5]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D59] mb-2">
                    Requested Dental Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#B9E4F2] bg-[#F4F7F9] text-sm text-[#123D59] focus:outline-none focus:border-[#70B9D5] focus:bg-white focus:ring-2 focus:ring-[#70B9D5]/20 transition-all cursor-pointer"
                  >
                    {CLINIC_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Phone with Country Code & Optional Email */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                <div className="sm:col-span-7">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D59] mb-2">
                    Phone Number with Country Code <span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-xl border border-[#B9E4F2] bg-[#F4F7F9] overflow-hidden focus-within:border-[#70B9D5] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#70B9D5]/20 transition-all">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-transparent px-3 py-3 text-xs text-[#123D59] border-r border-[#B9E4F2] focus:outline-none cursor-pointer"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <div className="relative flex-1">
                      <Phone className="w-4 h-4 text-[#70B9D5] absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="50 123 4567"
                        className="w-full pl-10 pr-4 py-3 bg-transparent text-sm text-[#123D59] placeholder:text-[#123D59]/40 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D59] mb-2">
                    Email Address <span className="text-xs text-[#3986A8] font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#70B9D5] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#B9E4F2] bg-[#F4F7F9] text-sm text-[#123D59] placeholder:text-[#123D59]/40 focus:outline-none focus:border-[#70B9D5] focus:bg-white focus:ring-2 focus:ring-[#70B9D5]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Preferred Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D59] mb-2">
                    Preferred Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#70B9D5] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={getMinDate()}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#B9E4F2] bg-[#F4F7F9] text-sm text-[#123D59] focus:outline-none focus:border-[#70B9D5] focus:bg-white focus:ring-2 focus:ring-[#70B9D5]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D59] mb-2">
                    Preferred Time Window <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#70B9D5] absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#B9E4F2] bg-[#F4F7F9] text-sm text-[#123D59] focus:outline-none focus:border-[#70B9D5] focus:bg-white focus:ring-2 focus:ring-[#70B9D5]/20 transition-all cursor-pointer"
                    >
                      <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                      <option value="Early Afternoon (12:00 - 15:00)">
                        Early Afternoon (12:00 - 15:00)
                      </option>
                      <option value="Late Afternoon (15:00 - 18:00)">
                        Late Afternoon (15:00 - 18:00)
                      </option>
                      <option value="Evening (18:00 - 20:00)">Evening (18:00 - 20:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Additional Message (optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123D59] mb-2">
                  Additional Notes or Questions{' '}
                  <span className="text-xs text-[#3986A8] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#70B9D5] absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your dental goals, previous cosmetic work, or any tooth sensitivities..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#B9E4F2] bg-[#F4F7F9] text-sm text-[#123D59] placeholder:text-[#123D59]/40 focus:outline-none focus:border-[#70B9D5] focus:bg-white focus:ring-2 focus:ring-[#70B9D5]/20 transition-all"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentContact}
                    onChange={(e) => setConsentContact(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#70B9D5] rounded border-[#B9E4F2] focus:ring-[#70B9D5]"
                  />
                  <span className="text-xs text-[#123D59]/80 leading-relaxed select-none">
                    I consent to being contacted by the MyClinic12 clinical coordination team via
                    phone call or message regarding my appointment request, treatment suitability,
                    and scheduling.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-white bg-gradient-to-r from-[#70B9D5] to-[#3986A8] hover:from-[#3986A8] hover:to-[#123D59] disabled:opacity-60 rounded-2xl transition-all duration-200 shadow-lg shadow-[#70B9D5]/30 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving Request to Clinical Backend...</span>
                    </>
                  ) : (
                    <span>Request an Appointment</span>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-[#123D59]/65 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#70B9D5]" />
                  <span>
                    Your medical privacy is protected. Requests are stored directly on the clinic’s
                    secure backend.
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
