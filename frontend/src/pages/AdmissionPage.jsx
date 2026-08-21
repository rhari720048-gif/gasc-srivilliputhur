import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  GraduationCap, 
  FileCheck2, 
  Award, 
  BookOpen, 
  Calendar,
  CheckCircle2, 
  ArrowRight,
  Workflow,
  Download,
  Notebook,
  FileText,
  CreditCard,
  Info
} from 'lucide-react';

export default function AdmissionPage() {
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
          text-decoration: none;
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

        .pdf-link-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 1.5rem 0;
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

        .pdf-iframe-container {
          width: 100%;
          height: 600px;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          margin-top: 1.5rem;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .admission-info-box {
          background-color: var(--bg-light);
          border-left: 4px solid var(--secondary-gold);
          padding: 1.25rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 1.5rem;
        }

        /* Responsive Table */
        .info-table-wrapper {
          overflow-x: auto;
          margin-top: 1.25rem;
          margin-bottom: 2rem;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
        }

        .info-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .info-table th {
          background-color: var(--primary-navy);
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.85rem 1rem;
          border: 1px solid var(--primary-navy-dark);
          text-align: center;
        }

        .info-table td {
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-light);
          font-size: 0.875rem;
          color: var(--text-dark);
          text-align: center;
        }

        .info-table tr:nth-child(even) {
          background-color: var(--bg-light);
        }

        @media (max-width: 992px) {
          .academic-grid-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .academic-content-card {
            padding: 1.5rem;
          }
          
          .pdf-iframe-container {
            height: 450px;
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
            Admission Portal
          </span>
          <h1 className="heading-serif" style={{ color: '#FFFFFF', fontSize: '2.25rem', marginTop: '0.5rem' }}>
            Admission Details 2026–2027
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
            Check guidelines, download G.O. letters, view fee structures, and access the online application portal.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }} id="admission-detail-section">
        <div className="container">
          <div className="academic-grid-container">
            
            {/* Left Sidebar Menu */}
            <aside className="academic-sidebar-card">
              <h2 className="academic-sidebar-title">
                <Notebook size={18} style={{ color: 'var(--secondary-gold)' }} /> Academic Sections
              </h2>
              <ul className="academic-sidebar-menu">
                <li>
                  <Link to="/academic#ug-programmes" className="academic-tab-btn">
                    <GraduationCap size={18} /> UG Programmes
                  </Link>
                </li>
                <li>
                  <Link to="/admission" className="academic-tab-btn active">
                    <FileCheck2 size={18} /> Admission
                  </Link>
                </li>
                <li>
                  <Link to="/academic#curriculum" className="academic-tab-btn">
                    <BookOpen size={18} /> Curriculum
                  </Link>
                </li>
                <li>
                  <Link to="/academic#teaching-and-learning" className="academic-tab-btn">
                    <Workflow size={18} /> Teaching & Learning
                  </Link>
                </li>
                <li>
                  <Link to="/academic#calendar" className="academic-tab-btn">
                    <Calendar size={18} /> Academic Calendar
                  </Link>
                </li>
              </ul>
            </aside>

            {/* Right Content Panel */}
            <main className="academic-content-card">
              <span className="section-tag">Centralized Admissions</span>
              <h2 className="heading-serif" style={{ fontSize: '1.75rem', color: 'var(--primary-navy-dark)', marginBottom: '1.25rem' }}>
                Admission Guidelines
              </h2>
              
              <div style={{ lineHeight: 1.75, color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '1.25rem' }}>
                  The announcement for admission to UG courses in Government Arts and Science colleges will be made coinciding with the publication of +2 examination results.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Candidates have to register their applications through online. Certificates are to be uploaded online only. It can be done through the help of Admission Facilitation Center (AFC)-2026 at Government arts colleges of each district.
                </p>
              </div>

              {/* PDF Document Links */}
              <div className="pdf-link-container">
                <a 
                  href="/assets/admission_procedure.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pdf-download-link"
                >
                  <span className="pdf-icon-wrapper"><FileText size={20} /></span>
                  <span>Admission Procedure</span>
                </a>
                
                <a 
                  href="/assets/tn_govt_go_admission.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="pdf-download-link"
                >
                  <span className="pdf-icon-wrapper"><FileText size={20} /></span>
                  <span>TN Govt. G.O for admission procedures</span>
                </a>
              </div>

              {/* Embedded PDF G.O. Press Release */}
              <div style={{ marginTop: '2rem' }}>
                <h3 className="heading-serif" style={{ fontSize: '1.2rem', color: 'var(--primary-navy-dark)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Info size={16} style={{ color: 'var(--secondary-gold)' }} /> Official Government Press Release
                </h3>
                <div className="pdf-iframe-container">
                  <iframe 
                    src="/assets/tn_govt_go_admission.pdf#toolbar=0&navpanes=0" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 'none' }}
                    title="TN Govt G.O Press Release PDF"
                  />
                </div>
              </div>

              {/* Section 2: Important Dates */}
              <div style={{ marginTop: '3rem' }} id="counselling">
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', color: 'var(--primary-navy-dark)', marginBottom: '0.75rem' }}>
                  Important Dates (Admission Schedule)
                </h3>
                <div className="info-table-wrapper">
                  <table className="info-table">
                    <thead>
                      <tr>
                        <th>Admission Event</th>
                        <th>Important Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 600, textAlign: 'left' }}>Online Registration Starts</td>
                        <td>07.05.2026</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600, textAlign: 'left' }}>Last Date for Online Application Submission</td>
                        <td>29.05.2026</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600, textAlign: 'left' }}>Special Quota Counselling Dates</td>
                        <td>To be announced based on MKU guidelines</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600, textAlign: 'left' }}>General Counselling (Phase I & II)</td>
                        <td>To be announced</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3: Fee Details */}
              <div style={{ marginTop: '2.5rem' }}>
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', color: 'var(--primary-navy-dark)', marginBottom: '0.75rem' }}>
                  Application Fee Details
                </h3>
                
                <div className="admission-info-box">
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>
                    <strong>Payment Mode:</strong> Payment can be made online via <strong>Debit Card / Credit Card / Net Banking / UPI</strong>.
                  </p>
                </div>

                <div className="info-table-wrapper">
                  <table className="info-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Application Fee</th>
                        <th>Registration Fee</th>
                        <th>Total Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: 600 }}>General / BC / MBC / DNC</td>
                        <td>Rs. 48/-</td>
                        <td>Rs. 2/-</td>
                        <td style={{ fontWeight: 600, color: 'var(--primary-navy-light)' }}>Rs. 50/-</td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: 600 }}>SC / SCA / ST</td>
                        <td>Nil</td>
                        <td>Rs. 2/-</td>
                        <td style={{ fontWeight: 600, color: 'var(--primary-navy-light)' }}>Rs. 2/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4: Required Documents */}
              <div style={{ marginTop: '2.5rem' }} id="documents">
                <h3 className="heading-serif" style={{ fontSize: '1.25rem', color: 'var(--primary-navy-dark)', marginBottom: '1rem' }}>
                  Required Documents Checklist
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  The following original certificates must be scanned and uploaded during application registration, and produced in original during counselling:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>Qualifying Examination Mark Sheet (+2 / HSC / Equivalent)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>10th Standard / SSLC Mark Sheet (Proof of Date of Birth)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>Transfer Certificate (TC) issued by the school last attended</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>Community Certificate (for BC, BCM, MBC, DNC, SC, SCA, ST candidates)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>Special Quota proof (differently-abled, sports, NCC, ex-servicemen certificates)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>Eligibility Certificate (for students from other States, Boards or Universities)</span>
                  </div>
                </div>
              </div>

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
