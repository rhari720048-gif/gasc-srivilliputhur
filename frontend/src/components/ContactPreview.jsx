import React from 'react';
import { MapPin, Phone, Mail, User, Building, Navigation, ExternalLink } from 'lucide-react';

export default function ContactPreview() {
  return (
    <section className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Reach Us</span>
          <h2 className="section-title heading-serif">Contact Information & Location</h2>
          <p className="section-subtitle">
            Visit our permanent campus at Pillaiyarkulam or reach out to the college administration.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Contact Details Card */}
          <div className="contact-info-card">
            <h3 className="heading-serif">Institutional Desk</h3>

            <div className="contact-detail-item">
              <Building className="contact-detail-icon" size={22} />
              <div className="contact-detail-text">
                <strong>Institution Name</strong>
                <p>Government Arts and Science College, Srivilliputhur</p>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>(அரசு கலை மற்றும் அறிவியல் கல்லூரி, திருவில்லிபுத்தூர்)</span>
              </div>
            </div>

            <div className="contact-detail-item">
              <User className="contact-detail-icon" size={22} />
              <div className="contact-detail-text">
                <strong>Principal (i/c)</strong>
                <p>Dr. Suba. Saravanan, <span style={{ fontSize: '0.85rem' }}>M.C.A., M.Phil., M.Tech., Ph.D.</span></p>
              </div>
            </div>

            <div className="contact-detail-item">
              <MapPin className="contact-detail-icon" size={22} />
              <div className="contact-detail-text">
                <strong>Campus Address</strong>
                <p>Pillaiyarkulam Village Panchayat, Srivilliputhur Taluk, Virudhunagar District, Tamil Nadu - 626125</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <Phone className="contact-detail-icon" size={22} />
              <div className="contact-detail-text">
                <strong>Phone Number</strong>
                <p>04563 - 260555</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <Mail className="contact-detail-icon" size={22} />
              <div className="contact-detail-text">
                <strong>Official Email</strong>
                <p>gasc.srivilliputhur@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Map Preview Card with Background Map Visual */}
          <div 
            className="map-placeholder"
            style={{
              position: 'relative',
              backgroundImage: 'url(/assets/map_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {/* Dark Overlay for Readability */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(15, 30, 63, 0.82)',
                backdropFilter: 'blur(2px)',
                zIndex: 1
              }} 
            />

            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF', padding: '2rem 1.5rem' }}>
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: 'rgba(197, 168, 128, 0.2)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                  border: '2px solid var(--secondary-gold)'
                }}
              >
                <MapPin size={32} style={{ color: 'var(--secondary-gold)' }} />
              </div>

              <h4 className="heading-serif" style={{ fontSize: '1.4rem', color: 'var(--secondary-gold)', marginBottom: '0.5rem' }}>
                Pillaiyarkulam Permanent Campus
              </h4>
              <p style={{ color: '#E2E8F0', maxWidth: '440px', margin: '0 auto 1.75rem auto', fontSize: '0.925rem', lineHeight: 1.6 }}>
                Located in Pillaiyarkulam Panchayat area, Srivilliputhur Taluk, Virudhunagar District. Easily accessible via public transport.
              </p>

              <a 
                href="https://maps.google.com/?q=Government+Arts+and+Science+College+Srivilliputhur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
              >
                <Navigation size={16} /> Get Directions on Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
