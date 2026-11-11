import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Persistent data directory
const DATA_DIR = path.resolve(__dirname, 'data');
const APPOINTMENTS_FILE = path.join(DATA_DIR, 'appointments.json');

// Ensure data directory and initial appointments file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export interface AppointmentRecord {
  id: string;
  referenceId: string;
  fullName: string;
  phone: string;
  countryCode: string;
  email?: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  consentContact: boolean;
  status: 'pending_review' | 'contacted' | 'confirmed' | 'archived';
  createdAt: string;
  notes?: string;
}

// Initial sample requests for demonstration of clinical workflow
const INITIAL_APPOINTMENTS: AppointmentRecord[] = [
  {
    id: 'apt-001',
    referenceId: 'SDC-2026-1042',
    fullName: 'Nour El-Din Mansour',
    phone: '50 892 3411',
    countryCode: '+971',
    email: 'nour.mansour@example.com',
    service: 'Digital Smile Design',
    preferredDate: '2026-11-18',
    preferredTime: 'Morning (09:00 - 12:00)',
    message: 'Interested in aesthetic evaluation and shade matching consultation.',
    consentContact: true,
    status: 'contacted',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    notes: 'Initial contact made by Clinical Coordinator. Patient sent medical history questionnaire.',
  },
  {
    id: 'apt-002',
    referenceId: 'SDC-2026-1088',
    fullName: 'Mariam Al-Hashemi',
    phone: '55 412 9087',
    countryCode: '+971',
    email: 'm.hashemi@example.com',
    service: 'Hollywood Smile',
    preferredDate: '2026-11-20',
    preferredTime: 'Early Afternoon (12:00 - 15:00)',
    message: 'Seeking comprehensive consultation regarding ceramic veneers and contouring.',
    consentContact: true,
    status: 'pending_review',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    notes: 'Requires diagnostic smile simulation scan slot.',
  },
];

function readAppointments(): AppointmentRecord[] {
  try {
    if (!fs.existsSync(APPOINTMENTS_FILE)) {
      fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(INITIAL_APPOINTMENTS, null, 2), 'utf-8');
      return INITIAL_APPOINTMENTS;
    }
    const data = fs.readFileSync(APPOINTMENTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading appointments file:', err);
    return [];
  }
}

function writeAppointments(records: AppointmentRecord[]): boolean {
  try {
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(records, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing appointments file:', err);
    return false;
  }
}

// Ensure file is populated on server start
readAppointments();

// API ROUTES

// Health / System Status
app.get('/api/system/status', (_req: Request, res: Response) => {
  const records = readAppointments();
  res.json({
    status: 'healthy',
    backend: 'Express.js File-Persistent Storage',
    database: 'data/appointments.json',
    totalRequests: records.length,
    pendingReview: records.filter((r) => r.status === 'pending_review').length,
    productionDeploymentReady: true,
    integrationInfo:
      'Backend is operating with real persistent file storage. For enterprise cloud scaling, connect PostgreSQL, Cloud SQL, or Clinic EHR REST endpoints via environment variables.',
  });
});

// GET all appointment requests (with optional status filter)
app.get('/api/appointments', (req: Request, res: Response) => {
  const records = readAppointments();
  const statusFilter = req.query.status as string;
  if (statusFilter && statusFilter !== 'all') {
    res.json(records.filter((r) => r.status === statusFilter));
  } else {
    res.json(records);
  }
});

// POST new appointment request
app.post('/api/appointments', (req: Request, res: Response) => {
  const {
    fullName,
    phone,
    countryCode,
    email,
    service,
    preferredDate,
    preferredTime,
    message,
    consentContact,
  } = req.body;

  // Rigorous validation
  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    res.status(400).json({ error: 'Please provide a valid full name.' });
    return;
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 5) {
    res.status(400).json({ error: 'Please provide a valid phone number.' });
    return;
  }

  if (!countryCode || typeof countryCode !== 'string') {
    res.status(400).json({ error: 'Please select a valid country code.' });
    return;
  }

  if (!service || typeof service !== 'string') {
    res.status(400).json({ error: 'Please select the dental service you wish to discuss.' });
    return;
  }

  if (!preferredDate || typeof preferredDate !== 'string') {
    res.status(400).json({ error: 'Please select a preferred date for your consultation.' });
    return;
  }

  if (!preferredTime || typeof preferredTime !== 'string') {
    res.status(400).json({ error: 'Please select your preferred consultation time of day.' });
    return;
  }

  if (consentContact !== true) {
    res.status(400).json({
      error: 'You must provide consent for our clinical coordination team to contact you.',
    });
    return;
  }

  // Validate email format if provided
  if (email && typeof email === 'string' && email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      res.status(400).json({ error: 'Please provide a valid email address or leave it blank.' });
      return;
    }
  }

  const records = readAppointments();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `SDC-2026-${randomSuffix}`;

  const newRecord: AppointmentRecord = {
    id: `apt-${Date.now()}`,
    referenceId,
    fullName: fullName.trim(),
    phone: phone.trim(),
    countryCode: countryCode.trim(),
    email: email ? email.trim() : undefined,
    service: service.trim(),
    preferredDate: preferredDate.trim(),
    preferredTime: preferredTime.trim(),
    message: message && typeof message === 'string' ? message.trim() : undefined,
    consentContact: true,
    status: 'pending_review',
    createdAt: new Date().toISOString(),
    notes: 'Awaiting phone contact by clinical coordination desk.',
  };

  records.unshift(newRecord);
  const saved = writeAppointments(records);

  if (!saved) {
    res.status(500).json({
      error: 'Internal storage error. Unable to save your appointment request. Please try again.',
    });
    return;
  }

  res.status(201).json({
    success: true,
    message:
      'Appointment request received successfully. Our clinical team will contact you to confirm.',
    appointment: {
      referenceId: newRecord.referenceId,
      fullName: newRecord.fullName,
      phone: `${newRecord.countryCode} ${newRecord.phone}`,
      service: newRecord.service,
      preferredDate: newRecord.preferredDate,
      preferredTime: newRecord.preferredTime,
      status: newRecord.status,
      createdAt: newRecord.createdAt,
    },
  });
});

// PATCH update status or notes for clinical management
app.patch('/api/appointments/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const records = readAppointments();
  const index = records.findIndex((r) => r.id === id || r.referenceId === id);

  if (index === -1) {
    res.status(404).json({ error: 'Appointment request not found.' });
    return;
  }

  if (status && ['pending_review', 'contacted', 'confirmed', 'archived'].includes(status)) {
    records[index].status = status;
  }

  if (typeof notes === 'string') {
    records[index].notes = notes;
  }

  writeAppointments(records);
  res.json({ success: true, appointment: records[index] });
});

// DELETE appointment request (for clinic admin management)
app.delete('/api/appointments/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const records = readAppointments();
  const filtered = records.filter((r) => r.id !== id && r.referenceId !== id);

  if (filtered.length === records.length) {
    res.status(404).json({ error: 'Appointment request not found.' });
    return;
  }

  writeAppointments(filtered);
  res.json({ success: true, message: 'Appointment request removed.' });
});

async function start() {
  if (process.env.NODE_ENV === 'production') {
    // Serve production static build
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // Development mode with Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MyClinic12 server running at http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
