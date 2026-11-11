import { ServiceItem, TechnologyItem, TeamMember, GalleryCase } from '../types';

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'hollywood-smile',
    title: 'Hollywood Smile',
    shortDescription: 'Comprehensive aesthetic smile transformations tailored to your natural facial proportions.',
    fullOverview:
      'A holistic smile makeover designed in harmony with your facial symmetry, lips, and gum contour. Our clinicians perform comprehensive occlusal and biological evaluations before tailoring ceramic veneers or crowns for balanced aesthetics and natural translucency.',
    indication: 'Persistent discoloration, minor gaps, chipped edges, or asymmetric tooth proportions.',
    clinicalStages: [
      'Digital 3D intraoral diagnostic scanning & facial mapping',
      'Digital Smile Design (DSD) simulation & aesthetic preview mock-up',
      'Minimally invasive preparation and temporary aesthetic fitting',
      'Precision bonding of handcrafted ultra-thin dental ceramics',
    ],
    durationEstimate: '2 – 3 appointments over 10–14 days',
    suitabilityNote:
      'Suitability depends on baseline oral health, enamel condition, and bite alignment. Requires prior treatment of any underlying periodontal or restorative conditions.',
    image: '/images/service_hollywood_smile.jpg',
  },
  {
    id: 'digital-smile-design',
    title: 'Digital Smile Design',
    shortDescription: 'State-of-the-art virtual planning to visualize potential smile improvements prior to treatment.',
    fullOverview:
      'Using high-resolution facial scanning and digital diagnostic simulation, we allow patients to preview visual possibilities and participate in designing their future smile proportions prior to beginning clinical work.',
    indication: 'Patients seeking predictable visualization before cosmetic procedures.',
    clinicalStages: [
      'Multi-angle digital photographic capture & 3D scan',
      'Facial reference line and dento-facial proportion analysis',
      'Virtual mock-up with patient co-collaboration',
      'Precision diagnostic wax-up transfer to clinical plan',
    ],
    durationEstimate: 'Single dedicated diagnostic session (60 minutes)',
    suitabilityNote:
      'A planning and diagnostic communication tool; digital previews are illustrative simulations to guide clinical decision-making.',
    image: '/images/service_digital_smile.jpg',
  },
  {
    id: 'dental-veneers',
    title: 'Dental Veneers',
    shortDescription: 'Ultra-thin, handcrafted porcelain laminates custom sculpted for luminous durability.',
    fullOverview:
      'Individually sculpted wafer-thin porcelain or lithium disilicate laminates bonded to the front surface of teeth to refine contour, texture, proportion, and optical light reflection.',
    indication: 'Worn enamel, persistent discoloration, mild alignment irregularities.',
    clinicalStages: [
      'Aesthetic smile assessment & digital shade matching',
      'Conservative micro-preparation preserving maximum natural enamel',
      'Digital impression scanning with high-precision optical sensors',
      'Custom artisan ceramic fabrication & adhesive luting',
    ],
    durationEstimate: '2 appointments with temporary wear phase',
    suitabilityNote:
      'Sufficient enamel foundation is necessary for reliable bonding. Severe malocclusion or untreated bruxism may require prior corrective therapies.',
    image: '/images/service_dental_veneers.jpg',
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    shortDescription: 'Medical-grade in-clinic whitening formulated to safely brighten enamel without sensitivity.',
    fullOverview:
      'Medical-grade in-clinic whitening treatments and custom laboratory take-home trays formulated to safely brighten teeth while protecting enamel density and minimizing dentin sensitivity.',
    indication: 'Extrinsic staining from diet, aging, or lifestyle factors.',
    clinicalStages: [
      'Pre-treatment oral hygiene check and tartar removal',
      'Gingival barrier protection application',
      'Application of pH-neutral hydrogen/carbamide peroxide gel',
      'Post-treatment enamel remineralization & sensitivity mitigation',
    ],
    durationEstimate: '1 in-clinic appointment (75 minutes) or 10-day custom tray regimen',
    suitabilityNote:
      'Whitening does not lighten existing ceramic crowns, veneers, or composite restorations. Pre-existing tooth sensitivity is evaluated prior to protocol selection.',
    image: '/images/service_teeth_whitening.jpg',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDescription: 'Artistic composite bonding, enamel reshaping, and conservative aesthetic enhancements.',
    fullOverview:
      'A suite of conservative aesthetic enhancements including composite edge bonding, aesthetic contouring, and gum re-contouring to achieve subtle yet transformative smile balance.',
    indication: 'Small chips, uneven incisal edges, minor enamel imperfections.',
    clinicalStages: [
      'Detailed diagnostic consultation and shade selection',
      'Layered micro-hybrid composite placement with natural stratification',
      'Artistic surface texturing and high-gloss polish',
    ],
    durationEstimate: 'Often completed in a single appointment (60–90 minutes)',
    suitabilityNote:
      'Conservative composite bonding requires periodic maintenance and may need periodic repolishing over time.',
    image: '/images/service_cosmetic_dentistry.jpg',
  },
  {
    id: 'general-dental-care',
    title: 'General Dental Care',
    shortDescription: 'Comprehensive checkups, preventative hygiene, and precision restorative treatments.',
    fullOverview:
      'A comprehensive oral health evaluation including digital low-dose radiography, periodontal screening, bite analysis, and an open conversation regarding your dental goals.',
    indication: 'Routine biannual check-ups, preventative oral hygiene, or pre-cosmetic oral health clearance.',
    clinicalStages: [
      'Digital medical & dental history review',
      'Soft tissue and periodontal health assessment',
      'Intraoral camera photographic examination',
      'Personalized preventative and restorative roadmap discussion',
    ],
    durationEstimate: 'Initial appointment (45–60 minutes)',
    suitabilityNote:
      'Essential foundational step for any aesthetic or restorative journey. Ensures all teeth and gums are healthy before cosmetic treatments.',
    image: '/images/service_general_dental.jpg',
  },
];

export const CLINIC_TECHNOLOGIES: TechnologyItem[] = [
  {
    id: 'tech-scanner',
    title: '3D Intraoral Optical Scanning',
    category: 'Digital Diagnostics',
    description:
      'High-resolution optical scanning captures true-color microscopic dental anatomy in seconds, replacing conventional messy impression trays.',
    clinicalRole: 'Micron-accurate digital impressions for laboratory veneer fabrication.',
    badge: 'Precision Diagnostics',
    benefits: [
      'Zero gag-reflex impression experience',
      'Instant real-time 3D model generation',
      'Sub-millimeter margin accuracy for veneers',
    ],
    image: '/images/tech_intraoral_scanner.jpg',
  },
  {
    id: 'tech-dsd',
    title: 'Digital Smile Simulation',
    category: 'Aesthetic Previews',
    description:
      'High-precision software algorithms evaluate patient facial landmarks, lip mobility, and dental proportions to generate predictive aesthetic mock-ups.',
    clinicalRole: 'Visual consultation, patient alignment, and prosthetic guidance.',
    badge: 'Illustrative Demonstration',
    benefits: [
      'Facial symmetry & smile line alignment',
      'Interactive aesthetic preview before treatment',
      'Seamless collaboration between patient and clinician',
    ],
    image: '/images/service_digital_smile.jpg',
  },
  {
    id: 'tech-suite',
    title: 'Modern Ergonomic Treatment Suites',
    category: 'Patient Comfort',
    description:
      'Designed with ultra-quiet acoustic baffling, panoramic natural light, and orthopedic memory-foam dental suites for maximum relaxation.',
    clinicalRole: 'Stress-free, tranquil clinical treatment environment.',
    badge: 'Comfort Protocol',
    benefits: [
      'Serene, anxiety-free clinical atmosphere',
      'Discreet, low-noise clinical handpieces',
      'In-chair HD entertainment and visual displays',
    ],
    image: '/images/clinic_interior_luxury.jpg',
  },
];

export const CLINIC_TEAM: TeamMember[] = [
  {
    id: 'team-aisha',
    name: 'Dr. Aisha Al-Mansoor',
    title: 'Lead Cosmetic & Aesthetic Dentist',
    specialty: 'Aesthetic Dentistry & Smile Rehabilitation',
    experience: '14+ Years Clinical Experience',
    education: 'BDS (Honors), MSc in Aesthetic Dentistry',
    languages: ['Arabic', 'English', 'French'],
    bio: 'Specializing in minimally invasive smile transformations and ceramic laminate veneers. Dr. Aisha emphasizes biological preservation and natural facial harmony in every customized treatment plan.',
    image: '/images/female_dentist_hijab.jpg',
    role: 'dentist',
    attireNote: 'Doctor coat & modest sage green hijab',
  },
  {
    id: 'team-tariq',
    name: 'Dr. Tariq Al-Husseini',
    title: 'Senior Dental Surgeon & Prosthodontist',
    specialty: 'Prosthodontics & Implant Rehabilitation',
    experience: '18+ Years Clinical Experience',
    education: 'DDS, Fellowship International Congress of Oral Implantologists (FICOI)',
    languages: ['Arabic', 'English'],
    bio: 'Internationally recognized for complex occlusal rehabilitation and advanced restorative dentistry. Dr. Tariq ensures aesthetic smile enhancements maintain impeccable mechanical function and chewing comfort.',
    image: '/images/male_dentist_portrait.jpg',
    role: 'dentist',
    attireNote: 'Tailored navy medical coat & scrubs',
  },
  {
    id: 'team-sarah',
    name: 'Dr. Sarah Al-Sabah',
    title: 'Specialist in Digital Smile Architecture',
    specialty: 'Digital Smile Design & Aesthetic Orthodontics',
    experience: '11+ Years Clinical Experience',
    education: 'DMD, MClinDent in Prosthetics & Digital Orthodontics',
    languages: ['Arabic', 'English'],
    bio: 'Pioneer in 3D digital smile simulation and conservative tooth alignment. Dr. Sarah guides patients through interactive virtual treatment planning to ensure clear communication and personalized care.',
    image: '/images/female_specialist_hijab.jpg',
    role: 'specialist',
    attireNote: 'Doctor lab coat & modest blush taupe hijab',
  },
  {
    id: 'team-assistant',
    name: 'Sarah Khan',
    title: 'Senior Clinical Coordinator',
    specialty: 'Patient Care & Clinical Administration',
    experience: '8+ Years Clinical Practice',
    education: 'BSc Dental Nursing & Patient Concierge Certification',
    languages: ['Arabic', 'English', 'Urdu'],
    bio: 'Dedicated to ensuring every patient feels relaxed, informed, and cared for from their initial consultation call through treatment completion and post-op follow-up.',
    image: '/images/team_dental_assistant.jpg',
    role: 'assistant',
    attireNote: 'Navy medical scrubs & modest sky blue hijab',
  },
];

export const GALLERY_CASES: GalleryCase[] = [
  {
    id: 'case-1',
    title: 'Porcelain Laminate Veneers',
    category: 'Veneers',
    description: 'Conservative restoration of incisal wear and diastema closure with ultra-thin ceramic veneers.',
    clinicalNote:
      'Minimally invasive micro-preparation was utilized to preserve 92% natural enamel while balancing tooth proportions.',
    duration: '2 Clinical Visits',
    beforeLabel: 'Pre-Consultation',
    afterLabel: 'Post-Restoration',
    beforeDetails: 'Diastema (midline gap), uneven incisal wear, mild enamel discoloration.',
    afterDetails: 'Harmonious tooth ratio, closed diastema, warm natural luminescence.',
    image: '/images/service_dental_veneers.jpg',
    beforeColor: '#C4B89B',
    afterColor: '#F7F6EE',
  },
  {
    id: 'case-2',
    title: 'Digital Smile Design & Contouring',
    category: 'Hollywood Smile',
    description: 'Full aesthetic smile makeover designed around facial harmony and natural lip curvature.',
    clinicalNote:
      'Custom shade matching following digital mock-up preview, focusing on soft luminous white rather than artificial flat opaque shades.',
    duration: '3 Clinical Visits',
    beforeLabel: 'Baseline State',
    afterLabel: 'Simulated Smile Design',
    beforeDetails: 'Discolored older composite restorations, asymmetric smile line.',
    afterDetails: 'Radiant smile arc following lower lip curvature, lifelike optical depth.',
    image: '/images/service_digital_smile.jpg',
    beforeColor: '#BEAF95',
    afterColor: '#FAF8F0',
  },
  {
    id: 'case-3',
    title: 'Clinical Teeth Whitening',
    category: 'Whitening',
    description: 'Professional in-clinic whitening combined with conservative aesthetic edge smoothing.',
    clinicalNote:
      'Zero-prep conservative aesthetic enhancement suitable for natural teeth with healthy enamel.',
    duration: 'Single Visit (75 min)',
    beforeLabel: 'Initial Enamel Tone',
    afterLabel: 'Post-Whitening Tone',
    beforeDetails: 'Enamel shade A3.5 with minor jagged edge chipping on central incisors.',
    afterDetails: 'Enamel shade brightened to B1 with polished, balanced incisal edges.',
    image: '/images/service_teeth_whitening.jpg',
    beforeColor: '#CEBF9D',
    afterColor: '#FDFCF7',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: 'Personalized Care',
    description:
      'Every smile is unique. We analyze your facial symmetry, lip dynamics, and tooth biology to recommend conservative, tailored aesthetic solutions.',
  },
  {
    number: '02',
    title: 'Modern Dental Technology',
    description:
      'We utilize 3D optical intraoral scanning, digital smile simulations, and micro-prep techniques that prioritize preserving healthy natural tooth structure.',
  },
  {
    number: '03',
    title: 'Professional Dental Team',
    description:
      'Our multidisciplinary team comprises credentialed specialists in aesthetic dentistry, prosthodontics, and patient care who uphold rigorous clinical standards.',
  },
  {
    number: '04',
    title: 'Comfortable Patient Experience',
    description:
      'Experience a tranquil, welcoming clinic environment designed with generous appointment times, attentive consultation, and gentle protocols.',
  },
];
