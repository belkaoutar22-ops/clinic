export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  indication: string;
  clinicalStages: string[];
  durationEstimate: string;
  suitabilityNote: string;
  image: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  clinicalRole: string;
  badge: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  education: string;
  languages: string[];
  bio: string;
  image: string;
  role: 'dentist' | 'specialist' | 'assistant';
  attireNote: string;
}

export interface GalleryCase {
  id: string;
  title: string;
  category: 'Veneers' | 'Hollywood Smile' | 'Whitening' | 'Alignment';
  description: string;
  clinicalNote: string;
  duration: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDetails: string;
  afterDetails: string;
  image: string;
  beforeColor: string;
  afterColor: string;
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
