import React from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Institutional Emblem Card */}
          <div 
            style={{ 
              backgroundColor: 'var(--primary-navy-dark)', 
              color: '#FFFFFF', 
              borderRadius: 'var(--radius-lg)', 
              padding: '2.5rem 1.75rem', 
              textAlign: 'center', 
              border: '2px solid var(--secondary-gold)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div 
              style={{ 
                width: '110px', 
                height: '110px', 
                margin: '0 auto 1.25rem auto', 
                backgroundColor: '#FFFFFF', 
                borderRadius: '50%', 
                padding: '4px',
                border: '3px solid var(--secondary-gold)'
              }}
            >
              <img 
                src="/assets/college_logo.png" 
                alt="Government Arts and Science College Srivilliputhur Official Seal" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
            
            <span style={{ fontSize: '0.775rem', color: 'var(--secondary-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
              Higher Education Department
            </span>
            <h3 className="heading-serif" style={{ color: '#FFFFFF', fontSize: '1.2rem', marginTop: '0.35rem', marginBottom: '0.4rem' }}>
              Government of Tamil Nadu
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Affiliated with Madurai Kamaraj University.<br />
              Established to serve rural youth in Virudhunagar region.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', fontSize: '0.775rem' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.55rem', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: 'var(--secondary-gold)', display: 'block' }}>Est. Year</strong>
                2020–2021
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.55rem', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ color: 'var(--secondary-gold)', display: 'block' }}>Affiliation</strong>
                MKU University
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="about-content">
            <span className="section-tag">About The Institution</span>
            <h2 className="heading-serif">Empowering Rural Youth Through Excellence in Education</h2>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1rem' }}>
              Government Arts and Science College, Srivilliputhur was established in the academic year <strong>2020–2021</strong> under the higher education initiative of the Government of Tamil Nadu to provide affordable quality education to rural and economically underprivileged students in Virudhunagar district.
            </p>

            <div className="about-highlight-box">
              On <strong>27 February 2024</strong>, the state-of-the-art permanent campus building at Pillaiyarkulam Village Panchayat was officially inaugurated. The institution is affiliated with <strong>Madurai Kamaraj University</strong>.
            </div>

            {/* Quick Stats Grid */}
            <div className="about-stats-row">
              <div className="stat-card">
                <div className="stat-number">2020</div>
                <div className="stat-label">Year Established</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">~800</div>
                <div className="stat-label">Enrolled Students</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5</div>
                <div className="stat-label">UG Departments</div>
              </div>
            </div>

            <a href="/about" className="btn btn-primary">
              Read Complete History <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Principal's Desk Highlight Strip */}
        <div className="principal-card-container">
          <div className="principal-image-box">
            <img 
              src="/assets/principal_saravanan.jpg" 
              alt="Dr. Suba. Saravanan, Principal (i/c)" 
            />
          </div>
          <div className="principal-card-text">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Leadership & Guidance
            </span>
            <h3 className="heading-serif" style={{ fontSize: '1.5rem', color: 'var(--primary-navy)', margin: '0.25rem 0 0.4rem 0' }}>
              Principal's Desk
            </h3>
            <p style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
              Dr. Suba. Saravanan, <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>M.C.A., M.Phil., M.Tech., Ph.D.</span>
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--primary-navy)', fontWeight: 600, marginBottom: '0.85rem' }}>
              Associate Professor of Computer Science & Principal (i/c)
            </p>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              “Education is the cornerstone of societal development. Our mission is to nurture knowledge, character, courage, and career capability in every student entrusted to our care.”
            </p>
            <a href="/about#principal" className="btn btn-outline btn-sm">
              <UserCheck size={16} /> Principal's Message & Profile <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
