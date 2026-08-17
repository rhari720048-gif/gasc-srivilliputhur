import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AnnouncementBar from '../components/AnnouncementBar';
import AboutPreview from '../components/AboutPreview';
import VisionMission from '../components/VisionMission';
import AcademicProgrammes from '../components/AcademicProgrammes';
import SkillsSection from '../components/SkillsSection';
import StudentServices from '../components/StudentServices';
import Scholarships from '../components/Scholarships';
import AcademicCalendar from '../components/AcademicCalendar';
import LatestUpdates from '../components/LatestUpdates';
import GalleryPreview from '../components/GalleryPreview';
import ContactPreview from '../components/ContactPreview';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <TopBar />
      <Navbar />
      <Hero />
      <AnnouncementBar />
      <AboutPreview />
      <VisionMission />
      <AcademicProgrammes />
      <SkillsSection />
      <StudentServices />
      <Scholarships />
      <AcademicCalendar />
      <LatestUpdates />
      <GalleryPreview />
      <ContactPreview />
      <Footer />
    </div>
  );
}
