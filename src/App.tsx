import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { TeamSection } from './components/TeamSection';
import { SmileGallery } from './components/SmileGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { StaffPortalModal } from './components/StaffPortalModal';

export default function App() {
  const [staffPortalOpen, setStaffPortalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(
    undefined
  );

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-white text-[#123D59] flex flex-col font-sans selection:bg-[#70B9D5]/30 selection:text-[#123D59]">
      {/* Top Navigation */}
      <Header onOpenStaffPortal={() => setStaffPortalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About the Clinic */}
        <AboutSection />

        {/* 3. Our Services */}
        <ServicesSection onSelectServiceForBooking={handleSelectService} />

        {/* 4. Modern Dental Technology */}
        <TechnologySection />

        {/* 5. Meet Our Dental Team */}
        <TeamSection />

        {/* 6. Smile Gallery & Case Studies */}
        <SmileGallery />

        {/* 7. Why Choose Us? */}
        <WhyChooseUs />

        {/* 8. Appointment Request Form */}
        <AppointmentForm prefilledService={selectedServiceForBooking} />

        {/* 9. Location & Contact */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer
        onOpenStaffPortal={() => setStaffPortalOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Staff Consultation & Appointment Requests Portal Modal */}
      <StaffPortalModal
        isOpen={staffPortalOpen}
        onClose={() => setStaffPortalOpen(false)}
      />
    </div>
  );
}
