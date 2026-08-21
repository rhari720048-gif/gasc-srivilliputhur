import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      title: "Main College Infrastructure Facade",
      desc: "The main academic block building and front facade of the Government Arts and Science College, Srivilliputhur campus.",
      src: "/assets/gallery_college_front.png",
      fit: "cover"
    },
    {
      title: "Principal's Desk and Faculty Assembly",
      desc: "Dr. Suba. Saravanan (Principal i/c) meeting with the faculty members and staff in the college administration office.",
      src: "/assets/gallery_principal_staff.png",
      fit: "cover"
    },
    {
      title: "Student Field Trip and Outdoors Outing",
      desc: "College students and staff members participating in an educational field trip and outdoor team building activity.",
      src: "/assets/gallery_student_outing.png",
      fit: "cover"
    },
    {
      title: "Inauguration of Alumni Association Meet",
      desc: "Inauguration ceremony of the Alumni Association at Government Arts and Science College, Srivilliputhur.",
      src: "/assets/gallery_stage_event.png",
      fit: "cover"
    },
    {
      title: "National Integration Camp (NIC) delegation",
      desc: "College student delegates representing the institution at the National Integration Camp.",
      src: "/assets/gallery_integration_camp.png",
      fit: "cover"
    },
    {
      title: "NSS Student Volunteers Cleanliness Drive",
      desc: "National Service Scheme (NSS) student volunteers participating in campus plantation and cleanliness drive.",
      src: "/assets/gallery_nss_gardening.png",
      fit: "cover"
    },
    {
      title: "Academic Seminar and Guest Lecture",
      desc: "Faculty members and external resource speakers holding a seminar session in the smart classroom.",
      src: "/assets/gallery_classroom_seminar.png",
      fit: "cover"
    },
    {
      title: "College Cricket Sports Team",
      desc: "The official college cricket sports team assembly with the physical education director.",
      src: "/assets/gallery_sports_cricket.png",
      fit: "cover"
    },
    {
      title: "Career Training and Placement Seminar",
      desc: "Guest lecture on life skills, soft skills, and career orientation hosted by the Training and Placement Cell.",
      src: "/assets/gallery_placement_drive.png",
      fit: "cover"
    },
    {
      title: "Student Certificate Award Ceremony",
      desc: "Student achievement awardees proudly holding their certificates of merit on the campus stairs.",
      src: "/assets/gallery_student_certificates.png",
      fit: "cover"
    },
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
