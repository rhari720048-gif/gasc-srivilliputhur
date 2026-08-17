import React from 'react';
import { Users, HeartHandshake, ShieldAlert, Palette, Compass, UserCheck, ShieldCheck, Heart, BookOpen, Ban, GraduationCap } from 'lucide-react';

const services = [
  { title: "Parent-Teacher Association", tamil: "பெற்றோர்-ஆசிரியர் கழகம்", icon: Users, desc: "Collaborative forum linking parents and faculty to foster student academic growth." },
  { title: "National Service Scheme (NSS)", tamil: "நாட்டு நலப் பணித் திட்டம்", icon: HeartHandshake, desc: "100-volunteer unit under Madurai Kamaraj University promoting community welfare." },
  { title: "Youth Red Cross (YRC)", tamil: "இளஞ்செஞ்சிலுவைச் சங்கம்", icon: Heart, desc: "Promoting health awareness, blood donation, emergency response, and humanitarian service." },
  { title: "Internal Complaints Committee", tamil: "உள்புகார் குழு (ICC)", icon: ShieldAlert, desc: "Statutory committee ensuring safety, dignity, and prevention of harassment." },
  { title: "Women Development Cell", tamil: "மகளிர் மேம்பாட்டு மையம்", icon: UserCheck, desc: "Empowering female students through health awareness, gender equity, and leadership training." },
  { title: "Fine Arts Club", tamil: "நுண்கலை மன்றம்", icon: Palette, desc: "Nurturing creative talents in music, dance, Tamil drama, painting, and cultural arts." },
  { title: "Placement & Career Guidance", tamil: "வேலை வாய்ப்பு மையம்", icon: Compass, desc: "Offering career mentoring, employability workshops, skill training, and recruitment support." },
  { title: "Alumni Association", tamil: "பழைய மாணவர் சங்கம்", icon: GraduationCap, desc: "Building lifelong connections, mentorship networks, and institutional development support." },
  { title: "Consumer Protection Centre", tamil: "குடிமக்கள் நுகர்வோர்மையம்", icon: ShieldCheck, desc: "Educating students on consumer rights, legal protections, and market fairness." },
  { title: "Anti-Drug Awareness Cell", tamil: "போதை பொருள் தடுப்பு மையம்", icon: Ban, desc: "Conducting awareness campaigns for substance abuse prevention and healthy living." },
  { title: "Department Academic Clubs", tamil: "துறை சார்ந்த மன்றங்கள்", icon: BookOpen, desc: "Department-specific academic associations organizing seminars, debates, and expos." }
];

export default function StudentServices() {
  return (
    <section className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus Support Ecosystem</span>
          <h2 className="section-title heading-serif">Student Support & Committees</h2>
          <p className="section-subtitle">
            Established committees, extension activity wings, and co-curricular clubs ensuring overall student safety and personality development.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, idx) => {
            const ServiceIcon = s.icon;
            return (
              <div className="service-item" key={idx}>
                <div className="service-icon-box">
                  <ServiceIcon size={24} />
                </div>
                <h4>{s.title}</h4>
                <p style={{ color: 'var(--primary-navy)', fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                  {s.tamil}
                </p>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
