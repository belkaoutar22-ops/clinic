import { ServiceItem, TechnologyItem, TeamMember, GalleryCase } from '../types';

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'hollywood-smile',
    title: 'Hollywood Smile',
    shortDescription: 'Personalized aesthetic smile solutions following professional dental assessment.',
    fullOverview:
      'A holistic smile makeover designed in harmony with your facial contours, lips, and gum line. Our clinicians perform comprehensive occlusal and biological evaluations before tailoring ceramic veneers or crowns for balanced aesthetics and natural translucency.',
    indication: 'Discoloration resistant to whitening, minor gaps, chipping, or asymmetry.',
    clinicalStages: [
      'Comprehensive 3D intraoral digital diagnostics & facial mapping',
      'Digital Smile Design (DSD) simulation & aesthetic preview mock-up',
      'Minimally invasive preparation and temporary aesthetic fitting',
      'Precision bonding of handcrafted ultra-thin dental ceramics',
    ],
    durationEstimate: '2 – 3 appointments over 10–14 days',
    suitabilityNote:
      'Suitability depends on baseline oral health, enamel condition, and bite alignment. Requires prior treatment of any underlying periodontal or restorative conditions.',
  },
  {
    id: 'digital-smile-design',
    title: 'Digital Smile Design',
    shortDescription: 'Digital planning to help visualize potential smile improvements.',
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
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDescription: 'Professional teeth whitening options based on dental evaluation.',
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
  },
  {
    id: 'dental-veneers',
    title: 'Dental Veneers',
    shortDescription: 'Aesthetic dental solutions selected according to each patient’s needs.',
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
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDescription: 'Personalized treatments designed to improve dental appearance and harmony.',
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
  },
  {
    id: 'general-consultation',
    title: 'General Dental Consultation',
    shortDescription: 'Professional examination and treatment recommendations.',
    fullOverview:
      'A comprehensive oral health evaluation including digital low-dose radiography, periodontal screening, bite analysis, and an open conversation regarding your dental goals.',
    indication: 'New patients, routine biannual check-ups, or pre-cosmetic oral health clearance.',
    clinicalStages: [
      'Digital medical & dental history review',
      'Soft tissue and periodontal health assessment',
      'Intraoral camera photographic examination',
      'Personalized preventative and restorative roadmap discussion',
    ],
    durationEstimate: 'Initial appointment (45–60 minutes)',
    suitabilityNote:
      'Essential foundational step for any aesthetic or restorative journey. Ensures all teeth and gums are healthy before cosmetic treatments.',
  },
];

export const CLINIC_TECHNOLOGIES: TechnologyItem[] = [
  {
    id: 'tech-dsd',
    title: 'Digital Smile Simulation',
    category: 'Virtual Aesthetic Planning',
    description:
      'High-precision software algorithms evaluate patient facial landmarks, lip mobility, and dental proportions to generate predictive aesthetic mock-ups.',
    clinicalRole: 'Visual consultation, patient alignment, and prosthetic guidance.',
    badge: 'Illustrative Demonstration',
    benefits: [
      'Facial symmetry & smile line alignment',
      'Interactive aesthetic preview before treatment',
      'Seamless collaboration between patient and clinician',
    ],
  },
  {
    id: 'tech-scanner',
    title: 'Intraoral 3D Optical Scanning',
    category: 'Impression-Free Diagnostics',
    description:
      'High-resolution optical scanning captures true-color microscopic dental anatomy in seconds, replacing conventional messy impression trays.',
    clinicalRole: 'Micron-accurate digital impressions for lab fabrication.',
    badge: 'High-Precision Diagnostics',
    benefits: [
      'Zero gag-reflex impression experience',
      'Instant real-time 3D model generation',
      'Sub-millimeter margin accuracy for veneers',
    ],
  },
  {
    id: 'tech-imaging',
    title: 'Low-Dose Digital Radiography',
    category: 'Biological Safety',
    description:
      'Ultra-low radiation digital sensors provide crystal-clear visualization of bone density, root anatomy, and hidden interproximal areas.',
    clinicalRole: 'Comprehensive safety clearance and structural diagnosis.',
    badge: 'Patient Safety Priority',
    benefits: [
      'Up to 80% reduced radiation compared to film',
      'Immediate diagnostic review on chairside screen',
      'Clear detection of underlying structural health',
    ],
  },
  {
    id: 'tech-color',
    title: 'Spectrophotometric Shade Analysis',
    category: 'Artisan Esthetics',
    description:
      'Digital colorimetry measures the natural hue, chroma, and value across the tooth body to match ceramic restorations to adjacent natural dentition.',
    clinicalRole: 'Flawless optical blending with natural teeth.',
    badge: 'Natural Shade Harmony',
    benefits: [
      'Objective color calibration unaffected by clinic lighting',
      'Layered multi-shade ceramic lab mapping',
      'Natural translucency and light reflection',
    ],
  },
];

export const CLINIC_TEAM: TeamMember[] = [
  {
    id: 'team-aisha',
    name: 'Dr. Aisha Al-Mansoor',
    title: 'Lead Cosmetic & Aesthetic Dentist',
    specialty: 'Aesthetic Dentistry & Smile Rehabilitation',
    experience: '14+ Years Clinical Experience',
    education: 'BDS (Honors), MSc in Aesthetic Dentistry (King’s College London)',
    languages: ['Arabic', 'English', 'French'],
    bio: 'Specializing in minimally invasive smile transformations and ceramic laminate veneers. Dr. Aisha emphasizes biological preservation and natural facial harmony in every customized treatment plan.',
    image: '/src/assets/images/female_dentist_hijab_1794427921083.jpg',
    attireNote: 'Professional clinical coat & modest sage green hijab',
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
    image: '/src/assets/images/male_dentist_portrait_1794427922518.jpg',
    attireNote: 'Tailored navy medical coat & professional scrubs',
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
    image: '/src/assets/images/female_specialist_hijab_1794427921914.jpg',
    attireNote: 'Doctor laboratory coat & elegant blush taupe hijab',
  },
];

export const GALLERY_CASES: GalleryCase[] = [
  {
    id: 'case-1',
    title: 'Case 01 · Handcrafted Porcelain Veneers',
    category: 'Veneers',
    description: 'Correction of midline diastema and edge wear with ultra-thin ceramic veneers.',
    clinicalNote:
      'Minimally invasive micro-preparation was utilized to preserve 92% natural enamel while balancing tooth proportions.',
    duration: '2 Clinical Visits',
    beforeLabel: 'Before Consultation',
    afterLabel: 'After Ceramic Bonding',
    beforeDetails: 'Diastema (gap), uneven incisal wear, mild tetracycline banding.',
    afterDetails: 'Harmonious tooth ratio, closed diastema, warm natural luminescence.',
    beforeColor: '#C4B89B',
    afterColor: '#F7F6EE',
  },
  {
    id: 'case-2',
    title: 'Case 02 · Full Arch Aesthetic Harmony',
    category: 'Hollywood Smile',
    description: 'Personalized Hollywood Smile design matching natural facial lip contours.',
    clinicalNote:
      'Custom shade matching following digital mock-up preview, focusing on soft warm white rather than artificial flat opaque shades.',
    duration: '3 Clinical Visits',
    beforeLabel: 'Baseline State',
    afterLabel: 'Completed Smile Design',
    beforeDetails: 'Discolored older composite restorations, asymmetric smile line.',
    afterDetails: 'Radiant smile arc following lower lip curvature, lifelike translucency.',
    beforeColor: '#BEAF95',
    afterColor: '#FAF8F0',
  },
  {
    id: 'case-3',
    title: 'Case 03 · Enamel Whitening & Edge Contouring',
    category: 'Whitening',
    description: 'Conservative in-clinic whitening combined with cosmetic incisal smoothing.',
    clinicalNote:
      'Zero-prep conservative aesthetic enhancement suitable for natural teeth with healthy enamel.',
    duration: 'Single Visit (90 min)',
    beforeLabel: 'Pre-Treatment',
    afterLabel: 'Post-Whitening',
    beforeDetails: 'Enamel shade A3.5 with minor jagged edge chipping on central incisors.',
    afterDetails: 'Enamel shade brightened to B1 with polished, balanced incisal edges.',
    beforeColor: '#CEBF9D',
    afterColor: '#FDFCF7',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: 'Personalized Treatment Plans',
    description:
      'Every smile is unique. We analyze your facial symmetry, lip dynamics, and tooth biology to recommend conservative, tailored aesthetic solutions.',
  },
  {
    number: '02',
    title: 'Professional Dental Team',
    description:
      'Our team comprises credentialed specialists in aesthetic dentistry, prosthodontics, and digital diagnostics who uphold strict ethical care standards.',
  },
  {
    number: '03',
    title: 'Modern Dental Approach',
    description:
      'We prioritize tooth structure preservation through digital smile simulations, micro-prep techniques, and biocompatible restorative ceramics.',
  },
  {
    number: '04',
    title: 'Patient Comfort and Care',
    description:
      'Experience a tranquil, welcoming clinic environment designed with generous appointment times, attentive consultation, and gentle protocols.',
  },
];
