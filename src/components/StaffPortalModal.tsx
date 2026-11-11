import React, { useState, useEffect } from 'react';
import { AppointmentRecord } from '../types';
import {
  X,
  Server,
  RefreshCw,
  Search,
  Filter,
  Download,
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

interface StaffPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaffPortalModal: React.FC<StaffPortalModalProps> = ({ isOpen, onClose }) => {
  const [appointments, setAppointments] = useState<AppointmentRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/appointments?status=${statusFilter}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setAppointments(data);
      }
    } catch (err) {
      console.error('Error fetching appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchAppointments();
    }
  }, [isOpen, statusFilter]);

  if (!isOpen) return null;

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchAppointments();
      }
    } catch (err) {
      console.error('Error updating status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const exportCSV = () => {
    const headers = [
      'Reference ID',
      'Patient Name',
      'Country Code',
      'Phone',
      'Email',
      'Service',
      'Preferred Date',
      'Preferred Time',
      'Status',
      'Created At',
      'Notes',
    ];
    const rows = appointments.map((a) => [
      a.referenceId,
      `"${a.fullName.replace(/"/g, '""')}"`,
      a.countryCode,
      `"${a.phone}"`,
      a.email || '',
      `"${a.service}"`,
      a.preferredDate,
      `"${a.preferredTime}"`,
      a.status,
      a.createdAt,
      `"${(a.notes || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `MyClinic12_Appointments_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredAppointments = appointments.filter((apt) => {
    const query = searchQuery.toLowerCase();
    return (
      apt.fullName.toLowerCase().includes(query) ||
      apt.referenceId.toLowerCase().includes(query) ||
      apt.phone.toLowerCase().includes(query) ||
      apt.service.toLowerCase().includes(query)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#123D59]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col border border-[#B9E4F2] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-[#123D59] text-white flex items-center justify-between border-b border-[#1D4F73]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#70B9D5] to-[#3986A8] text-white flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-semibold">
                  MyClinic12 · Clinical Requests Console
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#70B9D5]/20 text-[#B9E4F2] uppercase font-semibold">
                  Staff View
                </span>
              </div>
              <p className="text-xs text-white/70">
                Live backend repository: <span className="font-mono text-[#B9E4F2]">server.ts</span>{' '}
                · Persistent JSON storage at <span className="font-mono">/data/appointments.json</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 sm:px-6 bg-[#F4F7F9] border-b border-[#B9E4F2]/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-[240px]">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-[#70B9D5] absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search patient, phone, or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#B9E4F2] bg-white text-[#123D59] focus:outline-none focus:border-[#70B9D5]"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#123D59]">
              <Filter className="w-3.5 h-3.5 text-[#70B9D5]" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-2.5 py-2 text-xs rounded-xl border border-[#B9E4F2] bg-white text-[#123D59] focus:outline-none cursor-pointer"
              >
                <option value="all">All Statuses ({appointments.length})</option>
                <option value="pending_review">Pending Review</option>
                <option value="contacted">Contacted</option>
                <option value="confirmed">Confirmed</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchAppointments}
              disabled={loading}
              className="p-2 rounded-xl border border-[#B9E4F2] bg-white text-[#123D59] hover:bg-[#EAF8FC] transition-colors"
              title="Refresh requests from backend"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#70B9D5] to-[#3986A8] text-white text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Records Table */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#EAF8FC]/30">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-12 text-[#123D59]/60">
              <AlertCircle className="w-8 h-8 text-[#70B9D5] mx-auto mb-2 opacity-60" />
              <p className="text-sm font-medium">No appointment requests found</p>
              <p className="text-xs text-[#123D59]/50 mt-1">
                Try clearing search filters or submit a new consultation request on the main page.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredAppointments.map((record) => (
                <div
                  key={record.id}
                  className="p-4 rounded-2xl bg-white border border-[#B9E4F2]/50 hover:border-[#70B9D5] transition-colors shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F4F7F9]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#123D59] bg-[#EAF8FC] px-2.5 py-1 rounded-lg border border-[#B9E4F2]">
                        {record.referenceId}
                      </span>
                      <h4 className="text-sm font-semibold text-[#123D59]">{record.fullName}</h4>
                      <span className="text-xs text-[#3986A8]">· {record.service}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={record.status}
                        disabled={updatingId === record.id}
                        onChange={(e) => handleStatusChange(record.id, e.target.value)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium border focus:outline-none cursor-pointer ${
                          record.status === 'confirmed'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : record.status === 'contacted'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : record.status === 'archived'
                            ? 'bg-gray-100 text-gray-700 border-gray-300'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        <option value="pending_review">Pending Review</option>
                        <option value="contacted">Contacted Patient</option>
                        <option value="confirmed">Confirmed Slot</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs text-[#123D59]/75">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#70B9D5]" />
                      <span>
                        {record.countryCode} {record.phone}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#70B9D5]" />
                      <span>
                        {record.preferredDate} ({record.preferredTime})
                      </span>
                    </div>

                    {record.email ? (
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#70B9D5]" />
                        <span className="truncate">{record.email}</span>
                      </div>
                    ) : (
                      <span className="text-[#123D59]/40">No email provided</span>
                    )}
                  </div>

                  {record.message && (
                    <div className="mt-2.5 p-2.5 rounded-xl bg-[#F4F7F9] text-xs text-[#123D59]/80 border border-[#B9E4F2]/30">
                      <strong>Patient Note:</strong> {record.message}
                    </div>
                  )}

                  {record.notes && (
                    <div className="mt-2 text-[11px] text-[#3986A8]">
                      <strong>Internal Clinical Log:</strong> {record.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4F7F9] border-t border-[#B9E4F2]/50 text-xs text-[#123D59]/75 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#70B9D5] shrink-0" />
            <span>
              <strong>Production Integration:</strong> For live Netlify/Cloud rollout, connect{' '}
              <code className="text-[#123D59] font-mono">/api/appointments</code> to PostgreSQL,
              Supabase, or your clinic EHR REST endpoint.
            </span>
          </div>

          <button
            onClick={onClose}
            className="self-end sm:self-auto px-4 py-1.5 text-xs font-semibold text-[#123D59] hover:text-[#3986A8]"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
