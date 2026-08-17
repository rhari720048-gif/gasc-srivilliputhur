import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <section className="announcement-bar">
      <div className="container announcement-container">
        <div className="announcement-tag">
          <Bell size={14} />
          <span>Latest Notice</span>
        </div>
        <div className="announcement-content">
          <p className="announcement-text">
            <strong>Academic Year 2026–2027:</strong> Online Application Portal is active for B.A. Tamil, B.A. English, B.Com, B.Sc. Mathematics, and B.Sc. Computer Science.
            <a href="/admission" className="announcement-link"> Check Admission Schedule <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></a>
          </p>
        </div>
      </div>
    </section>
  );
}
