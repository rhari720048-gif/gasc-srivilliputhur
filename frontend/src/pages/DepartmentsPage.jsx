import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, GraduationCap, Users, Award, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';

const departmentsData = [
  {
    id: 'tamil',
    name: 'Department of Tamil (தமிழ்த்துறை)',
    code: 'BA TAMIL',
    degree: 'B.A. Tamil (இளங்கலை தமிழ்)',
    duration: '3 Academic Years (6 Semesters)',
    seats: '60 Seats',
    hod: {
      name: 'முனைவர் க. இரவி',
      designation: 'இணைப்பேராசிரியர் மற்றும் துறைத்தலைவர் (Associate Professor & HOD)',
      qualification: 'M.A., M.A., M.Phil., Ph.D., P.G.D.J.M.C., D.F.L.'
    },
    guestLecturers: [
      { name: 'முனைவர் பா. கிருஷ்ணமூர்த்தி', qual: 'M.A., M.Phil., B.Ed., Ph.D., NET' },
      { name: 'முனைவர் க. அலமேலுமங்கை', qual: 'M.A., M.Phil., Ph.D., NET' },
      { name: 'முனைவர் ப. கணேஷ்வரி', qual: 'M.A., M.Phil., Ph.D., NET' },
      { name: 'முனைவர் பா. திருப்பதிகுமாரி (எ) காயத்ரி', qual: 'M.A., M.Phil., Ph.D., NET' }
    ],
    desc: 'The Department of Tamil offers rich grounding in classical Tamil literature, Sangam poetry, modern grammar, linguistics, and cultural heritage.'
  },
  {
    id: 'english',
    name: 'Department of English (ஆங்கிலத்துறை)',
    code: 'BA ENGLISH',
    degree: 'B.A. English Literature (இளங்கலை ஆங்கிலம்)',
    duration: '3 Academic Years (6 Semesters)',
    seats: '60 Seats',
    hod: null,
    guestLecturers: [
      { name: 'முனைவர் ஜி.வி. அருள்மொழி அரசி', qual: 'M.A., M.Phil., Ph.D.' },
      { name: 'முனைவர் து. சௌந்திரபாண்டி', qual: 'M.A., M.Phil., B.Ed., Ph.D.' },
      { name: 'முனைவர் த. மாரிமுத்து', qual: 'M.A., M.Ed., Ph.D.' },
      { name: 'முனைவர் பொ. இளையராஜா', qual: 'M.A., M.Phil., Ph.D.' }
    ],
    desc: 'Empowering students with English communication mastery, British literature, World classics, phonetics, and professional writing skills.'
  },
  {
    id: 'commerce',
    name: 'Department of Commerce (வணிகவியல் துறை)',
    code: 'BCOM',
    degree: 'B.Com. (இளங்கலை வணிகவியல்)',
    duration: '3 Academic Years (6 Semesters)',
    seats: '60 Seats',
    hod: {
      name: 'முனைவர் கு. சரவணக்கைலாஸ்',
      designation: 'உதவிப்பேராசிரியர் மற்றும் துறைத்தலைவர் (Assistant Professor & HOD)',
      qualification: 'M.Com., M.Phil., Ph.D.'
    },
    guestLecturers: [
      { name: 'முனைவர் க. வளர்மதி', qual: 'M.Com., M.Phil., Ph.D., SET' },
      { name: 'முனைவர் பி. மாரியம்மாள்', qual: 'M.Com., M.Phil., Ph.D.' },
      { name: 'முனைவர் ந. ஜெகன்நாதன்', qual: 'M.Com., M.Phil., M.B.A., Ph.D., P.G.D.C.A.' }
    ],
    desc: 'Fostering expertise in financial accounting, auditing, corporate law, banking, taxation, and business management.'
  },
  {
    id: 'maths',
    name: 'Department of Mathematics (கணிதத்துறை)',
    code: 'BSC MATHS',
    degree: 'B.Sc. Mathematics (இளங்கலை கணிதம்)',
    duration: '3 Academic Years (6 Semesters)',
    seats: '40 Seats',
    hod: {
      name: 'முனைவர் சு. அமுதா',
      designation: 'இணைப்பேராசிரியர் மற்றும் துறைத்தலைவர் (Associate Professor & HOD)',
      qualification: 'M.Sc., M.Ed., M.Phil., Ph.D.'
    },
    regularFaculty: [
      { name: 'முனைவர் க. முத்துக்குருபாக்கியம்', desig: 'இணைப்பேராசிரியர் (Associate Professor)', qual: 'M.Sc., M.Phil., Ph.D.' },
      { name: 'முனைவர் மு. பாலகிருஷ்ணன்', desig: 'உதவிப்பேராசிரியர் (Assistant Professor)', qual: 'M.Sc., M.Phil., Ph.D., P.G.D.C.A.' }
    ],
    guestLecturers: [],
    desc: 'Nurturing analytical thinking through pure and applied mathematics, algebra, calculus, operations research, and statistics.'
  },
  {
    id: 'cs',
    name: 'Department of Computer Science (கணிணி அறிவியல் துறை)',
    code: 'BSC CS',
    degree: 'B.Sc. Computer Science & CLP Lab',
    duration: '3 Academic Years (6 Semesters)',
    seats: '40 Seats',
    hod: {
      name: 'முனைவர் சுப. சரவணன்',
      designation: 'இணைப்பேராசிரியர் & துறைத்தலைவர் / முதல்வர் (i/c)',
      qualification: 'M.C.A., M.Phil., M.Tech., Ph.D.'
    },
    regularFaculty: [
      { name: 'முனைவர் பே. ரவி', desig: 'இணைப்பேராசிரியர் (Associate Professor)', qual: 'M.C.A., M.Phil., Ph.D.' }
    ],
    guestLecturers: [],
    desc: 'Equipping students with modern software engineering, Python programming, web development, data structures, and computer literacy lab training.'
  }
];

export default function DepartmentsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('tamil');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && departmentsData.some(d => d.id === hash)) {
      setActiveTab(hash);
      const element = document.getElementById(hash);
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
            Academic Wings
          </span>
          <h1 className="heading-serif" style={{ color: '#FFFFFF', fontSize: '2.25rem', marginTop: '0.5rem' }}>
            Academic Departments & Faculty
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
            Comprehensive directory of UG departments, HOD profiles, faculty members, and course details extracted from official college records.
          </p>

          {/* Department Filter Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              justify: 'center', 
              gap: '0.5rem', 
              marginTop: '1.75rem',
              flexWrap: 'wrap'
            }}
          >
            {departmentsData.map(dept => (
              <a
                key={dept.id}
                href={`#${dept.id}`}
                onClick={() => setActiveTab(dept.id)}
                className={`btn btn-sm ${activeTab === dept.id ? 'btn-secondary' : 'btn-outline-white'}`}
              >
                {dept.name.split(' ')[2] || dept.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Department Content List */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {departmentsData.map(dept => (
            <div 
              key={dept.id} 
              id={dept.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Dept Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', borderBottom: '2px solid var(--bg-subtle)', paddingBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                    {dept.code} • {dept.seats}
                  </span>
                  <h2 className="heading-serif" style={{ fontSize: '1.6rem', color: 'var(--primary-navy)', margin: '0.2rem 0' }}>
                    {dept.name}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', margin: 0 }}>
                    {dept.desc}
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.825rem', textAlign: 'right' }}>
                  <strong style={{ color: 'var(--primary-navy)', display: 'block' }}>Programme Offered</strong>
                  {dept.degree} ({dept.duration})
                </div>
              </div>

              {/* HOD & Regular Faculty Card */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-navy)', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <UserCheck size={18} style={{ color: 'var(--secondary-gold)' }} /> Head of Department & Regular Faculty
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {dept.hod && (
                    <div style={{ backgroundColor: 'rgba(15, 44, 89, 0.04)', padding: '1.15rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-navy)' }}>
                      <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                        Head of Department (துறைத்தலைவர்)
                      </span>
                      <h4 style={{ color: 'var(--primary-navy)', fontSize: '1.1rem', margin: '0.2rem 0' }}>
                        {dept.hod.name}
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-heading)', fontWeight: 600, margin: '0.2rem 0' }}>
                        {dept.hod.designation}
                      </p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                        {dept.hod.qualification}
                      </p>
                    </div>
                  )}

                  {dept.regularFaculty && dept.regularFaculty.map((fac, idx) => (
                    <div key={idx} style={{ backgroundColor: 'var(--bg-light)', padding: '1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                      <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--primary-navy)', textTransform: 'uppercase' }}>
                        Faculty Member (பேராசிரியர்)
                      </span>
                      <h4 style={{ color: 'var(--primary-navy)', fontSize: '1.05rem', margin: '0.2rem 0' }}>
                        {fac.name}
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: 'var(--text-heading)', fontWeight: 600, margin: '0.2rem 0' }}>
                        {fac.desig}
                      </p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                        {fac.qual}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Lecturers Section */}
              {dept.guestLecturers && dept.guestLecturers.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '0.65rem' }}>
                    Guest Lecturers (கௌரவ விரிவுரையாளர்கள்)
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                    {dept.guestLecturers.map((gl, idx) => (
                      <div key={idx} style={{ backgroundColor: 'var(--bg-light)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                        <strong style={{ color: 'var(--primary-navy)', display: 'block' }}>{gl.name}</strong>
                        <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{gl.qual}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
