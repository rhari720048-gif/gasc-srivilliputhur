import React, { useState, useEffect } from 'react';
import { Bell, Calendar, ArrowRight, FileText } from 'lucide-react';

const categories = ['All', 'Admission', 'Academic', 'Examination', 'Events', 'Circulars'];

const defaultAnnouncements = [
  {
    id: 1,
    title: "UG Admissions 2026–2027 Portal Active",
    category: "Admission",
    date: "June 01, 2026",
    summary: "Applications open for B.A. Tamil, B.A. English, B.Com, B.Sc. Mathematics, and B.Sc. Computer Science.",
    isNew: true
  },
  {
    id: 2,
    title: "Odd Semester Reopening Date - AY 2026–2027",
    category: "Academic",
    date: "June 15, 2026",
    summary: "College reopens for odd semester. Compulsory 75% minimum attendance required for university exams.",
    isNew: true
  },
  {
    id: 3,
    title: "TN Skills Programmes (Naan Mudhalvan) Orientation",
    category: "Events",
    date: "July 05, 2026",
    summary: "Hands-on training sessions in AI Digital Marketing, Cloud Computing, Data Analytics, and Data Science.",
    isNew: false
  },
  {
    id: 4,
    title: "First Continuous Internal Assessment (CIA) Schedule",
    category: "Examination",
    date: "August 10, 2026",
    summary: "Timetable published for 1st Internal Assessment tests for all undergraduate departments.",
    isNew: false
  },
  {
    id: 5,
    title: "Pudhumai Penn & Tamil Pudhalvan Scholarship Verification",
    category: "Circulars",
    date: "August 02, 2026",
    summary: "Verification drive for government school students eligible for ₹1000/month higher education stipend.",
    isNew: false
  }
];

export default function LatestUpdates() {
  const [activeTab, setActiveTab] = useState('All');
  const [items, setItems] = useState(defaultAnnouncements);

  useEffect(() => {
    fetch(`/api/announcements${activeTab !== 'All' ? `?category=${activeTab}` : ''}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setItems(data.data);
        }
      })
      .catch(() => {
        // Fallback to default
        if (activeTab === 'All') {
          setItems(defaultAnnouncements);
        } else {
          setItems(defaultAnnouncements.filter(a => a.category.toLowerCase() === activeTab.toLowerCase()));
        }
      });
  }, [activeTab]);

  return (
    <section className="section-padding updates-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Official Circulars & News</span>
          <h2 className="section-title heading-serif">Latest Updates & Announcements</h2>
          <p className="section-subtitle">
            Stay informed with authentic academic notifications, examination schedules, and official notices.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="tabs-header">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Updates Grid */}
        {items.length > 0 ? (
          <div className="updates-grid">
            {items.map((item) => (
              <div className="update-card" key={item.id}>
                <div>
                  <div className="update-meta">
                    <span className="update-category">{item.category}</span>
                    <span className="update-date">
                      <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="update-title">{item.title}</h3>
                  <p className="update-summary">{item.summary}</p>
                </div>
                
                <div style={{ marginTop: '1.25rem' }}>
                  <a href="/events" className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                    Read Circular <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            <FileText size={48} style={{ opacity: 0.4, marginBottom: '1rem' }} />
            <p>No circulars currently published under <strong>{activeTab}</strong> category.</p>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/events" className="btn btn-primary">
            View All Events & Notifications <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
