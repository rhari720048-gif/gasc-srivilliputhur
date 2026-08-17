import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Landmark, UserCheck, ShieldCheck, Target, Award, Users, BookOpen, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />

      {/* Page Header */}
      <div 
        style={{ 
          backgroundColor: 'var(--primary-navy-dark)', 
          color: '#FFFFFF', 
          padding: '3rem 0',
          borderBottom: '3px solid var(--secondary-gold)',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span className="section-tag" style={{ backgroundColor: 'rgba(197, 168, 128, 0.2)', color: 'var(--secondary-gold)' }}>
            Institutional Profile
          </span>
          <h1 className="heading-serif" style={{ color: '#FFFFFF', fontSize: '2.25rem', marginTop: '0.5rem' }}>
            About GASC Srivilliputhur
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
            Learn about our institution's rich history, administrative leadership, vision, mission, and dedicated staff.
          </p>

          {/* Anchor Navigation Bar */}
          <div 
            style={{ 
              display: 'flex', 
              justify: 'center', 
              gap: '0.75rem', 
              marginTop: '1.75rem',
              flexWrap: 'wrap'
            }}
          >
            <a href="#college" className="btn btn-sm btn-outline-white">About College</a>
            <a href="#principal" className="btn btn-sm btn-outline-white">Principal's Desk</a>
            <a href="#administration" className="btn btn-sm btn-outline-white">Administration & Staff</a>
            <a href="#vision" className="btn btn-sm btn-outline-white">Vision & Mission</a>
          </div>
        </div>
      </div>

      {/* 1. About College Section */}
      <section id="college" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="about-grid">
            <div style={{ backgroundColor: 'var(--primary-navy-dark)', color: '#FFF', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '2px solid var(--secondary-gold)' }}>
              <div style={{ width: '100px', height: '100px', margin: '0 auto 1rem auto', borderRadius: '50%', backgroundColor: '#FFF', padding: '4px' }}>
                <img src="/assets/college_logo.png" alt="College Emblem" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              </div>
              <h3 className="heading-serif" style={{ color: '#FFF', textAlign: 'center', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Government Arts and Science College
              </h3>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--secondary-gold)', fontWeight: 600 }}>
                Srivilliputhur, Virudhunagar Dt.
              </p>
              <div style={{ marginTop: '1.5rem', fontSize: '0.825rem', lineHeight: 1.6, color: '#CBD5E1' }}>
                <p><strong>Affiliation:</strong> Madurai Kamaraj University</p>
                <p><strong>Established Year:</strong> Academic Year 2020–2021</p>
                <p><strong>Permanent Campus:</strong> Pillaiyarkulam Panchayat</p>
                <p><strong>Student Enrollment:</strong> ~800 Students</p>
              </div>
            </div>

            <div>
              <span className="section-tag">Institutional Legacy</span>
              <h2 className="heading-serif" style={{ fontSize: '1.85rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                History of the Institution
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Under the visionary higher education policy of the Government of Tamil Nadu, Government Arts and Science College, Srivilliputhur was established in the academic year <strong>2020–2021</strong>. The institution was created to provide accessible, high-quality higher education to students from economically underprivileged, rural, agricultural, and weaving backgrounds in and around Srivilliputhur Taluk, Virudhunagar District.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                The state-of-the-art permanent campus constructed in Pillaiyarkulam Village Panchayat was officially inaugurated on <strong>27th February 2024</strong>. Affiliated with Madurai Kamaraj University, the college currently nurtures over 800 undergraduate students across multiple academic disciplines.
              </p>

              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-navy)' }}>
                <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>TN Skills Initiative Integration</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  In alignment with Tamil Nadu Skill Development initiatives (Naan Mudhalvan), all enrolled students undergo specialized skill enablement modules in AI Driven Digital Marketing, Data Analytics, Cloud Computing, Employability Skills, and Data Science with Python.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Principal's Desk Section */}
      <section id="principal" className="section-padding" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Institutional Leadership</span>
            <h2 className="section-title heading-serif">Principal's Desk</h2>
          </div>

          <div className="principal-card-container" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="principal-image-box">
              <img src="/assets/principal_saravanan.jpg" alt="Dr. Suba. Saravanan" />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Principal Profile
              </span>
              <h3 className="heading-serif" style={{ fontSize: '1.6rem', color: 'var(--primary-navy)', margin: '0.25rem 0 0.5rem 0' }}>
                Dr. Suba. Saravanan
              </h3>
              <p style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                M.C.A., M.Phil., M.Tech., Ph.D.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--primary-navy)', fontWeight: 600, marginBottom: '1rem' }}>
                Associate Professor of Computer Science & Principal (i/c)
              </p>

              <blockquote style={{ fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', borderLeft: '3px solid var(--secondary-gold)', paddingLeft: '1rem', margin: '1rem 0' }}>
                “Education is the cornerstone of individual growth, character building, and social empowerment. At GASC Srivilliputhur, our steadfast endeavor is to impart comprehensive academic knowledge, professional competence, and moral ethics to every student.”
              </blockquote>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem', fontSize: '0.85rem' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <strong style={{ color: 'var(--primary-navy)', display: 'block' }}>Parent Department</strong>
                  Computer Science
                </div>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <strong style={{ color: 'var(--primary-navy)', display: 'block' }}>Administrative Charge</strong>
                  Principal (i/c) since 01.05.2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Administration & Office Staff Section */}
      <section id="administration" className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Administrative Support</span>
            <h2 className="section-title heading-serif">Administrative & Office Staff</h2>
            <p className="section-subtitle">Dedicated administrative team ensuring seamless institutional governance and student services.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { role: "Bursar / Finance Officer", name: "Mr. S. Arulraj", qual: "M.A." },
              { role: "Superintendent", name: "Mr. R. Ananda Jeyaraj", qual: "M.B.A." },
              { role: "Assistant", name: "Mrs. R. Jothilakshmi", qual: "M.A." },
              { role: "Assistant", name: "Mrs. A. Maheswari", qual: "B.Lit." },
              { role: "Junior Assistant", name: "Mr. N. Prakash", qual: "Ex. Army JCO" },
              { role: "Junior Assistant", name: "Mrs. S. Pechiammal", qual: "B.E." },
              { role: "Assistant Programmer", name: "Dr. R. S. Mohan", qual: "M.C.A., M.Phil., Ph.D., SET" },
              { role: "Sanitation Staff", name: "Mr. C. Velmurugan", qual: "" }
            ].map((staff, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--bg-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                  {staff.role}
                </span>
                <h4 style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', margin: '0.2rem 0' }}>
                  {staff.name}
                </h4>
                {staff.qual && <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: 0 }}>{staff.qual}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section id="vision" className="section-padding" style={{ backgroundColor: 'var(--primary-navy-dark)', color: '#FFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag" style={{ backgroundColor: 'rgba(197, 168, 128, 0.2)', color: 'var(--secondary-gold)' }}>
              Core Philosophy
            </span>
            <h2 className="section-title heading-serif" style={{ color: '#FFF' }}>Vision & Mission</h2>
          </div>

          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon-badge"><Target size={24} /></div>
              <h3 className="vm-title">Institutional Vision</h3>
              <p className="vm-text-english" style={{ fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                Acquire knowledge with devotion, earn livelihood with virtue, cultivate courage with humbleness, serve society with love, and lead a purposeful, joyful life.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon-badge"><ShieldCheck size={24} /></div>
              <h3 className="vm-title">Institutional Mission</h3>
              <p className="vm-text-english" style={{ fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                To empower rural and economically underprivileged students by providing accessible, high-quality higher education, holistic skill development, and ethical leadership to achieve noble stature in society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
