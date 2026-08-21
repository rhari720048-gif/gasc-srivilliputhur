import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      title: "Official College Emblem",
      desc: "The official seal and emblem of the Government Arts and Science College, Srivilliputhur.",
      src: "/assets/college_logo.png",
      fit: "contain"
    },
    {
      title: "Dr. Suba. Saravanan (Principal i/c)",
      desc: "College leadership - Principal in-charge of Government Arts and Science College, Srivilliputhur.",
      src: "/assets/principal_saravanan.jpg",
      fit: "cover"
    },
    {
      title: "Main Campus Block",
      desc: "Panoramic view of the main academic and administrative building block of GASC Srivilliputhur.",
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmK20-FwTTxdKDWqVfFB6GxzXyDUO32FCAUmTgYpGLainPW7DHGGBPmyf_XDtaOMSYQnTplR6O-h_uqxKCnnb2U4UHnroaRqVC_mnkkWyIrlWp4yRizJDHGhCMp2b4mZeOqi3bc7A=w1000",
      fit: "cover"
    },
    {
      title: "Inauguration of Academic Seminar",
      desc: "Distinguished faculty and guests conducting academic development workshops and guest lectures.",
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnkI5whYy2A2Utsw2NH21E89KZfK4XVcGIcICpILXr6g3YaIfRI4pOSY3HMttRxd_EFXG-T4htJ9Ue439DJkhHK7A-r0JokOwa8HeXfBXgOvRztxIV0oSBD0AKPN69U0VsIvPVv84QgE0ZP=w1000",
      fit: "cover"
    },
    {
      title: "Student Interactive Session",
      desc: "Group of college students participating in collaborative academic review and team activities on campus.",
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkN-sL2WG29_FeYqlRbNgO1hNAfIGY851CKfdESt5FPG6gcAtbzEvkYr6TWQEBitTayRDlJCUqxgl6udLO-UShAaGHwmhagIhNMVxF3ezg-45Tj6NmusNSMdjy9L58VHMfXaQ5sQH2vOpWM=w1000",
      fit: "cover"
    },
    {
      title: "National Day Celebration & Parades",
      desc: "NSS volunteers and college cadets celebrating national events on the central campus grounds.",
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmOqUnaHmDD6sG8c17SpRy6A3UYuLdA8asDDrUEce-ozXvPFhjYvhA4U34-WVmNgTIs5W_9owktn406uDQXUAuiadI0kbeSzjLumLBP9EvZS-b5_TTPZm4VskcV0wCPAsG9dEcTg=w1000",
      fit: "cover"
    },
    {
      title: "Annual College Day Celebrations",
      desc: "Dignitaries and leadership inaugurating cultural events and distribution of academic accolades.",
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk_rOgR6FTWxwiEDoeynsckTzWy7T7y6JztCllqOFdBolmN0pucjBzLgtajILFkciEzyuJk0qR2nWr9lm3ZOBaqDbGFqMV23ithneWlUe5gdd_wT1nSnk5gtMCM182aZymKKeDTLxDIe9U=w1000",
      fit: "cover"
    },
    {
      title: "Freshers Orientation Ceremony",
      desc: "Guidance helpdesk and induction seminars conducted for the newly enrolled batch of college students.",
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnf7_wNeRH6cEZYhkH45K9MWBOaLq5IvTA_C9xlMdFjwHY45pMeardEsHZRmjY2hhJdnQ79bO8SwxmSD-UUF23GiCJEcw36-rMiIWvs3Ul2l8MrpXZEskcAKCgxOZOVIi8qtDR7ow=w1000",
      fit: "cover"
    }
  ];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handlePrev = () => {
    setLightboxIndex(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />

      {/* Page Header */}
      <div 
        style={{ 
          backgroundColor: 'var(--primary-navy-dark)', 
          color: '#FFFFFF', 
          padding: '3.5rem 0',
          borderBottom: '3px solid var(--secondary-gold)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span className="section-tag" style={{ backgroundColor: 'rgba(197, 168, 128, 0.2)', color: 'var(--secondary-gold)' }}>
            Media & Life
          </span>
          <h1 className="heading-serif" style={{ color: '#FFFFFF', fontSize: '2.5rem', marginTop: '0.5rem' }}>
            Photo Gallery
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Official institutional gallery of Government Arts and Science College, Srivilliputhur.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">

          {/* Photo Grid */}
          <style>{`
            .gallery-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(320px, 450px));
              gap: 2.5rem;
              justify-content: center;
              max-width: 1000px;
              margin: 0 auto;
            }
            .gallery-item-card {
              background: #FFFFFF;
              border: 1px solid var(--border-light);
              border-radius: var(--radius-lg);
              overflow: hidden;
              box-shadow: var(--shadow-sm);
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              display: flex;
              flex-direction: column;
            }
            .gallery-item-card:hover {
              transform: translateY(-5px);
              box-shadow: var(--shadow-lg);
              border-color: var(--secondary-gold);
            }
            .gallery-header-block {
              padding: 1.25rem 1.5rem;
              background-color: var(--bg-light);
              border-bottom: 1px solid var(--border-light);
            }
            .gallery-item-title {
              font-size: 1.15rem;
              font-weight: 700;
              color: var(--primary-navy-dark);
              margin: 0;
            }
            .gallery-img-container {
              position: relative;
              width: 100%;
              height: 380px;
              overflow: hidden;
              background-color: #FFFFFF;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .gallery-img-container.fit-contain img {
              width: 80%;
              height: 80%;
              object-fit: contain;
            }
            .gallery-img-container.fit-cover img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .gallery-img-container img {
              transition: transform 0.5s ease;
            }
            .gallery-item-card:hover .gallery-img-container img {
              transform: scale(1.06);
            }
            .gallery-img-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(15, 23, 42, 0.4);
              opacity: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: opacity 0.3s ease;
            }
            .gallery-item-card:hover .gallery-img-overlay {
              opacity: 1;
            }
            .gallery-zoom-badge {
              width: 48px;
              height: 48px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.9);
              color: var(--primary-navy);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: var(--shadow-md);
              transform: scale(0.8);
              transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .gallery-item-card:hover .gallery-zoom-badge {
              transform: scale(1);
            }
            .gallery-info-block {
              padding: 1.25rem 1.5rem;
              border-top: 1px solid var(--border-light);
              flex-grow: 1;
              background-color: #FFFFFF;
            }
            .gallery-item-desc {
              font-size: 0.875rem;
              color: var(--text-muted);
              line-height: 1.5;
              margin: 0;
            }
            /* Lightbox Overlay Styles */
            .lightbox-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-color: rgba(15, 23, 42, 0.95);
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
            }
            .lightbox-close-btn {
              position: absolute;
              top: 1.5rem;
              right: 1.5rem;
              background: rgba(255, 255, 255, 0.1);
              color: #FFFFFF;
              border: none;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: background-color 0.2s ease;
            }
            .lightbox-close-btn:hover {
              background-color: rgba(255, 255, 255, 0.2);
            }
            .lightbox-nav-btn {
              background: rgba(255, 255, 255, 0.08);
              color: #FFFFFF;
              border: none;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: background-color 0.2s ease;
              user-select: none;
            }
            .lightbox-nav-btn:hover {
              background-color: rgba(255, 255, 255, 0.2);
            }
            .lightbox-img-wrapper {
              max-width: 80%;
              max-height: 80%;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1.25rem;
            }
            .lightbox-main-img {
              max-width: 100%;
              max-height: 70vh;
              object-fit: contain;
              border-radius: var(--radius-md);
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
              background-color: #FFFFFF;
              padding: 10px;
            }
            .lightbox-caption {
              text-align: center;
              color: #FFFFFF;
              max-width: 600px;
            }
            .lightbox-title {
              margin: 0;
              font-size: 1.35rem;
              color: var(--secondary-gold);
            }
            .lightbox-desc {
              margin: 0.35rem 0 0 0;
              font-size: 0.9rem;
              color: #CBD5E1;
              line-height: 1.45;
            }
          `}</style>

          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                className="gallery-item-card"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Title ABOVE the Image */}
                <div className="gallery-header-block">
                  <h3 className="gallery-item-title">{item.title}</h3>
                </div>

                {/* Image Container */}
                <div className={`gallery-img-container fit-${item.fit}`}>
                  <img src={item.src} alt={item.title} />
                  <div className="gallery-img-overlay">
                    <div className="gallery-zoom-badge">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>

                {/* Description BELOW the Image */}
                <div className="gallery-info-block">
                  <p className="gallery-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay">
          {/* Close Button */}
          <button className="lightbox-close-btn" onClick={() => setLightboxIndex(null)}>
            <X size={24} />
          </button>

          {/* Left Navigation */}
          <button className="lightbox-nav-btn" onClick={handlePrev} style={{ position: 'absolute', left: '2rem' }}>
            <ChevronLeft size={28} />
          </button>

          {/* Main Content Area */}
          <div className="lightbox-img-wrapper">
            <img 
              src={galleryItems[lightboxIndex].src} 
              alt={galleryItems[lightboxIndex].title} 
              className="lightbox-main-img" 
              style={galleryItems[lightboxIndex].fit === 'contain' ? { padding: '20px' } : {}}
            />
            <div className="lightbox-caption">
              <h4 className="heading-serif lightbox-title">{galleryItems[lightboxIndex].title}</h4>
              <p className="lightbox-desc">{galleryItems[lightboxIndex].desc}</p>
              <div style={{ color: 'var(--secondary-gold)', fontSize: '0.75rem', fontWeight: 600, marginTop: '0.5rem' }}>
                Photo {lightboxIndex + 1} of {galleryItems.length}
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <button className="lightbox-nav-btn" onClick={handleNext} style={{ position: 'absolute', right: '2rem' }}>
            <ChevronRight size={28} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
