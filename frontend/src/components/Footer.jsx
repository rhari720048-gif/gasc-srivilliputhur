import React from 'react';
import { Landmark, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Landmark size={28} style={{ color: 'var(--secondary-gold)' }} />
              <div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', margin: 0 }}>GASC SRIVILLIPUTHUR</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--secondary-gold)' }}>Government of Tamil Nadu</span>
              </div>
            </div>
            <p style={{ lineHeight: 1.6, fontSize: '0.85rem' }}>
              Government Arts and Science College, Srivilliputhur is a higher education institution affiliated with Madurai Kamaraj University, dedicated to serving rural students through quality arts, science, and technical education.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94A3B8' }}>
              Pillaiyarkulam, Srivilliputhur, Virudhunagar Dt. - 626125
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About College</a></li>
              <li><a href="/about#principal">Principal's Desk</a></li>
              <li><a href="/academic">Academic Programmes</a></li>
              <li><a href="/events">News & Events</a></li>
              <li><a href="/admission">Admission 2026–2027</a></li>
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div className="footer-col">
            <h4>Academic Departments</h4>
            <ul className="footer-links">
              <li><a href="/departments#tamil">Department of Tamil</a></li>
              <li><a href="/departments#english">Department of English</a></li>
              <li><a href="/departments#commerce">Department of Commerce</a></li>
              <li><a href="/departments#maths">Department of Mathematics</a></li>
              <li><a href="/departments#cs">Department of Computer Science</a></li>
              <li><a href="/library">Central Library</a></li>
            </ul>
          </div>

          {/* Col 4: Support & Schemes */}
          <div className="footer-col">
            <h4>Student Support & Services</h4>
            <ul className="footer-links">
              <li><a href="/services#nss">National Service Scheme (NSS)</a></li>
              <li><a href="/services#yrc">Youth Red Cross (YRC)</a></li>
              <li><a href="/services#icc">Internal Complaints Committee (ICC)</a></li>
              <li><a href="/services#wdc">Women Development Cell</a></li>
              <li><a href="/services#scholarships">Pudhumai Penn & Tamil Pudhalvan</a></li>
              <li><a href="/contact">Contact Administration</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div>
            © 2026 Government Arts and Science College, Srivilliputhur. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Affiliated to Madurai Kamaraj University</span>
            <span>Virudhunagar District, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
