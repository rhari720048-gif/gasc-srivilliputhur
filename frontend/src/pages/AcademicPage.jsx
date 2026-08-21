import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AcademicCalendar from '../components/AcademicCalendar';
import { 
  GraduationCap, 
  FileCheck2, 
  Award, 
  BookOpen, 
  Layers, 
  Sparkles, 
  Calendar,
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Workflow,
  Download,
  Notebook,
  FileText,
  ExternalLink,
  Globe,
  Smartphone,
  Book
} from 'lucide-react';
import { webResources } from '../data/webResources';

const tabIds = {
  '#ug-programmes': 'ug-programmes',
  '#admission': 'admission',
  '#curriculum': 'curriculum',
  '#teaching-and-learning': 'teaching-learning',
  '#calendar': 'calendar'
};

const tabTitles = {
  'ug-programmes': 'UG Programmes',
  'admission': 'Admission',
  'curriculum': 'Curriculum',
  'teaching-learning': 'Teaching and Learning',
  'calendar': 'Academic Calendar'
};

export default function AcademicPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('ug-programmes');
  const [activeResourceDept, setActiveResourceDept] = useState('computer-science');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash || window.location.hash;
      if (hash && tabIds[hash]) {
        setActiveTab(tabIds[hash]);
        const element = document.getElementById('academic-content-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    handleHashChange();
  }, [location.hash]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    const hash = Object.keys(tabIds).find(key => tabIds[key] === tabKey);
    if (hash) {
      window.location.hash = hash;
    }
  };

  return (
    <div className="page-wrapper">
      {/* Page styling block to handle custom tabbed design and responsive sidebar */}
      <style dangerouslySetInnerHTML={{__html: `
        .academic-grid-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2.5rem;
          margin-top: 2rem;
          align-items: start;
        }

        .academic-sidebar-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }

        .academic-sidebar-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-navy-dark);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--border-light);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .academic-sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .academic-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: left;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          background-color: var(--bg-white);
          color: var(--text-muted);
          transition: var(--transition-fast);
          cursor: pointer;
          width: 100%;
        }

        .academic-tab-btn:hover {
          background-color: var(--bg-subtle);
          color: var(--primary-navy);
          border-color: var(--border-subtle);
        }

        .academic-tab-btn.active {
          background-color: var(--primary-navy);
          color: var(--text-on-dark);
          border-color: var(--primary-navy);
          box-shadow: var(--shadow-md);
        }

        .academic-content-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          min-height: 500px;
        }

        /* Academic Table Styling */
        .green-table-wrapper {
          overflow-x: auto;
          margin-top: 1.5rem;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }

        .green-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .green-table th {
          background-color: var(--primary-navy); /* Navy Blue matching the brand theme */
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.825rem;
          padding: 1rem;
          border: 1px solid var(--primary-navy-dark);
          text-align: center;
          vertical-align: middle;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .green-table td {
          padding: 1rem;
          border: 1px solid var(--border-light);
          font-size: 0.875rem;
          color: var(--text-dark);
          text-align: center;
          vertical-align: middle;
        }

        .green-table tr:nth-child(even) {
          background-color: var(--bg-light); /* Soft gray-blue tint */
        }

        .green-table tr:hover {
          background-color: var(--border-light); /* Hover row highlight */
        }

        .pdf-link-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 1.25rem 0;
        }

        .pdf-download-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary-navy-light);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          padding: 0.5rem 0;
          width: fit-content;
          transition: var(--transition-fast);
          cursor: pointer;
        }

        .pdf-download-link:hover {
          color: var(--accent-gold);
          transform: translateX(4px);
        }

        .pdf-icon-wrapper {
          color: #DC2626; /* PDF Red */
          display: flex;
          align-items: center;
        }

        @media (max-width: 992px) {
          .academic-grid-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .academic-content-card {
            padding: 1.5rem;
          }
        }

        /* Teaching & Learning section styling */
        .teaching-learning-row {
          display: flex;
          flex-direction: column-reverse;
          gap: 2rem;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .teaching-learning-text {
          flex: 1;
        }

        .teaching-learning-image-container {
          width: 100%;
          max-width: 480px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-light);
          background-color: #ffffff;
          padding: 0.75rem;
          transition: var(--transition-fast);
        }

        .teaching-learning-image-container:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .teaching-learning-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: calc(var(--radius-lg) - 0.25rem);
        }

        @media (min-width: 992px) {
          .teaching-learning-row {
            flex-direction: row;
            align-items: flex-start;
            gap: 2.5rem;
          }
          .teaching-learning-image-container {
            width: 40%;
            margin-top: 0.25rem;
            flex-shrink: 0;
          }
        }

        /* Curriculum Web Resources Component Styles */
        .resources-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border-light);
        }

        .resources-tabs-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.25rem;
        }

        .resources-tab-btn {
          padding: 0.6rem 1.2rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          background: #f8fafc;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .resources-tab-btn:hover {
          background: var(--bg-subtle);
          color: var(--primary-navy);
          border-color: var(--border-subtle);
        }

        .resources-tab-btn.active {
          background: var(--primary-navy);
          color: var(--text-on-dark);
          border-color: var(--primary-navy);
          box-shadow: var(--shadow-sm);
        }

        .resources-subject-card {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          transition: var(--transition-fast);
        }

        .resources-subject-card:hover {
          box-shadow: var(--shadow-sm);
          border-color: var(--border-subtle);
        }

        .resources-subject-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-navy-dark);
          margin-bottom: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .resources-links-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .resource-link-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-sm);
          color: var(--text-dark);
          font-size: 0.775rem;
          font-weight: 500;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .resource-link-item:hover {
          background: var(--primary-navy-light);
          border-color: var(--primary-navy-light);
          color: var(--text-on-dark);
        }

        .resource-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}} />

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
            Academics
          </span>
          <h1 className="heading-serif" style={{ color: '#FFFFFF', fontSize: '2.25rem', marginTop: '0.5rem' }}>
            Academic Information Portal
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
            Access academic guides, syllabus details, our course offerings, and calendar schedules in one place.
          </p>
        </div>
      </div>

      {/* Main Tabbed Layout Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }} id="academic-content-section">
        <div className="container">
          <div className="academic-grid-container">
            
            {/* Left Sidebar Menu */}
            <aside className="academic-sidebar-card">
              <h2 className="academic-sidebar-title">
                <Notebook size={18} style={{ color: 'var(--secondary-gold)' }} /> Academic Sections
              </h2>
              <ul className="academic-sidebar-menu">
                <li>
                  <button 
                    onClick={() => handleTabClick('ug-programmes')}
                    className={`academic-tab-btn ${activeTab === 'ug-programmes' ? 'active' : ''}`}
                  >
                    <GraduationCap size={18} /> UG Programmes
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabClick('admission')}
                    className={`academic-tab-btn ${activeTab === 'admission' ? 'active' : ''}`}
                  >
                    <FileCheck2 size={18} /> Admission
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabClick('curriculum')}
                    className={`academic-tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
                  >
                    <BookOpen size={18} /> Curriculum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabClick('teaching-learning')}
                    className={`academic-tab-btn ${activeTab === 'teaching-learning' ? 'active' : ''}`}
                  >
                    <Workflow size={18} /> Teaching & Learning
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabClick('calendar')}
                    className={`academic-tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
                  >
                    <Calendar size={18} /> Academic Calendar
                  </button>
                </li>
              </ul>
            </aside>

            {/* Right Content Pane */}
            <main className="academic-content-card">
              
              {/* Tab: UG Programmes */}
              {activeTab === 'ug-programmes' && (
                <div>
                  <span className="section-tag">Undergraduate Courses</span>
                  <h2 className="heading-serif" style={{ fontSize: '1.75rem', color: 'var(--primary-navy-dark)', marginBottom: '0.5rem' }}>
                    UG Programmes Offered
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Government Arts and Science College, Srivilliputhur offers the following undergraduate programs affiliated with Madurai Kamaraj University.
                  </p>

                  <div className="green-table-wrapper">
                    <table className="green-table">
                      <thead>
                        <tr>
                          <th>Sl.No.</th>
                          <th>Name of the UG Programme leading to Degree</th>
                          <th>Year of the Introduction of Programme</th>
                          <th>Programme Duration</th>
                          <th>Medium of Instruction</th>
                          <th>Sanctioned Strength</th>
                          <th>Current Affiliation Status with MKU</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td style={{ fontWeight: 600, textAlign: 'left' }}>B.A. Tamil</td>
                          <td>2020 – 2021</td>
                          <td>3 Years</td>
                          <td>Tamil</td>
                          <td>60</td>
                          <td>Permanent</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td style={{ fontWeight: 600, textAlign: 'left' }}>B.A. English</td>
                          <td>2020 – 2021</td>
                          <td>3 Years</td>
                          <td>English</td>
                          <td>60</td>
                          <td>Permanent</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td style={{ fontWeight: 600, textAlign: 'left' }}>B.Com.</td>
                          <td>2020 – 2021</td>
                          <td>3 Years</td>
                          <td>English</td>
                          <td>60</td>
                          <td>Permanent</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td style={{ fontWeight: 600, textAlign: 'left' }}>B.Sc. Maths</td>
                          <td>2020 – 2021</td>
                          <td>3 Years</td>
                          <td>English</td>
                          <td>40</td>
                          <td>Permanent</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td style={{ fontWeight: 600, textAlign: 'left' }}>B.Sc. Computer Science</td>
                          <td>2020 – 2021</td>
                          <td>3 Years</td>
                          <td>English</td>
                          <td>40</td>
                          <td>Permanent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab: Admission */}
              {activeTab === 'admission' && (
                <div>
                  <span className="section-tag">Join GASC</span>
                  <h2 className="heading-serif" style={{ fontSize: '1.75rem', color: 'var(--primary-navy-dark)', marginBottom: '1rem' }}>
                    Admission Policy & Criteria
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Admission to all undergraduate courses is conducted in accordance with the rules and guidelines laid down by the Department of Higher Education, Government of Tamil Nadu.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: '1.5rem 0' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                      <div>
                        <h4 style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '0.95rem' }}>Eligibility</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Candidates must have passed 10+2 / Higher Secondary (HSC) or equivalent from a recognized board.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                      <div>
                        <h4 style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '0.95rem' }}>TNGASA Portal Registration</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>All applications are submitted and processed through the central Tamil Nadu Government Arts and Science Colleges Admission portal.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                      <div>
                        <h4 style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '0.95rem' }}>Government Reservations</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Selections follow the communal reservation matrix of the Tamil Nadu Government, allocating specific quotas for BC, BCM, MBC, SC, SCA, ST, sports, ex-servicemen, and differently-abled candidates.</p>
                      </div>
                    </div>
                  </div>

                  <a href="/admission" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    View Full Admission Details <ArrowRight size={16} />
                  </a>
                </div>
              )}



              {/* Tab: Curriculum */}
              {activeTab === 'curriculum' && (
                <div>
                  <span className="section-tag">Academic Syllabus</span>
                  <h2 className="heading-serif" style={{ fontSize: '1.75rem', color: 'var(--primary-navy-dark)', marginBottom: '1.25rem' }}>
                    Curriculum & Course Syllabus
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Access the Choice Based Credit System (CBCS) syllabus matching the latest regulations of Madurai Kamaraj University and the Naan Mudalvan scheme.
                  </p>

                  <h3 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '1.5rem', borderBottom: '2.5px solid var(--secondary-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                    UG Syllabus 2023-2024 (New Syllabus)
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '0.5rem' }}>
                    
                    {/* Category: Arts & Languages */}
                    <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                      <h4 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                        Arts & Languages
                      </h4>
                      <div className="pdf-link-container" style={{ margin: '0' }}>
                        {[
                          { title: "Part – I General Tamil New", path: "#", placeholder: true },
                          { title: "Part – II General English New", path: "#", placeholder: true },
                          { title: "B.A. Tamil - Syllabus - 2023-2024", path: "/assets/ba_tamil_syllabus.pdf", placeholder: false },
                          { title: "B.A. English - Syllabus - 2023-2024", path: "/assets/ba_english_syllabus.pdf", placeholder: false }
                        ].map((item, index) => (
                          <a 
                            key={index}
                            href={item.path} 
                            onClick={item.placeholder ? (e) => { e.preventDefault(); alert(`${item.title} PDF will be uploaded soon.`); } : undefined}
                            target={item.placeholder ? undefined : "_blank"}
                            rel={item.placeholder ? undefined : "noopener noreferrer"}
                            className="pdf-download-link"
                          >
                            <span className="pdf-icon-wrapper"><FileText size={18} /></span>
                            <span style={{ fontSize: '0.85rem' }}>{item.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Category: Commerce */}
                    <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                      <h4 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                        Commerce
                      </h4>
                      <div className="pdf-link-container" style={{ margin: '0' }}>
                        {[
                          { title: "B.Com - Syllabus - 2023-2024", path: "/assets/bcom_syllabus.pdf", placeholder: false }
                        ].map((item, index) => (
                          <a 
                            key={index}
                            href={item.path} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-download-link"
                          >
                            <span className="pdf-icon-wrapper"><FileText size={18} /></span>
                            <span style={{ fontSize: '0.85rem' }}>{item.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Category: Science */}
                    <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                      <h4 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                        Science
                      </h4>
                      <div className="pdf-link-container" style={{ margin: '0' }}>
                        {[
                          { title: "B.Sc. Mathematics - Syllabus - 2023-2024", path: "/assets/bsc_mathematics_syllabus.pdf", placeholder: false },
                          { title: "B.Sc. Computer Science - Syllabus - 2023-2024", path: "/assets/bsc_computer_science_syllabus.pdf", placeholder: false }
                        ].map((item, index) => (
                          <a 
                            key={index}
                            href={item.path} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-download-link"
                          >
                            <span className="pdf-icon-wrapper"><FileText size={18} /></span>
                            <span style={{ fontSize: '0.85rem' }}>{item.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Category: Add-on Schemes */}
                    <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                      <h4 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                        Add-on Schemes (Naan Mudalvan)
                      </h4>
                      <div className="pdf-link-container" style={{ margin: '0' }}>
                        {[
                          { title: "Naan Mudalvan Scheme - Format & Course Mapping", path: "/assets/naan_mudalvan_scheme.pdf", placeholder: false }
                        ].map((item, index) => (
                          <a 
                            key={index}
                            href={item.path} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-download-link"
                          >
                            <span className="pdf-icon-wrapper"><FileText size={18} /></span>
                            <span style={{ fontSize: '0.85rem' }}>{item.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab: Teaching & Learning */}
              {activeTab === 'teaching-learning' && (
                <div>
                  <span className="section-tag">Academic Pedagogy</span>
                  <h2 className="heading-serif" style={{ fontSize: '1.75rem', color: 'var(--primary-navy-dark)', marginBottom: '1.25rem' }}>
                    Teaching & Learning Methodology
                  </h2>
                  
                  {/* Philosophy & Purpose */}
                  <div className="teaching-learning-row">
                    <div className="teaching-learning-text" style={{ lineHeight: 1.75, color: 'var(--text-muted)' }}>
                      <p style={{ marginBottom: '1rem' }}>
                        Teaching is a methodology to engage the learners and enable to understand and apply the knowledge, concepts and processes in a systematic and scheduled manner.
                      </p>
                      <p style={{ marginBottom: '1rem' }}>
                        Teaching and learning is an educational setting environment of instructors who providing content, objectives, and goals; learners whom receiving knowledge, performance, and produce outcomes. <em>“Teaching is an instinctual art, mindful of potential, craving of realizations, a pausing, seamless process”</em>.
                      </p>
                      <p style={{ marginBottom: '1rem' }}>
                        The purpose of teaching is not only to convey information, but also to transform students from submissive mode into active participants. It creates the didactic, communal, and moral conditions under which students agree to take charge of their own learning, individually and collectively. It should bring dull academic concepts to life with visual and practical learning experiences.
                      </p>
                    </div>
                    <div className="teaching-learning-image-container">
                      <img 
                        src="/assets/teaching_learning.png" 
                        alt="Teaching & Learning Methodology" 
                        className="teaching-learning-image"
                      />
                    </div>
                  </div>

                  {/* Principles Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                    
                    {/* Column: Teaching Principles */}
                    <div style={{ background: '#FFF', padding: '1.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                      <h3 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.2rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--secondary-gold)', paddingBottom: '0.4rem' }}>
                        Teaching Principles
                      </h3>
                      <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.65rem', lineHeight: 1.6 }}>
                        <li>To encourage contact between students and faculty.</li>
                        <li>To develop reciprocity and cooperation among students.</li>
                        <li>To encourage active learning.</li>
                        <li>To give prompt feedback.</li>
                        <li>To emphasize time on task.</li>
                        <li>To communicate high expectations and enable them to prepare multimedia visualizations and presentations resulting in multi-sensory learning.</li>
                        <li>Respect diverse talents and ways of learning.</li>
                        <li>To explore alternate approaches through research and thinking differently.</li>
                        <li>To access to heaps of information at finger tips.</li>
                        <li>To compile and analyze the records and do data driven decisions.</li>
                        <li>To create a borderless communication with educationalist and industrialist experts.</li>
                      </ul>
                    </div>

                    {/* Column: Learning Principles */}
                    <div style={{ background: '#FFF', padding: '1.75rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                      <h3 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.2rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--secondary-gold)', paddingBottom: '0.4rem' }}>
                        Learning Principles
                      </h3>
                      <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.65rem', lineHeight: 1.6 }}>
                        <li>Constructive education.</li>
                        <li>Learning should be an active process, in which one gain knowledge from experiences and interactions.</li>
                        <li>Learning in a relevant context.</li>
                        <li>Collaborative learning.</li>
                        <li>Self-directed education.</li>
                        <li>Enable them to learn the subject in their own pace.</li>
                        <li>Create conducive learning environment and enable them to work creatively, to innovate and develop original outcomes.</li>
                        <li>Learning through experimentation and exploration, having hands-on experience with the latest technology software providing new opportunities for creativity.</li>
                        <li>To increase their ICT proficiency and accomplish subject-based learning goals.</li>
                      </ul>
                    </div>

                  </div>

                  {/* Student-Centric Methods Grid */}
                  <div style={{ background: '#FFF', padding: '2rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
                    <h3 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', fontSize: '1.35rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                      Student-Centric Methods Adopted
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
                      
                      {/* Experiential Learning */}
                      <div style={{ background: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ color: 'var(--primary-navy)', fontSize: '0.975rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                          Experiential Learning
                        </h4>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.5 }}>
                          <li>Hands-on-training in Practical Sessions</li>
                          <li>Internship Programme</li>
                          <li>Field Visits</li>
                          <li>Charts / Maps / Models</li>
                          <li>ICT Tools such as Google Classroom, Google Meet & Google Forms</li>
                          <li>Mind Maps using E-DrawMax</li>
                          <li>E-Content using Adobe Captivate</li>
                          <li>Open Source Software</li>
                        </ul>
                      </div>

                      {/* Participative Learning */}
                      <div style={{ background: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ color: 'var(--primary-navy)', fontSize: '0.975rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                          Participative Learning
                        </h4>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.5 }}>
                          <li>Seminars / Conferences and Workshops</li>
                          <li>Paper Presentation</li>
                          <li>Science / Artefacts Exhibition</li>
                          <li>Group Discussion</li>
                          <li>Role Play / Dramas / Debates</li>
                          <li>Videos / Films</li>
                          <li>Live Telecast of Budget session</li>
                          <li>Extension Activities</li>
                          <li>Intra / Inter-collegiate meet</li>
                          <li>Webinars on NET / SET</li>
                          <li>Pranic Healing</li>
                          <li>Yoga</li>
                          <li>Library Reference</li>
                        </ul>
                      </div>

                      {/* Problem Solving */}
                      <div style={{ background: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ color: 'var(--primary-navy)', fontSize: '0.975rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                          Problem-Solving Methodologies
                        </h4>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.5 }}>
                          <li>Project-based learning</li>
                          <li>Syllabus & Mathematical Modelling</li>
                          <li>Case Studies / Survey research</li>
                          <li>Soft Skill Development Programme</li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* ICT Enabled Teaching Section */}
                  <div style={{ marginBottom: '3rem' }}>
                    <h3 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                      ICT Teaching Infrastructure
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      With the world rapidly evolving into digital media and information, the institution also constantly updates, learns and relearns the use of ICT to provide more learning environments focused on students. The institution has a wide number of ICT tools and e-resources to shape and enrich the skills of students.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      
                      <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                        <h4 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Smart Classrooms</h4>
                        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          All classrooms on the campus are Wi-Fi / ICT enabled. The laboratories, seminar hall (multi-purpose hall) are well equipped with ICT facilities.
                        </p>
                      </div>

                      <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                        <h4 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Campus Wi-Fi</h4>
                        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          The Institution upgraded the internet leased line facility to 100 Mbps to provide secured and high-speed Wi-Fi access to the Staff and Students.
                        </p>
                      </div>

                      <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                        <h4 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Learning Management System (LMS)</h4>
                        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          Publishing the courses as closed access through a dedicated GASC LMS. It provides a platform for the creation and distribution of E-Content learning resources.
                        </p>
                      </div>

                      <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                        <h4 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>GASC Connect</h4>
                        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          YouTube Channel of the College helps the students to watch recorded video content of the courses anywhere and anytime. It enables live streaming.
                        </p>
                      </div>

                      <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                        <h4 className="heading-serif" style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Information Resource Centre (IRC)</h4>
                        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          The IRC is a member of E-Resources such as INFLIBNET, DELNET and J-Gate. Library users are provided with OPAC service using MODERNLIB software.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* E-Resources Gateway Table */}
                  <div style={{ marginBottom: '3rem' }}>
                    <h3 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                      E-Resources Gateway
                    </h3>
                    <div className="green-table-wrapper" style={{ maxHeight: '450px', overflowY: 'auto' }}>
                      <table className="green-table">
                        <thead>
                          <tr style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <th style={{ width: '80px' }}>SI.No</th>
                            <th>E-Resources Name</th>
                            <th>Access Link</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: "NPTEL Videos", link: "http://nptel.iitm.ac.in/" },
                            { name: "Live Webcast services - Vyas Channel", link: "http://webcast.gov.in/" },
                            { name: "CEC and INFLIBNET Medialibrary", link: "http://www.inflibnet.ac.in/edu/medialibrary.html" },
                            { name: "Virtual Labs Gateway", link: "http://www.vlab.co.in/" },
                            { name: "Virtual Labs (Alternative)", link: "http://virtual-labs.ac.in/" },
                            { name: "Animalearn Zoology Resources", link: "http://www.animalearn.org/links.php" },
                            { name: "CEC E-Content Search", link: "http://www.cec.nic.in/E-Content/Pages/Search.aspx" },
                            { name: "Free Video Lectures (History)", link: "http://freevideolectures.com/free-college-courses-online/#History" },
                            { name: "Education Portal Academy Courses", link: "http://education-portal.com/academy/course/index.html" },
                            { name: "CosmoLearning portal", link: "http://www.cosmolearning.com/" },
                            { name: "VideoLectures.net Repository", link: "http://videolectures.net/" },
                            { name: "Indian History Video Documentaries", link: "https://www.youtube.com/watch?v=uU3eqP-nxu8" },
                            { name: "Indian History Audio Lectures", link: "http://clip.dj/indian-history-part-ii-download-mp3-mp4-l-W3UM7hpBU" },
                            { name: "SMRM Learning Management System", link: "http://www.sfrmlearning.org/" },
                            { name: "Google Classroom Portal", link: "https://classroom.google.com/" },
                            { name: "Google Meet Portal", link: "https://meet.google.com/" },
                            { name: "BigBlueButton Web Conferencing", link: "https://bigbluebutton.org/" },
                            { name: "Edmodo LMS Portal", link: "https://new.edmodo.com/" },
                            { name: "Impartus Lecture Capturing System", link: "https://a.impartus.com/" },
                            { name: "FreeConvert Video Compressor", link: "https://www.freeconvert.com/video-compressor" },
                            { name: "YouCompress Online Compressor", link: "https://www.youcompress.com/" },
                            { name: "CyberLink PowerDirector", link: "https://www.cyberlink.com/products/powerdirector-video-editing-software" },
                            { name: "Audacity Open Source Audio Editor", link: "https://www.audacityteam.org/" },
                            { name: "Adobe Captivate E-Learning Authoring", link: "https://www.adobe.com/in/products/captivate.html" },
                            { name: "PresentationTube video recorder", link: "https://presentationtube.com/" },
                            { name: "LimeSurvey Online Survey Tool", link: "https://www.limesurvey.org/" },
                            { name: "Four Eyes Customer Feedback Survey", link: "https://getfoureyes.com/" },
                            { name: "OpenShot Video Editor", link: "https://www.openshot.org/" },
                            { name: "OpenBoard Teaching Software", link: "https://openboard.ch" },
                            { name: "AWW App Online Whiteboard", link: "https://awwapp.com/" },
                            { name: "Adobe Premiere Pro Editor", link: "https://www.adobe.com/in/products/premiere.html" },
                            { name: "HandBrake Video Transcoder", link: "https://handbrake.fr/" },
                            { name: "Wondershare Filmora Video Editor", link: "https://filmora.wondershare.net/video-editor.html" },
                            { name: "Microsoft PowerPoint Presentation", link: "https://www.microsoft.com/en-us/microsoft-365/powerpoint" },
                            { name: "Open Broadcaster Software (OBS)", link: "https://obsproject.com/" },
                            { name: "TinyTake Screen Capture", link: "https://tinytake.com/tinytake-download" },
                            { name: "Ideone IDE & Debugging Tool", link: "https://ideone.com/" },
                            { name: "Overleaf Online LaTeX Editor", link: "https://www.overleaf.com/" }
                          ].map((item, index) => (
                            <tr key={index}>
                              <td style={{ fontWeight: 600 }}>{index + 1}</td>
                              <td style={{ textAlign: 'left', fontWeight: 500 }}>{item.name}</td>
                              <td style={{ textAlign: 'center' }}>
                                <a 
                                  href={item.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="btn btn-outline btn-sm"
                                  style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}
                                >
                                  Open Resource <ArrowRight size={12} />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Web Resources for 5 UG Departments */}
                  <div className="resources-section">
                    <h3 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', fontSize: '1.45rem', marginBottom: '0.75rem' }}>
                      Curriculum Web Resources Portal
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                      Select a department below to explore curated online learning resources, e-content tutorials, official reference portals, and digital libraries compiled specifically for each curriculum subject.
                    </p>

                    {/* Department Tabs Selector */}
                    <div className="resources-tabs-container">
                      {webResources.map((dept) => (
                        <button
                          key={dept.id}
                          onClick={() => setActiveResourceDept(dept.id)}
                          className={`resources-tab-btn ${activeResourceDept === dept.id ? 'active' : ''}`}
                        >
                          {dept.title}
                        </button>
                      ))}
                    </div>

                    {/* Active Department Resources Grid */}
                    {(() => {
                      const currentDept = webResources.find(d => d.id === activeResourceDept);
                      if (!currentDept) return null;

                      return (
                        <div>
                          <p style={{ color: 'var(--primary-navy-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                            {currentDept.description}
                          </p>

                          <div className="resources-grid">
                            {currentDept.subjects.map((subject, subIndex) => (
                              <div key={subIndex} className="resources-subject-card">
                                <h4 className="resources-subject-name">
                                  <BookOpen size={16} style={{ color: 'var(--secondary-gold)', flexShrink: 0 }} />
                                  {subject.name}
                                </h4>
                                <div className="resources-links-grid">
                                  {subject.links.map((link, linkIndex) => {
                                    let LinkIcon = ExternalLink;
                                    if (link.type === 'app') LinkIcon = Smartphone;
                                    else if (link.type === 'library') LinkIcon = Book;
                                    else if (link.type === 'pdf') LinkIcon = FileText;

                                    return (
                                      <a
                                        key={linkIndex}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resource-link-item"
                                        title={link.label}
                                      >
                                        <span className="resource-icon-wrapper">
                                          <LinkIcon size={12} />
                                        </span>
                                        <span>{link.label}</span>
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                </div>
              )}

              {/* Tab: Academic Calendar */}
              {activeTab === 'calendar' && (
                <div>
                  <span className="section-tag">Schedules & Timelines</span>
                  <h2 className="heading-serif" style={{ fontSize: '1.75rem', color: 'var(--primary-navy-dark)', marginBottom: '0.5rem' }}>
                    Academic Calendar & Milestones
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    View college reopening dates, scheduled assessments, internal exams, and holidays.
                  </p>

                  <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <a 
                      href="/assets/academic_calendar_2026_2027.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                    >
                      <Download size={16} /> Download Full Academic Calendar (PDF) <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Render the inline calendar component */}
                  <AcademicCalendar />
                </div>
              )}

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
