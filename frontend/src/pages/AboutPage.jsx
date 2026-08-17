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
                <img src="/assets/college_logo.png" alt="Emblem" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              </div>
              <h3 className="heading-serif" style={{ color: '#FFF', textAlign: 'center', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Government Arts and Science College
              </h3>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--secondary-gold)', fontWeight: 600 }}>
                Srivilliputhur, Virudhunagar Dt.
              </p>
              <div style={{ marginTop: '1.5rem', fontSize: '0.825rem', lineHeight: 1.6, color: '#CBD5E1' }}>
                <p><strong>Affiliation:</strong> Madurai Kamaraj University</p>
                <p><strong>Established Year:</strong> 2020–2021</p>
                <p><strong>Permanent Campus:</strong> Pillaiyarkulam Panchayat</p>
                <p><strong>Student Strength:</strong> ~800 Students</p>
              </div>
            </div>

            <div>
              <span className="section-tag">Institutional Legacy</span>
              <h2 className="heading-serif" style={{ fontSize: '1.85rem', color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                History of the Institution (கல்லூரியின் வரலாறு)
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                அனைவரும் உயர்கல்வி பெற்று பயன் பெற வேண்டும் என்ற தமிழக அரசின் உயரிய கொள்கைப் படியும் விவசாயம் மற்றும் நெசவுத் தொழிலை ஆதாரமாகக் கொண்ட விருதுநகர் மாவட்டத்தைச் சேர்ந்த பொருளாதாரத்தில் பின்தங்கிய கிராமப்புற ஏழை மாணவர்களுக்கு உயர்கல்வி வழங்கும் பொருட்டும், தமிழ் நாடு அரசு மற்றும் விருதுநகர் மாவட்டம் திருவில்லிபுத்தூர் வட்டாரத்தில் உள்ள மக்கள் மற்றும் மக்கள் பிரதிநிதிகளின் அயரா முயற்சியினால் இவ்வட்டத்தில் முதன்முதலாக <strong>2020—2021</strong> ஆம் கல்வி ஆண்டில் திருவில்லிபுத்தூரில் அரசு கலை மற்றும் அறிவியல் கல்லூரி தொடங்கப்பட்டது.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                பிள்ளையார்குளம் கிராமப் பஞ்சாயத்திற்கு உட்பட்ட பகுதியில் நிரந்தரக் கட்டிடம் கட்டி முடிக்கப்பட்டு <strong>27-02-2024</strong> அன்று திறக்கப்பட்டது. இக்கல்லூரி மதுரை காமராஜர் பல்கலைக்கழகத்துடன் இணைப்பு பெற்றுள்ளது. இக்கல்லூரியில் சுமார் 800 மாணவ மாணவியர்கள் பயின்று வருகிறார்கள்.
              </p>

              <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-navy)' }}>
                <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.35rem' }}>TN Skills Integration (தமிழ்நாடு திறன்மேம்பாடு)</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Under TN Skills initiative, students receive specialized training in AI Driven Digital Marketing, Cloud Computing, Employability Skills, Fundamental of Design Skills, Data Analytics, and Data Science with Python.
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
            <h2 className="section-title heading-serif">Principal's Desk (முதல்வர் உரை)</h2>
          </div>

          <div className="principal-card-container" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="principal-image-box">
              <img src="/assets/principal_saravanan.jpg" alt="Dr. Suba. Saravanan" />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Principal (i/c) Profile
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
                “அறிவு வளர்த்து ஆனந்தமாய் வாழ்வோம்! Education is the cornerstone of individual growth and social empowerment. At GASC Srivilliputhur, our goal is to provide holistic academic training, career competence, and ethical strength to every student.”
              </blockquote>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem', fontSize: '0.85rem' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <strong style={{ color: 'var(--primary-navy)', display: 'block' }}>Department</strong>
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
            <h2 className="section-title heading-serif">Office Staff List (அலுவலகப்பணியாளர்கள்)</h2>
            <p className="section-subtitle">Dedicated administrative team ensuring smooth campus governance.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { role: "நிதியாளர் (Bursar / Finance Officer)", name: "திரு. சு. அருள்ராஜ்", qual: "M.A." },
              { role: "கண்காணிப்பாளர் (Superintendent)", name: "திரு. ர. ஆனந்த ஜெயராஜ்", qual: "M.B.A." },
              { role: "உதவியாளர் (Assistant)", name: "திருமதி. இரா. ஜோதிலட்சுமி", qual: "M.A." },
              { role: "உதவியாளர் (Assistant)", name: "திருமதி. அ. மகேஸ்வரி", qual: "B.Lit." },
              { role: "இளநிலை உதவியாளர் (Junior Assistant)", name: "திரு. ந. பிரகாஷ்", qual: "Ex. Army JCO" },
              { role: "இளநிலை உதவியாளர் (Junior Assistant)", name: "திருமதி. ச. பேச்சியம்மாள்", qual: "B.E." },
              { role: "உதவிசெய் நிரலர் (Assistant Programmer)", name: "முனைவர் ஆர். எஸ். மோகன்", qual: "M.C.A., M.Phil., Ph.D., SET" },
              { role: "தூய்மை பணியாளர் (Sanitation Staff)", name: "திரு. சி. வேல்முருகன்", qual: "" }
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
              <h3 className="vm-title">கல்லூரியின் பார்வை (Vision)</h3>
              <p className="vm-text-tamil">
                பக்தியுடன் கல்வி கற்று,<br />
                பண்புடன் பொருள் ஈட்டி,<br />
                தன்மையுடன் தைரியம் வளர்த்து,<br />
                அன்புடன் நல் சமூகப்பணி செய்து,<br />
                ஆனந்தமாய் இரு!
              </p>
              <p className="vm-text-english">
                Acquire knowledge with devotion, earn wealth with virtue, cultivate courage with humbleness, serve society with love, and live happily!
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon-badge"><ShieldCheck size={24} /></div>
              <h3 className="vm-title">கல்லூரியின் பணி (Mission)</h3>
              <p className="vm-text-tamil">
                கிராமப் புற ஏழை எளிய மாணவ மாணவியர்களை கல்வியின் மூலம் உயர்ந்த அந்தஸ்தை பெற செய்தல்.
              </p>
              <p className="vm-text-english">
                Empowering rural, economically underprivileged students through accessible quality higher education to attain noble stature in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
