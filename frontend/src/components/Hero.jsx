import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Award, Landmark } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay" />
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <GraduationCap size={16} />
              <span>Government Higher Education Institution</span>
            </div>

            <h1 className="hero-title heading-serif">
              Government Arts and Science College
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--secondary-gold)', fontWeight: 600, marginBottom: '1rem' }}>
              Srivilliputhur
            </p>

            <p className="hero-subtitle">
              Established by the Government of Tamil Nadu to empower rural students through quality higher education, skill training programmes, and community-driven development.
            </p>

            <div className="hero-motto">
              <span>Education</span> • <span>Opportunity</span> • <span>Skills</span> • <span>Community</span>
            </div>

            <div className="hero-actions">
              <a href="/admission" className="btn btn-secondary">
                Admission 2026–2027 <ArrowRight size={18} />
              </a>
              <a href="/about" className="btn btn-outline-white">
                <BookOpen size={18} /> Explore College
              </a>
            </div>
          </div>

          {/* Hero Right Visual Card (Logo & Institutional Seal) */}
          <div 
            style={{ 
              background: 'rgba(255, 255, 255, 0.06)', 
              borderRadius: 'var(--radius-lg)', 
              border: '2px solid rgba(197, 168, 128, 0.3)', 
              padding: '3rem 2rem', 
              textAlign: 'center',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <div 
              style={{ 
                width: '130px', 
                height: '130px', 
                margin: '0 auto 1.5rem auto', 
                padding: '4px', 
                backgroundColor: '#FFFFFF', 
                borderRadius: '50%', 
                border: '3px solid var(--secondary-gold)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }}
            >
              <img 
                src="/assets/college_logo.png" 
                alt="Government Arts and Science College Srivilliputhur Seal" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>

            <h3 className="heading-serif" style={{ color: 'var(--secondary-gold)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>
              Government Arts & Science College
            </h3>
            <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Srivilliputhur, Virudhunagar District
            </p>

            <div 
              style={{ 
                backgroundColor: 'rgba(15, 30, 63, 0.8)', 
                borderRadius: 'var(--radius-md)', 
                padding: '1rem', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.85rem',
                color: '#CBD5E1'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--secondary-gold)', fontWeight: 700, marginBottom: '0.25rem' }}>
                <Award size={16} /> Affiliated to Madurai Kamaraj University
              </div>
              <span>Permanent Campus at Pillaiyarkulam (Est. 2020–2021)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
