import React from 'react';
import { Award, ArrowRight, Banknote, ShieldCheck } from 'lucide-react';

const scholarships = [
  {
    id: 1,
    title: "Government of India Scholarship",
    tamil: "மத்திய அரசு கல்வி உதவித்தொகை",
    desc: "Post-matric scholarship scheme for SC / ST students whose parental annual income is below ₹2,50,000.",
    tag: "SC / ST Welfare"
  },
  {
    id: 2,
    title: "State Government Scholarship",
    tamil: "மாநில அரசு கல்வி உதவித்தொகை",
    desc: "Financial assistance for BC / MBC / DNC students and converted Christian SC students with income below ₹2,00,000.",
    tag: "BC / MBC Welfare"
  },
  {
    id: 3,
    title: "Pudhumai Penn Scheme",
    tamil: "புதுமைப் பெண் திட்டம்",
    desc: "₹1,000 per month financial assistance for female students who studied from Class 6 to 12 in Tamil Nadu Government schools.",
    tag: "Higher Ed Incentive (Female)"
  },
  {
    id: 4,
    title: "Tamil Pudhalvan Scheme",
    tamil: "தமிழ்ப் புதல்வன் திட்டம்",
    desc: "₹1,000 per month financial assistance for male students who completed Class 6 to 12 in Tamil Nadu Government schools.",
    tag: "Higher Ed Incentive (Male)"
  }
];

export default function Scholarships() {
  return (
    <section className="section-padding scholarships-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Financial Assistance & Welfare</span>
          <h2 className="section-title heading-serif">Scholarships & Student Welfare Schemes</h2>
          <p className="section-subtitle">
            Ensuring every deserving student receives full government welfare benefits, tuition fee concessions, and monthly stipends.
          </p>
        </div>

        <div className="scholarships-grid">
          {scholarships.map((s) => (
            <div className="scholarship-card" key={s.id}>
              <div className="scholarship-badge">
                <Banknote size={26} />
              </div>
              <div className="scholarship-info">
                <span className="scholarship-tag">{s.tag}</span>
                <h4 style={{ marginTop: '0.4rem' }}>{s.title}</h4>
                <p style={{ color: 'var(--primary-navy)', fontWeight: 600, fontSize: '0.85rem' }}>{s.tamil}</p>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/services#scholarships" className="btn btn-outline">
            View All Scholarship Rules & Eligibility <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
