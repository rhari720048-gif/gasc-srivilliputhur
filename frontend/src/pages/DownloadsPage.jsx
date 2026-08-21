import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Download, User, Users, FolderOpen, ArrowRight, ExternalLink } from 'lucide-react';

export default function DownloadsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('student');

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (hash === 'student' || hash === 'staff') {
        setActiveTab(hash);
      }
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const studentDownloads = [
    {
      title: "Students Information - Annexure I",
      desc: "Student database entry sheet and travel route information form.",
      fileSize: "356 KB",
      url: "/assets/annexure_1_student_info.pdf",
      format: "PDF"
    },
    {
      title: "Transfer Certificate (TC) Application",
      desc: "Application form for requesting and obtaining Transfer Certificate (TC) from the college.",
      fileSize: "231 KB",
      url: "/assets/transfer_certificate_application.pdf",
      format: "PDF"
    },
    {
      title: "Bonafide Certificate Application",
      desc: "Official application form for requesting a Bonafide Certificate from the college.",
      fileSize: "78 KB",
      url: "/assets/bonafide_certificate.pdf",
      format: "PDF"
    },
    {
      title: "Conduct Certificate Application",
      desc: "Official application form for requesting a Conduct Certificate from the college.",
      fileSize: "77 KB",
      url: "/assets/conduct_certificate.pdf",
      format: "PDF"
    },
    {
      title: "Attendance Certificate Application",
      desc: "Official application form for requesting an Attendance Certificate from the college.",
      fileSize: "77 KB",
      url: "/assets/attendance_certificate.pdf",
      format: "PDF"
    },
    {
      title: "BC/MBC/DNC New Scholarship Form",
      desc: "Fresh scholarship application form for Backward Classes, Most Backward Classes, and Denotified Communities.",
      fileSize: "2.7 MB",
      url: "/assets/bc_mbc_new_scholarship_form.pdf",
      format: "PDF"
    },
    {
      title: "BC/MBC/DNC Scholarship Renewal Form",
      desc: "Scholarship renewal application form for Backward Classes, Most Backward Classes, and Denotified Communities.",
      fileSize: "1.9 MB",
      url: "/assets/bc_mbc_scholarship_renewal_form.pdf",
      format: "PDF"
    },
    {
      title: "SC/ST Post Matric Scholarship Renewal Form",
      desc: "Post Matric scholarship renewal application form for Adi Dravidar and Tribal Welfare department.",
      fileSize: "7.6 MB",
      url: "/assets/sc_st_scholarship_renewal_form.pdf",
      format: "PDF"
    },
    {
      title: "MKU Private Exam Application Form",
      desc: "Application form and instruction sheets for UG Private candidates appearing for November 2023 semester examinations.",
      fileSize: "318 KB",
      url: "/assets/mku_private_exam_application.pdf",
      format: "PDF"
    },
    {
      title: "MKU Special Convocation Form",
      desc: "Special convocation application form w.e.f 01.11.2022 for applying for degree certificates.",
      fileSize: "358 KB",
      url: "/assets/mku_special_convocation_application.pdf",
      format: "PDF"
    },
    {
      title: "MKU Revaluation Application Form",
      desc: "Revaluation application form and guidelines for UG/PG semester examinations.",
      fileSize: "184 KB",
      url: "/assets/mku_revaluation_application.pdf",
      format: "PDF"
    }
  ];

  const staffDownloads = [
    {
      title: "Casual Leave (CL) Form",
      desc: "Leave application form for academic and non-teaching staff seeking short-term CL.",
      fileSize: "175 KB",
      url: "/assets/casual_leave_application.pdf",
      format: "PDF"
    },
    {
      title: "Earned Leave (EL) Application",
      desc: "Official application form for Earned Leave and Surrender Leave calculations.",
      fileSize: "141 KB",
      url: "/assets/earned_leave_application.pdf",
      format: "PDF"
    },
    {
      title: "On-Duty (OD) Leave / Change of Duty Form",
      desc: "Application for attending university examinations, central valuation, or academic seminars.",
      fileSize: "318 KB",
      url: "/assets/change_of_duty_application.pdf",
      format: "PDF"
    },
    {
      title: "Medical Leave (ML) Application",
      desc: "Application form for requesting Medical Leave or extension of leave (excluding Casual Leave).",
      fileSize: "557 KB",
      url: "/assets/medical_leave_application.pdf",
      format: "PDF"
    },
    {
      title: "Academic Performance Indicator (API) Form",
      desc: "Self-appraisal performance matrix for faculty career advancement scheme (CAS) promotions.",
      fileSize: "120 KB",
      url: "#",
      placeholder: true,
      format: "DOCX"
    },
    {
      title: "Staff Profile Update Template",
      desc: "Standard biography form for submitting updates to college portal faculty directory.",
      fileSize: "38 KB",
      url: "#",
      placeholder: true,
      format: "DOCX"
    }
  ];

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
            Resources
          </span>
          <h1 className="heading-serif" style={{ color: '#FFFFFF', fontSize: '2.25rem', marginTop: '0.5rem' }}>
            Downloads Portal
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Access official application forms, academic syllabi, guidelines, and staff resources in one centralized place.
          </p>
        </div>
      </div>

      {/* Main Body Section */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <style>{`
            .downloads-grid-layout {
              display: grid;
              grid-template-columns: 280px 1fr;
              gap: 2.5rem;
            }
            .downloads-sidebar-card {
              background: #FFFFFF;
              border: 1px solid var(--border-light);
              border-radius: var(--radius-md);
              padding: 1.5rem;
              box-shadow: var(--shadow-sm);
              position: sticky;
              top: 100px;
              height: fit-content;
            }
            .downloads-tab-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            .downloads-tab-btn {
              width: 100%;
              display: flex;
              align-items: center;
              gap: 0.75rem;
              padding: 0.85rem 1rem;
              border-radius: var(--radius-sm);
              border: 1px solid transparent;
              background: none;
              color: var(--text-dark);
              font-weight: 600;
              font-size: 0.9rem;
              text-align: left;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            .downloads-tab-btn:hover {
              background-color: var(--bg-light);
              color: var(--primary-navy);
            }
            .downloads-tab-btn.active {
              background-color: var(--primary-navy);
              color: #FFFFFF;
              border-color: var(--primary-navy-dark);
            }
            .downloads-content-card {
              background: #FFFFFF;
              border: 1px solid var(--border-light);
              border-radius: var(--radius-lg);
              padding: 2rem;
              box-shadow: var(--shadow-md);
            }
            .downloads-items-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
              gap: 1.25rem;
              margin-top: 1.5rem;
            }
            .download-item-card {
              background-color: var(--bg-light);
              border: 1px solid var(--border-light);
              border-radius: var(--radius-md);
              padding: 1.25rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              transition: all 0.2s ease;
            }
            .download-item-card:hover {
              transform: translateY(-2px);
              box-shadow: var(--shadow-md);
              border-color: var(--secondary-gold);
            }
            .download-file-badge {
              font-size: 0.7rem;
              font-weight: 700;
              padding: 0.2rem 0.5rem;
              border-radius: 4px;
              text-transform: uppercase;
              width: fit-content;
            }
            .download-file-badge.pdf {
              background-color: #FEE2E2;
              color: #EF4444;
            }
            .download-file-badge.docx {
              background-color: #DBEAFE;
              color: #3B82F6;
            }
            @media (max-width: 992px) {
              .downloads-grid-layout {
                grid-template-columns: 1fr;
                gap: 1.5rem;
              }
              .downloads-sidebar-card {
                position: relative;
                top: 0;
              }
              .downloads-tab-list {
                flex-direction: row;
                width: 100%;
              }
              .downloads-tab-btn {
                justify-content: center;
              }
            }
            @media (max-width: 576px) {
              .downloads-tab-list {
                flex-direction: column;
              }
            }
          `}</style>

          <div className="downloads-grid-layout">
            {/* Sidebar Navigation */}
            <aside className="downloads-sidebar-card">
              <h3 className="heading-serif" style={{ fontSize: '1.1rem', color: 'var(--primary-navy-dark)', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                Resource Categories
              </h3>
              <ul className="downloads-tab-list">
                <li>
                  <button 
                    onClick={() => setActiveTab('student')} 
                    className={`downloads-tab-btn ${activeTab === 'student' ? 'active' : ''}`}
                  >
                    <Users size={18} /> For Students
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('staff')} 
                    className={`downloads-tab-btn ${activeTab === 'staff' ? 'active' : ''}`}
                  >
                    <User size={18} /> For Staff
                  </button>
                </li>
              </ul>
            </aside>

            {/* Main Content Area */}
            <main className="downloads-content-card">
              {activeTab === 'student' && (
                <div id="student">
                  <span className="section-tag">Student Resources</span>
                  <h2 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', fontSize: '1.6rem', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                    Downloads for Students
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    Access official syllabi, G.O. guidelines, academic calendars, and other essential forms.
                  </p>

                  {/* Banner Image */}
                  <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <img 
                      src="/assets/teaching_learning.png" 
                      alt="A Culture of Learning, A Community of Innovation" 
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>

                  <div className="downloads-items-grid">
                    {studentDownloads.map((item, idx) => (
                      <div key={idx} className="download-item-card">
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <span className="download-file-badge pdf">{item.format}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.fileSize}</span>
                          </div>
                          <h4 style={{ color: 'var(--primary-navy)', fontSize: '1rem', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
                            {item.title}
                          </h4>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.4, margin: '0 0 1.25rem 0' }}>
                            {item.desc}
                          </p>
                        </div>
                        
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-sm btn-primary"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', fontSize: '0.8rem' }}
                        >
                          <Download size={14} /> Download Document
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'staff' && (
                <div id="staff">
                  <span className="section-tag">Faculty Resources</span>
                  <h2 className="heading-serif" style={{ color: 'var(--primary-navy-dark)', fontSize: '1.6rem', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                    Downloads for Staff Members
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Access staff leave applications, performance appraisal sheets, and institutional templates.
                  </p>

                  <div className="downloads-items-grid">
                    {staffDownloads.map((item, idx) => (
                      <div key={idx} className="download-item-card">
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <span className={`download-file-badge ${item.format.toLowerCase()}`}>{item.format}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.fileSize}</span>
                          </div>
                          <h4 style={{ color: 'var(--primary-navy)', fontSize: '1rem', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
                            {item.title}
                          </h4>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.4, margin: '0 0 1.25rem 0' }}>
                            {item.desc}
                          </p>
                        </div>
                        
                        {item.placeholder ? (
                          <button 
                            disabled 
                            className="btn btn-sm btn-outline"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', fontSize: '0.8rem', opacity: 0.6, cursor: 'not-allowed' }}
                          >
                            <Download size={14} /> Form Available in Office
                          </button>
                        ) : (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-sm btn-primary"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', fontSize: '0.8rem' }}
                          >
                            <Download size={14} /> Download Document
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
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
