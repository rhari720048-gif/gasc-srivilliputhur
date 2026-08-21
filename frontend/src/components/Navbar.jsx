import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Landmark, GraduationCap, Building2, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header className="main-header">
      {/* Branding Banner */}
      <div className="branding-bar">
        <div className="container branding-container">
          <div className="brand-identity">
            {/* Mobile Toggle Button on LEFT Side */}
            <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle navigation menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="emblem-wrapper" style={{ width: '68px', height: '68px', padding: '2px', backgroundColor: '#FFF', borderRadius: '50%', border: '2px solid var(--secondary-gold)' }}>
              <img 
                src="/assets/college_logo.png" 
                alt="Government Arts and Science College Srivilliputhur Logo" 
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
            
            <div className="college-title-group">
              <span className="college-title-tamil">அரசு கலை மற்றும் அறிவியல் கல்லூரி, திருவில்லிபுத்தூர்</span>
              <h1>Government Arts and Science College</h1>
              <p>Srivilliputhur, Virudhunagar District, Tamil Nadu - 626125</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Links Strip */}
      <nav className="navbar-strip">
        <div className="container nav-container">
          <ul className="nav-menu">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us <ChevronDown size={14} />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/about#college" className="dropdown-link"><ChevronRight size={14} /> About College</Link></li>
                <li><Link to="/about#principal" className="dropdown-link"><ChevronRight size={14} /> Principal's Desk</Link></li>
                <li><Link to="/about#administration" className="dropdown-link"><ChevronRight size={14} /> Administration</Link></li>
                <li><Link to="/about#vision" className="dropdown-link"><ChevronRight size={14} /> Vision & Mission</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/academic" className="nav-link">
                Academic <ChevronDown size={14} />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/academic#ug-programmes" className="dropdown-link"><ChevronRight size={14} /> UG Programmes</Link></li>
                <li><Link to="/academic#admission" className="dropdown-link"><ChevronRight size={14} /> Admission</Link></li>
                <li><Link to="/academic#curriculum" className="dropdown-link"><ChevronRight size={14} /> Curriculum</Link></li>
                <li><Link to="/academic#teaching-and-learning" className="dropdown-link"><ChevronRight size={14} /> Teaching & Learning</Link></li>
                <li><Link to="/academic#calendar" className="dropdown-link"><ChevronRight size={14} /> Academic Calendar</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/departments" className="nav-link">
                Departments <ChevronDown size={14} />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/departments#tamil" className="dropdown-link"><ChevronRight size={14} /> Tamil</Link></li>
                <li><Link to="/departments#english" className="dropdown-link"><ChevronRight size={14} /> English</Link></li>
                <li><Link to="/departments#commerce" className="dropdown-link"><ChevronRight size={14} /> Commerce</Link></li>
                <li><Link to="/departments#maths" className="dropdown-link"><ChevronRight size={14} /> Mathematics</Link></li>
                <li><Link to="/departments#cs" className="dropdown-link"><ChevronRight size={14} /> Computer Science</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">New Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/library" className="nav-link">Library</Link>
            </li>
            <li className="nav-item">
              <Link to="/accreditation" className="nav-link">Accreditation</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">Photo Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/downloads" className="nav-link">
                Downloads <ChevronDown size={14} />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/downloads#student" className="dropdown-link"><ChevronRight size={14} /> For Students</Link></li>
                <li><Link to="/downloads#staff" className="dropdown-link"><ChevronRight size={14} /> For Staff</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/admission" className="nav-link">
                Admission 2026–2027 <ChevronDown size={14} />
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/admission#details" className="dropdown-link"><ChevronRight size={14} /> Admission Details</Link></li>
                <li><Link to="/admission#counselling" className="dropdown-link"><ChevronRight size={14} /> Counselling Schedule</Link></li>
                <li><Link to="/admission#ranklist" className="dropdown-link"><ChevronRight size={14} /> Rank Lists</Link></li>
                <li><Link to="/admission#documents" className="dropdown-link"><ChevronRight size={14} /> Required Documents</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && <div className="mobile-drawer-overlay" onClick={toggleMobile} />}
      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src="/assets/college_logo.png" alt="Emblem" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
            <span style={{ fontWeight: 700, color: 'var(--secondary-gold)', fontSize: '0.9rem' }}>GASC SRIVILLIPUTHUR</span>
          </div>
          <button onClick={toggleMobile} style={{ background: 'none', color: '#FFF', padding: '0.4rem' }}>
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          <li><Link to="/" className="mobile-nav-link" onClick={toggleMobile}>Home</Link></li>
          
          <li>
            <div className="mobile-nav-link" onClick={() => toggleSubmenu('about')} style={{ cursor: 'pointer' }}>
              <span>About Us</span>
              <ChevronDown size={16} style={{ transform: openSubmenu === 'about' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </div>
            {openSubmenu === 'about' && (
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px', padding: '0.5rem 0', margin: '0.25rem 0 0.5rem 0' }}>
                <Link to="/about#college" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• About College</Link>
                <Link to="/about#principal" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Principal's Desk</Link>
                <Link to="/about#administration" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Administration</Link>
                <Link to="/about#vision" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Vision & Mission</Link>
              </div>
            )}
          </li>

          <li>
            <div className="mobile-nav-link" onClick={() => toggleSubmenu('academic')} style={{ cursor: 'pointer' }}>
              <span>Academic</span>
              <ChevronDown size={16} style={{ transform: openSubmenu === 'academic' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </div>
            {openSubmenu === 'academic' && (
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px', padding: '0.5rem 0', margin: '0.25rem 0 0.5rem 0' }}>
                <Link to="/academic#ug-programmes" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• UG Programmes</Link>
                <Link to="/academic#admission" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Admission</Link>
                <Link to="/academic#curriculum" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Curriculum</Link>
                <Link to="/academic#teaching-and-learning" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Teaching & Learning</Link>
                <Link to="/academic#calendar" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Academic Calendar</Link>
              </div>
            )}
          </li>

          <li>
            <div className="mobile-nav-link" onClick={() => toggleSubmenu('departments')} style={{ cursor: 'pointer' }}>
              <span>Departments</span>
              <ChevronDown size={16} style={{ transform: openSubmenu === 'departments' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </div>
            {openSubmenu === 'departments' && (
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px', padding: '0.5rem 0', margin: '0.25rem 0 0.5rem 0' }}>
                <Link to="/departments#tamil" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Tamil</Link>
                <Link to="/departments#english" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• English</Link>
                <Link to="/departments#commerce" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Commerce</Link>
                <Link to="/departments#maths" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Mathematics</Link>
                <Link to="/departments#cs" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Computer Science</Link>
              </div>
            )}
          </li>

          <li><Link to="/events" className="mobile-nav-link" onClick={toggleMobile}>New Events</Link></li>
          <li><Link to="/services" className="mobile-nav-link" onClick={toggleMobile}>Services</Link></li>
          <li><Link to="/library" className="mobile-nav-link" onClick={toggleMobile}>Library</Link></li>
          <li><Link to="/accreditation" className="mobile-nav-link" onClick={toggleMobile}>Accreditation & Ranking</Link></li>
          <li><Link to="/gallery" className="mobile-nav-link" onClick={toggleMobile}>Photo Gallery</Link></li>
          <li>
            <div className="mobile-nav-link" onClick={() => toggleSubmenu('downloads')} style={{ cursor: 'pointer' }}>
              <span>Downloads</span>
              <ChevronDown size={16} style={{ transform: openSubmenu === 'downloads' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </div>
            {openSubmenu === 'downloads' && (
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px', padding: '0.5rem 0', margin: '0.25rem 0 0.5rem 0' }}>
                <Link to="/downloads#student" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• For Students</Link>
                <Link to="/downloads#staff" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• For Staff</Link>
              </div>
            )}
          </li>
          
          <li>
            <div className="mobile-nav-link" onClick={() => toggleSubmenu('admission')} style={{ cursor: 'pointer' }}>
              <span>Admission 2026–2027</span>
              <ChevronDown size={16} style={{ transform: openSubmenu === 'admission' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </div>
            {openSubmenu === 'admission' && (
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '6px', padding: '0.5rem 0', margin: '0.25rem 0 0.5rem 0' }}>
                <Link to="/admission#details" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Admission Details</Link>
                <Link to="/admission#counselling" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Counselling Schedule</Link>
                <Link to="/admission#ranklist" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Rank Lists</Link>
                <Link to="/admission#documents" className="mobile-nav-link" style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--secondary-gold)' }} onClick={toggleMobile}>• Required Documents</Link>
              </div>
            )}
          </li>

          <li><Link to="/contact" className="mobile-nav-link" onClick={toggleMobile}>Contact Us</Link></li>
        </ul>
      </div>
    </header>
  );
}
