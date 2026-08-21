import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Image, ZoomIn, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      title: "College Campus Main Building",
      category: "infrastructure",
      desc: "The majestic front facade of the Government Arts and Science College Srivilliputhur campus.",
      src: "/assets/college_building_hd.png"
    },
    {
      title: "Advanced Computer Science Laboratory",
      category: "facilities",
      desc: "State-of-the-art computing laboratory equipped with high-speed internet and modern desktops for practical learning.",
      src: "/assets/computer_lab.png"
    },
    {
      title: "Student Seminar & Interactive Learning Center",
      category: "facilities",
      desc: "Interactive teaching space designed for digital learning, workshops, and student presentations.",
      src: "/assets/teaching_learning.png"
    },
    {
      title: "Lush Green College Campus Grounds",
      category: "campus",
      desc: "Scenic walkways and green landscapes surrounding the academic blocks, promoting a peaceful study environment.",
      src: "/assets/hero_campus.png"
    },
    {
      title: "Academic Block Corridor Entrance",
      category: "infrastructure",
      desc: "The entrance gateway leading into the primary lecture halls and department classrooms.",
      src: "/assets/college_building.png"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'campus', label: 'Campus Life' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));
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
            Take a visual tour of our campus, facilities, laboratories, and vibrant student life.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          
          {/* Category Filter Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '0.75rem',
              marginBottom: '2.5rem' 
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, marginRight: '0.5rem' }}>
              <Filter size={16} /> Filter by:
            </span>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setLightboxIndex(null);
                }}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '30px',
                  border: '1px solid',
                  borderColor: activeFilter === cat.id ? 'var(--primary-navy)' : 'var(--border-light)',
                  backgroundColor: activeFilter === cat.id ? 'var(--primary-navy)' : '#FFFFFF',
                  color: activeFilter === cat.id ? '#FFFFFF' : 'var(--text-dark)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: activeFilter === cat.id ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <style>{`
            .gallery-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
              gap: 2rem;
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
            .gallery-img-container {
              position: relative;
              width: 100%;
              height: 240px;
              overflow: hidden;
            }
            .gallery-img-container img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }
            .gallery-item-card:hover .gallery-img-container img {
              transform: scale(1.08);
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
              width: 46px;
              height: 46px;
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
              padding: 1.25rem;
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            }
            .gallery-cat-tag {
              font-size: 0.7rem;
              font-weight: 700;
              text-transform: uppercase;
              color: var(--secondary-gold);
              letter-spacing: 0.05em;
              margin-bottom: 0.35rem;
            }
            .gallery-item-title {
              font-size: 1.05rem;
              font-weight: 700;
              color: var(--primary-navy);
              margin: 0 0 0.5rem 0;
            }
            .gallery-item-desc {
              font-size: 0.825rem;
              color: var(--text-muted);
              line-height: 1.45;
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
              gap: 1rem;
            }
            .lightbox-main-img {
              max-width: 100%;
              max-height: 70vh;
              object-fit: contain;
              border-radius: var(--radius-md);
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }
            .lightbox-caption {
              text-align: center;
              color: #FFFFFF;
              max-width: 600px;
            }
            .lightbox-title {
              margin: 0;
              font-size: 1.25rem;
              color: var(--secondary-gold);
            }
            .lightbox-desc {
              margin: 0.35rem 0 0 0;
              font-size: 0.875rem;
              color: #CBD5E1;
              line-height: 1.4;
            }
          `}</style>

          <div className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                className="gallery-item-card"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="gallery-img-container">
                  <img src={item.src} alt={item.title} />
                  <div className="gallery-img-overlay">
                    <div className="gallery-zoom-badge">
                      <ZoomIn size={22} />
                    </div>
                  </div>
                </div>
                <div className="gallery-info-block">
                  <span className="gallery-cat-tag">{item.category}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-img-desc gallery-item-desc">{item.desc}</p>
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
              src={filteredItems[lightboxIndex].src} 
              alt={filteredItems[lightboxIndex].title} 
              className="lightbox-main-img" 
            />
            <div className="lightbox-caption">
              <h4 className="heading-serif lightbox-title">{filteredItems[lightboxIndex].title}</h4>
              <p className="lightbox-desc">{filteredItems[lightboxIndex].desc}</p>
              <div style={{ color: 'var(--secondary-gold)', fontSize: '0.75rem', fontWeight: 600, marginTop: '0.5rem' }}>
                Photo {lightboxIndex + 1} of {filteredItems.length}
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
